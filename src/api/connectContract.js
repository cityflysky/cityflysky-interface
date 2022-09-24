import erc20Abi from '../abi/erc20.json';
import cityzen from '../abi/cityzen.json';
const CONTRACTS = {
    erc20:{address:"0x46B85F2E50BFB50F4F78d29e98E679a859d5F839",abi:erc20Abi},
    cityzen:{address:"0x4a07178346ef366baf8aC23d4cebe67fe8Fe2e4A",abi:cityzen},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByContract(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export  {
    CONTRACTS,
    getContractByName,
    getContractByContract,
    getContractAddress
};

