const express = require('express');
const BlockChain = require('./blockchain/blockchain');
const p2p = require('./p2p');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();

app.use(express.json());

let chain = new BlockChain();

const p2pServer = new p2p(chain);

app.get('/blocks', (req, res) => {
  res.json(chain);
});

app.post('/mine', (req, res) => {
  chain.addBlock(req.body);
  res.send('transaction done sucessfully');

  p2pServer.syncChain();
});

// app.use('/block', block)

app.listen(HTTP_PORT, () => {
  console.log(`listening to port http://localhost:${HTTP_PORT}`);
});

p2pServer.listen();
