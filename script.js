const cuccok = document.getElementById("cuccok");    //A tételeket megjelenítő lista <tag>
const sum = document.getElementById("sum");          //Össz-ár címkéje
const count = document.getElementById("count");      //Kiszámoló gomb
const buy = document.getElementById("buy");          //Vásárlás véglegesítése
const save = document.getElementById("save");        //Adatok mentése
let tételek = '';                                    //A Lista elemeit tartalmazó HTML string
let IP;
let minden;
let vetel = {cuccok: [], összeg: 0};                                           //Egy vásárlás részletei

//Árukészlet két adattáblában
let készlet;

//IP cím beszerzése
function GetIP() {
    IP = prompt('Add meg az IP címet!')
    //Requester.style.display = "block";
}

//Adatok letöltése a szerverről
function GetData() {
    fetch(`http://${IP}:5555/keszlet_2.json`)
        .then(response => response.json())
        .then(data => {
            készlet = data;
        })
        .then(() => {
            alert('Letöltés sikeres.');
            load();
        })
}

//Adatok mentése a szerverre
function GiveData() {
    fetch(`http://${IP}:5555/keszlet_2.json`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(v)
    });
}

//---------------------------------------------------------------

//  Áruk kezelési listájának betöltése
function load(v) {
    for (let i = 0; i < készlet.árlista.length; i++) {
        if (készlet.megmaradt[i][2] > 0) {
            tételek += '<li><label for="ck_' + (i + 1) + '">' + készlet.árlista[i][0] + ' ('+ készlet.árlista[i][1] +' Ft/db, ' + készlet.megmaradt[i][2] + ' db maradt)</label><input class="measure" type="number" id="ck_' + (i + 1) + '" value="0"><br><label class="errs" id="E-'+ (i + 1) +'">Nem adhatsz meg nagyobb összeget, mint '+ készlet.megmaradt[i][2] +', sem kissebbet, mint 0.</label></li>'
        }
    }
    cuccok.innerHTML = tételek
    sum.innerText = " 0"
}

//  Összekészített áruk értékének összegzése
function add_prices() {
    vetel = {cuccok: [], összeg: 0};
    minden = 0;                                              //Végösszeg értéke 
    let nonull = true;
    let parts = []
    for (let i = 1; i <= készlet.megmaradt.length; i++) {
        let inp = document.getElementById("ck_" + i.toString()); //Össz érték termék szerint
        let Err = document.getElementById("E-"+ (i));
        let tmp = []
        if (készlet.megmaradt[i - 1][2] >= inp.valueAsNumber && inp.valueAsNumber >= 0) {
            reszosszeg = inp.valueAsNumber * készlet.megmaradt[i - 1][1];
            minden += reszosszeg;
            Err.style.display = "none";
            if (inp.valueAsNumber > 0) {
                parts.push(false);
                tmp = [készlet.megmaradt[i - 1][0], készlet.megmaradt[i - 1][1], inp.valueAsNumber];
                vetel.cuccok.push(tmp)
                vetel.összeg += reszosszeg; 
            }
        } else {
            Err.style.display = "block";
        }
    }

    for (let part of parts) {
        if (part == false) {
            nonull = false;
        }
    }

    sum.innerText = minden.toString() + ' Ft'                   //Össz-ár címkét átírja a program a végösszeg értékére forintban
    if (nonull != true) {
        buy.style.display = "block";
    } else {
        buy.style.display = "none";
    }
}

/*//Összekészített árúk vásárlásának véglegesítése
function buy-prod() {} */

function buy_products() {
    if (vetel.cuccok.length > 0) {
        készlet.tranzakciók.push(vetel);
    }
}

GetIP();
GetData();

count.addEventListener("click", () => { add_prices() });
save.addEventListener('click', () => { saveProd() });
