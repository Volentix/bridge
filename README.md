# VTX Bridge
## Install openethereum
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
$ ./target/release/openethereum openethereum --config config.toml&
```
5. Install necessary software 
```
apt install nodejs npm
npm install web3
npm install eosjs
npm install node-fetch
```



