const SHA256 = require("crypto-js/sha256");
const {DIFFICULTY, MINE_RATE}  = require("../config");

class Block {
   constructor(data, prev_hash, hash, timestamp, nonce, difficulty) {
      this.data = data;
      this.prev_hash = prev_hash;
      this.timestamp = timestamp;
      this.hash = hash;
      this.nonce = nonce;
      this.difficulty = difficulty || DIFFICULTY ;
   }

   static mineBlock(prevBlock, data) {
        let nonce = 0;
        let timestamp, hash, difficulty;
        console.log("mining bolck")

        do{
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(prevBlock, timestamp);
            hash = Block.calculateHash(data, prevBlock.prev_hash, timestamp, nonce, difficulty)

        }while(hash.substring(0, difficulty) !== "0".repeat(difficulty))
        console.log("mining completed")
         
        return new Block(data, prevBlock.hash, hash, Date.now, nonce, difficulty);
   }

   static createGensisBlock() {

      return new Block([], 0, 0, "Gensis time", 0, 0)
   }

   static adjustDifficulty(prev_block, current_time){
       let {difficulty} = prev_block;
       difficulty = prev_block.timestamp + MINE_RATE > current_time ? difficulty + 1 : difficulty - 1; 
       return difficulty;

   }

   static calculateHash(data, prev_hash, timestamp) {
      return SHA256(data + prev_hash + timestamp).toString();
   }

   static HashBlock(block) {
      return this.calculateHash(block.data + block.prev_hash + block.timestamp).toString();

   }
}


module.exports = Block;