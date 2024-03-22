const EC = require("elliptic").ec;
const SHA256 = require("crypto-js/sha256");
const { v4: uuidv4 } = require('uuid');

const ec = new EC("secp256k1");

class Utility {
  static genrateKeyPair() {
    return ec.genKeyPair();
  }

  static genrateId() {
    return uuidv4();
  }

  static hash(data) {
    return SHA256(JSON.stringify(data)).toString();
  }

  static verifySignature(publicKey, signature, dataHash) {
    return ec.keyFromPublic(publicKey, "hex").verify(dataHash, signature);
  }
}

module.exports = Utility;
