# TYPESCRIPT

<pre>
npm install -g typescript
npm install -g typescript@latest
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

# TS konfiguráció
A TypeScript konfigurációs fájl, vagyis a tsconfig.json, alapvető eleme a TypeScript projektstruktúrának. Ez a fájl irányítja a TypeScript fordító (tsc) viselkedését, lehetővé téve a fejlesztők számára, hogy finomhangolják, hogyan generálódjon a JavaScript kód a TypeScript forrásfájlokból. A tsconfig.json fájl nélkül a fordító alapértelmezett beállításokkal működik, amelyek nem feltétlenül felelnek meg egy adott projekt igényeinek.

**Miért van szükség tsconfig.json fájlra?**
* **Projekt alapú konfiguráció:** A tsconfig.json lehetővé teszi, hogy projekt-specifikus beállításokat definiáljunk, mint például a kimeneti könyvtár, a célkörnyezet (pl. ES5, ES6), és hogy mely fájlok tartoznak a projektbe. Ez biztosítja, hogy a különböző környezetekben dolgozó fejlesztők számára konzisztens legyen a fordítás eredménye.
* **Kódminőség és kompatibilitás:** Finomhangolhatjuk a szigorúsági szintet, például a típusellenőrzéseket és az explicit "any" használatát. Ez javítja a kódminőséget és segít elkerülni a futásidejű hibákat.
* **Integráció és eszközök:** A fejlesztői eszközök, mint például az integrált fejlesztői környezetek (IDE-k) és a kódszerkesztők, használhatják a tsconfig.json beállításait a projekt jobb támogatása érdekében, például a kódkiegészítéshez, refaktoráláshoz és hibakereséshez.
* **Moduláris fejlesztés támogatása:** A modulrendszer beállításai (pl. CommonJS, ES modulok) szabályozhatók, amelyek fontosak a különböző futtatókörnyezetekben (pl. Node.js, webböngészők) való működéshez.

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

## Compiler options
* **target:** Meghatározza, hogy milyen ECMAScript verzióra forduljon a TypeScript kód. Például ES5, ES6/ES2015, ES2020, stb.
* **module:** A modulrendszer típusát határozza meg, amit a projekt használ. Például CommonJS, AMD, ES6, None, stb.
* **lib** Megadja, hogy milyen típusdefiníciós fájlokat kell beleértelmezni a globális scope-ba. Például ["dom", "es6", "dom.iterable", "scripthost"].
* **allowJs:** Engedélyezi, hogy a TypeScript fordító JS fájlokat is feldolgozzon.
* **checkJs:** Engedélyezi a JavaScript fájlok ellenőrzését a TypeScript fordítóval.
* **jsx:** Meghatározza, hogy a JSX szintaxis hogyan legyen kezelve. Opciók között van a preserve, react-native, vagy react.
* **declaration:** Generál .d.ts deklarációs fájlokat a TypeScript fájlokból, ami segít a kód újrafelhasználhatóságában.
* **sourceMap:** Generál forrástérképet (*.map fájlok), amely segít a hibakeresésben, mivel a JavaScript kód visszavezethető a TypeScript forráskódjához.
* **outDir:** Az a könyvtár, ahova a generált JS fájlok kerülnek.
* **strict:** Engedélyezi az összes szigorú típusellenőrzési opciót.
* **noImplicitAny:** Megakadályozza, hogy implicit any típusok jelenjenek meg a kódban.
* **strictNullChecks:** Szigorú null-ellenőrzést végez, tehát a null és undefined értékek nem rendelhetőek olyan típusokhoz, amelyek nem kezelik explicit módon ezt a lehetőséget.

## Project references
* **files:** Konkrét fájlok listáját tartalmazza, amelyeket a fordítónak be kell olvasnia.
* **include:** Mintaillesztést használva meghatározza azokat a fájlokat, amelyeket be kell olvasni.
* **exclude:** Mintaillesztést használva kizár bizonyos fájlokat a fordításból.
* **extends:** Lehetővé teszi, hogy egy másik tsconfig.json fájlból örököljünk konfigurációs beállításokat.
* **references:** Projekt hivatkozásokat határoz meg, lehetővé téve a projektek közötti függőségek kezelését.

## Advanced options
* **noEmit:** Megakadályozza a kimeneti fájlok generálását.
* **noEmitOnError:** Nem generál kimeneti fájlokat, ha hiba van a kódban.
* **skipLibCheck:** Kihagyja a .d.ts fájlok típusellenőrzését, amely gyorsíthatja a fordítást nagy projektek esetén.
* **forceConsistentCasingInFileNames:** Biztosítja, hogy az importált fájlok neveiben az esetek konzisztensek legyenek, elkerülve ezzel a potenciális problémákat különböző fájlrendszereken.

----
A **target** beállítás határozza meg, hogy melyik ECMAScript verzióra fordítson a TypeScript. Például, ha ES5-re állítjuk, akkor a modern nyelvi jellemzők, mint például a nyílfüggvények, le lesznek fordítva az ES5 kompatibilis szintaxisra.

A **module** beállítás szabályozza, hogy milyen modulrendszert használjon a TypeScript a kimeneti kódban. Ha például CommonJS-re állítjuk, a modulokat a Node.js-ben használt require és exports szintaxis szerint generálja.

A **strict** beállítás szigorú típusellenőrzést aktivál, ami segít a fejlesztőknek a hibák korai felfedezésében és a robosztusabb kód írásában.

A **noImplicitAny** beállítás megköveteli, hogy minden változónak és paraméternek explicit típusa legyen, kivéve, ha explicit módon any típusúként van megjelölve.
<pre>
{
    "compilerOptions": {
        "target": "es6",            // ECMAScript célcélverziója a kimeneti JavaScripthez
        "module": "commonjs",       // modul kódgenerálási mód:'
                                    // none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020'
        lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],                          // a fordító által használt deklarációs fájlok halmaza
        "outDir": "./dist",         // A kimeneti fájlok célkönyvtára
        "rootDir": "./src",         // A forrásfájlok gyökérkönyvtára
        "strict": true,             // Szigorú típusellenőrzés bekapcsolása
        "esModuleInterop": true,    // default importálási módszer a nem-ECMAScript modulokhoz
        "forceConsistentCasingInFileNames": true,   // case sensitive kikényszerítése
                                                    // az importált fájlneveknél
        "strictNullChecks": true,       // Szigorú null ellenőrzés
        "strictFunctionTypes": true,    //Funkció hívási szignatúrák szigorú ellenőrzése.
        "strictPropertyInitialization": true,       // Az osztály tulajdonságok inicializálásának
                                                    // szigorú ellenőrzése
        "strictBindCallApply": true,    // 'bind', 'call', és 'apply' metódusok
                                        // szigorú ellenőrzése
        "noImplicitAny": true,      // Implicit 'any' típus használatának tiltása
        "noImplicitThis": true,     // Implicit 'this' kifejezés használatának tiltása
        "alwaysStrict": true,       // Szigorú módú JavaScript generálása minden fájlban
        "noUnusedLocals": true,     // Figyelmeztetés vagy hiba, ha a lokális változókat
                                    // nem használják
        "noUnusedParameters": true, // Figyelmeztetés vagy hiba, ha a funkcióparamétereket
                                    // nem használják
        "noImplicitReturns": true,  // Figyelmeztetés vagy hiba, ha nem minden kódelágazat
                                    // tér vissza értékkel
        "noFallthroughCasesInSwitch": true,         // Figyelmeztetés vagy hiba ha a 'switch'
                                                    // esetek közötti átmenetek nem explicit
        "moduleResolution": "node", // A modulok feloldásának stratégiája
        "baseUrl": "./",            // A nem relatív modulimportok kiindulási pontja
        "paths": {                  // Aliasok beállítása az import útvonalakhoz
            "@components/*": ["src/components/*"],
            "@models/*": ["src/models/*"]
        },
        "resolveJsonModule": true,  // JSON modulok importálásának engedélyezése
        "sourceMap": true,          // Forrástérképek generálása
        "declaration": true,        // Deklarációs fájlok (.d.ts) generálása
        "experimentalDecorators": true,     // Kísérleti dekorátorok használatának engedélyezése
        "emitDecoratorMetadata": true       // Dekorátorok metaadatinak generálása
    },
    "include": [
        "src/**/*"                  // A fordítandó forrásfájlok
    ],
    "exclude": [
        "node_modules",             // Kizárjuk a node_modules könyvtárat a fordításból
        "**/*.test.ts"              // Tesztfájlok kizárása
    ]
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

# Advanced Types TypeScript-ben
Az "advanced types" (haladó típusok) a TypeScript egyik fontos témaköre, amely lehetővé teszi a fejlesztők számára, hogy rugalmasabb és erőteljesebb típusokat használjanak a bonyolultabb logikák és adatszerkezetek kezelésére.

**Union types (unió típusok)**
Egy változó vagy paraméter több, előre meghatározott típus egyikét fogadhatja el.

**Intersection types (metszet típusok)**
Kombinálja két vagy több típust egy új típusba, amely minden kombinált típus összes tulajdonságát tartalmazza.

**Type guards (típusőrök)**
Lehetővé teszi, hogy a kód futás közben ellenőrizze a változók típusát.

**Nullable types (nullázható típusok)**
Lehetővé teszi a null és undefined értékek használatát típusokban.
Strict Null Checking (strictNullChecks) engedélyezésével az undefined és null csak az any, illetve saját típusukhoz rendelhetők.

**Type aliases (típus aliasok)**
Lehetővé teszi, hogy egy típusnak vagy típus kombinációnak nevet adjunk.

**Mapped types (leképzett típusok)**
Dinamikusan hoz létre típusokat más típusok kulcsai alapján.

**Conditional types (feltételes típusok)**
Típusokat hoz létre feltételes kifejezések alapján.

<pre>
// Union Types (Unió Típusok)
let mixedType: string | number;
mixedType = "Hello"; // Elfogadja a string típust
mixedType = 42;      // Elfogadja a number típust
// mixedType = true; // Fordítási hiba: 'boolean' típus nem rendelhető 'string | number' típushoz

// Intersection Types (Metszet Típusok)
interface Bird {
    fly(): void;
}

interface Fish {
    swim(): void;
}

type FlyingFish = Bird & Fish;

const flyingFish: FlyingFish = {
    fly: () => console.log("Repül"),
    swim: () => console.log("Úszik")
};

// Type Guards (Típus Őrök)
function isString(value: string | number): value is string {
    return typeof value === "string";
}

if (isString(mixedType)) {
    console.log("Ez egy string.");
} else {
    console.log("Ez egy szám.");
}

// Nullable Types (Nullázható Típusok)
let nullableString: string | null = null;
nullableString = "Ez már nem null"; // Elfogadja a string típust

// Type Aliases (Típus Aliasok)
type StringOrNumber = string | number;
let anotherMixedType: StringOrNumber;

// Mapped Types (Leképzett Típusok)
type Readonly<T> = { readonly [P in keyof T]: T[P]; }
interface MyObject {
    prop1: string;
    prop2: number;
}
const readonlyObject: Readonly<MyObject> = {
    prop1: "Nem változtatható",
    prop2: 42
};
// readonlyObject.prop1 = "Próbálkozás"; // Fordítási hiba: 'prop1' csak olvasható

// Conditional Types (Feltételes Típusok)
type Check<T> = T extends string ? "String" : "Not a string";
type TypeCheckString = Check<string>; // "String"
type TypeCheckNumber = Check<number>; // "Not a string"
</pre>

## Union types

<pre>
// string vagy number lehet
let mixedType: string | number;
mixedType = "Ez egy string";
mixedType = 42;
</pre>

## Intersection types
<pre>
// Metszet típus: kombinálja a Bird és Fish típusokat
interface Bird {
    fly(): void;
}
interface Fish {
    swim(): void;
}
type FlyingFish = Bird & Fish;

let myFlyingFish: FlyingFish = {
    fly: () => console.log("Repül"),
    swim: () => console.log("Úszik")
};
</pre>

## Type guards
<pre>
// Típus őr: futásidőben ellenőrzi a változó típusát
function doSomething(x: string | number) {
    if (typeof x === "string") {
        console.log(x.substr(1)); // Biztonságos, mivel x string típusú
    } else {
        console.log(x.toFixed(2)); // Biztonságos, mivel x number típusú
    }
}
</pre>

## Nullable types
<pre>
// Nullázható típusok: null vagy undefined értékek használata
let nullableString: string | null = null;
nullableString = "Valami"; // Újraértékelhető egy string típusra
// A strictNullChecks bekapcsolásával a null és undefined típusok kezelése szigorúbbá válik
</pre>

## Type aliases
<pre>
// Típus alias: nevet ad egy típusnak vagy típus kombinációnak
type StringOrNumber = string | number;
let myVariable: StringOrNumber;
myVariable = "Ez egy string";
myVariable = 100;
</pre>

## Mapped types
<pre>
// Leképzett típus: dinamikusan hoz létre típusokat más típusok kulcsai alapján
type Readonly<T> = { readonly [P in keyof T]: T[P] };
interface MyType {
    id: number;
    name: string;
}
const myObject: Readonly<MyType> = { id: 1, name: "John" };
// myObject.name = "Steve"; // Ez hibát okozna, mert a tulajdonság readonly
</pre>

## Conditional types
<pre>
// Feltételes típus: típusok létrehozása feltételes kifejezések alapján
type Check<T> = T extends string ? 'String' : 'Not a string';
type IsString = Check<string>; // 'String'
type IsNotString = Check<number>; // 'Not a string'
</pre>

## Példa

Egy szoftverrendszert fogunk modellezni, amely egy iskola tanulóinak nyilvántartását kezeli. Az osztályba belefoglaljuk a Union Types, Intersection Types, Type Guards, Nullable Types, Type Aliases, Mapped Types, és Conditional Types használatát. Az osztály tartalmazni fog egy metódust a diákok hozzáadására, egy másikat a diák adatainak frissítésére, valamint egy lekérdezést, hogy ellenőrizze egy adott diák bizonyos feltételeknek való megfelelését.

<pre>
type StringOrNull = string | null;

interface BasicInfo {
    name: StringOrNull;
    age: number | null;
}

interface ContactInfo {
    email: StringOrNull;
    phone: StringOrNull;
}

// Metszet típus a diák alapinformációinak és kapcsolattartási adatainak kombinálásához
type StudentInfo = BasicInfo & ContactInfo;

// Leképzett típus a diák információinak readonly változatához
type ReadonlyStudentInfo = { readonly [P in keyof StudentInfo]: StudentInfo[P] };

// Feltételes típus a diák állapotának ellenőrzésére
type IsMinor = StudentInfo['age'] extends number ? (StudentInfo['age'] < 18 ? true : false) : null;

class School {
    private students: ReadonlyStudentInfo[] = [];

    addStudent(student: StudentInfo): void {
        const newStudent: ReadonlyStudentInfo = {
            name: student.name,
            age: student.age,
            email: student.email,
            phone: student.phone
        };
        this.students.push(newStudent);
    }

    updateStudentEmail(studentName: string, newEmail: string): void {
        this.students = this.students.map(student => {
            if (student.name === studentName) {
                return { ...student, email: newEmail };
            }
        return student;
    });
}

isMinor(studentName: StringOrNull): IsMinor {
    const student = this.students.find(s => s.name === studentName);
    if (student && typeof student.age === 'number') {
        return student.age < 18;
    }
    return null;
}

// Típus őr a Nullable Types ellenőrzésére
getStudentInfo(studentName: string): StringOrNull {
    const student = this.students.find(s => s.name === studentName);
    if (!student) {
        return null;
    }
    return `Name: ${student.name}, Age: ${student.age}, Email: ${student.email}, Phone: ${student.phone}`;
}

const mySchool = new School();
mySchool.addStudent({ name: "Jane Doe", age: 17, email: "jane@example.com", phone: "123-456-7890" });
console.log(mySchool.isMinor("Jane Doe")); // true
mySchool.updateStudentEmail("Jane Doe", "newjane@example.com");
console.log(mySchool.getStudentInfo("Jane Doe"));
</pre>

A School osztály képes kezelni a diákok hozzáadását, az email címek frissítését, valamint ellenőrizni, hogy egy diák kiskorú-e. A ReadonlyStudentInfo típus használatával biztosítjuk, hogy a diák információi ne változtathatóak meg közvetlenül, így fenntartva az adatok integritását. A isMinor metódus és az updateStudentEmail metódus demonstrálja a TypeScript haladó típusainak és típus őrök alkalmazását a gyakorlatban.

A TypeScript nyelvben a type aliases (típusaliasok) és a union types (uniós típusok) két különböző, de egymást kiegészítő módszert kínálnak a típusok definiálására és kezelésére. Mindkettő növeli a kód rugalmasságát és olvashatóságát, de különböző célokra és körülmények között használatosak. Az alábbiakban részletezzük a két fogalom közötti fő különbségeket:

**Típus aliasok és uniós típusok közötti különbségek:**

* **Cél és használat:** A típusaliasok általános célú típusdefiníciók létrehozására szolgálnak, míg az uniós típusok specifikus esetek kezelésére, ahol egy változó több, előre definiált típus egyikét is felveheti.
* **Kifejezőképesség:** A típusaliasokkal összetett típusstruktúrákat és típusösszetételeket hozhatunk létre, beleértve az uniós típusokat is. Az uniós típusok azonban kifejezetten a típusok közötti választásra szolgálnak.
* **Kiterjeszthetőség:** Míg a típusaliasok önmagukban nem kiterjeszthetők (azaz nem lehet őket más típusaliasokkal vagy interfészekkel "bővíteni"), az uniós típusok segítségével különféle, már létező típusok kombinációját hozhatjuk létre, növelve ezzel a kód újrafelhasználását.

**Közös és kiegészítő használat**

Gyakran előfordul, hogy a **type aliases** és a **union types** együtt használatosak, hogy kihasználják mindkét konstrukció előnyeit. Például egy típusaliasban definiálhatunk egy uniós típust, hogy egyértelműsítsük a kódunkat és növeljük annak olvashatóságát:

<pre>
type SzamVagySzoveg = number | string;
type Eredmeny = "siker" | "hiba";

type Valasz = {
    status: Eredmeny;
    data: SzamVagySzoveg;
};
</pre>

## Mapped types példa
A Mapped types a TypeScript egyik fejlett típusossági funkciója, amely lehetővé teszi a meglévő típusok szerkezetének dinamikus transzformálását.

<pre>
// mapped types (leképzett típusok)
type Readonly<T> = { readonly [P in keyof T]: T[P]; }
</pre>

**Definíció:** Readonly<T> egy generikus leképzett típus, ahol T bármilyen objektum típus lehet.

**Generikus paraméter:** T itt egy generikus paraméter, amelyet bármilyen objektum típus helyettesíthet. Ez a megközelítés biztosítja a Readonly típus rugalmasságát.

**Leképzés:** A { readonly [P in keyof T]: T[P]; } rész a leképzés magja. Itt történik meg a meglévő típus transzformálása.

**keyof T:** Ez a kifejezés T típus összes kulcsát (property nevét) generálja egy unió típusként. Például, ha T { a: number; b: string; }, akkor keyof T a | b lesz.

**[P in keyof T]:** Ez egy iteráció a T típus minden kulcsán. Itt P minden egyes iterációban a keyof T egyik elemét veszi fel.

**readonly:** Ez a kulcsszó minden tulajdonságot csak olvashatóvá tesz a leképzett típusban.

**T[P]:** Ez a rész visszaadja a P kulcs által jelölt tulajdonság típusát a T típusban.

<pre>
interface MyObject {
    prop1: string;
    prop2: number;
}

const myObject: Readonly<MyObject> = {
    prop1: "Hello",
    prop2: 123
};
</pre>

A MyObject egy interface, amelynek két tulajdonsága van: prop1 és prop2. Amikor Readonly<MyObject> típust használjuk, a myObject konstans minden tulajdonsága csak olvashatóvá válik, tehát nem módosíthatók futásidőben.

# Generikusok (generics) a TypeScriptben
A generikusok (generics) a TypeScript egyik alapvető részét képezik, amelyek lehetővé teszik a rugalmas, mégis típusbiztos kód létrehozását. A generikusokat használva olyan komponenseket, funkciókat és típusokat hozhatunk létre, amelyek különböző típusokkal működhetnek, de megőrzik a típusbiztonság előnyeit.

**Miért hasznosak?**
* **Rugalmasabb kód:** Lehetővé teszik, hogy ugyanazt a funkciót, osztályt vagy interfészt több különböző típussal használhassuk, anélkül, hogy minden egyes típushoz külön implementációt kellene írnunk.
* **Típusbiztonság:** A generikusok biztosítják, hogy a kódunk típusbiztonságát megőrizzük, még akkor is, ha a konkrét típusok változnak.
* **Kód újrafelhasználhatóság:** A generikusok segítségével létrehozott komponensek és funkciók könnyen újrafelhasználhatók és bővíthetők különböző típusokkal.

## Alapfogalmak
* **Generikus típusok:** A generikus típusok olyan típusok, amelyek egy vagy több típusparamétert tartalmaznak. Például: Array<T>, ahol T egy generikus típusparaméter.
* **Generikus paraméterek:** Ezek a paraméterek, amelyeket a generikus típusok és funkciók definíciójában használunk, hogy később konkrét típusokkal helyettesíthetők legyenek.

## Generikusok használata
* **Generikus funkciók:** Olyan funkciók, amelyek típusparamétereket fogadnak, így többféle típussal is működhetnek. Például egy generikus identity funkció, amely bármely típusú értéket visszaad (lásd lent).
* **Generikus osztályok és interfészek:** Hasonlóan a generikus funkciókhoz, az osztályok és interfészek is definiálhatók generikus paraméterekkel. Például egy generikus Container<T> osztály, ami egy T típusú elemet tárol.
* **Generikus korlátozások:** Lehetséges meghatározni korlátokat a generikus típusparaméterekre, hogy csak bizonyos típusú értékekkel használhatók legyenek. Például: a lenti osztály ahol a T típusnak rendelkeznie kell length tulajdonsággal.

<pre>
// Generikus funkciók
function identity<T>(arg: T): T
{
    return arg;
}

// Generikus korlátozások
function loggingIdentity<T extends Lengthwise>(arg: T): T
{
    console.log(arg.length);
    return arg;
}
</pre>

## 1. Generikus funkciók

<pre>
// visszaadja a bemeneti értéket
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");  // output1 típusa: string
let output2 = identity<number>(42);         // output2 típusa: number
</pre>

## 2. Generikus interfészek
<pre>
// generikus interfész, ami egy generikus típusú értéket tartalmaz.
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
</pre>

## 3. Generikus Osztályok
<pre>
// belső állapotot (value) tárol generikus típussal
class GenericNumber<T> {
    value: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.value = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let myGenericString = new GenericNumber<string>();
myGenericString.value = "";
myGenericString.add = function(x, y) { return x + y; };
</pre>

## 4. Generikus Korlátozások
<pre>
// generikus funkció amely korlátozza a generikus típust
// egy adott interface-szel rendelkező típusra
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Tudjuk, hogy van 'length' tulajdonsága
    return arg;
}

loggingIdentity({length: 10, value: 3});
</pre>

## 5. Generikus Típusok használata Tömbökkel
<pre>
// generikus funkciók tömbökkel való használata
function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

let array1 = getFirstElement([1, 2, 3]); // Visszatérési érték típusa: number
let array2 = getFirstElement(["apple", "banana", "cherry"]); // Visszatérési érték típusa: string
</pre>

## 6. Generikus Típusok Komplex Használata
<pre>
//összetettebb generikus típusok, például egymásba ágyazott generikusok
function merge<U, V>(obj1: U, obj2: V): U & V {
    return {...obj1, ...obj2};
}

let result = merge({name: "John"}, {age: 25});
// 'result' típusa: { name: string; age: number; }
</pre>

## Órai példa
<pre>
function getFirstElement <ElementType>(array: ElementType[]){
    return array[0];
} 

const numbers = [1, 2, 3];
const firstNumber = getFirstElement<number>(numbers);
const string = ['ufdh', 'uefhu', 'uiefhu'];
const firstString = getFirstElement<string>(string);
const input = document.querySelector<HTMLInputElement>(".input");
input?.value
const map = new Map<string, Map<string, number>>();

type ApiResponse<Data> = {
    data: Data
    isError: boolean

}

type UserReponse = ApiResponse<{name: string; age: number}>
type BlogReponse = ApiResponse<{title: string}>

const response: ApiResponse<{name: string; age: number}> = {
    data:{
        name:'kyle',
        age: 28,
    },
    isError: false
}

const blogResp: BlogReponse = {
    data:{
        title:"teszt"
    },
    isError: false
}
</pre>

# Típusellenőrzés

## 1. type

A type kulcsszóval saját típusokat hozhatunk létre, amelyek segítségével strukturálhatjuk és annotálhatjuk a kódot. Ezek a típusok lehetnek primitívek, uniók, metszetek, tuple-ök, vagy akár az objektumok saját struktúráját leíró alakzatok.

<pre>
type Point = {
    x: number;
    y: number;
};

const drawPoint = (point: Point) => {
    //implementáció...
};
</pre>

## 2. typeof

A typeof operátor lehetővé teszi, hogy megszerezzük egy változó típusát futásidőben. TypeScript-ben ezt gyakran használják a változók típusainak "kikényszerítésére" vagy annak meghatározására, hogy milyen típussal rendelkezik egy változó referenciaidejében.

<pre>
const example = {
    name: "John",
    age: 30
};

type Person = typeof example; // Person típus lesz {name: string; age: number;}
</pre>

## 3. readonly

A readonly módosítóval az objektumokban és tömbökben lévő tulajdonságok írhatatlanná tehetők. Ez biztosítja, hogy az adott tulajdonságok értékei nem módosíthatók miután az objektum létrejött. Különösen hasznos a funkcionális programozási paradigmákban, ahol az adatok módosíthatatlansága előnyös.

<pre>
type Person = {
    readonly name: string;
    readonly age: number;
};

const person: Person = {
    name: "Jane",
    age: 25
};

// person.name = "John"; // Fordítási hiba, mert a 'name' tulajdonság readonly.
</pre>

# Map-ek a TypeScriptben
A TypeScriptben a Map egy kulcs-érték párokat tároló gyűjtemény, amely lehetővé teszi a kulcsok és értékek egyedi tárolását. A Map használatával egyszerűen kezelhetjük a kulcs-érték párosokat, amelyek dinamikusan bővíthetők és módosíthatók.

**Létrehozás:** Egy új Map példányosítása a new Map() kifejezéssel történik.

**Típusbiztonság:** A TypeScriptben a Map típusa generikus, ami lehetővé teszi, hogy meghatározzuk a kulcsok és értékek típusát.

## Elem hozzáadása:
A set(key, value) metódus segítségével új elemeket adhatunk a map-hez.
Példa: myMap.set("key1", "value1");

## Elem elérése:
A get(key) metódus segítségével lekérhetjük az adott kulcshoz tartozó értéket.
Példa: let value = myMap.get("key1");

## Elem létezésének ellenőrzése:
A has(key) metódussal ellenőrizhetjük, hogy egy adott kulcs létezik-e a map-ben.
Példa: myMap.has("key1");

## Elem törlése:
A delete(key) metódussal törölhetünk egy elemet a map-ből.
Példa: myMap.delete("key1");

## Összes elem törlése:
A clear() metódus eltávolítja az összes elemet a map-ből.
Példa: myMap.clear();

## Elemek számának megszámlálása:
A size tulajdonság megadja a map-ben lévő elemek számát.
Példa: let size = myMap.size;

## Iteráció és Bejárás
* **forEach:** A forEach metódus lehetővé teszi a map összes elemének bejárását.
* **iterátorok:** A Map objektumok **keys()**, **values()**, és **entries()** metódusai iterátorokat adnak vissza, amelyekkel bejárhatjuk a kulcsokat, értékeket, illetve a kulcs-érték párokat.

## Map létrehozása és alapműveletek
<pre>
// Map létrehozása
let myMap = new Map<string, number>();

// Elemek hozzáadása
myMap.set("kulcs1", 1);
myMap.set("kulcs2", 2);

// Elem lekérése
let ertek = myMap.get("kulcs1"); // ertek = 1

// Kulcs létezésének ellenőrzése
let vanKulcs = myMap.has("kulcs2"); // vanKulcs = true

// Elem törlése
myMap.delete("kulcs2");

// Map méretének lekérdezése
let meret = myMap.size; // meret = 1
</pre>

## Iteráció
<pre>
// Iteráció a kulcsokon keresztül
for (let kulcs of myMap.keys()) {
    console.log(kulcs); // "kulcs1"
}

// Iteráció az értékeken keresztül
for (let ertek of myMap.values()) {
    console.log(ertek); // 1
}

// Iteráció a kulcs-érték párokon keresztül
for (let bejegyzes of myMap.entries()) {
    console.log(bejegyzes[0], bejegyzes[1]); // "kulcs1", 1
}

// forEach használata
myMap.forEach((ertek, kulcs) => {
    console.log(kulcs, ertek); // "kulcs1", 1
});
</pre>

## Összetettebb Map példa
<pre>
// Összetett típusú kulcsok és értékek használata
let komplexMap = new Map<object, string[]>();

let objektum1 = { nev: "Objektum1" };
let objektum2 = { nev: "Objektum2" };

// Elemek hozzáadása
komplexMap.set(objektum1, ["Egy", "Kettő", "Három"]);
komplexMap.set(objektum2, ["Négy", "Öt", "Hat"]);

// Elem lekérése
let ertekek1 = komplexMap.get(objektum1); // ertekek1 = ["Egy", "Kettő", "Három"]
let ertekek2 = komplexMap.get(objektum2); // ertekek2 = ["Négy", "Öt", "Hat"]
</pre>

## Map konvertálása tömbbé
<pre>
// Kulcs-érték párok konvertálása tömbbé
let mapTombbe = Array.from(myMap);
console.log(mapTombbe); // [["kulcs1", 1]]

// Csak a kulcsok vagy az értékek tömbbé konvertálása
let kulcsokTombbe = Array.from(myMap.keys());
let ertekekTombbe = Array.from(myMap.values());
</pre>

# Szoftvertervezési minták TypeScriptben
A szoftvertervezési minták olyan bevált megoldásokat kínálnak, amelyeket gyakori problémákra lehet alkalmazni a szoftverfejlesztés során. Ezek a minták segítenek a fejlesztőknek a kód újrafelhasználásában, a rendszer karbantarthatóságának javításában és a komponensek közötti kommunikáció hatékony kezelésében. A minták három fő csoportra oszthatók: létrehozási, szerkezeti és viselkedési minták.

## 1. Létrehozási minták
Ezek a minták az objektumok létrehozásának folyamatára összpontosítanak, elválasztva azt az objektumok használatától.

* **Factory method:** Egy interfész létrehozására szolgál objektumok számára, miközben az alaposztályok döntenek arról, hogy melyik példány jön létre.
* **Abstract factory:** Egy családhoz tartozó objektumok csoportjának létrehozására szolgáló interfész, anélkül hogy a konkrét osztályokat meg kellene adni.
* **Builder:** Egy összetett objektum létrehozására szolgál lépésről lépésre, lehetővé téve az objektum konstrukciójának és reprezentációjának elkülönítését.
* **Prototype:** Egy meglévő objektum másolatának létrehozására szolgál, elkerülve az újrainicializálás költségeit.

## 2. Szerkezeti minták
Ezek a minták arra koncentrálnak, hogy hogyan lehet osztályokat és objektumokat összeállítani nagyobb struktúrákba.

* **Adapter:** Két inkompatibilis interfész összekötésére szolgál, lehetővé téve az együttműködésüket.
* **Composite:** Több objektumot úgy kezel, mintha egyetlen objektum lennének, lehetővé téve az egyedi és összetett objektumok egységes kezelését.
* **Proxy:** Egy helyettesítő objektum, amely szabályozza a hozzáférést egy másik objektumhoz.
* **Flyweight:** Nagyszámú hasonló objektum gazdaságos tárolására szolgál, csökkentve az erőforrások felhasználását.

## 3. Viselkedési Minták
Ezek a minták az objektumok közötti kommunikáció és felelősség megosztására összpontosítanak.

* **Observer:** Objektumok közötti egy-egy kapcsolatot valósít meg úgy, hogy egy objektum állapotváltozása esetén minden függője értesítést kap.
* **Strategy:** Különböző algoritmusok cseréjét teszi lehetővé futásidőben, kapszulázva azokat különböző osztályokban.
* **Command:** Kéréseket kapszuláz objektumokba, lehetővé téve a kérések paraméterezését és konfigurálását.
* **State:** Egy objektum viselkedésének megváltoztatására szolgál az objektum belső állapotának megváltoztatásakor.

**Factory method**
<pre>
interface Product {
    doWork(): void;
}

class ConcreteProductA implements Product {
    public doWork(): void {
        console.log("ConcreteProductA is working.");
    }
}

class ConcreteProductB implements Product {
    public doWork(): void {
        console.log("ConcreteProductB is working.");
    }
}

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): void {
        const product = this.factoryMethod();
        console.log("Creator: The same creator's code has just worked with");
        product.doWork();
    }
}

class ConcreteCreatorA extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

// Usage
const creatorA = new ConcreteCreatorA();
creatorA.someOperation();

const creatorB = new ConcreteCreatorB();
creatorB.someOperation();
</pre>

**Adapter**
<pre>
interface Target {
    request(): string;
}

class Adaptee {
    public specificRequest(): string {
        return ".eetpadA eht fo roivaheb laicepS";
    }
}

class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split("").reverse().join("");
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

// Usage
const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
console.log(`Client: ${adapter.request()}`);
</pre>

**Observer**
<pre>
interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class ConcreteSubject implements Subject {
    public state: number;
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log("Subject: Observer has been attached already.");
        }

        console.log("Subject: Attached an observer.");
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Subject: Nonexistent observer.");
        }

        this.observers.splice(observerIndex, 1);
        console.log("Subject: Detached an observer.");
    }

    public notify(): void {
        console.log("Subject: Notifying observers...");
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log("\nSubject: I'm doing something important.");
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

class ConcreteObserver implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 5) {
            console.log("ConcreteObserver: Reacted to the event.");
        }
    }
}

// Usage
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver();

subject.attach(observer1);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.detach(observer1);
subject.someBusinessLogic();
</pre>

# Singleton minták implementálása TypeScriptben
A Singleton minta egy tervezési minta, amely biztosítja, hogy egy osztályból csak egyetlen példány létezzen a program futásának ideje alatt. A Singleton minta hasznos lehet, amikor közös erőforrásokhoz vagy szolgáltatásokhoz való hozzáférést kell biztosítani az alkalmazásban. TypeScriptben a Singleton minta implementálása az osztályok és a statikus tulajdonságok/konstruktorok használatával történik, hogy korlátozzuk az osztály példányosítását.

A **Singleton minta implementálása** TypeScriptben általában két fő lépésből áll:
* **Privát konstruktor:** A konstruktor priváttá tétele megakadályozza, hogy az osztályon kívülről új példányokat hozzanak létre.
* **Statikus metódus:** Egy statikus metódus biztosítja az egyetlen példány hozzáférését, amely, ha még nem létezik, létrehozza azt.

<pre>
class Singleton {
    private static instance: Singleton;

    // A konstruktor privát, hogy megakadályozza a közvetlen példányosítást.
    private constructor() {}

    // Statikus metódus az egyetlen példány eléréséhez.
    public static getInstance(): Singleton {
        // Ha még nem létezik példány, akkor létrehozzuk.
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        // Visszaadjuk a létező vagy az újonnan létrehozott példányt.
        return Singleton.instance;
    }

    public someMethod() {
        // Példa metódus, amit a Singleton példányon lehet meghívni.
        console.log('Ez egy példa metódus a Singleton osztályban.');
    }
}

// Használat
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);  // true, mindkettő ugyanaz a példány
instance1.someMethod();  // Ez egy példa metódus a Singleton osztályban
</pre>

A **Singleton** minta hasznos lehet olyan esetekben, ahol:
* Egy globális hozzáférési pontot kell biztosítani egy osztály egyetlen példányához.
* Egyetlen példányon keresztül kell megosztani és kezelni az erőforrásokat vagy állapotokat (pl. adatbázis kapcsolat, konfigurációs beállítások).
* Biztosítani kell, hogy egy osztályból ne hozhassanak létre több példányt, elkerülve ezzel az erőforrások duplikációját vagy inkonzisztens állapotokat.

**Fontos:**
* Bár a Singleton minta hasznos lehet bizonyos esetekben, fontos megfontolni az alkalmazásával járó korlátokat is. Túlzott használata nehezítheti a kód tesztelését és csökkentheti a rendszer rugalmasságát.
* Alternatív megoldásként az alkalmazások tervezésénél érdemes lehet más tervezési mintákat vagy függőséginjektálást (dependency injection) is fontolóra venni, amelyek jobban kezelhetik a függőségeket és az osztályok közötti kapcsolatokat.

A Singleton minta implementálása TypeScriptben egyszerű és egyenes vonalú, lehetővé téve a fejlesztők számára, hogy biztosítsák egy osztályból csak egy példány létezését az alkalmazás egészében.

Egy életszerű példa, ahol a Singleton minta hasznos lehet egy TypeScript alkalmazásban, az egy adatbázis-kezelő szolgáltatás implementálása. Tegyük fel, hogy egy webalkalmazásnak szüksége van egy központi módon kezelt adatbázis-kapcsolatra, hogy elkerülje a felesleges erőforrás-felhasználást és biztosítsa az adatbázis-műveletek koherens végrehajtását.

**Adatbázis-kezelő szolgáltatás singleton minta használatával:**

Az adatbázis-kezelő szolgáltatás célja, hogy egyetlen adatbázis-kapcsolatot nyújtson az alkalmazás számára. Ez a kapcsolat a szolgáltatás életciklusa során létrejön, és az alkalmazás minden része által újrahasználható. A Singleton minta biztosítja, hogy az adatbázis-kezelő szolgáltatásból csak egy példány létezzen, így minden adatbázis-művelet ugyanazon a kapcsolaton keresztül történik.

<pre>
class DatabaseService {
    private static instance: DatabaseService;
    private constructor() {
        // Inicializálja az adatbázis kapcsolatot itt
    }

    public static getInstance(): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;
    }

    public query(sql: string): any {
        // Végrehajtja az adatbázis műveletet
        console.log(`Executing query: ${sql}`);
        // Eredmény visszaadása
    }
}

// Példa használatra
const dbService = DatabaseService.getInstance();
dbService.query('SELECT * FROM users');
</pre>

A példában a DatabaseService osztály használja a Singleton mintát, hogy biztosítsa, csak egyetlen példánya van létrehozva az alkalmazás életciklusa során. Az getInstance metódus ellenőrzi, hogy létezik-e már példány a szolgáltatásból, és ha nem, létrehoz egyet. Ez a megközelítés biztosítja, hogy az adatbázis-kapcsolat egységes és könnyen kezelhető legyen az alkalmazásban, miközben optimalizálja az erőforrások felhasználását és javítja az alkalmazás teljesítményét.

## TypeScript egyedi képességei

1. Statikus típusellenőrzés és erős típusok
2. Interface-ek és típus-aliasok
3. Generikus típusok
4. Dekorátorok
5. Túlterhelhető funkciók (function overloading)
6. Enumok (felsorolásos típusok)


# TS mixins
A TypeScript egy erőteljes szkriptnyelv, amely lehetővé teszi a fejlesztők számára, hogy bonyolult, nagy teljesítményű alkalmazásokat hozzanak létre. Egyik haladó funkciója a "mixins", amely lehetővé teszi különböző osztályok funkcióinak újrafelhasználását és kombinálását, anélkül, hogy közvetlenül örökölniük kellene ezekből az osztályokból. Ez a funkcionalitás különösen hasznos lehet az objektumorientált programozásban, ahol a többszörös öröklés korlátait szeretnénk leküzdeni.

A mixin egy olyan osztály vagy interfész, amely bizonyos funkciókat kínál, amelyeket más osztályok is felhasználhatnak. A TypeScriptben a mixin mintát úgy valósítjuk meg, hogy funkciókat definálunk, amelyek bemeneti osztályokat "kevernek össze" (extend) egy vagy több másik osztállyal vagy objektummal, hogy új funkciókat adjanak hozzájuk vagy meglévőket módosítsanak.

A mixins létrehozásának alapvető lépései TypeScriptben:
* Definiáljon egy vagy több interfészt, amely leírja azokat a funkciókat és tulajdonságokat, amelyeket a mixin biztosítani fog.
* Hozzon létre egy funkciót, amely bemeneti osztályt (a mixin alapjául szolgáló osztály) fogad, és egy új osztályt ad vissza, amely kiterjeszti ezt az osztályt az interfészben meghatározott funkciókkal.
* Alkalmazza a mixin-t egy osztályra a létrehozott funkció segítségével, hogy hozzáadjon vagy módosítson funkciókat ebben az osztályban.

<pre>
// Lépés 1: Interfész létrehozása a mixin számára
interface Serializable {
    serialize(): string;
}

// Lépés 2: Mixin funkció létrehozása
function SerializableMixin<BaseClass extends new (...args: any[]) => {}>(Base: BaseClass) {
    return class extends Base implements Serializable {
        serialize(): string {
            return JSON.stringify(this);
        }
    };
}

// Lépés 3: Egy osztály, amely alkalmazza a mixin-t
class User {
    constructor(public name: string, public age: number) {}
}

const SerializableUser = SerializableMixin(User);
const user = new SerializableUser("John Doe", 30);
console.log(user.serialize()); // '{"name":"John Doe","age":30}'
</pre>

Ebben a példában a SerializableMixin egy funkció, amely bármely osztályt képes "serializálhatóvá" tenni, azaz lehetővé teszi egy objektum állapotának string formátumú reprezentációjának létrehozását. A SerializableUser osztály ezt a mixin-t használja a User osztályon, így a User példányok mostantól rendelkeznek egy serialize metódussal, amelyet a mixin biztosít.

# Moduláris programozás
A moduláris programozás egy olyan programtervezési elv, ami azt javasolja, hogy egy programot kisebb, független, cserélhető részekre, úgynevezett modulokra bontsunk. Minden modul egy adott feladatot lát el, és együttműködik a többi modullal a teljes rendszer funkcióinak megvalósításában.

**Alapelvek:**
* **Önállóság:** Minden modulnak önállónak kell lennie, azaz egyedül felelős egy adott funkcionalitásért vagy feladatkörért.
* **Kapszulázás:** A modulok elrejtik a belső működésüket, csak meghatározott interfészeken keresztül kommunikálnak.
* **Újrafelhasználhatóság:** A modulok úgy vannak megtervezve, hogy más programokban vagy rendszer részekben is felhasználhatók legyenek.
* **Egyszerű karbantarthatóság:** Az elkülönített modulokat könnyebb karbantartani és frissíteni.
* **Hibatűrés:** Ha egy modul hibásodik, az nem feltétlenül érinti a többi modul működését.

**Miért van rá szükség?**
* **Komplexitás kezelése:** A moduláris felépítés segít a nagy és összetett rendszerek kezelhetővé tételében, mivel a problémákat kisebb, kezelhetőbb részekre bontja.
* **Fejlesztési rugalmasság:** A modulok függetlensége lehetővé teszi, hogy különböző csapatok párhuzamosan dolgozhassanak különböző modulokon, növelve a fejlesztési folyamat hatékonyságát.
* **Skálázhatóság:** A moduláris tervezés megkönnyíti a rendszerek bővítését új funkciókkal és komponensekkel.
* **Tesztelhetőség:** A modulok kisebbek és önállóak, ezáltal könnyebb őket külön-külön tesztelni.
* **Újrafelhasználás:** A jól megtervezett modulokat más projektekben vagy rendszerekben is fel lehet használni, növelve a fejlesztési erőforrások hatékonyságát.

# TypeScript mamespace-ek
A TypeScript namespace-ek (névterek) lehetővé teszik a kódbázis szervezését és a névütközések elkerülését. A névterek segítségével logikailag összetartozó osztályokat, interfészeket, függvényeket és változókat csoportosíthatunk együtt, amelyek így egy nagyobb egységet képeznek. Ez különösen hasznos nagyobb alkalmazásoknál, ahol az azonos nevű változók és funkciók ütközése problémát okozhat.

A namespace-ek használatával elkerülhető a globális névtér szennyezése, és moduláris, könnyen karbantartható kódot hozhatunk létre. Ezenkívül a névterek lehetővé teszik, hogy a belső struktúrát rejtve tartsuk, és csak azokat az elemeket tegyük elérhetővé, amelyeket kifejezetten exportálni szeretnénk.

## Alapvető szintaxis
A namespace létrehozásához a namespace kulcsszót használjuk, majd megadjuk a névterünk nevét. A névterek belsejébe azután definiálhatjuk azokat a funkciókat, osztályokat, interfészeket és változókat, amelyeket csoportosítani szeretnénk. Például:

<pre>
namespace Matematika {
    export function osszead(a: number, b: number): number {
        return a + b;
    }

    export function kivon(a: number, b: number): number {
        return a - b;
    }
}
</pre>

Létrehoztunk egy Matematika névteret, amely két függvényt tartalmaz: osszead és kivon. Ezeket a függvényeket az export kulcsszóval jelöltük, ami lehetővé teszi számunkra, hogy a névteren kívülről is hozzáférjünk hozzájuk.

## Névterek használata
A namespace-ekből exportált elemeket a névtér nevével együtt kell hivatkoznunk, hogy elérhetővé váljanak. Például:

<pre>
let eredmeny = Matematika.osszead(5, 3);
console.log(eredmeny); // 8
</pre>

## Névterek egymásba ágyazása
A namespace-ek egymásba is ágyazhatók, lehetővé téve a még részletesebb szervezést. Például:

<pre>
namespace Matematika {
  export namespace Algebra {
    export function polinomEgyutthatok() {
      // Implementáció
    }
  }
}
</pre>

A Matematika névteren belül létrehoztunk egy Algebra al-névteret, amely további logikai csoportosítást tesz lehetővé.


Egy iskolai nyilvántartási rendszert fogunk létrehozni a namespace használatával a TypeScriptben. Az iskola rendszere tartalmazni fog diákokat (Student), tanárokat (Teacher) és kurzusokat (Course), mindezt a School névtér alatt szervezve. Ezen belül külön névtereket használunk a különböző entitások számára, hogy szervezettebbé tegyük a kódot.

<pre>
namespace School {
    export namespace Students {
        export class Student {
            constructor(public id: number, public name: string, public courseIds: number[]) {}

            listCourses(courses: Courses.Course[]): void {
                console.log(`${this.name} kurzusai:`);
                this.courseIds.forEach(courseId => {
                    const course = courses.map(course => course.id === courseId);
                    if (course) {
                        console.log(`- ${course}`);
                    }
                });
            }
        }
    }

    export namespace Teachers {
        export class Teacher {
            constructor(public id: number, public name: string, public subject: string) {}

            introduceSelf(): void {
                console.log(`Szia! ${this.name} vagyok, a(z) ${this.subject} tanára.`);
            }
        }
    }

    export namespace Courses {
        export class Course {
            constructor(public id: number, public name: string, public teacherId: number) {}
        }
    }
}

let student1 = new School.Students.Student(1, "Péter", [101, 102]);
let student2 = new School.Students.Student(2, "Anna", [102, 103]);
let teacher1 = new School.Teachers.Teacher(1, "Kis István", "Matematika");
let teacher2 = new School.Teachers.Teacher(2, "Nagy Éva", "Történelem");
let course1 = new School.Courses.Course(101, "Algebra", 1);
let course2 = new School.Courses.Course(102, "Geometria", 1);
let course3 = new School.Courses.Course(103, "Világtörténelem", 2);

teacher1.introduceSelf();
student1.listCourses([course1, course2, course3]);
</pre>

# TypeScript dekorátorok
A TypeScript dekorátorok olyan speciális funkciók, amelyek lehetővé teszik a classok, metódusok, tulajdonságok és paraméterek definícióinak módosítását vagy kiegészítését. Ezeket a dekorátorokat a design-time, azaz a kód írásának idején használjuk, és a futtatási környezetben érvényesülnek. Lássuk, hogyan működnek a különböző típusú dekorátorok:

## 1. Class dekorátorok
A class dekorátorok közvetlenül a class definíció előtt helyezkednek el, és befolyásolják vagy módosítják a class viselkedését.

Működés: Amikor a dekorátort egy classra alkalmazzuk, a dekorátor funkcióját a class konstruktorával hívják meg. Ez lehetőséget ad a konstruktor módosítására, új metódusok hozzáadására, vagy akár a class teljes viselkedésének megváltoztatására.

## 2. Metódus dekorátorok
A metódus dekorátorok a metódusok definícióihoz kapcsolódnak, és befolyásolják a metódusok leíróit, argumentumait és a visszatérési értéküket.

Működés: Egy metódus dekorátora három paramétert kap: a class prototípusát (vagy konstruktorát statikus metódus esetén), a metódus nevét, és a metódus leíróját. Ezek segítségével módosíthatjuk a metódus definícióját vagy viselkedését.

## 3. Tulajdonság dekorátorok
A tulajdonság dekorátorokat a classok tulajdonságaihoz rendeljük, és befolyásolhatják ezeket a tulajdonságokat.

Működés: A tulajdonság dekorátorok két paramétert kapnak: a class prototípusát és a tulajdonság nevét. Ezekkel a tulajdonság metaadatainak módosítása vagy egyéb műveletek elvégzése lehetséges.

## 4. Paraméter dekorátorok
A paraméter dekorátorokat a metódus paramétereire alkalmazzuk, és befolyásolhatják ezeket a paramétereket.

Működés: Három paramétert kapnak: a class prototípusát, a metódus nevét, és a paraméter indexét a metódus argumentumlistájában. Ezekkel információt nyerhetünk a paraméterről, vagy módosíthatjuk annak viselkedését.

<pre>
// Class dekorátor definíciója
function Sealed(constructor: Function) {
    console.log(`Sealing the constructor: ${constructor.name}`);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Class dekorátor alkalmazása
@Sealed
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
</pre>

* function Sealed(constructor: Function) { ... }: Egy Sealed nevű class dekorátor definíciója. Ez egy függvény, amely egy konstruktor függvényt fogad paraméterként.
* Object.seal(constructor);: A dekorátor lezárja (seal) a class konstruktorát, ami megakadályozza új tulajdonságok hozzáadását vagy meglévők törlését.
* Object.seal(constructor.prototype);: A class prototípusának lezárása, hasonlóan a konstruktorhoz.
* @Sealed: A Sealed dekorátor alkalmazása a Greeter classra. Ez a szintaxis jelzi, hogy a Greeter class a Sealed dekorátor által definiált viselkedést fogja követni.

<pre>
// Metódus dekorátor definíciója
function Enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    // Metódus dekorátor alkalmazása
    @Enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
</pre>

* function Enumerable(value: boolean) { ... }: Az Enumerable egy metódus dekorátor, amely egy boolean értéket vesz paraméterül.
* return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) { ... }: A dekorátor egy függvényt ad vissza, amely a metódust, annak kulcsát és leíróját kapja meg paraméterként.
* descriptor.enumerable = value;: A metódus leíró (PropertyDescriptor) enumerable tulajdonságát állítja be a megadott értékre, ami befolyásolja, hogy a metódus felsorolható-e.
* @Enumerable(false): Az Enumerable dekorátor alkalmazása a greet metódusra, beállítva annak enumerable tulajdonságát false-ra.

<pre>
// Tulajdonság dekorátor
function Format(formatString: string) {
    return function (target: any, propertyKey: string) {
        let value = target[propertyKey];

        const getter = () => {
            return formatString.replace('%s', value);
        };

        const setter = (newValue: string) => {
            value = newValue;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}

class Greeter {
    @Format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
}
</pre>

* function Format(formatString: string) { ... }: A Format egy tulajdonság dekorátor, amely egy string formátumot vesz paraméterül.
* return function (target: any, propertyKey: string) { ... }: A dekorátor egy függvényt ad vissza, amely a class példányát (target) és a tulajdonság kulcsát (propertyKey) kapja meg.
* let value = target[propertyKey];: Elmenti az eredeti tulajdonság értékét.
* Object.defineProperty(target, propertyKey, { get: getter, set: setter });: Újra definiálja a tulajdonságot egy getter és setter segítségével, amelyek a formázást végzik.
* @Format("Hello, %s"): A Format dekorátor alkalmazása a greeting tulajdonságra a megadott formátummal.

<pre>
// Paraméter dekorátor
function Required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(`Adding required to ${propertyKey.toString()} at position ${parameterIndex}`);
}

class Greeter {
    greeting: string;

    constructor(@Required message: string) {
        this.greeting = message;
    }
}
</pre>
* function Required(target: Object, propertyKey: string | symbol, parameterIndex: number) { ... }: A Required egy paraméter dekorátor, amely információt ad a paraméter helyzetéről és annak metódusáról.
* @Required: A dekorátor alkalmazása a konstruktor message paraméterére, jelezve, hogy ez a paraméter fontos.

## DEKORÁTOR példa magyarázata
<pre>
export function LogAddition(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(Adding item...);
        return originalMethod.apply(this, args);
    };
}
</pre>

A kódrészlet egy TypeScript dekorátor definícióját tartalmazza, amelyet függvények dekorálására használhatunk az osztályokban. Egy dekorátor egy olyan speciális típusú deklaráció, amely lehetővé teszi a kódbázis annotációját vagy módosítását futásidőben. Ebben az esetben a LogAddition nevű dekorátor célja, hogy naplózza a függvény hívásokat, különösen amikor egy elemet hozzáadnak. Lássuk részletesebben, hogy mit csinál soronként:


**export function LogAddition(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor):**

Ez a sor exportál egy függvényt LogAddition néven, ami egy dekorátor. A dekorátor három paramétert vár:
* **target:** Az objektum, amelynek a prototípusára a dekorált tag (általában metódus) tartozik.
* **propertyKey:** A dekorált tag (metódus) neve, ami lehet string vagy symbol.
* **descriptor:** A tulajdonság leírója (PropertyDescriptor), amely tartalmazza a dekorált tag definícióját, mint például az értékét, konfigurálhatóságát, felsorolhatóságát, és írhatóságát.

**const originalMethod = descriptor.value;:**

Ebben a sorban egy változóba (originalMethod) mentjük el az eredeti metódus referenciáját, amely a dekorátorral van dekorálva. Ez lehetővé teszi az eredeti funkcionalitás megtartását.

**descriptor.value = function (...args: any[]) {:**

Itt módosítjuk a metódus leírójának (descriptor) value tulajdonságát, ami maga a függvény. Egy új anonym függvényt rendelünk hozzá, amely képes fogadni tetszőleges számú argumentumot (...args), amelyeket továbbadhatunk az eredeti metódusnak.

**console.log(Adding item...);:**

Az új függvényen belül az első dolog, amit csinálunk, az egy konzol naplózás, ami informálja a felhasználót, hogy egy elem hozzáadásra kerül.

**return originalMethod.apply(this, args);:**

Végül az új függvény meghívja az eredeti metódust az aktuális kontextussal (this) és az eredeti argumentumokkal (args). Az apply metódus használata lehetővé teszi az eredeti metódus meghívását az új kontextusban, visszaadva az eredeti metódus eredményét.

# TypeScript modulok
* **Elkülönítés:** A modulok segítenek a kód elkülönítésében, így minden modul csak a saját feladataival foglalkozik. Ez elősegíti a "Single Responsibility Principle" (Egyetlen Felelősség elve) betartását.
* **Újrahasználhatóság:** Ha a kódot modulokra bontjuk, az egyes modulokat könnyebb újrahasználni más projektekben vagy a projekt különböző részeiben.
* **Névtér kezelés:** A modulok segítenek elkerülni a globális névtér szennyezését. Ezáltal csökkenthető a névütközések esélye, amelyek zavaróak és hibalehetőségeket rejtenek.

# JavaScript scope-ok
A scope-ok meghatározzák, hogy a változók és függvények hol és hogyan érhetők el a program különböző részein. A scope-ok segítenek a változók láthatóságának és élettartamának kezelésében, ami fontos a programok szervezése és a hibák elkerülése szempontjából. Három fő típusú scope létezik JavaScript-ben: globális, lokális és lexikális scope.

A scope azt jelenti, hogy a változók és függvények milyen kontextusban érhetők el a program különböző részein. A scope-ok két fő típusa létezik:
1. **Globális scope:** Azok a változók és függvények, amelyek a program egészében, mindenhol elérhetők. Ezek a legfelsőbb szinten vannak deklarálva, kívül minden függvényen és blokkon.
2. **Lokális scope:** Azok a változók és függvények, amelyek csak egy adott függvényen vagy blokkon belül érhetők el. Ezek az adott kontextuson kívül nem láthatók és nem érhetők el.

**Miért van szükség scope-okra?**
* **Modularitás és kód újrafelhasználhatósága:** A scope-ok lehetővé teszik, hogy a kódot kisebb, önálló egységekre bontsuk, amelyek könnyebben karbantarthatók és újrafelhasználhatók.
* **Névütközések elkerülése:** Ha minden változó globális lenne, könnyen előfordulhatna, hogy két különböző programrész ugyanazt a változónevet használja, ami hibákhoz vezetne. A lokális scope-ok segítségével elkerülhetjük ezeket az ütközéseket.
* **Memóriahatékonyság:** A lokális változók a program adott részeinek végrehajtása után automatikusan felszabadulnak, így csökkentve a memóriahasználatot.

## Hogyan működnek a scope-ok?
1. **Globális scope**
Amikor egy változót vagy függvényt a globális scope-ban deklarálunk, az bárhonnan elérhető a programban. Például, ha egy változót a script legfelső szintjén hozunk létre, az mindenhol használható lesz.
2. **Lokális scope:**
    * **Függvény scope:** Minden függvény saját scope-pal rendelkezik. A függvényen belül deklarált változók és függvények csak azon belül érhetők el.
    * **Blokk scope:** A blokkok (például if, for, while blokkok) saját scope-pal rendelkeznek, ha let vagy const kulcsszavakkal deklaráljuk a változókat. A var kulcsszóval deklarált változók nem rendelkeznek blokk scope-pal, hanem a legközelebbi függvény vagy globális scope-ba tartoznak.

## Lexikális scope
A lexikális scope egy kulcsfontosságú fogalom a JavaScript-ben, amely meghatározza, hogy a változók és függvények milyen kontextusban érhetők el a kód szerkezete alapján. A scope meghatározása már a kód írásakor eldől, nem pedig a futásidő során.

**Hogyan működik a lexikális scope?**
Amikor egy változót vagy függvényt deklarálunk, a JavaScript motor meghatározza, hogy ez a változó vagy függvény melyik scope-hoz tartozik a deklaráció helye alapján. Ez a scope hierarchikus, azaz a belső scope-ok hozzáférhetnek a külső scope-ok változóihoz, de fordítva nem.

<pre>
// lexikalis scope
function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        let innerVariable = 'I am inside!';
        console.log(outerVariable); // Hozzáfér a külső változóhoz
        console.log(innerVariable); // Hozzáfér a belső változóhoz
    }
    innerFunction();
    console.log(innerVariable); // Nem fér hozzá, hibát okoz
}
outerFunction();
</pre>

**A példában:**
* Az outerFunction deklarál egy outerVariable változót.
* Az innerFunction belsejében deklarál egy innerVariable változót és hozzáfér az outerVariable-hoz is.
* Az innerVariable kívülről nem érhető el, ami a lexikális scope egyik jellemzője.

**Miért fontos a lexikális scope?**
* **Előreláthatóság:** A lexikális scope segítségével könnyen megérthetjük és nyomon követhetjük, hogy mely változók érhetők el egy adott kódrészletben.
* **Modularitás:** Segít a kód modularizálásában és a nevek ütközésének elkerülésében, mivel a változók és függvények csak azon a helyen érhetők el, ahol szükség van rájuk.
* **Closure:** A lexikális scope az alapja a closure-k működésének, amelyek erőteljes eszközt jelentenek a funkcionális programozásban. A closure-k lehetővé teszik, hogy a belső függvények "emlékezzenek" a külső függvények változóira még akkor is, ha a külső függvény már végrehajtódott.

A "lexical environment" és a "local scope" kapcsolódnak egymáshoz, de nem pontosan ugyanazt jelentik.

**Lexical Environment**

A lexical environment egy belső adatstruktúra a JavaScript motorban, amely nyomon követi a változókat és függvényeket az adott kontextusban. Minden egyes függvényhívás, blokkszintű kód (ha let vagy const változókat használ) és a globális környezet saját lexical environment-t hoz létre.

A lexical environment két fő részből áll:
* **Environment Record:** Egy olyan adatstruktúra, amely tárolja az összes lokálisan deklarált változót és függvényt.
* **Outer environment reference:** Egy hivatkozás az előző (külső) lexical environment-re, amely lehetővé teszi a változók és függvények hierarchikus keresését a scope láncban.

**Local Scope**

A local scope a scope-ok egy típusa, amely egy adott függvényen vagy blokkon belül érvényes. A local scope határozza meg, hogy mely változók és függvények érhetők el az adott kontextuson belül. A local scope általában a lexical environment része, de kifejezetten egy függvény vagy blokk hatókörére utal.

Különbségek és kapcsolatok
* **Absztrakciós szint:**
    * **Lexical environment:** Ez egy belső, alacsonyabb szintű fogalom, amely leírja, hogyan tárolódnak és érhetők el a változók és függvények a JavaScript motorban. Ez egy adatstruktúra, amely a változók és függvények állapotát tartja nyilván egy adott időpillanatban.
    * **Local scope:** Ez egy magasabb szintű koncepció, amely azt írja le, hogy a változók és függvények hol érhetők el a kódban. Ez a fejlesztő számára érthető és használható fogalom.
* **Funkció:**
    * **Lexical environment:** Minden egyes függvényhívás és blokkszintű kód saját lexical environment-t hoz létre, amely lehetővé teszi a változók nyomon követését és a scope lánc kezelését.
    * **Local scope:** Ez meghatározza, hogy egy adott függvényen vagy blokkon belül mely változók érhetők el.

**Példa a lexical environment és local scope kapcsolatára:**

<pre>
let globalVar = 'I am global';

function outerFunction() {
    let outerVar = 'I am outer';
    
    function innerFunction() {
        let innerVar = 'I am inner';
        console.log(globalVar); // Hozzáfér a globális változóhoz
        console.log(outerVar);  // Hozzáfér a külső függvény változójához
        console.log(innerVar);  // Hozzáfér a belső függvény változójához
    }
    
    innerFunction();
}

outerFunction();
</pre>

**A példában:**
* A globalVar a globális scope-ban található.
* Az outerVar az outerFunction local scope-jában található.
* Az innerVar az innerFunction local scope-jában található.

**A lexical environment az alábbiak szerint jön létre:**
* globális lexical environment:
    * globalVar: I am global
    * Outer environment: nincs
* outerFunction lexical environment:
    * outerVar: I am outer
    * Outer environment: globális lexical environment
* innerFunction lexical environment:
    * innerVar: I am inner
    * Outer environment: outerFunction lexical environment

A lexical environment-ek hierarchiája (scope lánc) lehetővé teszi, hogy az innerFunction hozzáférjen mind az outerVar-hoz, mind a globalVar-hoz, mivel ezek a külső lexical environment-ekben találhatók.

**Összefoglalás**
* A lexical environment egy belső adatstruktúra, amely tárolja a változókat és függvényeket egy adott kontextusban.
* A local scope egy magasabb szintű koncepció, amely meghatározza, hogy egy adott függvényen vagy blokkon belül mely változók érhetők el.
* A local scope az adott lexical environment része, és az environment-ek hierarchiája (scope lánc) határozza meg, hogy a változók hogyan érhetők el a kód különböző részein.

**A global environment és global scope közötti különbség**
A global environment és a global scope hasonlóak, de nem teljesen azonos fogalmak.

**Global environment**

A global environment a JavaScript motor belső adatstruktúrája, amely tartalmazza az összes globális változót és függvényt, valamint a globális objektumot (például a window objektumot a böngészőkben). Ez az alapértelmezett környezet, amelyben a JavaScript kód végrehajtódik, mielőtt bármilyen függvényt vagy blokkot meghívnánk.

**A global environment részei:**

* Global object: Egy speciális objektum, amely minden globális változót és függvényt tartalmaz. Böngészőkben ez a window objektum, Node.js-ben a global objektum.
* Global scope: A kód legfelsőbb szintje, amely minden script fájlban elérhető. A globális scope-ban deklarált változók és függvények a global object részeivé válnak.

A global scope a JavaScript program legfelsőbb szintjén található scope, ahol a globális változók és függvények deklarálva vannak. Ez az a kontextus, ahol a kód kezdetben végrehajtódik, és ahol minden változó és függvény alapértelmezés szerint elérhetővé válik a program többi részében.

**Global object**
A global object egy különleges objektum, amely minden globális változót és függvényt tartalmaz. Böngészőkben ez a window objektum, Node.js-ben pedig a global objektum. A global object része a JavaScript környezetnek, és minden globális deklaráció automatikusan hozzáadódik ehhez az objektumhoz.

**1. Globális változók és függvények:**

Minden globális scope-ban deklarált változó és függvény a global object részévé válik. Például, ha deklarálsz egy változót a globális scope-ban, az hozzáadódik a window objektumhoz böngészőkben.

<pre>
var globalVar = 'I am global';
console.log(window.globalVar); // 'I am global'
</pre>
**2. Beépített objektumok:**

A global object tartalmazza a JavaScript beépített objektumait és függvényeit, mint például Math, Date, String, parseInt, stb.

<pre>
console.log(window.Math === Math); // true
</pre>

3. Globális Funkciók: A beépített globális függvények, mint például a setTimeout, setInterval, console, szintén a global object részei.

<pre>
window.setTimeout(() => {
    console.log('Hello, world!');
}, 1000);
</pre>

**Példák:**
<pre>
// globalis valtozok
var globalVar = 'I am global';
let globalLet = 'I am also global';
const globalConst = 'I am still global';
console.log(window.globalVar);  // 'I am global'
console.log(window.globalLet);  // undefined (let és const nem kerül hozzá a window objektumhoz)
console.log(window.globalConst); // undefined

// globlobalis fuggvenyek
function globalFunction() {
    console.log('I am a global function');
}

window.globalFunction(); // 'I am a global function'
</pre>

**Összefoglalás**
* **Global environment:** A JavaScript motor belső adatstruktúrája, amely tartalmazza az összes globális változót, függvényt és a global object-et.
* **Global scope:** A kód legfelsőbb szintje, ahol a globális változók és függvények deklarálva vannak. A global scope-ban deklarált változók és függvények a global object részévé válnak.
* **Global object:** Egy speciális objektum (böngészőkben window, Node.js-ben global), amely minden globális változót, függvényt és beépített objektumot tartalmaz.

A global environment tehát magában foglalja a global scope-ot és a global object-et, amely lehetővé teszi, hogy a JavaScript kód globális változói és függvényei elérhetők legyenek a program bármely részéből.

**Global execution context és a this kulcsszó**

A global execution context a JavaScript motor által létrehozott alapértelmezett végrehajtási környezet, amelyben az összes kód futni kezd. Minden JavaScript program futása során először a globális végrehajtási kontextust hozza létre a JavaScript motor. Ez a kontextus tartalmazza az összes globális változót és függvényt, valamint meghatározza a this kulcsszó értékét.

**A global execution context két fő részből áll:**
* **Global object:** A global object (böngészőkben a window objektum, Node.js-ben a global objektum) tartalmazza az összes globális változót és függvényt.
* **this kulcsszó:** A this kulcsszó a global execution context-ben a global object-re mutat.

**Hogyan Működik a Global Execution Context?**

* **Creation phase (létrehozási fázis):**
    * A JavaScript motor először létrehozza a global execution context-et, mielőtt bármilyen kódot végrehajtana.
    * Az összes globálisan deklarált változó és függvény hozzáadódik a global object-hez.
    * A this kulcsszó a global object-re van állítva.

* **Execution phase (végrehajtási fázis):**
    * A JavaScript motor elkezdi végrehajtani a kódot a global execution context-ben.
    * A változók és függvények értéket kapnak, és a kód végrehajtódik.

<pre>
//pelda a global execution context-re
var globalVar = 'I am global';

function globalFunction() {
    console.log('I am a global function');
}

console.log(globalVar);         // I am global
globalFunction();               // I am a global function
console.log(this === window);   // true (böngészőkben)
</pre>

**A példában:**
* A globalVar és a globalFunction globális változók, amelyek hozzáadódnak a global object-hez.
* A this kulcsszó a global execution context-ben a global object-re (window objektumra) mutat.

**this kulcsszó a global execution context-ben**

A global execution context-ben a this kulcsszó mindig a global object-re mutat. Böngészőkben ez a window objektum, Node.js-ben pedig a global objektum.

<pre>
console.log(this); // window objektumot ad vissza (böngészőkben)
</pre>

**Összefoglalás**

* **global execution context:** A JavaScript motor által létrehozott alapértelmezett végrehajtási környezet, amely tartalmazza az összes globális változót és függvényt, valamint meghatározza a this kulcsszó értékét.
* **global object:** Egy speciális objektum (böngészőkben window, Node.js-ben global), amely tartalmazza az összes globális változót és függvényt.
* **this kulcsszó:** A global execution context-ben a this kulcsszó mindig a global object-re mutat.

Ez az alapértelmezett működési mechanizmus biztosítja, hogy a globális változók és függvények elérhetők legyenek a program bármely részéből, és hogy a this kulcsszó konzisztensen a global object-re mutasson, amikor globális kontextusban használjuk.

Igen, a lexikális scope és a lokális scope (helyi hatókör) lényegében ugyanazt jelentik, de a kifejezések használatában van némi árnyalatnyi különbség.

**Lexikális scope**

A lexikális scope (lexical scope) egy programozási koncepció, amely azt határozza meg, hogy egy változó mely kódrészekből érhető el. A JavaScript egy lexikális scopingot alkalmazó nyelv, ami azt jelenti, hogy a változók elérhetősége a kód írásakor dől el, nem a futási időben.

**Lokális scope**

A lokális scope (local scope) arra utal, hogy egy változó egy adott blokkon vagy függvényen belül van deklarálva, és csak ezen a területen érhető el. Gyakran a lexikális scope egy példájaként használjuk a lokális scope-ot.

<pre>
// pelda lexikalis es lokalis scope-ra
// globális scope
var globalVar = "I am a global variable";

function outerFunction() {
    // Lexikális/lokális scope az outerFunction belsejében
    var outerVar = "I am an outer function variable";
    
    function innerFunction() {
        // Lexikális/lokális scope az innerFunction belsejében
        var innerVar = "I am an inner function variable";
        
        console.log(globalVar); // Elérhető, mert globális
        console.log(outerVar);  // Elérhető, mert az outerFunction lexikális scope-jában van
        console.log(innerVar);  // Elérhető, mert az innerFunction lexikális scope-jában van
    }
    
    innerFunction();
    
    // hiba lesz, mert innerVar csak az innerFunction lexikális scope-jában létezik
    console.log(innerVar);
}

outerFunction();
</pre>

**Magyarázat:**

* **Globális scope:** A globalVar a legfelső szinten van deklarálva, így mindenhol elérhető.
* **Lexikális/lokális scope az outerFunction-ban:** Az outerVar csak az outerFunction-on belül érhető el.
* **Lexikális/lokális scope az innerFunction-ban:** Az innerVar csak az innerFunction-on belül érhető el.

**Konklúzió**

A lexikális scope és a lokális scope gyakran egymással felcserélhetően használt kifejezések, de a lexikális scope technikaiabb kifejezés, amely a kód szervezésének és elérhetőségének szabályaira utal. A lokális scope inkább egy adott blokkon vagy függvényen belüli változó elérhetőségére utal. JavaScript-ben ezek a fogalmak szorosan összefüggnek, és a legtöbb esetben ugyanazt jelentik.

# Webpack
A webpack egy modern JavaScript alkalmazásokat kezelő statikus modulösszeállító eszköz. A fejlesztői világban a Webpacket gyakran használják webes projektjeik összeállítására, mivel képes analizálni az alkalmazás modulstruktúráját, és egy vagy több csomagba gyűjti össze a szükséges fájlokat (JavaScript, CSS, képek, stb.) a böngésző számára. A Webpack segítségével javítható a webes alkalmazások teljesítménye, mivel minimalizálja a szükséges HTTP kérések számát azzal, hogy csökkenti és egyesíti az erőforrásokat.

**A webpack működési elve**
Webpack egy belépési ponttól (entry point) indulva elemzi a projekt fájljait és függőségeit, majd összeállítja (bundle) őket egy vagy több csomagba (bundle), amelyeket a böngésző közvetlenül használhat. Ebben a folyamatban a következő fogalmak kulcsfontosságúak:

* **Belépési pont (entry)**: Az az .js fájl, amelyből a Webpack elkezdi a függőségek elemzését és összeállítását.
* **Kimenet (output)**: A Webpack által létrehozott összeállított fájl(ok) helye és neve.
* **Loader:** A webpack loader-ek lehetővé teszik más típusú fájlok (pl. CSS, HTML, TypeScript, stb.) feldolgozását és átalakítását JavaScript modulokká.
* **Plugin:** Bővíthetőséget nyújtanak a Webpack számára, lehetővé téve a build folyamat testreszabását és kiterjesztését különféle módon.

<pre>
mkdir webpack-example
cd webpack-example
npm init -y
npm install --save-dev webpack webpack-cli webpack-dev-server
</pre>

**Alapvető webpack konfiguráció - webpack.config.js:**

<pre>
const path = require('path');

module.exports = {
    entry: './src/index.js', // Belépési pont
    output: { // Kimenet
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
};
</pre>

**Miért használjuk a webpacket?**
* **Optimalizáció:** A webpack csökkenti a szükséges erőforrások számát és méretét, javítva ezzel az alkalmazás betöltési idejét.
* **Modularitás:** Segít kezelni és összeállítani a projekt függőségeit, támogatva a modern JavaScript modulokat és egyéb eszközöket.
* **Fejlesztői kényelem:** Hot Module Replacement (HMR) és fejlesztői szerver funkciókkal javítja a fejlesztési folyamatot.
* **Testreszabhatóság:** Loader-ek és plugin-ek széles választékát kínálja, amelyekkel testre szabható a build folyamat.

**typescript-hez:**
Kezdjük a ts-loader vagy awesome-typescript-loader telepítésével, amely a TypeScript kód fordításáért felelős loader a Webpack számára. Ezek a loader-ek konvertálják a TypeScript (.ts) fájlokat JavaScriptre (.js), lehetővé téve a Wwbpack számára, hogy a projektet egy összeállított csomagba foglalja.

Telepítsd a szükséges csomagokat npm vagy yarn használatával:
<pre>
npm install --save-dev webpack webpack-cli typescript ts-loader
</pre>

Hozz létre egy tsconfig.json fájlt a projekt gyökérkönyvtárában, hogy konfiguráld a TypeScript fordítót. 
<pre>
{
    "compilerOptions": {
        "outDir": "./dist/",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "allowJs": true
    },
    "include": [
        "./src/**/*"
    ]
}
</pre>

Konfiguráld a Webpacket a webpack.config.js fájlban. Itt adhatod meg, hogy a Webpack használja a ts-loader-t a .ts és .tsx fájlok fordításához:
<pre>
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
};
</pre>

A konfigurációban a entry point jelöli meg, hogy honnan indítsa a függőségek feloldását és összeállítást a Webpack. A module.rules részben a ts-loader-t állítjuk be, hogy kezelje a .ts és .tsx fájlokat. A resolve.extensions lehetővé teszi, hogy importálásnál elhagyjuk a fájlkiterjesztéseket.

**Fejlesztő-szerver**
A fejlesztői élmény javítása érdekében érdemes lehet telepíteni és konfigurálni a webpack-dev-server-t, amely egy élő újratöltő szerver a fejlesztés során:
<pre>
npm install --save-dev webpack-dev-server
</pre>

Ezt követően frissítheted a webpack.config.js fájlt, hogy beállítsd a dev server-t:
<pre>
devServer: {
    contentBase: './dist',
    hot: true,
},
</pre>

**A Webpack dev server futtatása**

Adj hozzá egy scriptet a package.json-hoz a Webpack Dev Server indításához:
<pre>
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack"
}
</pre>

A webpack és a TypeScript együttműködése lehetővé teszi a fejlesztők számára, hogy kihasználják a TypeScript által nyújtott statikus típusellenőrzést és a modern JavaScript szintaxis előnyeit, miközben a Webpack gondoskodik az erőforrások hatékony összeállításáról és szolgáltatásáról. Az ilyen típusú konfigurációval a fejlesztők egy erőteljes és rugalmas környezetet kapnak webalkalmazásaik fejlesztéséhez, teszteléséhez és telepítéséhez.

## Webpack alkalmazása TypeScript projektekben
A Webpack egy erőteljes eszköz a modern webalkalmazások összeállítására, amely lehetővé teszi a fejlesztők számára, hogy optimalizálják és szervezzék projektjeiket. A TypeScript használata a Webpackkel együtt még nagyobb kontrollt és rugalmasságot nyújt a típusellenőrzés és a modern JavaScript szolgáltatások kihasználása során. Itt van néhány gyakorlati példa, hogyan alkalmazhatjuk a Webpacket TypeScript projektekben.

## 1. Projekt inicializálása és konfiguráció
Először is hozzunk létre egy új projektet, inicializáljuk az NPM-et, és telepítsük a szükséges csomagokat:
<pre>
mkdir webpack-ts-demo
cd webpack-ts-demo
npm init -y
npm install --save-dev webpack webpack-cli typescript ts-loader
</pre>

Ezután hozzuk létre a tsconfig.json fájlt a TypeScript konfigurációjához:

<pre>
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "es6",
    "target": "es5",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
</pre>

Következő lépésben hozzuk létre a webpack.config.js fájlt a Webpack konfigurációjához:

<pre>
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
</pre>

## 2. Egy egyszerű TypeScript alkalmazás összeállítása
Hozzunk létre egy src mappát a forráskód számára, és benne egy index.ts fájlt az alábbi tartalommal:

<pre>
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet('World'));
</pre>

Ezután futtassuk a Webpacket a projekt összeállításához:
<pre>
npx webpack
</pre>

## 3. Fejlesztői szerver használata
Telepítsük a webpack-dev-server csomagot a fejlesztés során valódi időben történő frissítésekhez:

<pre>
npm install --save-dev webpack-dev-server
</pre>

Frissítsük a webpack.config.js fájlt, hogy beállítsuk a fejlesztői szervert:

<pre>
devServer: {
  static: './dist',
},
</pre>

Majd adjunk hozzá egy szkriptet a package.json fájlhoz a szerver elindításához:

<pre>
"scripts": {
  "start": "webpack serve --open"
}
</pre>

Ezt követően a npm start parancs futtatásával elindíthatjuk a fejlesztői szervert.

## 4. CSS és stílusok kezelése
Telepítsünk további loader-eket a CSS fájlok kezeléséhez:

<pre>
npm install --save-dev style-loader css-loader
</pre>

Frissítsük a webpack.config.js fájlt, hogy beállítsuk a CSS loader-eket:

<pre>
module: {
  rules: [
    // TypeScript loader
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    // CSS loader
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
}
</pre>

Ez lehetővé teszi számunkra, hogy importáljunk CSS fájlokat közvetlenül a TypeScript fájlokba.

**Webpack dev server és a webpack használata:**

A Webpack dev server kiváló eszköz a fejlesztés során, mivel gyors visszajelzést biztosít a változtatásokról anélkül, hogy manuálisan újra kellene tölteni az oldalt. Azonban a Webpack sokkal több, mint csak egy fejlesztői eszköz. A produkciós környezetben a Webpack segít az alkalmazás optimalizálásában a következőkkel:
* **Minifikálás:** Csökkenti a JavaScript és CSS fájlok méretét.
* **Tree shaking:** Eltávolítja a használaton kívüli kódot.
* **Lazy loading:** Csak akkor tölt be erőforrásokat, amikor szükség van rájuk.
* **Környezeti változók:** Lehetővé teszi különböző beállítások alkalmazását fejlesztési és produkciós környezetben.

# TypeScript projekt létrehozása és indítása NPM segítségével
A TypeScript egy nyílt forráskódú nyelv, amely statikus típusellenőrzést ad a JavaScripthez, lehetővé téve a fejlesztők számára, hogy hatékonyabb és kevésbé hibára hajlamos kódot írjanak nagyméretű alkalmazásokhoz. Az NPM (Node Package Manager) segítségével egyszerűen kezelhetjük a projekt függőségeit, automatizálhatjuk a fejlesztési folyamatokat és könnyedén inicializálhatunk és indíthatunk TypeScript projekteket. Lássuk, hogyan hozhatunk létre és indíthatunk el egy TypeScript projektet az NPM segítségével.

## 1. Projekt inicializálása
Először hozzunk létre egy új könyvtárat a projekthez, majd inicializáljuk az NPM projektet:
<pre>
mkdir my-typescript-project
cd my-typescript-project
npm init -y
</pre>
Az npm init -y parancs gyorsan létrehoz egy package.json fájlt az alapértelmezett beállításokkal.

## 2. TypeScript és további függőségek telepítése
Telepítsük a TypeScriptet és más szükséges függőségeket (például a fordításhoz szükséges eszközöket) az NPM segítségével:
<pre>
npm install typescript --save-dev
npm install ts-node --save-dev
</pre>
A ts-node egy eszköz, amely lehetővé teszi TypeScript fájlok közvetlen futtatását Node.js környezetben, anélkül, hogy előzetesen JavaScriptre kellene őket fordítani.

## 3. TypeScript konfigurációs fájl létrehozása
A TypeScript projekt megfelelő működéséhez szükség van egy tsconfig.json fájlra, ami a fordítási beállításokat tartalmazza. Létrehozhatjuk ezt a fájlt manuálisan, vagy használhatjuk a TypeScript CLI-t a sablon létrehozásához:
<pre>
npx tsc --init
</pre>
Ez a parancs létrehoz egy alap tsconfig.json fájlt, amelyet szükség esetén testreszabhatunk.

## 4. Egy egyszerű typeScript fájl létrehozása
Hozzunk létre egy egyszerű TypeScript fájlt a projektünkben, például index.ts néven, és írjunk bele egy egyszerű kódot:
<pre>
// index.ts
const hello = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(hello("World"));
</pre>

## 5. Szkriptek Definiálása a package.json Fájlban
A package.json fájlban definiáljunk egy szkriptet a TypeScript kód futtatásához és egy másikat a kód fordításához:
<pre>
"scripts": {
    "start": "ts-node index.ts",
    "build": "tsc"
}
</pre>
A "start" szkript lehetővé teszi a projekt közvetlen futtatását fejlesztési környezetben.
A "build" szkript lefordítja a TypeScript kódot JavaScriptre.

## 6. Projekt Futtatása és Fordítása
A projekt futtatásához használjuk az alábbi parancsot:
<pre>
npm start
</pre>

A projekt fordításához és a JavaScript fájlok generálásához használjuk a következő parancsot:
<pre>
npm run build
</pre>
Ez a folyamat létrehoz egy dist könyvtárat (vagy bármilyen más, a tsconfig.json fájlban meghatározott könyvtárat) a lefordított JavaScript fájlokkal.

**Összegzés:**
A TypeScript és az NPM kombinálása lehetővé teszi a fejlesztők számára, hogy kihasználják a TypeScript nyújtotta előnyöket, mint az erős típusellenőrzés és az objektum-orientált programozási képességek, miközben fenntartják a projekt függőségeinek könnyű kezelhetőségét és automatizálhatják a fejlesztési folyamatokat. Az NPM segítségével egyszerűen inicializálhatunk, konfigurálhatunk és futtathatunk TypeScript projekteket, növelve ezzel a fejlesztési folyamat hatékonyságát és a kód minőségét.

# String literal
A TypeScript egyik erős funkciója a szöveges literálok (string literals) használata, amely lehetővé teszi, hogy egy változó vagy paraméter lehetséges értékeinek készletét szigorúan korlátozzuk. Ez a funkció javítja a kód olvashatóságát és biztonságát, mivel előre definiálható, hogy milyen szöveges értékeket fogadhat el egy változó vagy függvény.

A string literal típus egy konkrét szöveges értéket jelent, nem pedig bármely szöveget, mint a string típus. A string literálok segítségével konkrét értékeket adhatunk meg egy változónak, így a TypeScript fordító csak azokat a specifikus értékeket fogadja el, amelyeket előzetesen megadtunk.

<pre>
let myDirection: "north" | "south" | "east" | "west";
myDirection = "north"; // Érvényes
myDirection = "up"; // Fordítási hiba, mivel "up" nem része a lehetséges értékeknek
</pre>
A példában a myDirection változónak csak négy lehetséges értéke lehet: "north", "south", "east", vagy "west". Bármely más érték hozzárendelése fordítási hibát eredményez.

**Előnyök**
**Típusbiztonság:** A string literálok használata biztosítja, hogy csak előre definiált értékek kerüljenek a kódunkba, így csökkentve a futásidejű hibák esélyét.
**Autokompletálás:** A fejlesztői környezetek képesek felismerni a lehetséges értékeket, így gyorsítva a fejlesztési folyamatot az autokompletálás funkcióval.
**Kód olvashatósága:** A string literálok egyértelműen kommunikálják, milyen értékek használhatók, így javítva a kód olvashatóságát és karbantarthatóságát.

**Összetett használat**

String literálok összetettebb típusokkal is kombinálhatók, például unió típusokkal vagy objektumokkal, hogy még szigorúbb típusellenőrzést biztosítsanak.

**Objektumok:**
<pre>
type ButtonSize = "small" | "medium" | "large";
type Button = {
  text: string;
  size: ButtonSize;
};

const myButton: Button = {
  text: "Click me",
  size: "medium" // Csak a "small", "medium" vagy "large" értékek érvényesek
};
</pre>

**Gyakori használati esetek:**

* **Konfigurációs értékek:** Amikor egy korlátozott értékkészletből választhatunk, például API végpontok környezeti beállításainál.
* **UI komponensek:** Gombok méretei, színsémák vagy elrendezési módok meghatározásakor.
* **Routing:** Útvonalak definiálásakor webalkalmazásokban, ahol az útvonalak szigorúan meghatározottak.

A string literálok használata tehát egy rendkívül hasznos eszköz a TypeScript arzenáljában, amely hozzájárul a kód minőségének javításához azzal, hogy elősegíti a típusbiztonságot és a kód karbantarthatóságát.

# Template literal types a TypeScriptben

A Template literal types a TypeScript egyik haladó funkciója, amely a sztring literál típusokon alapul és képes bővíteni azokat uniók segítségével számos sztringgé. A template literal types ugyanazt a szintaxist használja, mint a JavaScript template literal stringjei, de típus pozíciókban használva. Amikor konkrét literál típusokkal használják, a template literal egy új sztring literál típust hoz létre a tartalmak konkatenálásával.

## 1. Alapvető használat:
<pre>
type World = "world";
type Greeting = `hello ${World}`; // "hello world"
</pre>

Ebben az esetben egy új sztring literál típust hoztunk létre, amely egy másik literál típus értékét összekapcsolja egy szöveggel.

## 2. Uniók használata:

Amikor egy uniót használunk az interpolált pozícióban, a típus az összes lehetséges sztring literál típus halmaza lesz, amelyet az unió minden tagja képviselhet:
<pre>
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
</pre>

Az interpolált pozíciókban az uniók keresztszorzatot képeznek, így minden lehetséges kombináció előállításra kerül.

## 3. Sztring uniók típusokban:

A template literálok ereje akkor mutatkozik meg, amikor egy új sztringet definiálunk egy típuson belüli információk alapján. Például, ha egy függvény (pl. makeWatchedObject) egy új on() függvényt ad hozzá egy átadott objektumhoz, amely eseményneveket és visszahívó függvényeket fogad:
<pre>
type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
</pre>

Ezzel a megközelítéssel biztosíthatjuk, hogy az eseménynevek korlátozva legyenek az objektum attribútumainak uniójára, "Changed" végződéssel.

**Típusinferencia template literálokkal**

A template literál típusok lehetővé teszik, hogy a visszahívó függvény argumentumának típusa ugyanaz legyen, mint az attribútum típusa, amelyen az esemény bekövetkezett:
<pre>
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};
</pre>

**Beépített string manipulációs típusok**

A TypeScript beépített típusokat is tartalmaz a sztringek manipulációjához, mint például Uppercase, Lowercase, Capitalize, és Uncapitalize, amelyek segítségével nagy teljesítményű és kifejező típusdefiníciókat hozhatunk létre.

A template literal types kiterjeszti a TypeScriptben a sztring literál típusok rugalmasságát, lehetővé téve számunkra, hogy összetett típusokat hozzunk létre az alkalmazásunk specifikus igényeihez. Ezek a típusok különösen hasznosak dinamikus attribútumnevek, eseménynevek vagy akár az API végpontok címének összeállításához, miközben fenntartják a szigorú típusellenőrzést és növelik a kód olvashatóságát.

# Indexelt hozzáférésű típusok a TypeScriptben
Az indexelt hozzáférésű típusok lehetővé teszik egy adott tulajdonság típusának megkeresését egy másik típuson belül a TypeScriptben. Ezzel a módszerrel pontosan le tudjuk kérdezni egy objektum vagy tömb egy adott elemének a típusát.

## 1. Alapvető használat:
<pre>
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // number
</pre>
A példában az Age típusa number, mivel az age kulcs a Person típusban number típusú.

## 2. Uniók és a keyof operátor:
Az indexelt hozzáférésű típusok uniók és a keyof operátor segítségével is használhatók, ami még rugalmasabbá teszi a típusok kezelését.
<pre>
type I1 = Person["age" | "name"]; // string | number
type I2 = Person[keyof Person]; // string | number | boolean
</pre>

Az I1 típusa string | number, mivel az age és name tulajdonságok típusai. Az I2 minden lehetséges Person típusú tulajdonság típusának uniója.

## 3. Hiba nem létező tulajdonság indexelésekor:
Ha egy nem létező tulajdonságot próbálunk indexelni, a TypeScript hibát jelez.
<pre>
type I1 = Person["alve"]; // Hiba: Property 'alve' does not exist on type 'Person'
</pre>

## 4. Tömbelemek típusának indexelése (haladó használat):

Az indexelt hozzáférésű típusok tömbök esetében is használhatók, lehetővé téve egy tömb elemének típusának kinyerését.
<pre>
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];
type Age = Person["age"]; // number
</pre>

A typeof operátorral kombinálva kinyerhetjük egy literális tömb elemének típusát, majd indexeléssel hozzáférhetünk egy adott tulajdonság típusához.

## 5. Változók használata indexeléshez (korlátozás):

Csak típusok használhatók indexelésre, tehát nem lehet const változót használni változó referencia létrehozására indexelés során.
<pre>
const key = "age";
type Age = Person[key]; // Hiba: Type 'key' cannot be used as an index type.
</pre>

Ezzel szemben egy típusalias használható hasonló refactorálási stílushoz:
<pre>
type key = "age";
type Age = Person[key]; // number
</pre>

Az indexelt hozzáférésű típusok nagyon hasznos eszközök a TypeScript arzenáljában, mivel lehetővé teszik a típusok dinamikus lekérdezését és manipulálását. Ezzel a módszerrel növelhetjük a kód típusbiztonságát, miközben rugalmasan kezelhetjük az adatstruktúrákat.

# Optional chaining

Az Optional Chaining egy hasznos nyelvi jellemző a TypeScriptben, amely megjelent a 3.7-es verzióban. Ez a funkció lehetővé teszi a fejlesztők számára, hogy biztonságosan hivatkozzanak egy objektum mélyen elhelyezkedő tulajdonságaira vagy metódusaira anélkül, hogy minden lépésben ellenőrizniük kellene, hogy az adott részobjektum létezik-e. Az Optional Chaining használatával elkerülhetők a hosszú és bonyolult ellenőrzések, valamint a potenciálisan hibás undefined vagy null értékek miatti futásidejű hibák.

Az **Optional chaining operátort** a ?. jelképezi. Ezt közvetlenül azon objektum után kell helyezni, amelynek létezését biztonságosan ellenőrizni szeretnénk, mielőtt hozzáférnénk egy tulajdonságához vagy metódusához.
<pre>
obj?.prop      // obj objektum prop tulajdonsága
obj?.[expr]    // obj objektum expr kifejezéssel indexelt tulajdonsága
obj?.func()    // obj objektum func metódusának hívása
</pre>

**Tulajdonságok elérése**
<pre>
interface User {
  info?: {
    name?: string;
    address?: {
      street?: string;
      city?: string;
    };
  };
}

const user: User = {};

// Hagyományos módszer
const streetName = user.info ? user.info.address ? user.info.address.street : undefined : undefined;

// Optional chaining használata
const streetNameWithOptionalChaining = user.info?.address?.street;
</pre>

Az Optional chaining biztosítja, hogy csak akkor próbáljuk meg elérni az address és street tulajdonságokat, ha az info és address objektumok valóban léteznek. Ha bármelyik lépésben null vagy undefined értékkel találkozik, a kifejezés értéke azonnal undefined lesz, így elkerülve a TypeError kivételeket.

**Metódus hívások**
<pre>
const result = obj.customMethod?.();
</pre>

Ebben az esetben a customMethod metódus csak akkor hívódik meg, ha létezik. Ha obj null vagy undefined, vagy ha obj-nek nincs customMethod nevű metódusa, a kifejezés értéke undefined lesz, anélkül, hogy hiba keletkezne.

Az Optional chaining használatakor figyelembe kell venni, hogy a kifejezés értéke undefined lehet, ha a láncolat bármely pontján megszakad. Ennek megfelelően kell kezelni az ilyen eseteket. Az Optional chaining nem helyettesíti a típusellenőrzést vagy az alapos ellenőrzéseket abban az esetben, ha az adott tulajdonság vagy metódus létezése kritikus a program működése szempontjából.

# Nullish coalescing
A Nullish coalescing operátor (??) egy logikai operátor a TypeScriptben, amely lehetővé teszi, hogy egy alapértelmezett értéket adjunk meg egy változónak, ha annak értéke null vagy undefined. Ez a funkció különösen hasznos olyan esetekben, amikor biztosítani szeretnénk, hogy egy változó ne legyen null vagy undefined, de elfogadható, ha más "falsy" értékeket (false, 0, "", stb.) tartalmaz.

<pre>
let eredmeny = kifejezes ?? alapertelmezettErtek;
</pre>
Ha a kifejezes értéke null vagy undefined, akkor az eredmeny a alapertelmezettErtek lesz. Ellenkező esetben az eredmeny a kifejezes értékét veszi fel.

## Alapértelmezett érték használata
<pre>
const nev = null;
const udvozlet = nev ?? "Ismeretlen felhasználó"; // "Ismeretlen felhasználó"
// Ha 'nev' értéke 'null' vagy 'undefined', akkor 'udvozlet' "Ismeretlen felhasználó" lesz.
</pre>

A példában, ha a nev változó értéke null vagy undefined, akkor az udvozlet változó értékéül az "Ismeretlen felhasználó" sztring kerül.

## Összehasonlítás a logikai OR operátorral (||)
A nullish coalescing operátor hasonlóan működik a logikai OR (||) operátorhoz, de van egy fontos különbség: a || operátor "falsy" értékek esetén is az alapértelmezett értéket adja vissza, míg a ?? csak null vagy undefined esetén.
<pre>
const falsyErték = 0;
const eredményVAGY = falsyErték || "alapértelmezett"; // "alapértelmezett"
const eredményNullish = falsyErték ?? "alapértelmezett"; // 0
// A 'falsyErték' 0, ami egy falsy érték, így a '||' operátor az "alapértelmezett" értéket adja, míg a '??' operátor a 0-t adja vissza.
</pre>

A példában látható, hogy a || operátor a "falsy" (0) érték helyett az "alapértelmezett" sztringet adja vissza, míg a ?? operátor a változó tényleges értékét (0) adja vissza, mivel az nem null vagy undefined.

A Nullish Coalescing operátor használatakor fontos megérteni, hogy csak null vagy undefined esetén adja vissza az alapértelmezett értéket. Ezzel szemben a logikai VAGY operátor minden "falsy" érték esetén (pl. false, 0, "", NaN) az alapértelmezett értéket adja vissza. Ez a funkció különösen hasznos lehet alapértékek beállítására, opcionális paraméterek kezelésére, vagy akár konfigurációs objektumokban az alapértelmezett beállítások megadására.

# package.json
A package.json fájl egy alapvető eleme minden Node.js projektnek, beleértve a TypeScript projekteket is. Ez a fájl tartalmazza a projekt metaadatjait és konfigurációs beállításait, beleértve a függőségeket, szkripteket, és egyéb konfigurációkat. Nézzük meg részletesen a megadott package.json tartalmát:

* **"name": "sg-01":** A projekt neve. Ezt az azonosítót használják más projektek, ha ezt a projektet mint függőséget akarják felhasználni.
* **"version": "1.0.0":** A projekt aktuális verziószáma. A verziókövetés a Semantic Versioning (SemVer) szabvány szerint történik.
* **"description": "":** A projekt rövid leírása. Jelen esetben ez üres.
* **"main": "dist/index.js":** A projekt belépési pontját jelöli. Ez azt jelenti, hogy ha a projektet mint egy modult használják, ez a fájl lesz meghívva.
* **"type": "module":** Ez jelzi, hogy a projekt ES modulokat használ. Ez lehetővé teszi az ECMAScript modulok (pl. import és export utasítások) használatát a projektben.
* **"scripts":** Egy objektum, amely különböző npm szkripteket definiál, amelyeket a npm run script paranccsal lehet futtatni:
    * **"start": "npm run build && node --experimental-specifier-resolution=node ./dist/index.js":** Először lefordítja a TypeScript kódot JavaScriptre (tsc), majd futtatja a lefordított kódot a Node.js környezetben.
    * **"build": "tsc":** Lefordítja a TypeScript kódot JavaScriptre a TypeScript Compiler (tsc) segítségével.
    * **"serve": "node --experimental-specifier-resolution=node ./dist/index.js":** Futtatja a Node.js környezetben a lefordított JavaScript kódot.
    * **"test": "echo \"Error: no test specified\" && exit 1":** Egy placeholder szkript a tesztekhez, jelenleg csak egy hibaüzenetet ír ki, mivel nincsenek tesztek meghatározva.
* **"keywords": []:** A projektet leíró kulcsszavak tömbje, amelyek segítenek a projekt felfedezésében, például egy npm keresés során.
* **"author": "":** A projekt szerzőjének neve. Jelenleg üres.
* **"license":** "ISC": A projekt licencét jelöli. Az ISC egy nyílt forráskódú licenc, amely hasonló a MIT licenchez.
* **"devDependencies":** Fejlesztési függőségek objektuma, amelyek csak fejlesztés közben szükségesek, nem pedig a projekt futtatásakor:
    * **"ts-node": "^10.9.2":** Egy eszköz, amely lehetővé teszi TypeScript kód futtatását közvetlenül, a kód előzetes lefordítása nélkül.
    * **"typescript": "^5.3.3":** A TypeScript nyelv kompilátorának a függősége, ami szükséges a TypeScript kód JavaScriptre való lefordításához.

# A TypeScript komponensei
A TypeScript egy erőteljes nyelv, amely a JavaScriptre épül, hozzáadva típusellenőrzést és más fejlesztői eszközöket, hogy segítse a fejlesztőket a hibák korai felfedezésében és a kód karbantarthatóságának javításában. A TypeScript belsőleg három fő rétegre oszlik, amelyek mindegyike további alrétegekre vagy komponensekre bontható. Ezek a rétegek a következők:

1. Nyelv (Language)
2. TypeScript Fordító (The TypeScript Compiler)
3. TypeScript Nyelvi Szolgáltatások (The TypeScript Language Services)

## Nyelv
Ez a réteg magában foglalja a TypeScript nyelvi elemeit, mint például a szintaxist, kulcsszavakat és a típusannotációkat. Ezek az elemek alkotják a TypeScript programozási nyelv alapjait, lehetővé téve a fejlesztők számára, hogy statikus típusokat deklaráljanak, ami segít a kód érthetőségében és az esetleges futásidejű hibák számának csökkentésében.

## TypeScript fordító (TSC)
A TypeScript fordító (TSC) átalakítja a TypeScript programokat azok JavaScript kódjává. Ez magában foglalja a TypeScript kód elemzését, típusellenőrzését és a JavaScript kód generálását. Mivel a böngészők nem támogatják közvetlenül a TypeScript kód végrehajtását, ezért a TypeScriptben írt programokat JavaScript kódra kell fordítani, ami támogatott a böngészőkben. A TypeScript fordítót npm csomagként lehet telepíteni helyileg, globálisan vagy mindkettővel. A telepítés után a TypeScript fájlok fordítása a tsc parancs futtatásával történik a parancssorban.

<pre>
$ tsc helloworld.ts   // A 'helloworld.ts' fájlt fordítja 'helloworld.js' fájllá.
</pre>

A TypeScript fordító konfigurációját a tsconfig.json fájl tartalmazza, amely meghatározza, hogyan forduljon a TypeScript kód JavaScriptté.
<pre>
{  
  "compilerOptions": {  
    "declaration": true,  
    "emitDecoratorMetadata": false,  
    "experimentalDecorators": false,  
    "module": "none",  
    "moduleResolution": "node",  
    "noFallthroughCasesInSwitch": false,  
    "noImplicitAny": false,  
    "noImplicitReturns": false,  
    "removeComments": false,  
    "sourceMap": false,  
    "strictNullChecks": false,  
    "target": "es3"  
  },  
  "compileOnSave": true  
}
</pre>

**Deklarációs fájl:**
A TypeScript fordító lehetőséget ad deklarációs fájl (.d.ts) generálására, ami interfészként szolgál a JavaScriptben fordított komponensek számára.

## TypeScript nyelvi szolgáltatások
Ez a réteg további segítséget nyújt a szerkesztőknek és egyéb eszközöknek a fejlesztői élmény javítására, mint például automatizált refaktorálás és IntelliSense. Az itt található szolgáltatások magukban foglalják a kódformázást, színkódolást, kódkiegészítést, aláírás-segítséget és egyebeket.

# TypeScript ambients declarations
A TypeScript "ambient declarations" vagy magyarul "környezeti deklarációk" olyan speciális szintaxisú deklarációk, amelyek lehetővé teszik a fejlesztők számára, hogy meghatározzák a már létező JavaScript kódban, könyvtárakban vagy a böngészői API-kban található változók, függvények, osztályok és modulok típusait anélkül, hogy újra kellene írniuk őket TypeScriptben. Ezek a deklarációk segítenek a TypeScript fordítónak megérteni a meglévő JavaScript kód szerkezetét és típusait, így a fejlesztők kihasználhatják a TypeScript előnyeit, mint a statikus típusellenőrzés és a kód autokompletálása, miközben továbbra is használhatják a meglévő JavaScript kódbázist vagy könyvtárakat.

**szempontok:**
* **Kompatibilitás:** Lehetővé teszik a TypeScript projektjeink integrálását meglévő JavaScript kóddal vagy könyvtárakkal, így nem szükséges a JavaScript kódot átírni TypeScriptre.
* **Típusbiztonság:** Bár a TypeScript a JavaScriptre fordul le, a környezeti deklarációk segítségével biztosíthatjuk, hogy a JavaScript kódunkat típusbiztonságos módon használjuk TypeScriptben.
* **Fejlesztői élmény:** Javítják a fejlesztői élményt, mivel lehetővé teszik a típusellenőrzést, autokompletálást és a dokumentáció elérhetőségét a külső JavaScript könyvtárakhoz.

## 1. Deklarálás a globális változókhoz
Amikor egy külső JavaScript script globális változókat vezet be, használhatunk ambient deklarációkat a típusuk meghatározására:
<pre>
declare var MyLibrary: {
    version: string;
    doSomething(): void;
};
</pre>
Ezzel megmondjuk a TypeScriptnek, hogy van egy MyLibrary nevű globális változónk, aminek van egy version string típusú tulajdonsága és egy doSomething nevű függvénye.

## 2. Modul deklarációk
Amikor egy meglévő NPM csomagot szeretnénk használni, amely nem rendelkezik TypeScript típusdefiníciókkal, deklarálhatunk egy modult az alábbi módon:

<pre>
declare module 'example-package' {
    export function exampleFunction(param: string): void;
}
</pre>
Ez lehetővé teszi, hogy importáljuk és típusbiztonságosan használjuk az example-package csomagot a TypeScript projektünkben.

## 3. Bővítés külső típusdeklarációkkal
Néha szükség lehet arra, hogy kiterjesszünk egy meglévő deklarációt új tulajdonságokkal vagy metódusokkal, hogy jobban illeszkedjen a projektünk igényeihez:
<pre>
declare module 'example-package' {
    interface ExampleInterface {
        newProperty: string;
    }
}
</pre>

**Összefoglalás:**

A TypeScript ambient declarations kritikus eszközök a fejlesztők kezében, amikor a meglévő JavaScript kódbázissal vagy külső könyvtárakkal dolgoznak. Lehetővé teszik a meglévő kód vagy könyvtárak típusbiztonságos használatát anélkül, hogy át kellene írni őket TypeScriptre, így hídverő szerepet töltenek be a JavaScript és a TypeScript világa között. Az ilyen típusú deklarációk használata javítja a fejlesztői élményt, segíti a statikus típusellenőrzést és a kódban való navigációt.

# Szoftvertesztelés
A szoftvertesztelés kulcsfontosságú része a szoftverfejlesztési folyamatnak, amely biztosítja, hogy az alkalmazások megfeleljenek a specifikációknak, hibamentesek legyenek, és hatékonyan működjenek a végfelhasználók számára. Az alábbiakban áttekintjük a szoftvertesztelés alapjait, a különböző tesztelési típusokat, annak szükségességét, valamint a tesztelési megközelítések és elvek fontos aspektusait.

A szoftvertesztelés olyan folyamat, amelynek célja a szoftverhibák azonosítása, dokumentálása és javítása. A tesztelési folyamat során a szoftvert különböző teszteknek vetik alá, hogy ellenőrizzék a funkcionalitást, teljesítményt, megbízhatóságot, biztonságot, és más előre meghatározott követelményeket.

## Tesztelési típusok
* Statikus tesztelés: A kód struktúrájának vizsgálata anélkül, hogy a programot futtatnák.
* Dinamikus tesztelés: A szoftver futtatása során történik, hogy valós körülmények között vizsgálják meg a viselkedését.
* Fekete doboz tesztelés: A belső működés ismerete nélkül, csak a bemenetek és a kimenetek alapján.
* Fehér doboz tesztelés: A tesztelő ismeri a szoftver belső szerkezetét, és ennek alapján végzi a tesztelést.
* Szürke doboz tesztelés: A fekete doboz és a fehér doboz tesztelésének kombinációja.
* Unit tesztelés: Az egyes komponensek, például függvények vagy osztályok izolált tesztelése.
* Integrációs tesztelés: Az egyes komponensek közötti interakciók és adatátvitel tesztelése.
* Rendszer tesztelés: Az egész rendszer tesztelése, hogy megfelel-e a megadott követelményeknek.
* Elfogadási tesztelés: A végfelhasználók által végzett tesztelés, hogy ellenőrizzék, a szoftver kielégíti-e az üzleti igényeket és elvárásokat.

**Miért szükséges a szoftvertesztelés?**
* Hibák azonosítása: Korai szakaszban történő hibák felfedezése csökkenti a javítás költségeit.
* Felhasználói elégedettség: A hibamentes és megbízható szoftver növeli a felhasználói elégedettséget.
* Biztonság: A biztonsági rések azonosítása és javítása elengedhetetlen a felhasználói adatok védelme érdekében.
* Teljesítmény: A szoftver teljesítményének optimalizálása a tesztelési folyamat során.

**Tesztelési megközelítések és elvek**
* Tesztelési piramis: A unit tesztekre, integrációs tesztekre és UI tesztekre vonatkozó ajánlott arányok meghatározása.
* Tesztelési életciklus: A tesztelési tevékenységek tervezése, végrehajtása és értékelése.
* Automatizálás: Az ismétlődő tesztek automatizálása időt és erőforrásokat takaríthat meg.
* Folyamatos integráció és folyamatos szállítás (CI/CD): A tesztelés integrálása a szoftverfejlesztési és kiadási folyamatokba.
* Tesztvezérelt fejlesztés (TDD): A tesztek előzetes megírása a kód fejlesztése előtt.

A szoftvertesztelés mélyreható megértése és a fent említett elvek alkalmazása elengedhetetlen a minőségi szoftvertermékek fejlesztéséhez. A tesztelés nem csupán a hibák kereséséről szól, hanem a termék minőségének és megbízhatóságának biztosításáról is.

## Unit teszt
A unit tesztelés a szoftverfejlesztés legkisebb, izolált komponenseinek tesztelése, általában függvények, eljárások vagy metódusok szintjén. A célja, hogy ellenőrizze, ezek a komponensek helyesen működnek-e a különféle bemeneti értékekre adott elvárt kimenetekkel. A unit tesztelés előnyei közé tartozik:
* Hibák korai felfedezése, ami időt és költségeket takarít meg a fejlesztési ciklus későbbi szakaszaiban.
* A kód módosításainak megkönnyítése, mivel a tesztek biztosítják, hogy a változtatások ne okozzanak nem várt mellékhatásokat.
* Dokumentációként szolgál, mivel a tesztek bemutatják, hogyan van szánva a kód használatra.

## Integrációs teszt
Az integrációs tesztelés során több komponens vagy rendszer egység együttműködését tesztelik, hogy ellenőrizzék, helyesen kommunikálnak-e egymással. Célja a komponensek közötti interfészek és adatátviteli folyamatok hibáinak azonosítása. Az integrációs tesztelés főbb előnyei:
* Azonosítja az interfészek, adatstruktúrák és kommunikációs mechanizmusok potenciális problémáit.
* Biztosítja, hogy a rendszer egészének integrált komponensei megfelelően működjenek együtt.
* Leleplezi azokat a hibákat, amelyek csak a különböző komponensek együttműködése során jelennek meg.

## End-to-end (E2E) teszt
Az end-to-end tesztelés a felhasználói interakciókat utánozza a teljes alkalmazáson vagy rendszeren keresztül, hogy ellenőrizze a folyamatok és a műveletek teljes sorozatát a valós felhasználói forgatókönyvek szerint. Az E2E tesztelés előnyei:
* Valós felhasználói forgatókönyvek alapján teszteli a rendszert, biztosítva annak funkcionalitását a végfelhasználók szempontjából.
* Ellenőrzi a rendszer külső függőségeit, beleértve adatbázisokat, hálózatokat, és külső szolgáltatásokat.
* Felfedi a rendszer teljesítménybeli és biztonsági problémáit a valós környezetben.

## Tesztvezérelt fejlesztés (TDD)
A Tesztvezérelt fejlesztés (TDD) egy iteratív fejlesztési folyamat, ahol a tesztek írása megelőzi a funkcionális kód megírását. A TDD ciklusa a következő lépéseket tartalmazza:
* Teszt írása: Először írjunk egy tesztet, ami meghatározza egy új funkció vagy javítás elvárt viselkedését.
* Teszt futtatása: A teszt eleinte hibát jelez, mivel a megvalósítandó funkció még nem létezik.
* Kód írása: Írjuk meg a lehető legegyszerűbb kódot, ami teljesíti a teszt követelményeit.
* Teszt újrafuttatása: Ellenőrizzük, hogy a teszt most már sikeres-e.
* Refaktorálás: Optimalizáljuk a kódot, miközben biztosítjuk, hogy a tesztek továbbra is sikeresek maradjanak.

A TDD előnyei közé tartozik a magasabb kódminőség, a jobb tervezés, és a kód könnyebb karbantarthatósága. Integrálva az unit, integrációs és E2E teszteléssel, a TDD lehetővé teszi egy robusztus és megbízható szoftverfejlesztési folyamat kialakítását.

A Tesztvezérelt Fejlesztés (TDD) egy olyan szoftverfejlesztési folyamat, amely a tesztek előzetes írását teszi a kódírás középpontjába. A TDD ciklus három fő lépésből áll: a vörös fázis, ahol egy új tesztet írunk, ami eleinte sikertelen; a zöld fázis, ahol megírjuk vagy módosítjuk a kódot, hogy a teszt sikeres legyen; és a refaktor fázis, ahol javítjuk a kód szerkezetét anélkül, hogy megváltoztatnánk a viselkedését. Itt van, hogyan lehet TDD módszertant alkalmazni egy TypeScript projektben, használva az npm-et és egy népszerű tesztelő keretrendszert, például a Jest-et.

**1. Projekt és függőségek inicializálása**

Először hozz létre egy új könyvtárat a projekt számára, inicializáld az npm projektet, és telepítsd a szükséges függőségeket:

<pre>
mkdir tdd-ts-project
cd tdd-ts-project
npm init -y
npm install --save-dev typescript jest ts-jest @types/jest
</pre>

**2. TypeScript és jest konfigurálása**

Konfiguráld a TypeScript-et egy tsconfig.json fájl létrehozásával a projekt gyökérkönyvtárában:
<pre>
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
</pre>

Konfiguráld a Jest-et a TypeScript támogatásához egy jest.config.js fájl létrehozásával:
<pre>
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts']
};
</pre>

**3. Tesztek és kódírás TDD stílusban**

**1. lépés: vörös fázis (sikertelen teszt)**

Hozz létre egy teszt fájlt a src könyvtárban. Tegyük fel, hogy egy egyszerű sum funkciót szeretnél tesztelni. Hozz létre egy sum.test.ts fájlt:
<pre>
// src/sum.test.ts
import { sum } from './sum';

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
</pre>
Ebben a fázisban a sum funkció még nem létezik, így a teszt sikertelen lesz.

**2. lépés: zöld fázis (tedd a tesztet sikeresé!)**

Hozz létre egy sum.ts fájlt a src könyvtárban, és implementáld a sum funkciót:
<pre>
// src/sum.ts
export function sum(a: number, b: number): number {
    return a + b;
}
</pre>

**3.lépés: Refaktor fázis**

Most, hogy a teszt sikeres, lehetőséged van refaktorálni a kódot anélkül, hogy megváltoztatnád a funkció viselkedését. Ez lehet a kód tisztítása, redundanciák eltávolítása vagy a kód olvashatóbbá tétele.

**4.lépés: Tesztek futtatása**
Konfiguráld a package.json fájlt, hogy könnyen futtathass teszteket:
<pre>
"scripts": {
    "test": "jest"
}
</pre>
Futtasd a teszteket a következő paranccsal: npm test

A Jest automatikusan megtalálja és lefuttatja a tesztjeidet, és jelentést ad a sikeres és sikertelen tesztesetekről.

**Összefoglalás:**
A TDD egy erőteljes módszertan, amely segít a kódminőség javításában és a hibák korai szakaszban történő azonosításában. A fenti lépések segítenek a TDD bevezetésében egy TypeScript projektben, használva az npm-et, a TypeScript-et, és a Jest-et mint tesztelő keretrendszert. Ahogy haladsz a projektben, ismételd meg ezeket a lépéseket minden új funkció vagy komponens fejlesztése során, hogy a kódod megbízható és karbantartható maradjon.

## Integrációs tesztelés TS-ben

Typescript projektek esetében az integrációs tesztelés kulcsfontosságú része a minőségbiztosítási folyamatnak, mivel lehetővé teszi a különböző rendszerkomponensek közötti interakciók ellenőrzését valós körülmények között. Az integrációs tesztek segítségével azonosíthatók azok a problémák, amelyek általában csak a komponensek együttes működése során jelennek meg, például interfész inkompatibilitások, adatátviteli hibák, vagy teljesítményproblémák. Több különböző eszköz és keretrendszer áll rendelkezésre a TypeScript projekt integrációs teszteléséhez:

**1. Jest**

A Jest nem csak unit tesztekhez használható hatékonyan, hanem integrációs tesztelésre is. Jest erőssége, hogy könnyen kezelhető mock-okkal és aszinkron hívásokkal, ami lehetővé teszi különböző rendszerkomponensek közötti interakciók tesztelését.
* Előnyök: Könnyű mockolás, aszinkron támogatás, és automatikus tesztfedettség kalkuláció.
* Használat: Integrációs tesztek írásakor gyakran használnak valós API hívásokat helyettesítő mock-okat a függőségek izolálására, így a tesztek gyorsabban és megbízhatóbban futnak.

**2. Supertest**

A Supertest egy népszerű könyvtár, amely kifejezetten Node.js kiszolgálók HTTP interfészeinek tesztelésére szolgál. Ez különösen hasznos, ha integrációs teszteket szeretnénk végrehajtani egy Express vagy Koa alapú REST API-on.
* Előnyök: Könnyű integráció Express, Koa és más Node.js keretrendszerekkel; támogatja a HTTP kérések egyszerű konstruálását és válaszok értékelését.
* Használat: API végpontok tesztelésére, ahol a HTTP kéréseket küldünk és ellenőrizzük a válaszokat, hogy megfelelnek-e a várt eredményeknek.

**3. Cypress**

Cypress egy end-to-end tesztelő keretrendszer, amely integrációs tesztelésre is használható, különösen olyan alkalmazások esetében, ahol a felhasználói felület és a backend közötti interakciókat szeretnénk tesztelni.
* Előnyök: Egyszerű felület tesztelés, valós böngészőkben történő tesztvégrehajtás, és kiváló hibakeresési képességek.
* Használat: Felhasználói interakciók és a backend rendszerek közötti integrációs folyamatok tesztelésére.

**4. Mocha és Chai**

Mocha egy rugalmas tesztelő keretrendszer, míg a Chai egy assertion könyvtár, amelyek együtt kiválóan alkalmasak integrációs tesztek írására.
* Előnyök: Nagyfokú testreszabhatóság, aszinkron tesztelés támogatása, és különböző assertion stílusok (pl. expect, should).
* Használat: Mocha-t használják a tesztelési környezet beállítására, míg Chai-t az eredmények ellenőrzésére.

**Integrációs tesztelési stratégiák**

* **API tesztelés:** Közvetlenül teszteljük az API végpontokat, ellenőrizve a válaszokat és az adatstruktúrákat.
* **Adatbázis integrációs tesztelés:** Ellenőrizzük, hogy az alkalmazás helyesen kommunikál-e az adatbázissal, helyes adatokat ír és olvas.
* **Szolgáltatások közötti integrációs tesztelés:** Teszteljük az alkalmazások közötti interakciókat, különösen mikroszolgáltatások architektúrában.

Az integrációs tesztelés megtervezésekor fontos figyelembe venni a tesztelési környezetet, a függőségek kezelését és az alkalmazás architektúráját, hogy a tesztek valósághűen tükrözzék a termelési környezetet. A fent említett eszközök és stratégiák segíthetnek a TypeScript alapú projektek hatékony integrációs tesztelésének megvalósításában.

## UNIT tesztek
A TypeScriptben a unit tesztelés fontos szerepet játszik a fejlesztési folyamatban, mivel segít azonosítani a hibákat a kód írásának korai szakaszában, javítja a kód minőségét, és növeli a fejlesztési hatékonyságot. Több különböző tesztelő keretrendszer és könyvtár áll rendelkezésre TypeScriptben a unit teszteléshez, amelyek mindegyike egyedi funkciókat és előnyöket kínál.

**1. Jest**

* Leírás: A Jest egy népszerű JavaScript tesztelő keretrendszer, amely kiválóan alkalmas TypeScript projektekhez is. Kiemelkedik az egyszerű konfiguráció, a gyors végrehajtási sebesség, és a beépített kódlefedettségi eszközök miatt.
* Előnyök: Automatikus mockolás, könnyen írható és érthető tesztek, valamint integrált kódlefedettség.
<pre>
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
</pre>

**2. Mocha**

* Leírás: A Mocha egy rugalmas tesztelő keretrendszer, amely támogatja az aszinkron tesztelést és a kiváló hibajelentést. Széles körben használják JavaScript és TypeScript projektekben egyaránt.
* Előnyök: Nagy rugalmasság és konfigurálhatóság, támogatja a többféle assertion könyvtárat, mint például a Chai.
<pre>
import { expect } from 'chai';
import { sum } from './sum';

describe('sum function', () => {
    it('should add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).to.equal(3);
    });
});
</pre>

**3. Jasmine**

* Leírás: A Jasmine egy viselkedésvezérelt fejlesztési keretrendszer (BDD), amely saját assertion könyvtárral rendelkezik, így nem szükséges külső könyvtárakat használni.
* Előnyök: Önálló keretrendszer, amely nem igényel külső könyvtárakat az assertion-ök kezelésére.
<pre>
import { sum } from './sum';

describe('sum function', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});
</pre>

**4. Ava**

* Leírás: Az Ava egy minimalista tesztelő keretrendszer, amely párhuzamos teszt futtatást támogat, így gyorsabb tesztelési időt biztosít.
* Előnyök: Könnyű szintaxis, párhuzamos tesztvégrehajtás, és aszinkron tesztelés támogatása.
<pre>
import test from 'ava';
import { sum } from './sum';

test('sum adds 1 + 2 to equal 3', t => {
    t.is(sum(1, 2), 3);
});
</pre>

## Mocha projekt létrehozása és konfigurálása TypeScriptben
A Mocha egy rendkívül népszerű és rugalmas tesztelő keretrendszer, amely széles körben alkalmazható JavaScript és TypeScript projektekben egyaránt. A Mocha előnyei közé tartozik a nagyfokú rugalmasság, konfigurálhatóság, az aszinkron tesztelés támogatása, valamint a kiváló hibajelentési képesség. A Chai assertion könyvtárral kombinálva erőteljes tesztelési környezetet biztosít, amely segít megbizonyosodni a kód helyességéről.

**1. Projekt inicializálása**

Hozzon létre egy új mappát a projekt számára, és inicializálja a Node.js projektet:
<pre>
mkdir my-mocha-project
cd my-mocha-project
npm init -y
</pre>

**2. TypeScript és mocha telepítése**

Telepítse a TypeScriptet, a Mochát, a Chait, és a szükséges TypeScript típusdefiníciókat a projektbe mint fejlesztői függőségeket:
<pre>
npm install typescript mocha chai @types/node @types/mocha @types/chai --save-dev
</pre>

**3. TypeScript konfiguráció**

Hozd létre a tsconfig.json fájlt a TypeScript fordító számára!
<pre>
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist"
    },
    "include": ["src/**/*", "test/**/*"]
}
</pre>

**4. Teszt-konfiguráció és szerkezet**

Hozd létre a src és test mappákat a forráskód és a tesztek számára! 0A tesztek írásához használd a test mappát. A Mocha alapértelmezés szerint a test mappában keres tesztfájlokat.
Hozd létre a src/sum.ts fájlt!
<pre>
export function sum(a: number, b: number): number {
  return a + b;
}
</pre>

Hozd létre a test/sum.test.ts tesztfájlt!

<pre>
import { expect } from 'chai';
import { sum } from '../src/sum';

describe('sum function', () => {
    it('should add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).to.equal(3);
    });
});
</pre>

**5. Tesztelő szkriptek hozzáadása a package.json-hoz**

A package.json fájlban definiálj egy tesztelési szkriptet a Mocha és a TypeScript fordító használatával!

"scripts": {
    "build": "tsc",
    "test": "npm run build && mocha -r ts-node/register 'test/**/*.test.ts'"
}

**6. Tesztek futatása**

Futtasd a teszteket az alábbi paranccsal: <code>npm test</code>

Ez a parancs először lefordítja a TypeScript fájlokat JavaScriptre, majd futtatja a Mocha teszteket a test mappában található .test.ts fájlokon.

## Jasmine unit teszt
A Jasmine keretrendszer használata egy egyszerű TypeScript projektben az npm (Node Package Manager) segítségével viszonylag egyszerű. Az alábbi lépések végigvezetnek egy alapvető projekt létrehozásán, Jasmine és TypeScript beállításán, majd egy egyszerű unit teszt írásán és futtatásán.

**1. Projekt inicializálása**

Először hozzunk létre egy új könyvtárat a projektünk számára, és inicializáljuk az npm projektet:
<pre>
mkdir jasmine-typescript-example
cd jasmine-typescript-example
npm init -y
</pre>
Ez létrehoz egy package.json fájlt az alapértelmezett konfigurációval.

**2. TypeScript és jasmine telepítése**

Telepítsük a TypeScript, Jasmine, és a szükséges típus definíciókat az npm használatával:
<pre>
npm install --save-dev typescript jasmine @types/jasmine ts-node
</pre>

**3. TypeScript konfiguráció**

Hozzunk létre egy tsconfig.json fájlt a projekt gyökérkönyvtárában, ami tartalmazza a TypeScript konfigurációt:
<pre>
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true
    },
    "include": ["src/**/*"]
}
</pre>
Ez a konfiguráció a TypeScript kódot az src könyvtárból a dist könyvtárba fordítja.

**4. Jasmine konfiguráció**

Hozzunk létre egy jasmine.json konfigurációs fájlt a Jasmine számára a projekt gyökérkönyvtárában:
<pre>
{
    "spec_dir": "dist",
    "spec_files": [
        "**/*[sS]pec.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": false
}
</pre>
Ez a konfiguráció azt állítja be, hogy a Jasmine a dist könyvtárban lévő, spec.js végződésű fájlokat teszteli.

**5. Teszt környezet előkészítése**

Hozzunk létre egy src könyvtárat a TypeScript forráskód számára, és írjunk egy egyszerű funkciót valamint egy tesztet:
<pre>
// src/sum.ts:

export function sum(a: number, b: number): number {
    return a + b;
}

// src/sum.spec.ts:

import { sum } from './sum';

describe("sum function", () => {
    it("should add two numbers correctly", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
</pre>

**6. Teszt fordítása és futtatása**

Először fordítsuk le a TypeScript kódot: <code>npx tsc</code>
Ez létrehozza a JavaScript kódot a dist könyvtárban.

Most futtassuk a teszteket a Jasmine segítségével: <code>npx jasmine</code>
Ha minden jól ment, látnunk kell a teszteredményeket a konzolon, ami megerősíti, hogy a sum funkció tesztje sikeresen lefutott.

**7. Szriptek hozzáadása a package.json-hoz**

A tesztelési folyamat egyszerűsítése érdekében hozzáadhatjuk a fordítási és tesztelési lépéseket a package.json szkriptjei közé:
<pre>
"scripts": {
  "build": "tsc",
  "test": "tsc && jasmine"
}
</pre>
Ezután a npm run build parancs lefordítja a TypeScript kódot, és a npm test parancs lefordítja, majd lefuttatja a teszteket.

## Cypress TS integrációs teszt projekt

A Cypress egy erőteljes, de egyszerűen használható end-to-end tesztelő keretrendszer webes alkalmazásokhoz. A Cypress beállítása és használata egy npm-alapú projektben viszonylag egyszerű folyamat. Alább lépésről lépésre bemutatom, hogyan hozható létre egy egyszerű Cypress tesztelési környezet egy új vagy meglévő npm projektben.

**1. Projekt inicializálása**

Ha még nem rendelkezel npm projektel, hozd létre az alapokat a következő parancsokkal:
<pre>
mkdir cypress-example
cd cypress-example
npm init -y
</pre>

**2. Cypress telepítése**

Telepítsd a Cypress-t a projektbe mint fejlesztői függőség:
<pre>
npm install cypress --save-dev
</pre>
Ez hozzáadja a Cypress-t a projekt package.json fájljához a devDependencies szekció alá.

**3. Tesztelő környezet előkészítése**

Nyisd meg a package.json fájlt, és adj hozzá egy scriptet a Cypress futtatásához. Ez lehetővé teszi, hogy a npm run parancsokkal egyszerűen indíthass teszteket:
<pre>
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
}
</pre>

**4. Az első Cypress teszt létrehozása**

Indítsd el a Cypress-t az alábbi paranccsal, ami létrehoz egy cypress könyvtárat a projektben, többek között példa tesztekkel: npm run cypress:open

Ez elindítja a Cypress alkalmazást, ahol láthatod a projektstruktúrát és a példa teszteket. Az első teszted létrehozásához navigálj a cypress/integration könyvtárba, és hozz létre egy új fájlt, például sample_spec.js.

**5. Egy egyszerű teszt írása**

Nyisd meg az újonnan létrehozott sample_spec.js fájlt egy szövegszerkesztőben, és írj egy egyszerű tesztet, amely meglátogat egy weboldalt és ellenőrzi annak címét:
<pre>
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
        cy.title().should('include', 'Kitchen Sink')
    })
})
</pre>

**6. Teszt futtatása**

Futtathatod a teszteket két módon:
* **Interaktív módban:** A npm run cypress:open parancsot használva nyisd meg a Cypress GUI-t, ahol manuálisan indíthatod a teszteket.
* **Fejlesztői környezetben:** A npm run cypress:run parancs segítségével futtathatod a teszteket a parancssorban, ami hasznos lehet CI/CD folyamatokban.

**7. Teszteredmények**

A tesztek futtatása után a Cypress részletes jelentést nyújt a teszteredményekről, beleértve a sikeres és sikertelen teszteseteket, valamint a hibák diagnosztikáját.

Miután elsajátítottad az alapokat, érdemes további teszteket írni, hogy teljes körűen lefedd az alkalmazás funkcióit. A Cypress dokumentációja számos további lehetőséget kínál, beleértve:
* Elemszelektorok használata
* Adatkezelés és mockolás
* Tesztelési környezetek konfigurálása

A Cypress egy rendkívül hatékony eszköz a webes alkalmazások teszteléséhez, amely jelentős mértékben javíthatja a fejlesztési folyamatok minőségét és hatékonyságát.

## Cypress kiegészjtése typescript-el

A Cypress használata TypeScripttel valóban erőteljes kombinációt nyújt a webes alkalmazások end-to-end tesztelésére. Ahhoz, hogy a projekt TypeScript-pel működjön, néhány további lépést kell végrehajtani a projekt konfigurálásához.

**1. TypeScript telepítése**

Ha még nem történt meg, telepítsd a TypeScriptet és a Cypress típusdefinícióit a projektbe mint fejlesztői függőségeket: npm install typescript @types/cypress --save-dev

**2. TypeScript konfigurációs fájl létrehozása**

Hozz létre egy tsconfig.json fájlt a projekt gyökérkönyvtárában a TypeScript fordító számára. Ezt a fájlt úgy kell konfigurálni, hogy megfeleljen a Cypress és a TypeScript együttes használatának. Példa egy alap tsconfig.json fájlra, amely kompatibilis a Cypress-szel:
<pre>
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["es5", "dom"],
        "types": ["cypress"],
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist"
    },
    "include": ["cypress/**/*.ts"]
}
</pre>
Ez a konfiguráció biztosítja, hogy a TypeScript tudja, hol találhatóak a teszt fájlok, és beállítja a megfelelő típusdefiníciókat a Cypress használatához.

**3. Teszt fájlok átnevezése .ts kiterjesztésre**

Módosítsd az összes teszt fájlt a cypress/integration könyvtárban, hogy .ts kiterjesztést használjanak, biztosítva a TypeScript szintaxisának használatát. Például, sample_spec.js átnevezése sample_spec.ts-re.

**4. Teszt fájlok írása TypeScriptben**

Írd meg vagy módosítsd a teszt fájlokat, hogy TypeScript szintaxist használjanak. A korábban megadott példát TypeScriptben így lehet megfogalmazni:
<pre>
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
        cy.title().should('include', 'Kitchen Sink')
    });
});
</pre>

**5. Cypress konfigurációs fájl frissítése**

Ha szükséges, hozz létre vagy frissíts egy cypress.json konfigurációs fájlt a projekt gyökérkönyvtárában, hogy specifikus beállításokat adj meg a Cypress futtatásához. Ebben a fájlban adhatsz meg ilyen beállításokat, mint a tesztek futtatásának alapértelmezett URL-je, környezeti változók, stb.

**6. A TypeScript tesztek futtatása**

Miután minden szükséges konfigurációt elvégeztél, a TypeScript tesztek futtatásához használhatod a korábban definiált npm szkripteket:
* **Interaktív módban:** npm run cypress:open
* **Parancssorból:** npm run cypress:run

Ezek a lépések lehetővé teszik, hogy teljes mértékben kihasználd a TypeScript által nyújtott előnyöket a Cypress tesztjeid írása és futtatása során, javítva a kód minőségét és a fejlesztési folyamat hatékonyságát.

A Cypress tesztek eredményét többféleképpen is megtekintheted, attól függően, hogy interaktív módban vagy parancssorból futtatta a teszteket. Itt van, hogyan érheti el az eredményeket mindkét esetben:

**Interaktív módban (cypress test runner)**

Amikor a npm run cypress:open parancsot használva interaktív módban futtatja a teszteket, a Cypress Test Runner egy grafikus felhasználói felületet nyit meg, ahol:

* **Tesztek kiválasztása:** Elindítás után válassza ki a futtatni kívánt tesztesetet vagy tesztszettet. A Test Runner megjeleníti az összes elérhető tesztfájlt a projektben.
* **Tesztek futtatása:** Miután kiválasztotta a kívánt teszteket, a Cypress automatikusan végrehajtja őket a választott böngészőben.
* **Eredmények megtekintése:** A tesztek futtatása közben valós időben láthatja az eredményeket, beleértve a sikeres és sikertelen teszteseteket. Minden teszteset eredménye mellett részletes információ jelenik meg, pl. a sikeres állítások és az esetleges hibák leírása.

**Parancssorból (Headless mode)**

Amikor a npm run cypress:run parancsot használva parancssorból futtatja a teszteket (headless módban), a Cypress a háttérben, grafikus felület nélkül futtatja le a teszteket, és a következő információkat nyújtja:

* **Tesztek futtatása:** A parancs kiadása után a Cypress elkezdi a tesztek automatikus futtatását, jellemzően a headless Chrome böngészőben (vagy a konfigurációban megadott egyéb böngészőben).
* **Eredmények a konzolon:** Miután befejeződött a tesztek futtatása, a Cypress kiírja az eredményeket közvetlenül a konzolra. Itt láthatja az összes futtatott tesztet, beleértve a sikereseket és a sikerteleneket, valamint részletes információkat kap a hibákról és a végrehajtási időkről.
* **Videó és képernyőképek:** Ha konfigurálva van, a Cypress automatikusan generál videókat és képernyőképeket a sikertelen tesztesetekről, amelyek segítenek a hibák diagnosztizálásában. Ezeket az állományokat a projekt cypress/videos és cypress/screenshots könyvtáraiban találja meg.

**További erőforrások:**

* **Cypress Dashboard:** A Cypress Dashboard egy webes felület, amely részletes betekintést nyújt a tesztek futtatásába és eredményeibe, lehetővé téve a tesztek nyomon követését és elemzését csapatok számára. A Dashboard használatához regisztrálnia kell a Cypress oldalán, és konfigurálnia kell a projektet a Dashboard használatához.
* **CI/CD integráció:** Integrálhatja a Cypresst a CI/CD folyamatokba (pl. GitHub Actions, Jenkins), ahol a teszteredmények részletes jelentései automatikusan elérhetők lesznek a CI/CD eszközben vagy a kapcsolódó Dashboard-on.


## Mocha - Cypress különbségek

A Mocha és a Cypress két különböző tesztelési keretrendszer, amelyek eltérő felhasználási esetekre és tesztelési szükségletekre lettek tervezve a szoftverfejlesztési ciklus során. Mindkettő népszerű választás a JavaScript-alapú projektekben, de különböző típusú tesztelési feladatokat céloznak.

**Mocha**
* Típus: Mocha egy rugalmas unit tesztelő keretrendszer, amely elsősorban az alkalmazás logika és funkciók izolált tesztelésére használható. Támogatja az aszinkron tesztelést, és széles körben alkalmazható mind frontend, mind backend JavaScript környezetekben.
* Felhasználási esetek: Mocha-t általában unit tesztek és integrációs tesztek írására használják, ahol az egyes komponenseket izoláltan vagy egymással együttműködve tesztelik.
* Kiegészítők: Mocha alapvetően csak a teszt futtatási keretrendszert biztosítja, így gyakran használják együtt assertion könyvtárakkal (pl. Chai, Should.js, Expect), mockolási eszközökkel és spy könyvtárakkal a tesztelési szükségletek kielégítésére.

**Cypress**
* Típus: Cypress egy end-to-end (E2E) tesztelő keretrendszer, amely a teljes alkalmazás felhasználói felületének tesztelésére lett kifejlesztve egy valós vagy emulált böngészőben. Automatizált felhasználói interakciókat szimulál, hogy megvizsgálja az alkalmazás viselkedését a végfelhasználói szempontból.
* Felhasználási esetek: Cypress-t általában E2E tesztek, felhasználói felület tesztek, és néha integrációs tesztek írására használják, ahol az alkalmazás teljes stackjét együtt tesztelik a felhasználói interakciók szimulálásával.
* Kiegészítők: Cypress egy önálló tesztelési keretrendszer, amely beépített assertion könyvtárral, valamint kiterjedt API-val rendelkezik a DOM manipuláció, hálózati kérések lekövetése, és felhasználói események (kattintások, billentyűleütések) szimulálására.

**Főbb különbségek**
* Tesztelési szint: Mocha-t unit és integrációs tesztelésre használják, míg a Cypress az end-to-end, UI és funkcionális tesztelésre van optimalizálva.
* Tesztelési környezet: Mocha a Node.js környezetben futtatja a teszteket, így alkalmas backend és egyszerű frontend tesztelésre is. Ezzel szemben a Cypress valós böngészőkörnyezetben futtatja a teszteket, ami lehetővé teszi a felhasználói interakciók pontosabb szimulálását.
* Konfiguráció és használat: Cypress magasabb szintű keretrendszert biztosít, amely könnyebben használható kezdők számára is a beépített felhasználói felület és a kiterjedt dokumentáció révén. Mocha esetében gyakran szükség van kiegészítő könyvtárakra a teljes tesztelési funkciókészlet eléréséhez.

# TypeScript migráció

A TypeScript migráció a folyamat, amely során egy meglévő JavaScript projektet vagy kódbázist átalakítanak TypeScript-re, egy JavaScript szuperszett nyelvre, amely statikus típusokat ad a nyelvhez. Ez a migráció lehetővé teszi a fejlesztők számára, hogy kihasználják a TypeScript biztosította előnyöket, mint például a jobb hibakezelés, a kód olvashatóságának és karbantarthatóságának javítása, valamint a fejlesztési folyamat során a típushibák korai észlelése. A TypeScript migráció több lépésből áll, amelyeket alább ismertetek:

## 1. Projekt előkészítése
* Függőségek és eszközök frissítése: Bizonyosodjon meg arról, hogy a projekt használt fejlesztési eszközei és függőségei kompatibilisek a TypeScript-pel.
* TypeScript telepítése: A TypeScript hozzáadása a projekthez mint fejlesztési függőség a npm install typescript --save-dev parancs használatával.
* tsconfig.json fájl létrehozása: Ez a fájl tartalmazza a TypeScript fordító konfigurációs beállításait. Ezt manuálisan vagy a tsc --init parancs segítségével lehet létrehozni.

## 2. Inkrementális migráció
* Fájlok átnevezése .js-ről .ts-re: Kezdje azokkal a fájlokkal, amelyek a legkevésbé függnek más moduloktól. Ez lehetővé teszi a fejlesztő számára, hogy fokozatosan növelje a TypeScript használatát a projektben anélkül, hogy egyetlen lépésben minden kódot át kellene írni.
* Típusdefiníciók hozzáadása: Kezdje el definiálni a változók, függvények paramétereinek és visszatérési értékeinek típusait. Használhatja a TypeScript beépített típusait, vagy saját interfészeket és típusokat definiálhat.

## 3. Típushibák javítása
* Fordítási hibák azonosítása: A tsc parancs futtatásával azonosíthatja a típushibákat és más problémákat, amelyeket a TypeScript fordító jelez.
* Típusannotációk finomítása: A hibák javítása során finomíthatja a típusannotációkat, hogy pontosabban tükrözzék a kód szándékát.

## 4. Haladó TypeScript jellemzők használata
* Generikus típusok: Ezek lehetővé teszik a komponens-, függvény- és típusdefiníciók újrafelhasználhatóságát változó típusokkal.
* Típusőrök és típusállítások: Segítenek a típusbiztonság növelésében a kód futásának különböző pontjain.
* Névtér és modulok: A kód szervezésének és modularizálásának eszközei, amelyek elősegítik a karbantarthatóságot és az olvashatóságot.

## 5. Folyamatos karbantartás és fejlesztés
* Típusdefiníciók karbantartása: Ahogy a projekt fejlődik, folyamatosan frissíteni és karbantartani kell a típusdefiníciókat.
* Külső könyvtárak típusdefinícióinak kezelése: Használja a DefinitelyTyped projektet (@types/ csomagok), amely közösség által karbantartott típusdefiníciókat biztosít a JavaScript könyvtárakhoz.

## TypeScript migráció példa
<pre>
// add.js
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8
console.log(add('5', '3')); // 53
</pre>

Ez a JavaScript funkció egyszerűen összead két értéket. Mivel JavaScript dinamikus típusú nyelv, a funkció bemeneti paraméterei bármilyen típusúak lehetnek, ami hibákhoz vezethet, mint az utolsó példa is mutatja.

**1. lépés: Projekt előkészítése és TypeScript beállítása**

Telepítsük a TypeScriptet a projektbe, hozzunk létre egy tsconfig.json fájlt a TypeScript fordító beállításaival.
<pre>
npm install typescript --save-dev
npx tsc --init
</pre>

**2. lépés: Fájl átnevezése és alap típusok hozzáadása**

Átnevezzük az add.js fájlt add.ts-re. Ezután hozzáadjuk a bemeneti paraméterek és a visszatérési érték típusannotációit.
<pre>
// add.ts
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3)); // 8
// A következő sor TypeScript hibát jelez, mivel a bemenetek nem számok
// console.log(add('5', '3')); // Type error
</pre>

A : number annotáció azt jelzi, hogy a funkció mindkét bemeneti paramétere és a visszatérési értéke szám kell legyen. A TypeScript fordító hibát jelez, ha a funkciót nem szám típusú argumentumokkal hívják meg.

**3. lépés: Fordítási hibák kezelése**

A TypeScript fordító azonnal jelezni fogja a típushibákat. A fenti példában a hibás hívást ki kell javítani vagy el kell távolítani.
<pre>
// Helytelen hívás kikommentezése vagy eltávolítása
console.log(add(5, 3)); // Ez már csak helyes hívás
</pre>

**4. lépés: Haladó TypeScript jellemzők használata**

Ahogy bonyolultabbá válik a projekt, használhatunk haladóbb TypeScript jellemzőket, mint a generikusok, unió típusok, és típusőrök a még jobb típusbiztonság és kódminőség érdekében.

**5. lépés: Folyamatos karbantartás**

Ahogy tovább fejlesztjük a projektet, folyamatosan figyelnünk kell a típusdefiníciókra és a TypeScript fordító által jelzett hibákra, hogy a kódunk megbízható és karbantartható maradjon.

# CALLBACK

A callback-ek a JavaScript egyik alapvető fogalma, amely lehetővé teszi számunkra, hogy aszinkron műveleteket hajtsunk végre, mint például adatok lekérése egy szerverről. Ezek a függvények olyan argumentumként használhatók, amelyeket egy másik függvénynek adunk át, és amelyeket az adott függvény később, egy meghatározott esemény bekövetkeztekor hív meg.

Egy callback függvény egyszerűen egy függvény, amit egy másik függvénynek adunk át, hogy az később hívja meg azt. Ez a mechanizmus nagyon hasznos, amikor olyan műveleteket kell végrehajtanunk, amelyek időt vehetnek igénybe (például adatok lekérése a hálózaton keresztül), és nem szeretnénk, hogy a felhasználói felület (UI) reagálás nélkülivé váljon ezalatt az idő alatt.

Amikor egy függvényt átadunk egy másik függvénynek callback-ként, nem hívjuk meg közvetlenül azt a függvényt. Ehelyett a "gazda" függvény fogja meghívni a callback függvényt a megfelelő időben.

<pre>
function fetchData(callback) {
    // Képzeld el, hogy itt adatokat kérünk le egy szerverről
    setTimeout(() => {
        callback('Adatok lekérése sikeres!');
    }, 2000); // Késleltetés 2 másodpercig
}

function processData(data) {
    console.log(data);
}

fetchData(processData);
</pre>

A példában a fetchData függvény egy callback függvényt (processData) kap argumentumként. Miután a szimulált adatlekérés (itt egy 2 másodperces késleltetéssel modellezett) befejeződik, meghívja a processData függvényt az adatokkal.

**Előnyök:**
* Egyszerűség és világosság kisebb, egyszerűbb feladatok esetén.
* Széles körű támogatottság és kompatibilitás minden JavaScript környezetben.

**Hátrányok:**
* Callback hell vagy Pyramid of Doom: Amikor a callback függvények egymásba ágyazottak, a kód olvashatatlan és kezelhetetlen lehet.
* Hibakezelés nehézsége: A hibák kezelése kihívást jelenthet, különösen mélyen ágyazott callback struktúrák esetén.

**Összefoglalás:** A callback-ek lehetővé teszik számunkra, hogy aszinkron műveleteket hajtsunk végre a JavaScriptben, amelyek kulcsfontosságúak a modern webes alkalmazások fejlesztésében. Azonban, ahogy a projektjeink bonyolultabbá válnak, érdemes lehet más megközelítéseket is fontolóra venni, mint például ígéretek (Promises) vagy async/await használata, amelyek megkönnyíthetik az aszinkron kód kezelését és olvashatóbbá tehetik azt.

# Aszinkron TS

Az aszinkronitás a programozásban egy olyan működési mód, amely lehetővé teszi, hogy egyes műveletek a háttérben, párhuzamosan történjenek, anélkül hogy blokkolnák vagy megállítanák a program futását. Ez különösen fontos webes alkalmazásokban, ahol a felhasználói felületnek válaszkészen kell maradnia, miközben hosszú ideig tartó műveletek, például adatlekérések történnek a szerverről.

A TypeScript, mint a JavaScript szuperszettje, támogatja az aszinkron programozás összes modern eszközét, beleértve a Callback függvényeket, Ígéreteket (Promises) és az Async/Await szintaxist. Ezek az eszközök segítenek kezelni és egyszerűsíteni az aszinkron műveleteket, különösen azokat, amelyek hosszú ideig tartanak vagy függőségekkel rendelkeznek.

A TypeScriptben a callback függvények használata megegyezik a JavaScriptben látottal. Ezeket a függvényeket paraméterként adhatjuk át más függvényeknek, amelyek később, egy adott esemény bekövetkeztekor hívják meg őket.


A **Promises** használata lehetővé teszik az aszinkron műveletek egyszerűbb kezelését, lehetőséget adva arra, hogy egy művelet sikeres vagy sikertelen befejezésekor meghatározott kód fusson le. Egy Ígéret három állapotot vehet fel: teljesült (fulfilled), elutasított (rejected), vagy függőben (pending).
<pre>
let fetchData = new Promise<string>((resolve, reject) => {
    // aszinkron művelet
    if (/* sikeres */) {
        resolve('Adatok lekérése sikeres.');
    } else {
        reject('Hiba történt az adatok lekérésekor.');
    }
});

fetchData.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
</pre>

Az **async/await** szintaxis egy elegáns és olvashatóbb módja az ígéretek kezelésének. Egy függvényt async kulcsszóval jelölünk, ami lehetővé teszi az await használatát benne, ami megvárja az ígéret teljesülését anélkül, hogy blokkolná a kód további részét.
<pre>
async function fetchData() {
    try {
        let data = await someAsyncOperation();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
</pre>
Az await kulcsszó csak async függvények belsejében használható, és "megvárja" az ígéret teljesülését, így a kódunk szinkron módon futtatható, miközben az alapvető működése aszinkron marad.

## Aszinkron TS példák

Az aszinkronitás kezelése TypeScriptben többféle módon is megvalósítható, az alábbiakban néhány példán keresztül bemutatom, hogyan használhatók az aszinkron programozási paradigmák, mint az ígéretek (Promises) és az async/await szintaxis.

**Promise használata**

Az ígéretek lehetővé teszik aszinkron műveletek egyszerű kezelését. Itt egy egyszerű példa egy aszinkron adatlekérésre, amely ígéretet használ:
<pre>
function getServerData(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        // Képzeld el, hogy ez egy HTTP kérés
        setTimeout(() => {
            const success = true; // Feltételezzük, hogy a kérés sikeres
            if (success) {
                resolve("Adat sikeresen lekérve");
            } else {
                reject("Hiba történt a lekérés során");
            }
        }, 2000); // 2 másodperces késleltetés
    });
}

getServerData("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(error => console.error(error));
</pre>

**Async/Await használata**

Az async/await egy elegánsabb módja az ígéretek kezelésének, amely lehetővé teszi a kód írását szinkron módon, miközben aszinkron műveleteket hajt végre.
<pre>
async function fetchData(url: string): Promise<void> {
    try {
        const response = await getServerData(url);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

fetchData("https://api.example.com/data");
</pre>

**Több aszinkron művelet egyszerre**

Az Promise.all metódus lehetővé teszi több ígéret egyszerre történő kezelését, várakozás nélkül, hogy mindegyik egymás után teljesüljön.
<pre>
async function fetchMultipleData() {
    try {
        const [data1, data2] = await Promise.all([
            getServerData("https://api.example.com/data1"),
            getServerData("https://api.example.com/data2"),
        ]);
        console.log(data1, data2);
    } catch (error) {
        console.error("Hiba történt az adatok lekérésekor", error);
    }
}

fetchMultipleData();
</pre>

**Aszinkron iteráció**

Az aszinkron iteráció lehetővé teszi, hogy aszinkron műveleteket végezzünk iteráció során, például egy tömbön vagy más iterálható objektumon belül.
<pre>
async function processItems(items: string[]) {
    for await (const item of items) {
        const processedItem = await getServerData(`https://api.example.com/data/${item}`);
        console.log(processedItem);
    }
}

processItems(["item1", "item2", "item3"]);
</pre>

## Promise

A Promise az aszinkron programozás egyik alapvető építőeleme JavaScriptben és TypeScriptben. Egy Promise egy objektum, amely egy még nem befejezett, de a jövőben befejeződő művelet eredményét képviseli. Leegyszerűsítve, egy ígéretet ad arra, hogy valamikor a jövőben valamilyen eredményt kapunk, legyen az sikeres végrehajtás vagy hiba. A Promise-ok segítségével elegánsabban kezelhetjük az aszinkron műveletek komplexitását.

Egy Promise három különböző állapotot vehet fel:
* **Pending (Függőben):** Az aszinkron művelet még nem fejeződött be.
* **Fulfilled (Teljesült):** Az aszinkron művelet sikeresen befejeződött, és az ígéret eredményt produkált.
* **Rejected (Elutasított):** Az aszinkron művelet hibába ütközött.

Egy Promise létrehozásához a Promise konstruktort használjuk, amely egy executor függvényt vár argumentumként. Ez a függvény két callbacket kap paraméterként: egy resolve és egy reject függvényt.
<pre>
let promise = new Promise((resolve, reject) => {
    // Aszinkron művelet
    let success = true; // Tegyük fel, hogy ez alapján döntünk
    if (success) {
        resolve("Művelet sikeres!");
    } else {
        reject("Művelet sikertelen.");
    }
});
</pre>

A Promise objektumokkal az .then(), .catch(), és .finally() metódusok segítségével dolgozhatunk. Az .then() fogad egy callbacket a sikeres (fulfilled) eredményre, a .catch() egy callbacket a hiba (rejected) esetére, és a .finally() egy olyan callbacket, ami mindkét esetben lefut.
<pre>
promise
    .then((result) => {
        console.log(result); // Sikeres eredmény kezelése
    })
    .catch((error) => {
        console.error(error); // Hiba kezelése
    })
    .finally(() => {
        console.log("Művelet befejezve."); // Mindig lefut
    });
</pre>

A Promise-ok láncolhatóak, ami lehetővé teszi több aszinkron művelet egymás utáni végrehajtását anélkül, hogy azok egymást blokkolnák. Minden .then() metódus egy új Promise-szal tér vissza, amelyre további .then() vagy .catch() hívásokat fűzhetünk.
<pre>
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doYetAnotherThing(newResult))
    .catch(error => console.error(error));
</pre>

# Reactive Extensions for JavaScript

Az RxJS, vagyis a Reactive Extensions for JavaScript, egy könyvtár, amely a reaktív programozás paradigmáját hozza el a JavaScript világába. A reaktív programozás az adatfolyamok és az azokból eredő változások kezelésére összpontosít, lehetővé téve a fejlesztők számára, hogy elegánsan kezeljenek aszinkron eseményeket, adatfolyamokat, és számos más programozási kihívást. Az RxJS kulcsfontosságú fogalmai közé tartoznak az Observables, Observers, és a stream-ek. Ezek együttműködése adja az RxJS erősségét és rugalmasságát. Most részletezzük ezeket a fogalmakat és azok kapcsolatát.

RxJS (Reactive Extensions for JavaScript) egy könyvtár az aszinkron és az esemény alapú programok kezelésére JavaScriptben. Az RxJS az Observer mintát, az Iterator mintát, és a funkcionális programozást kombinálja, hogy segítsen kezelni az aszinkron műveleteket és az eseményeket. A könyvtár a reaktív programozási paradigmát követi, amely az adatfolyamok és a változások terjedésére összpontosít.

Az **Observable** az RxJS alapköve. Egy Observable egy adatfolyamot reprezentál, amely idővel több értéket is képes produkálni. Ezek az értékek lehetnek szinkron vagy aszinkron eredetűek. Az Observable-ök "lusták", ami azt jelenti, hogy csak akkor kezdenek el értékeket produkálni, amikor egy Observer feliratkozik rájuk. Az Observable-ök létrehozhatók különböző módon, például statikus metódusokkal, mint például of vagy from, vagy olyan operátorok segítségével, amelyek meglévő Observable-öket alakítanak át.

Az **Observer** egy interfész, ami meghatároz három metódust: next, error, és complete. Az Observer a feliratkozás során kapcsolódik egy Observable-höz, és reagál az Observable által küldött értékekre és értesítésekre. Az next metódus akkor hívódik meg, amikor az Observable új adatot közöl, az error akkor, ha valamilyen hiba történik az adatfolyamban, és a complete akkor, amikor az adatfolyam befejeződik, és több érték nem várható.

A **Stream** kifejezés az adatfolyamokra utal. Az RxJS-ben egy stream egy Observable által reprezentált adatfolyamot jelent. Egy stream lehet egyszerű, mint egy sor szám, vagy összetett, mint a felhasználói interakciók sorozata egy weboldalon. A stream-ek kezelése az RxJS erőssége, lehetővé téve a fejlesztők számára, hogy könnyen transformálják, szűrjék, és kombinálják az adatfolyamokat.

**Hogyan működnek együtt?**

* **Feliratkozás:** A folyamat akkor kezdődik, amikor egy Observer feliratkozik egy Observable-re. Ezt a feliratkozást az Observable subscribe metódusának hívásával hajtjuk végre, átadva egy Observer objektumot, vagy callback függvényeket a next, error, és complete eseményekre.
* **Adatkommunikáció:** Miután az Observer feliratkozott, az Observable kezdi el értékeket küldeni az Observer next metódusán keresztül. Ha bármilyen hiba történik, az error metódus hívódik meg. Ha az adatfolyam befejeződik, a complete metódus kerül meghívásra.
* **Leiratkozás:** Az Observer bármikor leiratkozhat az Observable-ről, amivel megszakítja az adatfolyamot. Ez automatikusan történik, ha az Observable befejeződik vagy hibát jelez, de kézzel is kezdeményezhető.

Az RxJS erőteljes eszköztára, mint például a különböző operátorok (pl. map, filter, merge, switchMap stb.), lehetővé teszi a fejlesztők számára, hogy összetett adatfolyam-kezelési logikát hozzanak létre egy deklaratív és olvasható módon. Az RxJS használatával a fejlesztők képesek kezelni a legkülönfélébb aszinkron és esemény alapú programozási kihívásokat a modern webes és szerveroldali alkalmazásokban.

**Miért van szükség az RxJS-re?**

1. Adatfolyamok egységes kezelése: Az RxJS lehetővé teszi különböző típusú adatfolyamok, például események, ígéretek, és szinkron adatok egységes kezelését. Ez segít egyszerűsíteni a különféle aszinkron műveletek és események kezelését az alkalmazásban.
2. Rugalmas hibakezelés: Az RxJS adatfolyamokat használ, amelyek lehetővé teszik a hiba kezelését az adatfolyam bármely pontján. Ez nagyobb rugalmasságot biztosít, mint a hagyományos try/catch blokkok.
3. Egyszerűsített aszinkron műveletek: Az RxJS operátorok széles skáláját kínálja, amelyek segítségével egyszerűen kombinálhatóak, transzformálhatóak, szűrhetőek, és kezelhetőek az adatfolyamok. Ez lehetővé teszi az aszinkron műveletek összetett logikájának egyszerűsítését.
4. Jobb teljesítmény: Az RxJS optimalizálja az adatfolyamok kezelését, ami javíthatja az alkalmazás teljesítményét, különösen nagy mennyiségű adat vagy gyakori események esetén.
5. Reaktív programozás: Az RxJS a reaktív programozási paradigma alapjait használja, amely elősegíti a reaktív, felhasználói interakciókra gyorsan reagáló alkalmazások fejlesztését. Az alkalmazások így képesek az adatváltozásokra való dinamikus reagálásra, javítva ezzel a felhasználói élményt.

Az RxJS használata számos életszerű helyzetben előnyös lehet, ahol az aszinkron műveletek és az adatfolyamok kezelése kulcsfontosságú. Íme néhány példa, ahol az RxJS hasznos lehet, magyarázatokkal együtt:

1. **Felhasználói interakciók kezelése**
    * Példa: Egy webalkalmazás, amely dinamikusan frissíti a felhasználói felületet a felhasználói interakciók alapján, például egy szövegmezőbe gépelt szöveg alapján szűri a listaelemeket.
    * Magyarázat: Az RxJS segítségével egyszerűen hozhatunk létre adatfolyamokat, amelyek reagálnak a felhasználói eseményekre (pl. billentyűleütések), és dinamikusan frissíthetik a felületet anélkül, hogy újra kellene tölteni az oldalt.
2. **Adatlekérdezés debouncing**
    * Példa: Keresési javaslatok megjelenítése, miközben a felhasználó beír valamit egy keresőmezőbe, de a keresési lekérdezések számának csökkentése érdekében csak egy bizonyos idő elteltével.
    * Magyarázat: Az RxJS debounceTime operátora tökéletes erre a célra, mivel lehetővé teszi, hogy késleltessük a lekérdezések végrehajtását, amíg a felhasználó abbahagyja a gépelést egy meghatározott időre.
3. **Valós idejű adatfrissítések**
    * Példa: Egy tőzsdei alkalmazás, amely valós időben frissíti az árfolyamokat.
    * Magyarázat: Az RxJS segítségével feliratkozhatunk a szerverről érkező adatfolyamokra (például WebSockets használatával), és frissíthetjük a felhasználói felületet az új adatok érkezésekor, anélkül, hogy a felhasználónak frissítenie kellene az oldalt.
4. **Form validáció**
    * Példa: Egy űrlap, amely valós időben ellenőrzi a felhasználó által megadott adatok érvényességét, és visszajelzést nyújt.
    * Magyarázat: Az RxJS segítségével könnyen létrehozhatunk adatfolyamokat, amelyek figyelemmel kísérik az űrlapmezők változásait, és szinkronban tartják a validációs logikát, így azonnali visszajelzést nyújthatunk.
5. **Komplex felhasználói folyamatok**
    * Példa: Egy e-kereskedelmi webhely, amelyen a felhasználók több lépéses vásárlási folyamaton mennek keresztül.
    * Magyarázat: Az RxJS segítségével összetett felhasználói folyamatokat kezelhetünk, ahol több aszinkron lépés és felhasználói döntés is szerepel. Az adatfolyamok segítségével egyszerűen kezelhetjük az ilyen típusú interakciókat, és biztosíthatjuk, hogy a felhasználói felület mindig naprakész legyen.
6. **Hálózati kérések kezelése**
    * Példa: Adatok lekérdezése

## RxJS projekt
**1. Projekt inicializálása**

Először hozz létre egy új mappát a projekted számára, majd navigálj bele a terminálban/konzolban:
<pre>
mkdir rxjs-example
cd rxjs-example
</pre>
Inicializáld a Node.js projektet az npm init -y parancs segítségével, ami létrehoz egy package.json fájlt az alapértelmezett beállításokkal: npm init -y

**2. TypeScript és RxJS telepítése**

Telepítsd a TypeScriptet globálisan (ha még nem tetted meg), majd telepítsd az RxJS-t és a TypeScript definíciókat a projektedbe:
<pre>
npm install -g typescript
npm install rxjs
npm install --save-dev @types/node typescript
</pre>

**3. TypeScript konfiguráció**

Hozz létre egy tsconfig.json fájlt a TypeScript projekt konfigurációjához:
<pre>
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true
    }
}
</pre>
Ez a konfiguráció engedélyezi az ES6 szintaxist, a CommonJS modulokat, és a szigorú típusellenőrzést.

**4. Egyszerű RxJS példa létrehozása**

Hozz létre egy index.ts fájlt, ami tartalmazni fogja a RxJS kódodat. Az alábbi példa egy egyszerű Observable létrehozását mutatja be, amely számokat bocsát ki 1-től 5-ig, egy másodperces késleltetéssel:
<pre>
import { Observable } from 'rxjs';

const numberObservable = new Observable<number>(subscriber => {
    let count = 1;
    const intervalId = setInterval(() => {
        subscriber.next(count++);
        if (count > 5) {
            subscriber.complete();
            clearInterval(intervalId);
        }
    }, 1000);
});

numberObservable.subscribe({
    next(x) { console.log('Következő érték: ' + x); },
    error(err) { console.error('Hiba történt: ' + err); },
    complete() { console.log('Befejezve'); }
});
</pre>

**5. Projekt fordítása és futtatása**

Fordítsd le a TypeScript kódot JavaScriptre a következő parancs segítségével: **tsc**
Ezután futtasd a létrejött JavaScript fájlt Node.js segítségével: **node index.js**
A terminálban láthatod majd az Observable által kibocsátott számokat, minden másodpercben egyet, 1-től 5-ig, majd egy "Befejezve" üzenetet, ami jelzi, hogy az adatfolyam befejeződött.

A példa alapvető betekintést nyújt az RxJS Observables működésébe, és segít megérteni, hogyan kezelhetünk aszinkron adatfolyamokat az RxJS segítségével.

**1. RxJS ajax modul telepítése**

Győződj meg róla, hogy az RxJS legfrissebb verziója telepítve van a projektedben, mivel az ajax funkcionalitás része az RxJS-nek. Ha szükséges, frissítsd az RxJS-t a következő parancs segítségével: **npm install rxjs@latest**

**2. Egyszerű API hívás implementálása RxJS-sel**

Módosítsd az index.ts fájlt, hogy egy valódi HTTP API kérést hajtson végre. Az alábbi példában a https://jsonplaceholder.typicode.com/posts/1 URL-t használjuk, amely egy teszt adatot ad vissza egy bejegyzésről a JSONPlaceholder teszt API-ról.
<pre>
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

const dataObservable = ajax(apiURL).pipe(
    map(response => {
    if (response.status === 200) {
        // Sikeres válasz esetén a válasz törzsének visszaadása
        return response.response;
    } else {
        // Ha a válasz státusza nem 200, hiba dobása
        throw new Error('Sikertelen lekérdezés!');
    }
    }),
    catchError(error => {
        // Hiba kezelése, pl. hálózati probléma esetén
        console.error('Hiba történt az adatlekérés során:', error);
        return of({});
    })
);

dataObservable.subscribe({
    next: data => console.log('Adatok:', data),
    error: err => console.error('Hiba:', err),
    complete: () => console.log('Lekérdezés befejeződött.')
});
</pre>

A példában az ajax függvényt használjuk az API hívás elvégzésére, a map operátort az API válaszának feldolgozására, és a catchError operátort a hibák kezelésére. A subscribe metódussal feliratkozunk az Observable-re, hogy fogadjuk az adatokat, kezeljük a hibákat, és értesüljünk, amikor a lekérdezés befejeződött.

**3. Projekt fordítása és futtatása**

Fordítsd le és futtasd a projektet a már korábban bemutatott lépések szerint:
<pre>
tsc
node index.js
</pre>

Ez a módosítás lehetővé teszi egy valódi szervertől történő adatlekérdezést RxJS segítségével egy egyszerű, de valós példán keresztül. A JSONPlaceholder egy kiváló eszköz fejlesztési és tesztelési célokra, mivel könnyen hozzáférhető tesztadatokat biztosít különböző végpontokon keresztül.


