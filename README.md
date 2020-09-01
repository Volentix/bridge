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
### Run the oracle
```
node bridge.js
```
##
Deploying the custodian contract




