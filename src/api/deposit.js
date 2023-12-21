import axios from 'axios';

// Constants you declared but did not use. Depending on your use case, you might want to remove or use them.
// const COLLECTION_ID = '64c20b45925315c6f23c';
// const BEPAddress = "0x5C943aE9807E85B4Fa7298EcFEd84E48E3226FAB";

const BTCAddress = "38XnPvu9PmonFU9WouPXUjYbW91wa5MerL";
const ETHAddress = "0x5C943aE9807E85B4Fa7298EcFEd84E48E3226FAB";
const TRCAddress = "TJHp6FgptJ4xbVVHjhgdiPXPamMMGGUVJk";
const apiKey = 'Oyil7KEdqBiGEvLp7Gyw';  // Assuming you have set up an environment variable

export const getBalance = async () => {
    try {
        const resEth = await axios.get(`https://services.tokenview.io/vipapi/addr/b/eth/${ETHAddress}?apikey=${apiKey}`);
        const resBtc = await axios.get(`https://services.tokenview.io/vipapi/addr/b/btc/${BTCAddress}?apikey=${apiKey}`);
        const resTrx = await axios.get(`https://services.tokenview.io/vipapi/addr/b/trx/${TRCAddress}?apikey=${apiKey}`);
        const resUsdt = await axios.get(`https://services.tokenview.io/vipapi/usdt/addressdetail/${ETHAddress}?apikey=${apiKey}`);

        return {
            priceBtc: resBtc.data.data,
            priceEth: resEth.data.data,
            priceTrx: resTrx.data.data,
            priceUsdt: resUsdt.data.data
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            error: true,
            message: 'Error fetching data',
            details: error.toString()
        };
    }
};
