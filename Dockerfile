FROM ubuntu:18.04
RUN apt-get update && apt-get install -y  git nodejs npm 
RUN npm install web3 eosjs node-fetch dotenv web3-eth






