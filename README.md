# VTX Bridge v0.0.1
Acts as a custodian for wrapping of ETH VTX and EOS VTX.

## Running the oracle

### Install openethereum
1. Install rust
```
curl https://sh.rustup.rs -sSf | sh
```
2. Clone the repository
```
git clone https://github.com/openethereum/openethereum
```
3. build openethereum
```
cd openethereum
cargo build --release --features final
```
4. run openethereum
```
cd ../
$ .openethereum/target/release/openethereum  --config config.toml&
```
### Install necessary software 
```
apt install nodejs npm
npm install web3
npm install eosjs
npm install node-fetch
```
### clone the repository
```
git clone git@github.com:Volentix/bridge.git
```

### Configure the oracle
in src/bridge.js modify the following lines according to your setup:
```
const eth_token_contract = '0x71c5a83193399b15417ffda7f9406cd72f311d8a'; -> ethereum token contracta address
const eth_pool_address = '0x7D5592066FAE5cC14a62477EEb5074036610415c'; ->Ethereum pool address
const eos_token_contract = 'vtx222222222' -> EOS token contract account
const eos_pool_account = 'vtx222222222'; -> EOS pool account
const eos_account = 'quaremachina'; Your user/node EOS account
const defaultPrivateKey = "5KkddYRe4VJdp5E5m8oiZiJuzGD6F2CVR5zcv8C2hbsCv5sZ9ZS"; // your EOS private key (not for production) 
const custodian_account = 'vltxtknaudit';  // EOS custodian account

```
### Run the oracle
```
cd src
```
```
node bridge.js
```
## Deploying the custodian contract on EOSIO
###
1. Create account for token contract with ressources
2. Compile token contract
3. Deploy contract
4. Create account for custodian contract with ressources
5. Compile custodian contract
6. Deploy contract
7. Set permissions for custodian on token contract
```
cleos --url https://jungle2.cryptolions.io:443 set account permission <token contract account> active <custodian contract account> --add-code
```
8. Init custodian contract
```
cleos --url https://jungle2.cryptolions.io:443  push  action <token contract account>  initbalance '[]' -p <node account>@active
```
9. Clear previous balances in the buffer
```
cleos --url https://jungle2.cryptolions.io:443  push  action <custodian contract account>  clearblnc '[]' -p <node account>@active
```




