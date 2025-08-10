# TYPESCRIPT

<pre>
npm install -g typescript
tsc -v
tsc --init
npx tsc
tsc --watch

// min package.json
{
    "scripts": {
        "build": "tsc",
        "start": "node dist/app.js",
        "dev": "tsc --watch"
    }
}
</pre>

## Mi a TypeScript?
A TypeScript egy nyílt forráskódú programozási nyelv, amelyet a Microsoft fejlesztett ki. A JavaScript szuperszettjeként működik, ami azt jelenti, hogy minden érvényes JavaScript kód érvényes TypeScript kód is, de a TypeScript többletfunkciókkal és lehetőségekkel bővíti a JavaScriptet.

## A TypeScript alapelvei
**Statikus típusellenőrzés**: A TypeScript egyik legfontosabb jellemzője a statikus típusellenőrzés. Ez azt jelenti, hogy a változók és funkciók típusait a kód írásakor definiálod, aminek köszönhetően a fordítási időben azonosíthatók a típusokkal kapcsolatos hibák.

**Objektumorientált programozás**: A TypeScript teljes körű támogatást nyújt az objektumorientált programozási paradigmának, beleértve az osztályokat, interfészeket, öröklődést és kapszulázást.

**Kompatibilitás a javascript-el**: Mivel a TypeScript egy JavaScript szuperszett, teljes mértékben kompatibilis a meglévő JavaScript kóddal. Ez lehetővé teszi, hogy fokozatosan integrálódjon a meglévő projektekbe.

## A TypeScript előnyei
**Jobb kódminőség és megbízhatóság**: A statikus típusellenőrzésnek köszönhetően a TypeScript képes csökkenteni a futásidejű hibák számát, mivel sok hibát már a fordítási időben ki lehet szűrni.

**Fejlesztői eszközök támogatása**: A TypeScript támogatása fejlett fejlesztői eszközökben, mint például az automatikus kód-kiegészítés, refaktorálás, és típusinformációk, javítja a fejlesztői élményt.

**Skálázhatóság**: A TypeScript kiválóan alkalmas nagyobb méretű alkalmazások fejlesztésére, ahol a kód bonyolultsága és a csapaton belüli együttműködés előnyt jelent a szigorú típusrendszertől.

**Közösségi támogatás**: A TypeScript egy gyorsan növekvő közösséggel rendelkezik, és számos külső könyvtár és eszköz támogatja.

## TypeScript fordító konfigurálása (tsconfig.json)
<pre>
{
    "compilerOptions": {
        "outDir": "./dist",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "es2015",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}
</pre>

## Alapvető konfigurációs opciók
A tsconfig.json számos beállítást kínál, de itt néhány alapvetőre koncentrálunk, amelyek fontosak a frontend kód esetében:

* **compilerOptions**: Ez a szekció tartalmazza a fordító beállításait.
    * **outDir**: Meghatározza, hogy hova kerüljenek a lefordított JavaScript fájlok. Például: <code>"./dist"</code>
    * **module**: A modulrendszer típusa. Frontend kód esetén gyakran <code>"es2015"</code> vagy <code>"esnext"</code>.
    * **target**: A JavaScript verziója, amire fordít. Gyakran "es5"-re állítják a széles böngésző kompatibilitás érdekében.
    * **jsx**: Ha React-ot használsz, állítsd <code>"react"</code>-re.
    * **sourceMap**: Ez lehetővé teszi a hibakeresést a TypeScript fájlokban, generál térképfájlokat.
    * **include** és **exclude**: Ezek a szekciók határozzák meg, hogy mely fájlok tartozzanak bele vagy maradjanak ki a fordítási folyamatból. Például: <code>"include": ["./src/**/*"]</code>

## Speciális beállítások frontend kódhoz
Frontend projekt esetén fontos lehet további beállításokat hozzáadni, mint például:

* **lib**: Megadhatod, hogy mely JavaScript API-kat és DOM típusdefiníciókat szeretnéd használni.
* **strict**: Ha true, szigorúbb típusellenőrzést végez.

## Alapvető paraméterek
* **target**: Ez határozza meg, hogy milyen ECMAScript verzióra fordítja a TypeScript a kódot. Ha modern böngészőkben szeretnéd futtatni a kódot, használhatod az "es5" vagy "es6" értéket. Például: <code>"target": "es5"</code>
* **module**: A modulok kezelése a projektben. Ha a kódod modulokat használ (pl. ES modulok), akkor állítsd ezt "es2015"-re vagy magasabbra. Például: <code>"module": "es2015"</code>
* **strict**: Ez a beállítás szigorúbb típusellenőrzést engedélyez, amely segít a hibák korai felismerésében a fejlesztés során. Ajánlott true értékre állítani: <code>"strict": true</code>
* **lib**: Meghatározhatod, hogy melyik JavaScript könyvtárakat és API-kat tartalmazza a környezet. Ha a böngésző-specifikus API-kat, mint a DOM-ot használod, akkor ezeket itt kell meghatározni. Például: <code>"lib": ["dom", "es2015"]</code>
* **sourceMap**: Ez lehetővé teszi a forráskód térképezését, ami hasznos a hibakereséshez. Állítsd "true"-ra a könnyebb hibakeresés érdekében: <code>"sourceMap": true</code>

Példa tsconfig.json fájlra, amely alapvetően megfelelő a modern webfejlesztési környezetekhez és jól kezeli az összetett TypeScript elemeket, mint az interfészek és generikusok:

<pre>
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "strict": true,
    "lib": ["dom", "es2015"],
    "sourceMap": true
  },
  "include": ["src/**/*"]
}
</pre>

# TypeScript típusok
## Bevezetés
TypeScript, a JavaScripthez használt statikus típusellenőrzési nyelv, számos beépített típust kínál, amelyek segítenek a fejlesztőknek a kód hibamentes és karbantartható írásában.

## Primitív típusok
Primitív típusok azok, amelyek nem objektumok és változatlanul maradnak. Ezek közé tartozik:

* **Boolean**: Igaz vagy hamis értéket képvisel.
* **Number**: Minden szám, beleértve az egészeket és a lebegőpontosokat.
* **String**: Szöveges értékek.
* **Null**: Ez egy típus, amelynek csak egy értéke van: null
* **Undefined**: Egy nem definiált érték.
* **Symbol**: Egyedi és immutábilis érték, amit a Symbol() függvény hoz létre.

## Nem primitív típusok
A nem primitív típusok objektumok, amelyek összetettebb szerkezeteket és metódusokat tartalmazhatnak. Ide tartozik:
* **Object**: Kulcs-érték párokat tartalmaz.
* **Array**: Azonos típusú elemek listája.
* **Tuple**: Különböző típusú elemek fix hosszúságú listája.
* **Enum**: Meghatározott értékek csoportja. <code>Példa: enum Color {Red, Green, Blue}</code>

A legfontosabb különbség a primitív és nem primitív típusok között az, hogy a primitívek **immutábilis (változatlan) értékek**, míg a nem primitívek objektumok, amelyek referenciák és összetettebb szerkezetek.

## Speciális típusok
* **Any**: Bármely típusú értéket képvisel. Használata kerülendő, mivel elkerüli a típusellenőrzést.
* **Unknown**: Használata biztonságosabb, mint az any, mivel a típus meghatározásáig nem engedélyezi a műveletek végrehajtását.
* **Void**: Főként függvényeknél használatos, amelyek nem térnek vissza értékkel.
* **Never**: Olyan típusokra használható, amelyek soha nem hoznak létre értéket.

A TypeScript típusai segítenek a fejlesztőknek biztonságosabb és könnyebben karbantartható kódot írni, megkönnyítve a fejlesztési folyamatot.

// specialis tipusok
randomValue: any;
unknownValue: unknown;
neverFunction: () => never;

<pre>
constructor() {
    // Primitív típusok inicializálása
    this.isLoggedIn = true;
    this.userCount = 100;
    this.userName = "John Doe";
    this.nullableValue = null;
    this.undefinedValue = undefined;
    this.uniqueSymbol = Symbol("unique");

    // Nem primitív típusok inicializálása
    this.userInfo = { name: "John", age: 30 };
    this.favoriteNumbers = [1, 2, 3];
    this.mixedTuple = ["hello", 10];
    this.userRole = UserRole.Admin;

    // Speciális típusok inicializálása
    this.randomValue = "Anything goes here";
    this.unknownValue = 42; // Kezdetben bármilyen érték lehet
    this.neverFunction = () => {
        throw new Error("This function never returns");
    };
}

// Metódus, ami bemutatja az 'any' és 'unknown' típusok használatát
demonstrateSpecialTypes(): void {
    // 'any' típusú változó használata
    console.log(this.randomValue.length);
    // Nem biztonságos, mivel bármilyen típusú lehet 'randomValue'
}

//enum
let userRole: enum  = UserRole {
    Admin,
    User,
    Guest
}

let example = new TypeScriptExamples();
example.demonstrateSpecialTypes();
</pre>

# TypeScript alapvető és függvény-típusok átfogó összehasonlítása
## TypeScript alapvető típusok (core types)
A TypeScript alapvető típusai a JavaScript alapvető típusainak kiterjesztései, amelyek lehetővé teszik a szigorúbb típusellenőrzést és a hibamentes kód írását.

## Fő alapvető típusok
* **Boolean**: true vagy false értékeket képvisel.
* **Number**: Bármilyen számot képvisel (egész vagy lebegőpontos).
* **String**: Szöveges értékeket képvisel.
* **Array**: Tömbök, amelyek azonos típusú elemeket tartalmaznak. Két szintaxisa van: type[] vagy Array<type>.
* **Tuple**: Fix hosszúságú és típusú tömb. <code>Példa: [string, number]</code>
* **Enum**: Felhasználó által definiált értékkészlet.
* **Any**: Bármilyen típus, kerülendő, mert kikapcsolja a típusellenőrzést.
* **Void**: Általában függvényeknél használják, amikor nincs visszatérési érték.
* **Null** és **Undefined**: Jelöli, hogy a változó értéke null vagy nincs definiálva.
* **Never**: Olyan függvények típusa, amelyek soha nem térnek vissza (pl. kivételt dobó függvények).

Ezek a típusok a változók, függvények paramétereinek és visszatérési értékeinek típusként szolgálnak, segítve a kód szigorúbb strukturálását és a futásidejű hibák csökkentését.

## TypeScript függvény-típusok
A TypeScript támogatja a függvények szigorú típusellenőrzését, beleértve a paraméterek és a visszatérési értékek típusát.

* **Függvény-deklarációk típusa**: Meghatározhatjuk a paraméterek és a visszatérési érték típusát.
* **Arrow függvények**: (param1: type1, param2: type2) => returnType szintaxissal.
* **Opcionális és alapértelmezett paraméterek**: Paraméterek, amelyek nem kötelezőek vagy alapértelmezett értékkel rendelkeznek.
* **Túlterhelés (Overload)**: Azonos nevű, de különböző paraméterlistával vagy visszatérési értékkel rendelkező függvények definíciója.

A függvény-típusok lehetővé teszik a függvények szerkezetének pontos meghatározását. Ezzel biztosítják, hogy a függvények a várt típusú paramétereket fogadják el, és a megfelelő típusú értékeket adják vissza. Ez különösen hasznos a komplex, többszörösen túlterhelt függvények esetében, ahol a helytelen paraméterezés könnyen hibákhoz vezethet.

## Összehasonlítás és következtetések
* **Alapvető típusok**: Ezek a "építőkockák" a változók és a függvények paraméterei és visszatérési értékei számára. Biztosítják a változók és a kódstruktúrák típusbiztonságát.
* **Függvény-típusok**: Kifejezetten a függvények típusbiztonságára összpontosítanak. Lehetővé teszik a függvény paraméterek és visszatérési értékek típusainak előre meghatározását, valamint a függvények túlterhelését.

Mindkét típuskategória kulcsfontosságú a TypeScriptben, mivel hozzájárulnak a programok típusbiztonságának és karbantarthatóságának javításához. A TypeScript erőssége a szigorú típusellenőrzés és a kód hibamentességének elősegítése, amit ezek a típusok támogatnak.

<pre>
function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (baseValue: number, increment: number) => number = function(x, y) {
    return x + y;
};

// IIFE pelda
let userGreeting = (function(name: string) {
    return "Hello, " + name;
})("John");

console.log(userGreeting);
</pre>

## IIFE magyarázata

Az IIFE a **"Immediately Invoked Function Expression"** rövidítése, ami azonnal meghívott függvény kifejezést jelent.

Az IIFE egy függvény kifejezés, amit azonnal meghívnak, miután definiálták. Ez egy népszerű minta JavaScript-ben és TypeScript-ben is, ami segít a lokális változók elrejtésében a globális névtértől, így elkerülhető a névütközések és az esetleges konfliktusok.

Az IIFE-t általában zárójelek közé tesszük, hogy a JavaScript értelmezője függvény kifejezésként kezelje, és nem deklarációként. Ezután még egy pár zárójel követi, amelyek között opcionálisan paramétereket adhatunk át.

Az IIFE hasznos lehet például modulok létrehozásához, ahol azonnal inicializálunk bizonyos kódot, anélkül, hogy a későbbiekben újra meghívnánk vagy hivatkoznánk rá.

<pre>
(function() {
    var message = 'hahooo';
    console.log(message);
})();
</pre>

## Miért használjuk az IIFE-t?
* **Névtér izoláció:** Az IIFE segítségével elkerülhetjük a globális névtér szennyezését, mivel minden változó és függvény, amit az IIFE-n belül definiálunk, lokális marad.
* **Modularitás:** Az IIFE-k segítségével logikailag összetartozó kódokat csoportosíthatunk együtt anélkül, hogy befolyásolnák a külső kódot.
* **Azonnali végrehajtás:** Az IIFE lehetővé teszi a kód azonnali végrehajtását, ami hasznos lehet inicializáló logika vagy setup kód esetében.
* **Privát adatok:** Az IIFE-ket gyakran használják privát adatok és függvények létrehozására, amelyek nem érhetők el a külvilágból.

## Összehasonlító megjegyzések
Az alapvető típusok és a függvény típusok együtt nagyfokú rugalmasságot és szigorú típusellenőrzést tesznek lehetővé a TypeScript-ben, ami segít a kód karbantarthatóságának és olvashatóságának javításában. Az IIFE mintája pedig további struktúrát és rendszert visz a kódunkba, lehetővé téve a funkciók és változók izolálását.

# FORDÍTÁS
## 1. TypeScript kód írása és fordítása
Először is, a fejlesztők TypeScriptben írják meg a kódjukat. A TypeScript egy JavaScriptre épülő nyelv, ami statikus típusellenőrzést és objektum-orientált programozási lehetőségeket biztosít.

**TypeScript Compiler (tsc)**: Miután a kód elkészült, a TypeScript fordító (tsc) használatával a TypeScript kód JavaScriptre fordítódik. Ez a fordító felelős a típusellenőrzésekért és a TypeScript sajátosságainak JavaScriptre való átalakításáért. A fordítás eredményeként standard JavaScript kód keletkezik, amit a böngészők és a JavaScript futtató környezetek értelmezni tudnak.

## 2. Node.js és a V8 Motor Szerepe
**Node.js**: A Node.js egy JavaScript futtató környezet, amely lehetővé teszi, hogy JavaScript kódot szerveroldalon futtassunk. A Node.js a V8 JavaScript motorra épül, ami a Google Chrome böngésző JavaScript motorja.

**V8 motor**: A V8 egy nagy teljesítményű JavaScript motor, amely JIT (Just-In-Time) fordítást használ a JavaScript kód gyors végrehajtására. Amikor a Node.js-ben futtatjuk a JavaScript kódunkat, a V8 motor felelős a kód optimalizálásáért és végrehajtásáért.

## 3. Böngészők és a végrehajtás
**Böngészők**: Miután a TypeScript kód JavaScriptre fordult, a kapott JavaScript kódot a böngészőkben futtathatjuk. A modern böngészők, mint a Chrome, Firefox, Safari és Edge, mind saját JavaScript motorokkal rendelkeznek (például a Chrome esetében a V8 motorral), amelyek képesek a JavaScript kód értelmezésére és végrehajtására.

**JavaScript motorok a böngészőkben**: Ezek a motorok JIT (just in time) fordítási technikákat használnak a JavaScript kód hatékony végrehajtására. A JavaScript motorok optimalizálják a kódot futtatás közben, biztosítva ezzel a kód gyors és hatékony végrehajtását a böngészőben.

## 4. Alkalmazás deployment és futás
**Deployment**: Amikor egy alkalmazást "deployolunk" (közzéteszünk), a JavaScript kódot egy távoli szerverre töltjük fel, ahol a kód futtatható lesz. Ez a szerver lehet egy hagyományos web szerver vagy egy cloud alapú szolgáltatás, mint az AWS, Azure vagy Google Cloud.

**Szerveroldali JavaScript**: Ha a kód szerveroldalon fut, általában Node.js-t használunk a JavaScript kód futtatására. Itt is a V8 motor végzi a kód végrehajtását, hasonlóan ahhoz, ahogy a böngészőben történik.

**Kliensoldali JavaScript**: A deployolt alkalmazásban a kliensoldali JavaScript kód a felhasználók böngészőjében fut. Amikor egy felhasználó meglátogatja az alkalmazást, a szerver elküldi a

JavaScript kódot a kliens böngészőjébe, ahol azt a böngésző JavaScript motorja értelmezi és futtatja.

## 5. Életciklus és folyamatok
**Fejlesztési folyamat**: A fejlesztés során a TypeScript kód írása, fordítása (tsc segítségével), és tesztelése lokálisan történik. A fordító által generált JavaScript kód ellenőrizhető, és szükség esetén hibakeresésre kerülhet sor.

**Build és deployment folyamata**: A build folyamat során a TypeScript kódból JavaScript kód áll elő, ami általában minifikálásra és egyéb optimalizálásokra kerül (például webpack vagy más eszközök használatával). Ezek után a kész kód deployolásra kerül a szerverre.

**Futási környezet**: A kód futtatásakor a Node.js szerveroldalon, a böngészők pedig kliensoldalon dolgozzák fel a JavaScript kódot. A kód futásának hatékonysága és teljesítménye nagyban függ a JavaScript motorok optimalizálási képességétől.

## 6. Teljesítmény és optimalizálás
**Optimalizálás**: Mind a V8 motor (és más böngészők motorjai), mind a Node.js folyamatosan fejlődnek a JavaScript kód futtatásának hatékonysága és teljesítménye érdekében. Ez magában foglalja a JIT fordítást, memória kezelést, és kód optimalizálást.

**Kód karbantartása és frissítések**: A fejlesztés során a kód karbantartása és frissítése folyamatosan történik. A TypeScript kód módosítása esetén a fordítási és deployment folyamatot ismételni kell.

# TYPESCRIPT COMPILER (tsc)
Kulcsfontosságú szerepet tölt be a TypeScript kód JavaScriptre fordításának folyamatában. A fordító nem csupán a kód átalakításáért felelős, hanem számos további lényeges funkciót is ellát. Íme, egy részletesebb betekintés abba, hogy mi történik, amikor a tsc a TypeScript kódot JavaScriptre fordítja:

## 1. Kód-analízis és típusellenőrzés
**Szintaktikai- és szemantikai elemzés**: A fordítás első lépése, hogy a tsc végigmegy a TypeScript kódon, elemezve annak szintaxisát és szemantikáját. Ez magában foglalja a változók, függvények, osztályok definícióinak és használatának ellenőrzését.

**Típusellenőrzés**: Mivel a TypeScript egy statikusan típusos nyelv, a tsc ellenőrzi a változók, argumentumok, visszatérési értékek típusait, hogy megfelelnek-e a deklarációknak. Ha a típusok nem egyeznek, a fordító hibaüzenetet ad.

## 2. TypeScript sajátosságainak átalakítása
**Típusinformációk eltávolítása**: A TypeScript kódban megtalálható típusdeklarációk (mint például string, number, interface, stb.) nem léteznek a standard JavaScriptben. A tsc eltávolítja ezeket a típusinformációkat, hagyva csak a tiszta JavaScript kódot.

**Funkciók fordítása**: Bizonyos TypeScript funkciók, mint például a dekorátorok vagy a namespace-ek, nincsenek közvetlen megfelelőik a JavaScriptben. A tsc ezeket a konstrukciókat olyan JavaScript kóddá alakítja át, ami hasonló viselkedést eredményez.

## 3. ES6+ funkciók transzpile-álása
**Kompatibilitás**: A modern JavaScript (ES6+) funkciókat, mint például osztályok, nyilak függvények (arrow functions), sablon sztringek (template strings), stb., a tsc képes átalakítani olyan JavaScript kódra, ami kompatibilis régebbi böngészőkkel és környezetekkel. Ez az úgynevezett "transpile" folyamat lehetővé teszi, hogy a legújabb JavaScript funkciókat használhassuk, miközben támogatjuk a régebbi platformokat is.

**Polyfill-ek és Babel**: Néha, amikor a TypeScript kód modern JavaScript funkciókat használ, amelyek nem támogatottak régebbi böngészőkben, szükség lehet ún. "polyfill"-ekre vagy a Babel használatára. Ezek az eszközök biztosítják, hogy az újabb JavaScript funkciók visszafele kompatibilisek legyenek.

## 4. Kód optimalizálása és írása
**Minifikálás és optimalizálás**: A tsc által generált JavaScript kód gyakran további optimalizáláson megy keresztül, mint például minifikálás (a kód méretének csökkentése a felesleges karakterek eltávolításával) vagy más optimalizációs lépések. Ezek az optimalizációk a build folyamat részei, és gyakran harmadik féltől származó eszközök, mint a Webpack vagy Rollup segítségével történnek.

Kód kiírása: A fordítási folyamat végeztével a tsc a végleges JavaScript kódot kiírja a megadott kimeneti helyre. Ez lehet egyetlen összevont fájl vagy több moduláris JavaScript fájl, attól függően, hogy a projekt konfigurációjában milyen beállításokat adtunk meg.

## 5. Hibakezelés és jelentés
**Hibaüzenetek**: Amennyiben a fordítás során hibák merülnek fel, például típusellenőrzési problémák vagy szintaktikai hibák, a tsc részletes hibaüzeneteket generál. Ezek az üzenetek tartalmazzák a hiba helyét (fájlnév és sor szám), valamint egy leírást a hiba természetéről, ami segít a fejlesztőknek a problémák gyors javításában.

**Source Map**: Opcionálisan a tsc source map-eket is generálhat, amelyek összekapcsolják a TypeScript forráskódot a generált JavaScript kóddal. Ez lehetővé teszi a fejlesztők számára, hogy a böngészőben közvetlenül a TypeScript kódot debugolják.

## 6. Integráció és workflow
**Build eszközök és CI/CD**: A TypeScript fordító gyakran integrálódik a projekt build folyamatába és a CI/CD (**Continuous Integration/Continuous Deployment**) rendszerekbe. Ez automatizálja a fordítási folyamatot, és biztosítja, hogy a kód minden változtatás után megfelelően át legyen fordítva és tesztelve.

## 7. Végső JavaScript kód
**Standard JavaScript**: A folyamat végén a tsc által generált JavaScript kód teljesen szabványos, és nem tartalmaz semmilyen TypeScript-specifikus konstrukciót. Ez a kód futtatható bármely modern JavaScript környezetben, legyen az böngésző vagy Node.js.

# Objektumorientált programozás (OOP) TypeScriptben: Elvek és megvalósítás

Az objektumorientált programozás egy programozási paradigmát jelent, amely objektumok köré szervezi a kódot. Ezek az objektumok az adatokat (tulajdonságokat) és a hozzájuk kapcsolódó műveleteket (metódusokat) kapszulázzák.

Az OOP négy alapelve
* **Encapsulation (egységbe zárás)**: Adatok és a műveletek elrejtése az objektum belső részén, elérhetőségük korlátozása kívülről.
* **Inheritance (öröklődés)**: Egy osztály képes "örökölni" tulajdonságokat és metódusokat egy másik osztálytól.
* **Polymorphism (polimorfizmus)**: Azonos interfészt használó objektumok különböző formákban való megvalósítása.
* **Abstraction (absztrakció)**: Komplexitás elrejtése, és a szükséges részletek kiemelése.

## Encapsulation (egységbe zárás)
TypeScriptben az egységbe zárás **private**, **protected** és **public** hozzáférési módosítókkal valósítható meg.

<pre>
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

let dog = new Animal("Buddy");
console.log(dog.getName()); // 'Buddy', a nevet kívülről csak egy metódus segítségével érhetjük el
</pre>

## Inheritance (öröklődés)
A TypeScriptben az öröklődést az **extends** kulcsszóval érjük el, amely lehetővé teszi egy osztály számára, hogy egy másik osztály tulajdonságait és metódusait örökölje.

<pre>
class Animal {
    constructor(public name: string) {}

    move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog("Buddy");
dog.move(10); // Buddy moved 10m.
dog.bark(); // Woof! Woof!
</pre>

## Polymorphism (polimorfizmus)
Polimorfizmus a TypeScriptben azzal valósítható meg, hogy az osztályok különböző formában implementálják ugyanazt az interfészt vagy absztrakt osztályt.

<pre>
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Roaming the earth...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Meow');
    }
}

let animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());
</pre>

## Abstraction (absztrakció)
Absztrakciót az absztrakt osztályok és interfészek segítségével érhetjük el, amelyek definiálják azokat a metódusokat és tulajdonságokat, amelyeket a leszármazott osztályoknak implementálniuk kell.

<pre>
interface IShape {
    getArea(): number;
}

class Rectangle implements IShape {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle implements IShape {
    constructor(public radius: number) {}

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let shapes: IShape[] = [new Rectangle(10, 5), new Circle(4)];
shapes.forEach(shape => console.log(shape.getArea()));
</pre>


**Magyarázat:**
* Az **IShape interfész** egy absztrakt leírása az alakzatoknak, amelyeknek rendelkezniük kell egy getArea metódussal.
* A **Rectangle és Circle osztályok** különböző módon implementálják az IShape interfész getArea metódusát, megmutatva az absztrakció és polimorfizmus kombinációját.

## OOP összefoglalás
Az OOP TypeScriptben való megvalósítása ezeknek az alapelveknek a segítségével történik:
* A **egységbe zárás** elrejti az osztály belső állapotát és megakadályozza a közvetlen hozzáférést.
* Az **öröklődés** lehetővé teszi az osztályok közötti kódújrafelhasználást és hierarchikus struktúrák kialakítását.
* A **polimorfizmus** révén az objektumok különböző típusokként viselkedhetnek, mégis ugyanazon interfész alapján használhatók.
* Az **absztrakció** kiemeli a szükséges részleteket és elrejti a komplexitást, lehetővé téve a felhasználó számára, hogy az osztályok és interfészek logikai vázát használja anélkül, hogy a belső működéssel kellene foglalkoznia.

Ezek az OOP elvek segítik a szervezett, moduláris és újrafelhasználható kód létrehozását, amely könnyen karbantartható és bővíthető. A TypeScript nyújtotta típusrendszer pedig tökéletes eszköz a szigorú és biztonságos OOP kód megírásához.

# JS és TS közötti kapcsolat
A TypeScript és JavaScript közötti kapcsolatot úgy érthetjük meg, mint két egymást kiegészítő technológia kapcsolatát, amelyek mindkét front-end és back-end fejlesztést elősegítik. A TypeScript egy statikusan típusos felépítménye a JavaScriptnek, ami opcionális statikus típusozást és további fejlett jellemzőket ad hozzá a nyelvhez. A TypeScriptet a Microsoft fejlesztette ki 2012-ben, hogy megoldást nyújtson a JavaScriptben tapasztalt problémákra, különösen a típusrendszereivel kapcsolatos hiányosságokra.

A TypeScript használatának előnyei közé tartozik a kód karbantarthatóságának és szervezettségének javítása, például a statikus típusozás segít a hibák korai felfedezésében a fejlesztés során, ami időt takaríthat meg a hibakeresésben. Egyre népszerűbb és jobban támogatott a fejlesztői közösségben, ami elősegíti az integrációt és az együttműködést más eszközökkel. Támogatja a népszerű front-end keretrendszereket, mint az Angular, React és Vue, valamint a Node.js alapú back-end fejlesztést is. A TypeScript lehetővé teszi a szervezettebb és karbantarthatóbb kód írását, különösen nagyobb, bonyolultabb projektek esetében.

Azonban vannak hátrányai is a TypeScript használatának: meredekebb tanulási görbe, a JavaScripthez képest többletkomplexitás a fejlesztési folyamatban, és a kis vagy egyszerű projektek esetében a TypeScript által nyújtott előnyök nem feltétlenül indokolják a hozzáadott komplexitás és fejlesztési idő befektetését. Továbbá, a TypeScript kódokat JavaScriptre kell transzpilerelni a böngészőben vagy szerveren való futtatás előtt, ami extra lépést jelent a fejlesztési folyamatban és szükség

A TypeScript és JavaScript kapcsolata a modern webfejlesztés egyik kulcsfontosságú aspektusává vált. A TypeScript, amelyet a Microsoft fejlesztett ki, egy statikusan típusos szuperszettje a JavaScriptnek, ami azt jelenti, hogy bármely JavaScript kód érvényes TypeScript kódként is funkcionálhat. A TypeScript célja, hogy megoldja a JavaScript típusrendszerének korlátait, és ezzel egy erőteljesebb, szervezettebb és könnyebben karbantartható alternatívát kínáljon a fejlesztőknek, különösen nagyobb és bonyolultabb alkalmazások esetében.

**JavaScript előnyei**:
* Széleskörű használat és támogatottság, sokféle felhasználási lehetőség.
* Gyors fejlesztési idő, jól illeszkedik az agilis fejlesztési metodológiákhoz.
* Rugalmas és dinamikus nyelv, amely könnyen módosítható.

**JavaScript hátrányai**:
* A dinamikus típusosság bizonytalanságot és hibalehetőségeket rejthet.
* Nem tartalmazza a TypeScript által kínált strukturált és objektum-orientált programozási jellemzőket.

**TypeScript előnyei**:
* Hozzáadott jellemzők és szerkezet, ami javítja a kód karbantarthatóságát.
* A statikus típusozás segít a fejlesztés során korán felfedni a hibákat.
* Egyre növekvő népszerűség és támogatottság a fejlesztői közösségben.

**TypeScript hátrányai**:
* Meredekebb tanulási görbe, különösen azok számára, akik nem ismerik a szintaxisát.
* Többletkomplexitás és fejlesztési idő, amely nem mindig indokolt kisebb projekteknél.

A TypeScript és a JavaScript kapcsolata kritikus a modern webfejlesztés szempontjából. A TypeScript egy szuperszettje a JavaScriptnek, amely statikus típusozást és más haladó funkciókat ad hozzá a nyelvhez, miközben teljes kompatibilitást tart fenn a JavaScript kóddal. A TypeScript fejlesztésének egyik fő indoka a JavaScript dinamikus típusrendszerének korlátainak leküzdése volt. A TypeScript lehetővé teszi a fejlesztők számára, hogy a kód hibáit már a fejlesztés során felfedezzék, nem csak a futási időben, ezáltal időt takarítva meg a hibakeresésben.

A TypeScript hozzáadott struktúrája és szigorúbb szintaxisa lehetővé teszi a kód olvashatóbbá és karbantarthatóbbá tételét, különösen nagy és bonyolult projektek esetén. Az IDE-k és a fejlesztőeszközök támogatása is erőteljesebb a TypeScript esetében, köszönhetően a típusbiztonságnak, amely több funkciót és bővítményt tesz lehetővé. Emellett a TypeScript támogatja az objektum-orientált programozási elemeket, mint az osztályok és interfészek, amelyek nem állnak rendelkezésre a tisztán JavaScript környezetben.

A TypeScript használatának vannak hátrányai is. Például a tanulási görbéje meredek lehet a JavaScripthez képest, különösen azok számára, akik még nem járatosak a típusos nyelvekben. A TypeScript extra konfigurációt és felállítást igényel, mivel a TypeScript kódot JavaScriptre kell fordítani (transzpilerelni) a böngészőben vagy egy szerver segítségével.

# ECMAScript 2023 és a TS
Az ECMAScript 2023 (ES2023 vagy ES14) bevezetése jelentős változásokat hozott a JavaScript nyelvbe, amelyek a fejlesztők munkáját könnyítik meg. A JavaScript és a TypeScript közötti kapcsolat továbbra is szoros, a TypeScript az új JavaScript funkciókat gyorsan integrálja, biztosítva a fejlesztők számára azokat a statikus típusellenőrzési és objektum-orientált programozási képességeket, amelyek a TypeScript egyik legnagyobb előnyét jelentik.

Az új JavaScript funkciók közé tartozik az Array.findLast() és Array.findLastIndex() metódusok, amelyek segítségével megkereshetjük egy tömb utolsó elemét, ami megfelel egy adott feltételnek. Ezenkívül az Object.groupBy() metódus lehetővé teszi objektumok egy tömbjének csoportosítását bizonyos tulajdonságok alapján. Az Array.toSpliced(), Array.toSorted(), és Array.toReversed() metódusok segítségével módosíthatjuk a tömböket anélkül, hogy megváltoztatnánk az eredeti tömböt, így elősegítve a funkcionális programozási elveket. Ezek a metódusok új tömböt hoznak létre a kívánt módosításokkal, nem módosítják az eredeti tömböt.

A "Hashbang Grammar" is hivatalos támogatást kapott, ami elősegíti a JavaScript scriptek független futtathatóként való használatát Unix-alapú rendszereken. A Symbolok mostantól használhatók WeakMap kulcsokként, lehetővé téve több rugalmasságot a memória-optimalizálási előnyök kihasználásában.

Ezen újítások mellett a JavaScript folyamatosan továbbfejlődik, és az ECMAScript specifikáció nagy szerepet játszik ebben az evolúcióban. A specifikáció gyakorlatilag "élő dokumentumnak" tekinthető, amely interaktív módon fejlődik, ahogy a nyelvet a valóságban használják. A TypeScript mindezeket a változásokat integrálja, lehetővé téve a fejlesztők számára, hogy kihasználják a JavaScript legújabb funkcióit, miközben élvezik a TypeScript által nyújtott további előnyöket, mint

A JavaScript és a TypeScript kapcsolatát a folyamatos fejlődés és az új funkciók bevezetése jellemzi. A JavaScript, mint nyelv, dinamikusan fejlődik az ECMAScript specifikációk által, amelyek új funkciókat és fejlesztéseket vezetnek be évről évre.

Az ECMAScript 2023 (ES2023 vagy ES14) bevezetése olyan új funkciókat hozott, mint például az Array.findLast() és Array.findLastIndex() metódusok, amelyekkel megkereshetjük a tömbök utolsó olyan elemét, ami megfelel egy meghatározott feltételnek. Ezek a metódusok az elemek vagy indexek keresését teszik lehetővé a tömb végéről kezdve, nem szükséges az elemek vagy indexek keresésekor a tömb megfordítása​​.

A JavaScript 2023-as verziójában megjelent egyéb új funkciók közé tartozik az Object.groupBy() metódus, ami lehetővé teszi az objektumok tömbjének csoportosítását tulajdonságuk alapján, valamint az Array.toSpliced(), Array.toSorted(), és Array.toReversed() metódusok, amelyek új tömbökkel térnek vissza a forrástömb módosítása nélkül​​​​.

A TypeScript továbbra is kompatibilis a JavaScript legújabb verziójával, lehetővé téve a fejlesztők számára, hogy a legújabb JavaScript funkciókat használják TypeScript kódban. Az új JavaScript funkciók gyakran először érhetők el a TypeScriptben, mivel a TypeScript fejlesztői aktívan követik az ECMAScript specifikációk fejlődését és gyorsan integrálják az új funkciókat.

A TypeScript hozzáadott előnyei, mint a típusbiztonság és a kód szervezettsége, továbbra is előnyös választássá teszik a TypeScriptet nagyobb és bonyolultabb projektek fejlesztésére, míg a JavaScript széles körű használata és rugalmassága továbbra is ideális gyors prototípusok készítéséhez és implementáláshoz.

<!-- /LESSON 1 -->

# TypeScript konstruktorok: teljes útmutató

A konstruktorok kulcsfontosságú szerepet töltenek be az objektumorientált programozásban, mivel ezek azok a speciális metódusok, amelyek egy osztály példányosításakor automatikusan lefutnak. Ezek a metódusok felelősek az új objektum kezdeti állapotának beállításáért, azaz az adattagok (tulajdonságok és metódusok) inicializálásáért. A konstruktorok használatának szükségessége és működési mechanizmusa több okból is fontos:

## 1. Adatok inicializálása
A konstruktor lehetővé teszi, hogy az objektum létrehozásakor azonnal érvényes és koherens állapotba kerüljön. Ezáltal az objektum azonnal használható lesz, mivel a szükséges adatokkal már inicializálva lett. Például egy Book osztály esetében a konstruktor megkövetelheti a cím, szerző és kiadási év megadását, biztosítva, hogy minden Book objektum ezekkel az adatokkal rendelkezzen.

## 2. Kód újrafelhasználás és rendezettség
A konstruktorok segítségével központosított helyen kezelhetjük az objektumok inicializálásával kapcsolatos logikát, ami növeli a kód újrafelhasználhatóságát és olvashatóságát. Ezáltal elkerülhető a redundancia és a kód szétaprózódása.

## 3. Paraméterezhetőség
A konstruktorok paramétereket fogadhatnak, lehetővé téve az objektumok finomhangolását és testreszabását létrehozásukkor. Ez a rugalmasság kulcsfontosságú lehet, amikor különböző kezdeti állapotokkal rendelkező objektumokra van szükség.

## Konstruktorok működése
A konstruktorok automatikusan meghívódnak, amikor egy új objektumot hozunk létre a new kulcsszó segítségével. A TypeScript és más objektumorientált nyelvek esetében a konstruktor a constructor kulcsszót használja.

A konstruktorok nélkülözhetetlenek az objektumorientált programozásban, mivel lehetővé teszik az objektumok azonnali és koherens kezdeti állapotba helyezését, elősegítik a kód újrafelhasználását és olvashatóságát, valamint lehetőséget biztosítanak az objektumok paraméterezett létrehozására.

# Getters és setters
A TypeScriptben a getterek és setterek speciális függvények, amelyek lehetővé teszik, hogy egy osztály tulajdonságainak olvasása és írása kontrollált módon történjen. A getter egy tulajdonság értékének lekérdezésére szolgál, míg a setter lehetővé teszi egy tulajdonság értékének beállítását bizonyos feltételek mellett.

## Getter és setter a Book osztályban
Tegyük fel, hogy a Book osztályban szeretnénk biztosítani, hogy a könyv címe és kiadási éve csak bizonyos feltételek mellett változtatható. Ezt getterek és setterek segítségével érhetjük el.

<pre>
class Book {
    private _title: string;
    private _author: string;
    private _year: number;

    constructor(title: string, author: string, year: number) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        if (newTitle && newTitle.length > 0) {
            this._title = newTitle;
        } else {
            console.error("Invalid title");
        }
    }

    get year(): number {
        return this._year;
    }

    set year(newYear: number) {
        if (newYear > 0) {
            this._year = newYear;
        } else {
            console.error("Invalid year");
        }
    }
}

let myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

// Privát tulajdonsághoz való hozzáférés kísérlete
// console.log(myBook._title); // nem mukodik -> _title private
console.log(myBook.title); // mukodik -> getter
</pre>

**Magyarázat:**
* A title és year tulajdonságok priváttá váltak (_title, _year), ami azt jelenti, hogy közvetlenül nem érhetők el az osztályon kívülről.
* A get title() metódus lehetővé teszi a könyv címének lekérdezését anélkül, hogy közvetlenül hozzáférnénk a privát _title tulajdonsághoz.
* A set title(newTitle: string) metódus lehetővé teszi a cím módosítását, de csak akkor, ha a megadott új cím érvényes (nem üres).
* Hasonlóan, a get year() és set year(newYear: number) metódusok a kiadási év lekérdezésére és beállítására szolgálnak, bizonyos validálási logikával.

## Getter és setter a Library osztályban
A Library osztály esetében is hozzáadhatunk gettereket és settereket, például a könyvtár nevének biztonságos kezelésére.

<pre>
class Library {
    private _name: string;
    private books: Book[];

    constructor(name: string) {
        this._name = name;
        this.books = [];
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName && newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Invalid library name");
        }
    }

    // ...
}
</pre>
**Magyarázat:**
* A name tulajdonság priváttá válik (_name), így csak a getter és setter metódusokon keresztül érhető el és módosítható.
* A get name() metódus a könyvtár nevének lekérdezésére szolgál.
* A set name(newName: string) metódus a könyvtár nevének módosítására szolgál, de csak akkor, ha az új név érvényes.
* A TypeScriptben a getterek és setterek meghívása olyan, mintha hozzáférnénk egy nyilvános tulajdonsághoz. Ez azt jelenti, hogy nem kell külön függvényhívás szintaxist használnunk; helyette közvetlenül hivatkozunk a tulajdonság nevére. A private és protected módosítók használatakor a tulajdonságok vagy metódusok csak az adott osztályon belül, illetve az esetében a leszármazott osztályokban is elérhetők.

## private és protected tulajdonságok
Amikor egy tulajdonságot private vagy protected módosítóval látunk el, az azt jelenti, hogy ezek a tulajdonságok nem érhetők el közvetlenül az osztályon kívülről.

<pre>
class Book {
    private _title: string;
    // További kód ...

    get title(): string {
        return this._title;
    }

    // ...
}

let myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
</pre> 

A protected módosító hasonlóan működik, de lehetővé teszi a tulajdonság használatát az osztály leszármazottaiban is.

<pre>
class Book {
    protected year: number;
    // ...
}

class ExtendedBook extends Book {
    getYear() {
        return this.year; // lehetseges mert a year protected
    }
}
</pre>

A _name tulajdonság külső elérésének korlátozása, és csak a name getteren és setteren keresztül történő hozzáférés engedélyezése, az objektumorientált programozás (OOP) alapvető elvéhez, az egységbe záráshoz (encapsulation) kapcsolódik. Az encapsulation elve szerint egy osztály belső állapotát és implementációs részleteit el kell rejteni az osztály felhasználói elől, így csak a kívülről látható interfész (publikus metódusok és tulajdonságok) révén interaktálhatnak az osztállyal. Ez több előnnyel is jár:

## 1. Adatok integritásának megőrzése
A setter metódusok lehetővé teszik, hogy validációs logikát alkalmazzunk a beállítandó értékekre. Például, ha a _name tulajdonságot csak egy setteren keresztül lehet beállítani, akkor a setter ellenőrizheti, hogy a megadott név nem üres-e, vagy hogy megfelel-e bizonyos formai követelményeknek. Ez megakadályozza az osztály érvénytelen vagy inkonzisztens állapotba kerülését.

## 2. Rugalmasság és karbantarthatóság
A getterek és setterek használatával az osztály felülete nem változik, még akkor sem, ha a belső implementáció megváltozik. Például, ha később úgy döntünk, hogy a _name helyett egy teljes név (fullName) tárolására van szükségünk, a getter és setter módosítható anélkül, hogy a külső kódokat, amelyek ezt az osztályt használják, módosítani kellene. Ez a rugalmasság segít az osztályok fejlődésében anélkül, hogy a felhasználói kódjukat folyamatosan frissíteni kellene.

## 3. Biztonság
A privát és védett tulajdonságok, mint a _name, elrejtése segít megakadályozni, hogy a külső kódok véletlenül vagy szándékosan káros módon módosítsák az objektum állapotát. Ez a biztonsági réteg segít megőrizni az objektum integritását és az alkalmazás stabilitását.

## 4. Absztrakció
Az absztrakció elve azt jelenti, hogy az osztály csak azokat a részleteket teszi közzé, amelyek szükségesek a felhasználók számára, és elrejti a komplexitását. A getterek és setterek lehetővé teszik az osztályok számára, hogy egy egyszerű és érthető interfészt biztosítsanak, miközben elrejtik a belső állapotuk kezelésének bonyolultságát.

# Absztrakt osztályok
Az absztrakt osztályok olyan osztályok a TypeScriptben, amelyek nem példányosíthatók közvetlenül. Céljuk, hogy alapot biztosítsanak a leszármazott osztályok számára, amelyek implementálják a megadott absztrakt metódusokat. Az absztrakt osztályok kiváló eszközök a közös interfész vagy implementáció megadásához, miközben megakadályozzák az osztály közvetlen példányosítását. Az abstract metódusok olyan metódusok, amelyek nincsenek implementálva az absztrakt osztályban, helyettük a leszármazott osztályokban kell megvalósítani őket.

<pre>
abstract class Animal {
    abstract speak(): void;

    walk(): void {
        console.log("Walking");
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("Bark!");
    }
}

// const myAnimal = new Animal(); // hiba: nem példányosítható
const myDog = new Dog(); // Dog implementálja a speak metódust
myDog.speak(); // Output: Bark!
myDog.walk(); // Output: Walking
</pre>

## Absztrakt osztályok jelentősége
* Kényszerítik az öröklési szerződést: Az absztrakt osztályok meghatározhatnak olyan absztrakt metódusokat, amelyeket minden leszármazott osztálynak implementálnia kell. Ez biztosítja, hogy minden leszármazott osztály rendelkezik egy meghatározott interfésszel.
* Kód újrafelhasználás: Az absztrakt osztályok lehetővé teszik közös logika megosztását a leszármazott osztályok között a nem absztrakt metódusokon keresztül.
* Polimorfizmus: Az absztrakt osztályok használatával polimorf viselkedést valósíthatunk meg, ahol egy interfész alatt különböző implementációkat rejthetünk.

## Absztrakt metódusok

<pre>
abstract class Vehicle {
    constructor(protected make: string, protected model: string) {}

    // Absztrakt metódus
    abstract displayDetails(): void;
}

class Car extends Vehicle {
    constructor(make: string, model: string, private year: number) {
        super(make, model);
    }

    displayDetails(): void {
        console.log(`Car: ${this.make} ${this.model} - ${this.year}`);
    }
}

// const myVehicle = new Vehicle("Toyota", "Corolla"); // hiba

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayDetails(); // Output: Car: Toyota Corolla - 2020
</pre>

Ebben a példában a Vehicle egy absztrakt osztály, amely egy absztrakt displayDetails metódust definiál. A Car osztály, amely a Vehicle osztályból származik, konkrétan implementálja ezt a metódust, és ezzel megvalósítja a Vehicle által előírt szerződést.

## Konstruktor túlterhelés (overloading)
A konstruktor túlterhelés lehetővé teszi egy osztály számára, hogy több konstruktort definiáljon különböző paraméterszignatúrákkal. Ezáltal az osztály példányosítható különböző kezdeti adatokkal. A TypeScriptben a konstruktor túlterhelés közvetlenül nem támogatott, mint például a Java vagy C# nyelvekben. Ehelyett opcionális paraméterek vagy alapértelmezett értékek használatával érhetjük el a hasonló funkcionalitást.

<pre>
class Employee {
    constructor(private name: string = "Névtelen", private id: number = 0, private email: string = "Nincs email") {}

    // További metódusok és tulajdonságok
}
</pre>

Ebben a példában egyetlen konstruktor van, amely opcionális paramétereket fogad. Ez lehetővé teszi az Employee osztály példányosítását különböző módokon:

<pre>
let employee1 = new Employee();
let employee2 = new Employee("John Doe");
let employee3 = new Employee("Jane Doe", 1, "jane.doe@example.com");
</pre>

<pre>
class Employee1 {
    constructor(private name: string = "Névtelen", private id: number = 0, private email: string = "Nincs email") {}

    // További metódusok és tulajdonságok
}

let employee1 = new Employee1();  // Működik, mert mindhárom paraméternek van alapértelmezett értéke
let employee2 = new Employee1("John Doe");  // Működik, mert a második és harmadik paraméter alapértelmezett
let employee3 = new Employee1("Jane Doe", 1, "jane.doe@example.com");  // Működik, minden paramétert megadtál
</pre>

## Konstruktor felülírás (overriding)
Konstruktor felülírás akkor fordul elő, amikor egy leszármazott osztály saját konstruktort definiál, amely eltér az ősosztály konstruktorától. TypeScriptben minden leszármazott osztálynak explicit módon meg kell hívnia az ősosztály konstruktorát a super kulcsszó használatával, ha az ősosztály rendelkezik konstruktorral.

<pre>
class Animal {
    constructor(public name: string) {}
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name); // Hívja az Animal osztály konstruktorát
    }
}
</pre>

Ebben a példában a Dog osztály felülírja az Animal osztály konstruktorát, egy új paraméter (breed) hozzáadásával, miközben továbbra is megköveteli a name paramétert az ősosztály konstruktorából. A super(name) hívás biztosítja, hogy az Animal konstruktor is meghívásra kerüljön az inicializációs folyamat során.

A Dog osztály példányosítása során közvetlenül meg kell adnod a konstruktorban szükséges paramétereket, amelyek ebben az esetben a kutya neve (name) és fajtája (breed). Mivel a Dog osztály az Animal osztályból származik, és a Dog konstruktora hívja az Animal konstruktorát a super(name) hívással, biztosítanod kell mindkét paramétert a Dog példány létrehozásakor. Így a kutya példányosítása a következőképpen történik:

<pre>
let myDog = new Dog("Rex", "Golden Retriever");
</pre>

Ebben a példában egy Dog típusú objektumot hozol létre, amelynek neve "Rex" és fajtája "Golden Retriever". A super(name) hívás biztosítja, hogy az Animal osztály konstruktora is megkapja a szükséges name paramétert, így az Animal osztály name tulajdonsága beállításra kerül "Rex"-re, míg a Dog osztály saját breed tulajdonsága beállításra kerül "Golden Retriever"-re.

Ez a megközelítés lehetővé teszi, hogy a leszármazott osztályok kiegészítsék vagy módosítsák az ősosztályuk konstrukciós logikáját, egyúttal biztosítva az ősosztály által szükséges adatokat is.

A **super** kulcsszó használata a leszármazott osztályok konstruktorában elengedhetetlen az objektumorientált programozásban, különösen a TypeScriptben és más nyelvekben, mint a Java vagy C#, amikor egy osztály egy másik osztályból származik (öröklődés). Ennek több oka van:

* **1. Az ősosztály konstruktorának meghívása:** Amikor egy osztály egy másikból származik, az alaposztály (ősosztály) konstruktora nem hívódik meg automatikusan. A super kulcsszó használatával explicit módon meghívjuk az ősosztály konstruktorát, ami lehetővé teszi az ősosztály állapotának megfelelő inicializálását. Ez biztosítja, hogy az örökölt tulajdonságok megfelelően inicializálva legyenek az ősosztály logikája szerint.

* **2. A származtatott osztály konstruktorának követelményei:** A TypeScript (és más statikusan típusos nyelvek) szigorú szabályokat alkalmaznak az öröklődésre, beleértve azt a követelményt, hogy ha egy leszármazott osztály rendelkezik konstruktorral, akkor annak meg kell hívnia az ősosztály konstruktorát a super kulcsszó segítségével, ha az ősosztály rendelkezik konstruktorral. Ez biztosítja az osztályhierarchia integritását és a példányok koherens állapotát.

* **3. Paraméterek átadása az ősosztály konstruktorának:** A super hívás lehetővé teszi, hogy paramétereket adjunk át az ősosztály konstruktorának, ami különösen fontos, ha az ősosztály konstruktora kötelező paramétereket vár. Ez segít abban, hogy az ősosztály tulajdonságai megfelelően inicializálódjanak, és az öröklött metódusok azonnal használhatók legyenek a leszármazott osztály példányain.

**Konstruktor túlterhelés (overloading):** A TypeScript nem támogatja közvetlenül a konstruktor túlterhelést. Azonban a hasonló funkcionalitást opcionális paraméterek és alapértelmezett értékek használatával érhetjük el, ami rugalmasságot biztosít az osztály példányosításakor.

**Konstruktor felülírás (overriding):** A konstruktor felülírása lehetővé teszi egy leszármazott osztály számára, hogy saját konstruktort definiáljon, amely eltér az ősosztályétól. Minden leszármazott osztálynak, amely saját konstruktort definiál, meg kell hívnia az ősosztály konstruktorát a super kulcsszó segítségével.

# Arrow Functions a TypeScriptben
Az arrow functions az ECMAScript 6 (ES6) szabvány részeként jelentek meg, és azóta a modern JavaScript és TypeScript fejlesztés elengedhetetlen részévé váltak. Az arrow functions lehetővé teszik a funkcionális kifejezések rövidebb és tömörebb írását, valamint kezelik a this kulcsszó kontextusát különböző módon, mint a hagyományos függvények.

## Miért használjuk?
**Tömörebb szintaxis:** Az arrow functions rövidebb és olvashatóbb kódot tesznek lehetővé, különösen az inline függvények és callbackek esetén.

**Nem kötik újra a this kulcsszavat:** Az arrow functions lexikálisan kötik a this értéket, ami azt jelenti, hogy a this a környezetükben lévő this-szel azonos. Ez megkönnyíti a kontextus kezelését olyan esetekben, mint eseménykezelők vagy időzítők használatakor.

## Összevetés a hagyományos függvényekkel

| szempont | hagyományos | arrow |
|-------------------|-----------------------------------------------------------------|-------------------------------------------------------|
| szintaxis | function functionName(params) { // Törzs } | const functionName = (params) => { // Törzs } |
| `this` viselkedése| Minden függvényhívás újra köti a `this` értéket. | A `this` érték lexikálisan kötődik a környezethez. |
| konstruktor | Használhatóak konstruktorok létrehozására. | Nem használhatóak konstruktorok létrehozására. |
| prototype | Van prototype tulajdonsága, lehetőséget adva öröklődésre. | Nincs prototype tulajdonsága. |
| argumentumok | Hozzáférhetnek az `arguments` objektumhoz. | Nem férhetnek hozzá az `arguments` objektumhoz. |

## Mikor használunk arrow function-t?
**Callback függvények:** Amikor egy rövid callback függvényt kell átadni argumentumként.

**Inline függvények:** Egyszerű, egy soros műveletekhez, mint például egy tömb elemeinek átalakítása.

**Eseménykezelők:** Amikor az eseménykezelők this kontextusát az aktuális osztály vagy komponens példányához szeretnénk kötni.

## Argumentumok

<pre>
// hagyomanyos
function showArguments() {
    return Array.from(arguments).join(", ");
}
console.log(showArguments(1, 2, 3, 4));

// arrow
const showArguments = (...args) => args.join(", ");
console.log(showArguments(1, 2, 3, 4));
</pre>

# Interface-ek a TypeScript-ben
Az interface a TypeScript egyik kulcsfontosságú jellemzője, amely lehetővé teszi a kód struktúrájának szervezését és típusbiztonságának növelését. Egy interface olyan szerkezetet ír le, amely meghatározza, hogy egy objektumnak milyen tulajdonságai és metódusai lehetnek.

<pre>
interface Szemely {
    nev: string;
    kor: number;
    nem?: string; // opcionális tulajdonság
}
</pre>

Az interface definíciójában megadjuk a tulajdonságokat és azok típusait.
Az opcionális tulajdonságokat a ? jelöli, ami azt jelenti, hogy ezek a tulajdonságok nem kötelezőek.

## Objektumok definiálása Interface-szel

Az interface-ek segítségével típusokat adhatunk meg objektumoknak.

<pre>
let diak: Szemely = {
    nev: "Anna",
    kor: 20
};
</pre>

Az interface-eket paraméter típusokként is használhatjuk a függvényekben.

<pre>
function udvozles(szemely: Szemely): string {
    return `Szia, ${szemely.nev}!`;
}
</pre>

Az interface-ek kiterjeszthetőek, ami lehetővé teszi az újrahasznosíthatóságot és a kód struktúrájának további finomítását.

<pre>
interface Diak extends Szemely {
    tanulmanyiSzam: string;
}
</pre>

A TypeScriptben az interface és az object típus közötti alapvető különbség a rugalmasságban és a struktúrában rejlik. Az interface egy szerkezeti szerződés vagy sablon, amely meghatározza az objektumok alakját, míg az object típus egy konkrét objektumra utal.

**Interface:**
* Az interface egy olyan struktúra, amely meghatározza, hogy az objektumoknak milyen tulajdonságaik és metódusaik lehetnek.
* Az interface-ek lehetővé teszik az öröklődést és a kiterjesztést.
* Az interface-ek nem tartalmaznak adatokat vagy implementációt, csak a szerkezetet definiálják.

**Object:**
* Az object egy konkrét entitás, amely tényleges adatokat és implementációt tartalmaz.
* Az object típusú változók tetszőleges objektumot tartalmazhatnak.

## Interface vs object
<pre>
// Interface Definíció
interface Car {
    brand: string;
    year: number;
    start(): void;
}

// Objektum létrehozása az interface segítségével
let car1: Car = {
    brand: "Toyota",
    year: 2020,
    start() {
        console.log(`${this.brand} started, year: ${this.year}.`);
    }
};

car1.start(); // "Toyota started, year: 2020."

// Object típus használata
let car2: object = {
    brand: "Honda",
    year: 2018,
    start() {
        console.log(`${this.brand} started, year: ${this.year}.`);
    }
};

// A 'brand' és 'year' tulajdonságok nem érhetők el a 'car2' objektumban,
// mivel az 'object' típus nem definiál szerkezetet.
// car2.brand; // Fordítási hiba

// A 'car2' objektum típusát explicit módon kell meghatározni a hozzáféréshez.
let concreteCar = car2 as { brand: string; year: number; start: () => void };
concreteCar.start(); // "Honda started, year: 2018."
</pre>

Ebben a példában az interface egy szerkezetet határoz meg (Auto), amelyet az auto1 objektum követ. Az object típusú auto2 változó tetszőleges objektumot tartalmazhat, de annak tulajdonságaihoz explicit típuskonverziót kell használni. Az interface biztosítja a típusbiztonságot és előre meghatározott szerkezetet, míg az object típus rugalmasabb, de kevésbé szigorúan definiált.

A TypeScript (TS) interfészek alapvető eszközei a típusok szervezésére és definiálására a TypeScript-ben. Ezek lehetővé teszik, hogy előre meghatározott szerződéseket hozz létre, amelyeket az osztályok és objektumok implementálhatnak vagy követhetnek. Az interfészek segítségével biztosítható, hogy bizonyos struktúrák megtartják a kívánt formát és tartalmaznak minden szükséges tulajdonságot vagy metódust.

<pre>
interface Mozgathato {
    sebesseg: number;
    mozgat(sebesseg: number): void;
}

interface Rajzolhato {
    rajzol(): void;
}

class Auto implements Mozgathato, Rajzolhato {
    sebesseg: number;

    constructor(sebesseg: number) {
        this.sebesseg = sebesseg;
    }

    mozgat(sebesseg: number) {
        this.sebesseg = sebesseg;
        console.log(`Az autó sebessége: ${sebesseg} km/h.`);
    }

    rajzol() {
        console.log("rajzolás");
    }
}
</pre>
