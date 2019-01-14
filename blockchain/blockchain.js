const Block = require('./block');

class Blockchain {
   constructor() {
      this.chain = [Block.createGensisBlock()];
   }

   addBlock(data) {
      const block = Block.mineBlock(this.chain[this.chain.length - 1], data);

      console.log('mining block');
      this.chain.push(block);
      return block;
   }

   validateChain(chain) {

      if (JSON.stringify(chain[0]) !== JSON.stringify(Block.createGensisBlock())) return false

      for (let i = 1; i < chain.length; i++) {
         let block = chain[i];
         let last_block = chain[i - 1];


         if (last_block.hash !== block.prev_hash) {
            return {
               sucess: false,
               msg: 'hash value of previous block mismacth'
            };
         }
         // if (block.hash !== Block.HashBlock(block)) {
         //    return {
         //       sucess: false,
         //       msg: 'hash value mismacth'
         //    };
         // }
      }

      return {
         sucess: true,
         msg: 'the chain is valid chain'
      };
   }
}

module.exports = Blockchain;