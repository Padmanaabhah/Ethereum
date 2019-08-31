const HdWalletProvider = require('truffle-hdWallet-Provider')
const Web3 = require('web3');
const {abi,evm} = require('./Compile');

const provider = new HdWalletProvider('eager cupboard bundle benefit pencil girl fame cluster ketchup number thank obvious',
'https://rinkeby.infura.io/v3/fffb7356529540be8c141cd7243c126c');

const web3 = new Web3(provider)

const deploy = async() =>{
  var accounts = await web3.eth.getAccounts()
  //console.log(evm.bytecode.object);

  const result = await new web3.eth.Contract(abi)
     .deploy({data: '0x' + evm.bytecode.object, arguments: ['Hi there!']}) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas'

     console.log(result.options.address);
}
deploy();
