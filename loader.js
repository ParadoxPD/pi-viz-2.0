const filePath = "./data/pi-1million.txt";


async function getPiDigits() {

    let digits = await fetch(filePath)
        .then((response) => response.text())
        .catch((err) => { console.err(err) });

    return digits;
}
