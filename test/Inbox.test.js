const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider()
const web3 = new Web3(provider);
const {abi,evm} = require('../compile')

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

 inbox = await new web3.eth.Contract(abi)
         .deploy({data: evm.bytecode.object, arguments : ["Hi there"]})
         .send({ from: accounts[0], gas: 1000000})

});

describe('Inbox',() =>{
  it('deploys a contract', () =>{
    assert.ok(inbox.options.address);
  });

  it('It has a default message', async () => {
    assert.equal(await inbox.methods.message().call(),"Hi there");
  });

  it('It sets a value', async () => {
    await inbox.methods.SetMessage("Paddy").send({ from: accounts[0], gas: 1000000});
    assert.equal(await inbox.methods.message().call(),"Paddy");
  });
});
