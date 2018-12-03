import { Arweave } from "../arweave";
import { WebCryptoDriver } from "../lib/crypto/webcrypto-driver";

(<any>window).arweave = {
    init(apiConfig: object): Arweave{
        return new Arweave({
            api: apiConfig,
            crypto: new WebCryptoDriver
        });
    }
};
