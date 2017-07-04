
// Update if the contract is updated.
// Generate using contract compiler, for instance http://remix.ethereum.org/
var bytecode = 
'6060604052341561000f57600080fd5b5b5b5b61130c806100216000396000f300606060405236156100d9576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631145e3f3146100f1578063428e2d64146101315780634df7e3d01461021e5780635cdd067d1461024b578063738b2fac146103285780637b02b2c91461038557806386b714e2146104015780639a816f7d14610490578063a73d907e146104dd578063c104a5df1461052e578063dc8d26961461057b578063ee25f580146105c8578063f4b0d46c146105dd578063fbf3c88d1461061d578063fc73d771146106d0575b34156100e457600080fd5b6100ef5b600080fd5b565b005b34156100fc57600080fd5b610115600480803560ff1690602001909190505061071d565b604051808260ff1660ff16815260200191505060405180910390f35b341561013c57600080fd5b610168600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061072b565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101e15780820151818401525b6020810190506101c5565b50505050905090810190601f16801561020e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561022957600080fd5b610231610985565b604051808215151515815260200191505060405180910390f35b341561025657600080fd5b610282600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061098f565b60405180848152602001838152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103175780601f106102ec57610100808354040283529160200191610317565b820191906000526020600020905b8154815290600101906020018083116102fa57829003601f168201915b505094505050505060405180910390f35b341561033357600080fd5b610383600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506109b8565b005b341561039057600080fd5b6103ff600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a12565b005b341561040c57600080fd5b610414610b36565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104555780820151818401525b602081019050610439565b50505050905090810190601f1680156104825780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049b57600080fd5b6104c7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b7a565b6040518082815260200191505060405180910390f35b34156104e857600080fd5b610514600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bcb565b604051808215151515815260200191505060405180910390f35b341561053957600080fd5b610565600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ce2565b6040518082815260200191505060405180910390f35b341561058657600080fd5b6105b2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d54565b6040518082815260200191505060405180910390f35b34156105d357600080fd5b6105db610dab565b005b34156105e857600080fd5b610601600480803560ff16906020019091905050610f35565b604051808260ff1660ff16815260200191505060405180910390f35b341561062857600080fd5b610654600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f43565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106955780820151818401525b602081019050610679565b50505050905090810190601f1680156106c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156106db57600080fd5b610707600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611088565b6040518082815260200191505060405180910390f35b60006001820190505b919050565b6000806107366110f9565b6000806000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020915061084482606060405190810160405290816000820154815260200160018201548152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108365780601f1061080b57610100808354040283529160200191610836565b820191906000526020600020905b81548152906001019060200180831161081957829003601f168201915b5050505050815250506110d9565b15610890573360008090506040805190810160405280600581526020017f456d70747900000000000000000000000000000000000000000000000000000081525094509450945061097c565b8160020160008360000154815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001015482600201808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561096e5780601f106109435761010080835404028352916020019161096e565b820191906000526020600020905b81548152906001019060200180831161095157829003601f168201915b505050505090509450945094505b50509193909250565b6000600190505b90565b600060205280600052604060002060009150905080600001549080600101549080600301905083565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003019080519060200190610a0d92919061110d565b505b50565b610a1a61118d565b60006060604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020018481525091506000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050818160020160008360010154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019080519060200190610b179291906111cb565b5090505080600101600081548092919060010191905055505b50505050565b610b3e6110f9565b6040805190810160405280600881526020017f6120737472696e6700000000000000000000000000000000000000000000000081525090505b90565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806001015491505b50919050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610cd981606060405190810160405290816000820154815260200160018201548152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ccb5780601f10610ca057610100808354040283529160200191610ccb565b820191906000526020600020905b815481529060010190602001808311610cae57829003601f168201915b5050505050815250506110d9565b91505b50919050565b6000806000806000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209250826000015491508260010154905080821415610d475760019350610d4c565b600393505b505050919050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806000015481600101540391505b50919050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610eb881606060405190810160405290816000820154815260200160018201548152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eaa5780601f10610e7f57610100808354040283529160200191610eaa565b820191906000526020600020905b815481529060010190602001808311610e8d57829003601f168201915b5050505050815250506110d9565b15610ec257610f32565b80600201600082600001548152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610f1b919061124b565b505080600001600081548092919060010191905055505b50565b60006001820190505b919050565b610f4b6110f9565b610f536110f9565b610f5b611293565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110305780601f1061100557610100808354040283529160200191611030565b820191906000526020600020905b81548152906001019060200180831161101357829003601f168201915b5050505050915081905060008151141561107d576040805190810160405280600581526020017f456d70747900000000000000000000000000000000000000000000000000000081525091505b8192505b5050919050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806000015491505b50919050565b6000806000836000015191508360200151905080821492505b5050919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061114e57805160ff191683800117855561117c565b8280016001018555821561117c579182015b8281111561117b578251825591602001919060010190611160565b5b50905061118991906112a7565b5090565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016111c56112cc565b81525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061120c57805160ff191683800117855561123a565b8280016001018555821561123a579182015b8281111561123957825182559160200191906001019061121e565b5b50905061124791906112a7565b5090565b50805460018160011615610100020316600290046000825580601f106112715750611290565b601f01602090049060005260206000209081019061128f91906112a7565b5b50565b602060405190810160405280600081525090565b6112c991905b808211156112c55760008160009055506001016112ad565b5090565b90565b6020604051908101604052806000815250905600a165627a7a72305820563a4f07746c7f82dd5140e1c833650cee50595a95c38beee75560f3e590d7ad0029';


// Update if the contract is updated.
// Generate using contract compiler, for instance http://remix.ethereum.org/
var interface1 = [{"constant":true,"inputs":[{"name":"val","type":"uint8"}],"name":"c","outputs":[{"name":"retval","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"getMsg","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"b","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"inboxes","outputs":[{"name":"first","type":"uint256"},{"name":"last","type":"uint256"},{"name":"signedPublicEncrKey","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"string"}],"name":"setSignedPublicEncKey","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_message","type":"string"}],"name":"sendMsg","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"s","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"last","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"inboxIsEmpty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"inboxIsEmpty1","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"inboxSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"consumeMsg","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"val","type":"uint8"}],"name":"d","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getSignedPublicEncKey","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"first","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"}];

// Update when the contract is deployed.
// Lookup on https://rinkeby.etherscan.io/ soon after contract has been deployed to find address.
var contractAddress =  '0x5e11Dba64B8E171BBA94BB54f4Cb43282cd60A1B';


exports.bytecode = bytecode;
exports.interface1 = interface1;
exports.address = contractAddress;
