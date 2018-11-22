import { Arweave } from "./arweave";



// const crypto = require('crypto');

export default function init(){
    console.log('initing arweave');
    // return new Crypto;
}


let arweave = new Arweave({api: {host: 'wallet-1.nodes.arweave.org'}});

(async () => {
    console.log(await arweave.network.info());
    console.log(await arweave.network.peers());
    console.log(await arweave.transactions.get('Fr6QEPtcEgE0xiXfBaPtxy5iPRCoJJuDc6dloc6onFc'));
    console.log(await arweave.transactions.getStatus('Fr6QEPtcEgE0xiXfBaPtxy5iPRCoJJuDc6dloc6onFc'));
    console.log(await arweave.wallets.getBalance('_qa4arkdjK2X9SjechexnWzTtbOKcPkBPhrDDej6lI8'));
})();



// try {
//     throw new ArweaveError(ArweaveErrorType.TX_PENDING);
// } catch (error) {
//     if (error instanceof ArweaveError && error.type == ArweaveErrorType.TX_PENDING) {
//     }
// }
