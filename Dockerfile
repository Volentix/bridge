FROM ubuntu:18.04
RUN apt-get update && apt-get install -y  git nodejs npm ssh wget docker
RUN npm install web3 eosjs node-fetch
ADD ./*/ /root/bridge

# RUN git clone https://github.com/Volentix/bridge.git 
# RUN wget https://github.com/Volentix/bridge/archive/test.tar.gz
# RUN tar -zxf test.tar.gz





