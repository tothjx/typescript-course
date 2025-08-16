# Könyvtári állomány kezelését végző alkalmazás

## Az alkalmazás rövid specifikációja
Cél: Egy OOP alapú könyvtári könyvkezelő rendszer készítése TypeScriptben, amely lehetővé teszi könyvek kezelését (létrehozás, szerkesztés, törlés) kölcsönzését, és visszavételét. A rendszer támogassa a könyvek különböző kategóriákba való szervezését, valamint nyújtson lehetőséget a könyvek és kölcsönzők adatainak lekérdezésére.

**Elvárt TypeScript elemek:**

**Generikusok:** Implementálj generikus osztályokat a különböző típusú entitások (pl. könyvek, kölcsönzők) kezelésére.
Interface-ek: Használj interface-eket a könyvek és kölcsönzők definíciójához.
**Öröklés:** Alkalmazz öröklést a könyvkategóriák különböző típusainak modellezésére.
**Többalakúság:** Használj többalakúságot a különböző típusú könyvek (pl. szépirodalmi, tudományos) egységes kezelésére.
**Modulok:** Szervezd a rendszert modulokba a kód strukturálására és a felelősségek elkülönítésére.
**Union és intersection típusok:** Alkalmazz union és intersection típusokat a rugalmasabb adattípusok kezelésére.
**Generikus típusok:** Használj generikus típusokat a kölcsönzési folyamatok típusbiztos kezelésére.
**Dekorátor(ok) használata:** csak kód, config nem kell
**Teszt file-ok írása:** (lefuttatni konfigurálni nem kell)
async alkalmazása

**Projekt létrehozása**

A projektet npm-el kell létrehozni és kezelni! A verziókezeléshez git-et kell használni github-al! A projekt belépő fájlját npm segítségével lehessen futtatni.

## Az alkalmazás tervezett szerkezete

<pre>
library-management/
│
├── src/
│   ├── interfaces/             # interface-ek
│   │   ├── IBook.ts            # interface a Book osztályhoz
│   │   └── IUser.ts            # interface a User osztályhoz
│   │
│   ├── models/                 # adatmodellek és entitások
│   │   ├── Book.ts             # Book osztály
│   │   ├── User.ts             # User osztály - kölcsönző entitás
│   │   └── Category.ts         # kategóriák a Book entitásokhoz
│   │
│   ├── services/                # Üzleti logika és szolgáltatások
│   │   └── Library.ts           # Könyvtár kezelő osztály
│   │
│   ├── utils/                   # Segédeszközök és hasznos funkciók
│   │   ├── Util.ts              # util namespace
│   │   └── typeGuards.ts        # Típusőrök a dinamikus típusellenőrzéshez
│   │
│   └── index.ts                 # entry point
│
├── package.json                 # Projekt függőségek és scriptek
├── tsconfig.json                # TypeScript konfigurációs fájl
└── README.md                    # Projekt specifikáció és használat
</pre>

