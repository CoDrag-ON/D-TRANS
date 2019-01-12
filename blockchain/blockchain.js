const Block = require('./block');

class Blockchain {

   constructor() {
      this.chain = [Block.createGensisBlock()];
   }

   addBlock(data) {
      let block = Block.mineBlock(this.chain[this.chain.length - 1], data)

      this.chain.push(block);
      return block;
   }


   static validateChain(chain) {
      // console.log(JSON.stringify(chain, null, 2))

      console.log(chain[0])
      // console.log(JSON.stringify(Block.createGensisBlock(), null, 2))


      if (JSON.stringify(chain[0]) !== JSON.stringify(Block.createGensisBlock())) return {
         "sucess": false,
         "msg": "chain does not start with gensis block"
      };


      for (let i = 1; i <= chain.length; i++) {


         let block = chain[i];
         let prev_block = chain[i - 1]

         if (block.prev_hash !== prev_block.hash || block.hash !== Block.HashBlock(block)) {
            return {
               "sucess": false,
               "msg": ""
            }
         }
      }


      return {
         "sucess": true,
         "msg": "the chain is valid chain"
      };

   }


}

module.exports = Blockchain;