# $ CashMaster $
### *(Pénztárgép és árukészlet nyilvántartó program)*
Ez a pénztárgép alkalmazás webböngészőből futtatható, 
tehát alapvetően nem számít, hogy milyen eszközről 
dolgozol vele. Ha szerverről akarod futtatni helyi 
hálózaton keresztül, akkor csak az IP címedre van szük-
séged és egy webböngészőre. Magát az alkalmazást innen-
től kezdve akár okostelefonról, vagy táblagépről is
tudod használni.

## A program által használt hálózatról:

Ez a program kettő fő részből áll:
#####    -Szerver, ami az adatokat szolgáltatja
#####    -A Főoldal, ahol az utasításokat megadhatod

Ez a program lényegében egy weboldal, amit a saját gép-
edről tudsz működtetni. Vagyis van egy szerver, ami
működteti a főoldalt és van egy másik, ami az adatokat
szolgáltatja, számodra. 
*(Az egyszerűség kedvéért mosta főprogramot csak *
*főoldalnak nevezem és Szervernek pedig az adatokat *
*szolgáltató szervert.)*

A program használatához meg kell tenned néhány fontos
előkészületet, ahhoz, hogy a program működjön. Először
is létre kell hozni egy hálózatot, amin keresztül a
Szerver kommunikálni tud a Főoldallal. 

Erre több lehetőséged is van, én Wi-Fi hálózat megoszt-
ásával *(úgynevezett hotspot-tal)* oldottam meg. Az 
okostelefonod beállításaiban keresd meg a Hordozható
hotspot, vagy hotspot menüpontot! A hotspotban az a 
legnagyszerűbb, hogy akkor is létre tudsz hozni helyi
hálózatot, ha éppen nincsen internet elérésed.

Miután bekapcsoltad a hotspotot, a gépeddel csatlakozz
fel a mobilod wi-fi hálózatára! Előfordulhat, hogy jel-
szót kér, de ezt a telefonodon belül a hotspot beállít-
ásainál megváltoztathatod. Ha minden jól alakult, a két
készülék közös hálózaton van és IP cím alapján képesek
kommunikálni egymással. Vagyis képes vagy arra, hogy
akár a telefonod böngészőjéből hozzáférhess a pénztár-
géphez.

### Szerver futtatása a program használatához:
Szerver létrehozásához előzetesen csak kettő dolgot 
kell tudnod jelen esetben: az IP címedet és hogy melyik
portot használod.
#####    *`(Egy példa IP cím: 12.34.56.789:1234)`*

A ponttal elválasztott számok mutatják az IP címet, a
kettőspont után pedig a portot találod. Úgy képzeld 
el, mint egy hatalmas hangárt, aminek van 9000 ajtaja!
Az IP cím mondja meg, hogy melyik hangárba kell menni,
a port meg azt, hogy melyik ajtón kell bemenned.

Ezt azért volt fontos tisztázni, mert valószínűleg
ugyanazt az IP címet használja nálad is a Főoldal és a
Szerver is, viszont más portot. A szerver forráskód-
jába bele van égetve, hogy az 5555-ös portot használja,
úgyhogy az a főoldal üzemelteteéséhez nem lesz jó.

#### Adatszerver elindítása:
A Szerver egy zip csomagban van, srv.zip néven. Ahhoz,
hogy használni tudd, ki kell csomagolnod és a Server
mappában lévő szerver programot futtatnod kell parancs-
sorban. Előtte mindenképpen olvasd el a readme_srv.md
vagy a Readme_srv.pdf állományt! Abban le van írva
minden az IP címed megismeréséről és a Server mappa
tartalmáról. Miután elindítottad a szervert, térj
vissza a CashMaster főmappájába!

#### Főoldal szerverének üzembehelyezése:
A Főoldal használatához nyisd meg a CashMaster fő-
mappáját terminálban és futtatsd a következő parancsot:

>`python3 -m http.server 1234`

##### *(A -m kapcsoló a python http.server moduljának a forráskódját futtatja, amivel egy alap http szervert tudsz elindítani. A négyjegyű szám a szerver portja. Bármilyen négyjegyű számot megadhatsz, csak ne az 5555-öt, mert azt lefoglalta a server.py program. Ha semmit nem írsz oda, alapértelmezetten a 8000-es portot fogja használni.)*
Ha megvagy, írd be a böngésződbe az ip címedet és a 
http szerver portját a példa IP cím mintájára! <br>

*`(ip.címed:port)`* 

Ha minden igaz, látnod kell a böngésződben a CashMaster
felhasználói felületét.<br><br>

#### Főprogram lokális működtetése
A Főoldalt szerver nélkül is be tudod hozni, de a
szerverhasználata erősen ajánlott. Ha a Főoldalt köz-
vetlenül akarod futtatni, a CashMaster főmappájában
nyitsd meg az index.html állományt! A géped valószínű-
leg felismeri, hogy ez egy html file és kapásból
böngészővel akarja megnyitni. Ha ez mégsem történik
meg, jobb egérgombbal kattints rá, és a társítás, vagy
megnyitás mással lehetőséget válaszd!

Az adatszerverre mindenképpen szükség van, mert más-
képpen a program nem képes a file kezelésre.



======================================================
## srv.zip
##### *(Adatok szolgáltatása a főprogramnak)*
Az srv.zip állományt, ha kicsomagolod, Lépj be a 
Server mappába. Ott megtalálod a readme_srv.md szöfeg-
file-t, amiben részletesen leírtam mindent a mappában
található programokról és az adatszerkezetről.

======================================================
## lokális szerver futtatása
##### *(weboldal futtatása saját gépről)*

======================================================
## Hogyan használd?


