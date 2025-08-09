# Generikus todo listakezelő

## Cél
Egy generikus listakezelő alkalmazás készítése TypeScriptben, amely támogatja a különböző típusú teendők (pl. szöveges feladatok, dátummal ellátott feladatok) kezelését. Az alkalmazásnak lehetővé kell tennie a feladatok hozzáadását, törlését és listázását, valamint támogatnia kell a kategóriák szerinti szűrést.

## Szükséges TypeScript elemek
* **Dekorátorok**: Az alkalmazásban használj dekorátorokat a logolás vagy validáció céljából.(opcionális)
* **Map**: Használj Map objektumot a teendők tárolására és kezelésére.
* **Generikusok**: Implementálj generikus osztályokat vagy függvényeket a különböző típusú teendők kezelésére.
* **Modulok**: Szervezd az alkalmazást modulokba az egyes funkciók (pl. hozzáadás, törlés, listázás) elkülönítése érdekében.
* **Haladó típusok**: Alkalmazz union típusokat, típus aliasokat, és típusőröket a kód rugalmasságának és biztonságának növelésére.

## Feladat leírása
* **Generikus Todo osztály**: Készíts egy generikus TodoItem<T> osztályt, ahol T a teendő típusát jelenti (pl. string, { message: string; dueDate: Date }). Az osztály tartalmazzon egy id (egyedi azonosító) és egy content (a teendő tartalma) mezőt.
* **Todo listakezelő**: Implementálj egy TodoList osztályt, amely Map-et használ a TodoItem objektumok tárolására. Az osztály kínáljon metódusokat teendők hozzáadására, törlésére és listázására.
* **Dekorátorok**: Hozz létre egy egyszerű dekorátort, amely logolja a konzolra, mikor egy teendő hozzáadásra kerül a listához.
* **Modulok és namespace-ek**: Szervezd az alkalmazást logikai egységekre (pl. models, services, utils) modulok és namespace-ek segítségével.
* **Haladó típusok**: Használj union típusokat a TodoItem generikus paraméterének megadására, lehetővé téve többféle teendő típus kezelését. Implementálj típusőröket a teendők típus-specifikus kezeléséhez.

## Projekt felépítése
* **Modulok és namespace-ek**
    * Szervezd a kódot modulokba a tisztább struktúra és könnyebb karbantarthatóság érdekében.
    * Használj namespace-eket a névütközések elkerülésére.
    * Például különítsd el a models, services, utils modulokat.

* **Generikus todo osztály**
    * Hozz létre egy TodoItem<T> generikus osztályt a models mappában.
    * A T generikus paraméter lehetővé teszi különböző típusú teendők kezelését.
    * Az osztálynak legyen id és content mezője.

* **Todo listakezelő**
    * Implementálj egy TodoList osztályt a services modulban.
    * Használj Map-et a teendők tárolására és kezelésére.
    * Készíts metódusokat teendők hozzáadására, törlésére, és listázására.

* **Dekorátorok**
    * Definiálj egy dekorátort, ami logolja a konzolra a teendők hozzáadását.
    * Használd ezt a dekorátort a TodoList osztály addItem metódusánál.

* **Haladó típusok**
    * Alkalmazz union típusokat és típus aliasokat a különböző teendő típusok kezelésére.
    * Implementálj típusőröket a típus-specifikus logika kezeléséhez.

