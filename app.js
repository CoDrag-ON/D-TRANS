const BlockChain = require('./blockchain/blockchain');

let chain = new BlockChain();

chain.addBlock({
   from: 'sam',
   to: 'sai',
   amount: 500
});

chain.addBlock({
   from: 'sai',
   to: 'sam',
   amount: 5000
});

// console.log(JSON.stringify(chain['chain'], null, 4));

console.log(chain.validateChain(chain['chain']));