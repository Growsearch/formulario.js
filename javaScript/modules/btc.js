export default function btcModule() {

const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
    fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then(btcJson => {
        btcDisplay.innerText = btcJson.BRL.buy;
    })
}

fetchBtc();

}