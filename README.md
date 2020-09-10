# VTX Bridge v0.0.1
![image](doc/abs2rel.jpg)
## Running the oracle
Initially created for the purpose of wrapping of ETH VTX and EOS VTX
## Components:
1. Oracle bridge 
2. EOS custodian

## Prerequisites
### linux
- This install was tested on Bionic 18.04 (LTS)
Check your Ubuntu: `Activities -> about`
#### Docker installation
Docker software is required to simplify the vDex Node installation.
Follow the instruction below:
Just in case, it is recommended to remove old versions of docker, if they were installed earlier
```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```
```bash
sudo apt-get update
sudo apt-get install build-essential apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo usermod -aG docker $(whoami)
reboot # or log out and back in
```
### clone directory
```
git clone https://github.com/Volentix/bridge.git
cd bridge
```
### Configure the oracle
modify the following lines according to your setup in
oracle/.env:
```
cd oracle

cat .env

```
##### Edit .env file:
ETH_TOKEN_CONTRACT = <ethereum token contract address>
ETH_POOL_ADDRESS = <Ethereum pool address>
EOS_TOKEN_CONTRACT = <EOS token contract account>
EOS_POOL_ACCOUNT = <EOS pool account>
EOS_ACCOUNT = <Your user/node EOS account>
CUSTODIAN_ACCOUNT = <EOS custodian account>

##### Insert private key(temporary)
In oracle.js:\
line 20
```
const defaultPrivateKey = '5KkddYRe4VJdp5E5m8oiZiJuzGD6F2CVR5zcv8C2hbsCv5sZ9ZS'
```
##### Insert Infura key(temporary)
line 33
```
web3.eth.isSyncing()
              .then(web3 = new Web3('https://ropsten.infura.io/v3/c3436ae558954d85ae242a2ea517475c')).catch(result => {return result;});
```
    
### Run the oracle

```
cd ..
docker-compose up
```
## Deploying the custodian contract on EOSIO
###
1. Create account for token contract with ressources
2. Compile token contract
3. Deploy contract
4. Create account for custodian contract with ressources\
   Set variables according to your setup:
    ```
    #define SYMBOL_PRE_DIGIT 8
    #define TOKEN_SYMBOL "WVTX"
    #define TOKEN_ACC name("vtx222222222")
    ``` 
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




