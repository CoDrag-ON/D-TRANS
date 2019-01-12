const BlockChain = require('./blockchain/blockchain');


let coin = new BlockChain();

coin.addBlock({
   "from": "sam",
   "to": "sai",
   "amount": 500
})

coin.addBlock({
   "from": "sai",
   "to": "sam",
   "amount": 5000
})

// console.log(JSON.stringify(chain, null, 2))

console.log(BlockChain.validateChain(coin))