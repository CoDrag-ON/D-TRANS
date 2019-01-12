const SHA256 = require("crypto-js/sha256");


class Block {
   constructor(data, prev_hash, hash, timestamp) {
      this.data = data;
      this.prev_hash = prev_hash;
      this.timestamp = timestamp;
      this.hash = hash
   }

   static mineBlock(prevBlock, data) {
      const hash = Block.calculateHash(data, prevBlock.prev_hash, Date.now())
      return new this(data, prevBlock.hash, hash, Date.now);
   }

   static createGensisBlock() {
      return new this("0", "0", Date.now())
   }

   static calculateHash(data, prev_hash, timestamp) {
      return SHA256(data + prev_hash + timestamp).toString();
   }

   static HashBlock(block) {
      return SHA256(block.data + block.prev_hash + block.timestamp).toString();

   }
}


module.exports = Block;