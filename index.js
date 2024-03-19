const nft_meadow_brokerage = require('nft-meadow-brokerage');
const meowdove_util = require('meowdove-util');
const multer = require('multer');
const ethereumjs_util = require('ethereumjs-util');
const debug = require('debug');
const mongoose = require('mongoose');
const eth_crypto = require('eth-crypto');
const web3_react = require('web3-react');
const jest = require('jest');
const axios = require('axios');
const lodash = require('lodash');
const eslint = require('eslint');
const moment = require('moment');
const ethers = require('ethers');
const jsonwebtoken = require('jsonwebtoken');
const supertest = require('supertest');
const bcrypt = require('bcrypt');
const body_parser = require('body-parser');
const webpack = require('webpack');
const web3 = require('web3');

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
emitter.emit('customEvent', 'Hello', 'World');

const timerId = setTimeout(() => console.log('You will see this message after 3 seconds'), 3000);
clearTimeout(timerId);

// Get information about an Ethereum block by hash
const blockHash = '0xblockHash';
web3.eth.getBlock(blockHash).then(block => {
  console.log('Block details by hash:', block);
}).catch(err => {
  console.error('Error getting block details by hash:', err);
});

// Get the list of all available accounts
web3.eth.getAccounts().then(accounts => {
  console.log('Available accounts:', accounts);
}).catch(err => {
  console.error('Error getting accounts:', err);
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});

// Deploy a smart contract using Truffle
const TruffleContract = require('@truffle/contract');
const contractJson = require('./build/contracts/YourContract.json');
const contract = TruffleContract(contractJson);
contract.setProvider(web3.currentProvider);

contract.deployed().then(instance => {
  console.log('Contract address:', instance.address);
}).catch(err => {
  console.error('Error deploying contract:', err);
});