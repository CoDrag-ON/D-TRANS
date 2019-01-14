const SHA256 = require("crypto-js/sha256");


class Block {
   constructor(data, prev_hash, hash, timestamp) {
      this.data = data;
      this.prev_hash = prev_hash;
      this.timestamp = timestamp;
      this.hash = hash
   }

   static mineBlock(prevBlock, data) {
      const timeStamp = Date.now();
      const hash = Block.calculateHash(data, prevBlock.prev_hash, timeStamp)
      return new Block(data, prevBlock.hash, hash, Date.now);
   }

   static createGensisBlock() {

      return new Block([], 0, 0, "Gensis time")
   }

   static calculateHash(data, prev_hash, timestamp) {
      return SHA256(data + prev_hash + timestamp).toString();
   }

   static HashBlock(block) {
      return this.calculateHash(block.data + block.prev_hash + block.timestamp).toString();

   }
}


module.exports = Block;