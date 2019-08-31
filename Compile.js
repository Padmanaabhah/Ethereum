const path = require('path');
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "Contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");


var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

var allOutput = JSON.parse(solc.compile(JSON.stringify(input)))

var output = allOutput.contracts['Inbox.sol']["Inbox"];
 //console.log(allOutput.contracts['Inbox.sol']["Inbox"]);
module.exports = output 

//
// // `output` here contains the JSON output as specified in the documentation
// for (var contractName in output.contracts['Inbox.sol']) {
//     console.log(contractName + ': ' + output.contracts['Inbox.sol'][contractName].evm.bytecode.object)
// }
