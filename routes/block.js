const BlockChain = require('../blockchain/blockchain');

const express = require('express');

const router = express.Router();

let chain = new BlockChain()



router.get('/', (req, res) => {
   res.send(chain.chain)
})


router.post('/', (req, res) => {
   chain.addBlock(req.body)
   res.send(req.body)
})

module.exports = router;