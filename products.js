let products = {
    dvr: ["DS-7104HQHI-K1",
        "DS-7104HGHI-F1",
        "DS-7108HQHI-K1",
        "DS-7108HGHI-K1"],
    nvr: ["DS-7232NI-K2",
        "DS7332NI-K4",
        "DS-7608NI-K2"],
    "ip camera": ["DS-1043"],
    "switch": ["0310HP-E",
        "0109P-E"],
    "analoq camera": ["DS-2CE17D0T-IT3 (2.8mm)",
        "DS-2CE17D0T-IT3 (3.6mm)",
        "DS-2CE56D0T-IRP (2.8mm)",
        "DS-2CE56D0T-IRP (3.6mm)",
        "DS-2CE56D0T-IRM (2.8mm)",
        "DS-2CE56D0T-IRM (3.6mm)",
        "DS-2CE16D0T-IR (2.8mm)",
        "DS-2CE16D0T-IR (3.6mm)"],
    hdd: ["1TB WD",
        "2TB WD",
        "4TB WD",
        "6TB WD",
        "8TB WD",
        "10TB WD"],
    aksesuar: ["BNC 30cm",
        "BNC Purjunlu",
        "DC F",
        "DC M"],
    kabel: ["2+1 (250m)",
        "2+1 (500m)",
        "4+1 (250m)",
        "4+1 (500m)",
        "CAT5E FTP (305m)",
        "CAT6 UTP (305m"],
    ups: ["UPS 600",
        "UPS 800",
        "UPS 1000",
        "UPS 1500",
        "UPS 2000"]
};
let productList = [];

// products obyektindeki elementleri <datalist> daxiline  elave edirik
// (inputboxa focus oldugumuz zaman elementler gorunun ve tapmaq asan olsun deye)
const addToDatalist = (productsIsObj) => {
    let html = ""

    for (const [key, value] of Object.entries(productsIsObj)) {
        html += `<optgroup label="${key}">`
        value.forEach((name) => {
            html += `
            <option value="${name}">${key.toUpperCase()}</option>
            `
        })
        html += `</optgroup>
        `
    }

    ui.datalist.innerHTML = html;
};