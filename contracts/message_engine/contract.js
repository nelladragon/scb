
// Update if the contract is updated.
// Generate using contract compiler, for instance http://remix.ethereum.org/
var bytecode = 
'6060604052341561000c57fe5b604051602080610f9e833981016040528080519060200190919050505b80600160006101000a81548160ff021916908360ff1602179055505b505b610f48806100566000396000f30060606040523615610097576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063428e2d64146100995780635cdd067d14610190578063738b2fac1461026a5780637b02b2c9146102c4578063919840ad1461033d578063a73d907e14610363578063dc8d2696146103b1578063ee25f580146103fb578063fbf3c88d1461040d575bfe5b34156100a157fe5b6100cd600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104ca565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360008314610154575b80518252602083111561015457602082019150602081019050602083039250610130565b505050905090810190601f1680156101805780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561019857fe5b6101c4600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610728565b60405180848152602001838152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102595780601f1061022e57610100808354040283529160200191610259565b820191906000526020600020905b81548152906001019060200180831161023c57829003601f168201915b505094505050505060405180910390f35b341561027257fe5b6102c2600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610751565b005b34156102cc57fe5b61033b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107ac565b005b341561034557fe5b61034d6108d1565b6040518082815260200191505060405180910390f35b341561036b57fe5b610397600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108db565b604051808215151515815260200191505060405180910390f35b34156103b957fe5b6103e5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109f4565b6040518082815260200191505060405180910390f35b341561040357fe5b61040b610a4d565b005b341561041557fe5b610441600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bd9565b6040518080602001828103825283818151815260200191508051906020019080838360008314610490575b8051825260208311156104905760208201915060208101905060208303925061046c565b505050905090810190601f1680156104bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060006104d6610d35565b60006000600060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002091506105e682606060405190810160405290816000820154815260200160018201548152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105d85780601f106105ad576101008083540402835291602001916105d8565b820191906000526020600020905b8154815290600101906020018083116105bb57829003601f168201915b505050505081525050610d20565b1561063357336000809050604060405190810160405280600581526020017f456d70747900000000000000000000000000000000000000000000000000000081525094509450945061071f565b8160020160008360000154815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001015482600201808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107115780601f106106e657610100808354040283529160200191610711565b820191906000526020600020905b8154815290600101906020018083116106f457829003601f168201915b505050505090509450945094505b50509193909250565b600060205280600052604060002060009150905080600001549080600101549080600301905083565b80600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030190805190602001906107a7929190610d49565b505b50565b6107b4610dc9565b60006060604051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001428152602001848152509150600060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050818160020160008360010154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020190805190602001906108b2929190610e07565b5090505080600101600081548092919060010191905055505b50505050565b6000600590505b90565b60006000600060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506109eb81606060405190810160405290816000820154815260200160018201548152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109dd5780601f106109b2576101008083540402835291602001916109dd565b820191906000526020600020905b8154815290600101906020018083116109c057829003601f168201915b505050505081525050610d20565b91505b50919050565b60006000600060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806000015481600101540391505b50919050565b6000600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610b5b81606060405190810160405290816000820154815260200160018201548152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b4d5780601f10610b2257610100808354040283529160200191610b4d565b820191906000526020600020905b815481529060010190602001808311610b3057829003601f168201915b505050505081525050610d20565b15610b6557610bd6565b8060020160008260000154815260200190815260200160002060006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610bbf9190610e87565b505080600001600081548092919060010191905055505b50565b610be1610d35565b610be9610d35565b610bf1610ecf565b600060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cc75780601f10610c9c57610100808354040283529160200191610cc7565b820191906000526020600020905b815481529060010190602001808311610caa57829003601f168201915b50505050509150819050600081511415610d1557604060405190810160405280600581526020017f456d70747900000000000000000000000000000000000000000000000000000081525091505b8192505b5050919050565b6000816020015182600001511490505b919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d8a57805160ff1916838001178555610db8565b82800160010185558215610db8579182015b82811115610db7578251825591602001919060010190610d9c565b5b509050610dc59190610ee3565b5090565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001610e01610f08565b81525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e4857805160ff1916838001178555610e76565b82800160010185558215610e76579182015b82811115610e75578251825591602001919060010190610e5a565b5b509050610e839190610ee3565b5090565b50805460018160011615610100020316600290046000825580601f10610ead5750610ecc565b601f016020900490600052602060002090810190610ecb9190610ee3565b5b50565b602060405190810160405280600081525090565b610f0591905b80821115610f01576000816000905550600101610ee9565b5090565b90565b6020604051908101604052806000815250905600a165627a7a72305820b537592868701a153731f55fd8f69891765b116dc979b0ba15f6087ea83ecfa20029';


// Update if the contract is updated.
// Generate using contract compiler, for instance http://remix.ethereum.org/
var interface1 = [{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"getMsg","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"inboxes","outputs":[{"name":"first","type":"uint256"},{"name":"last","type":"uint256"},{"name":"signedPublicEncrKey","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"string"}],"name":"setSignedPublicEncKey","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_message","type":"string"}],"name":"sendMsg","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"check","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"inboxIsEmpty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_recipient","type":"address"}],"name":"inboxSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"consumeMsg","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getSignedPublicEncKey","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"proposals","type":"uint8"}],"payable":false,"type":"constructor"}];

// Update when the contract is deployed.
// Lookup on https://rinkeby.etherscan.io/ soon after contract has been deployed to find address.
var contractAddress =  '0x5e11Dba64B8E171BBA94BB54f4Cb43282cd60A1B';


exports.bytecode = bytecode;
exports.interface1 = interface1;
exports.address = contractAddress;