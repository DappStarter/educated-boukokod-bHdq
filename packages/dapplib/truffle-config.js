require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain evil install fork suspect taxi'; 
let testAccounts = [
"0x44c72e0eb41942bc10732701dda91fb35e4ff61e0659e0bbcdf47a51a5fc83cb",
"0xe48917cf11bd5df250cdf3b0e6e52b106489e0c4deab8323c6c9eefdaffefe7b",
"0xcb5ba80378629e6c275fd346b21b23b2886b41f19a9ce297d7ef51b6918adc19",
"0xfde16c0f3f14c63991071a9003556341b6be852287515bfbd37f93853617270d",
"0xdc0faec38706e0223208c3f7445f656c2824539fdaa2e78014ff77f3e756e876",
"0x57525c3358e32bb2f3eda9c1479ef0bac90afa38579c99fab7a6e2149296be7f",
"0xc605ddbb95ee6ed474e627ba1836585e225072cb6372b62652124e935fff850a",
"0x5f5b1f9091bddb980595667906de735e796d357c49700ed2ee33a5d503e2ffb7",
"0x63dfcacd0e633d1606ec71b0ddd78d9efbe5b9a5d6f438c11b396248d541742d",
"0xad3795cf1fa9d6770885198258a6bd600caa27069d8dd31f1b043afdb728e38f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

