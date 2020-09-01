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
### Run the oracle
```
cd src
```
```
node bridge.js
```
## Deploying the custodian contract
###
1. Create account for token contract with ressources
2. Compile token contract
3. Deploy contract
4. Create account for custodian
5. Compile custodian contract
6. Set permissions for custodian on token contract
```
cleos --url https://jungle2.cryptolions.io:443 set account permission <token contract> active <custodian contract> --add-code
```




