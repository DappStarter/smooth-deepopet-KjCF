require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard rate night puppy hunt lobster fringe gate'; 
let testAccounts = [
"0x052b4fb2a6919843bbdd4d2206145f518dc207b491e8a818668f6e289dbe7c93",
"0x58bf9cb35152783679ae2640d7e56fa41d956fd3754dd30e76620652d3449097",
"0x049d7b6d4f4ecef1e8b2a26d1c2cbf6684e509b19b18660d9f29036225a923c5",
"0x2ecb9071d06ccdddfa065360398326348d367b78a8352093ae9e3b6724933dd9",
"0x0eac70bc11d0672606adbb6631217fc675279afccf74de75d5ba60ec7919a72d",
"0x93b65cd4e3c54250ac319286f09efd0bdfc383ec34dad91417376cf202725356",
"0x0de295aad194e1db6a758cffa7df7f10baf740c02d242e81af495d6352ac01bd",
"0xe68913864befe83804c5ea1de49c86f2909dd08ed432a50d70f83fae1e20dadc",
"0x6eab2526004c21121f9029e68d34bd633677b181ded70d32d90265d1dfbe4648",
"0x17f9e2ebcda73fa5ba6693e8d85d4cc676c226aa4093687bf01bc4c8d21001ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

