#include "vltxtknaudit.hpp"

using namespace eosio;
using std::string;

void vltxtknaudit::initbalance() {
   currentbal initial_current_balance;
   initial_current_balance.balance = 0;
   _currentbal.get_or_create(get_self(), initial_current_balance);
   _currentbal.set(initial_current_balance, get_self()); 
}

void vltxtknaudit::clearblnc(name account)
{  
   // require_auth(get_self());
   etherium_balances balances(get_self(), get_self().value);
   auto itr = balances.begin();
   while (itr != balances.end()) {
       itr = balances.erase(itr);   
   }
   
}
void vltxtknaudit::updtblnc(name account, uint64_t balance, uint64_t timestamp)
{
   require_auth(account);
   //make sure the node is registered
   // checknode(account);
   //insert data point
   etherium_balances balances(get_self(), get_self().value);
   auto itr = balances.begin();   
   auto now = current_time_point().sec_since_epoch();
   balances.emplace(get_self(), [&](auto& row){
        row.id = balances.available_primary_key();
        row.account = account;
        row.balance = balance;
        row.timestamp = timestamp;
        row.local_timestamp = now;
      });
   //get current balance   
   auto current_balance = _currentbal.get().balance;
   //determine size
   uint64_t size = 0;
   
   uint64_t same;
   uint64_t previous;
   //calculate size      
   while (itr != balances.end()) {
         if(itr->balance == previous){
            same++;
         }
         previous = itr->balance;   
         size++;
         itr++;
   }
   ////if size is greater than 8 remove less recent datapoint 
   if(size > 8){
            balances.erase(balances.begin());   
   }
   bool send = false;
   //calculate consecutive 2/3 majority
   if (size != 0 && same /size  > .666666 && balances.end()){
      send = true;
   }
   //determine amount
   uint64_t amount_to_transfer = (current_balance - balance);
   currentbal new_current_balance;
   new_current_balance.balance = balance;
   if (amount_to_transfer > 0 && send == true){
      asset eos_balance = asset(amount_to_transfer, symbol(TOKEN_SYMBOL, SYMBOL_PRE_DIGIT));
      _currentbal.set(new_current_balance, get_self());       
      std::vector<permission_level> p;
      p.push_back(permission_level{ name("vtx222222222"), "active"_n });
      action(
         p,
         TOKEN_ACC,
         "retire"_n,
         std::make_tuple(eos_balance, std::string("test")) 
      ).send();
   }
}

void vltxtknaudit::regnode(name account)
{
   require_auth(get_self());
   auto iter = _nodelist.find(account.value);
   if (iter ==  _nodelist.end())
   {
       _nodelist.emplace(get_self(), [&](auto &row) {
         row.account = account;
      });
   }
}

void vltxtknaudit::rmnode(name account)
{
   require_auth(get_self());
   auto itr = _nodelist.find(account.value);
   if (itr != _nodelist.end())
   {
      _nodelist.erase(itr);
   }
};

void vltxtknaudit::checknode(name account)
{
   auto itr = _nodelist.find(account.value);
   check(itr == _nodelist.end(), "account is listed.");
};

