const SHA256 = require("crypto-js/sha256");


class Block {
   constructor(data, prev_hash, timestamp) {

      this.data = data;
      this.prev_hash = prev_hash;
      this.timestamp = timestamp;
      this.hash = Block.calculateHash();

   }

   mineBlock(prevBlok, data) {
      return new Block(data, prevBlok.prev_hash, Date.now);
   }

   createGensisBlock() {
      return new Block("0", "0", Date.now())
   }

   static calculateHash() {
      return SHA256(this.data + this.prev_hash + this.timestamp).toString();
   }
}


module.exports = Block;