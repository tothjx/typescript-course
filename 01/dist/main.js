const LINE = '========================================';

document.addEventListener('DOMContentLoaded', (event) => {
    line();

    ////////////////////////////////////////
    // hibatlan ferfi pelda
    ////////////////////////////////////////
    let pOne = new Person(
        'Géza',
        'Kovács',
        1980,
        MALE,
        'programozó',
        false,
        'Szabadság Termelőszövetkezet',
        ['videójáték', 'programozás', 'alvás']
    );

    showResults(pOne);
    line();

    ////////////////////////////////////////
    // hibatlan noi pelda - hobbival
    ////////////////////////////////////////
    let pTwo = new Person(
        'Éva',
        'Molnár',
        1975,
        FEMALE,
        'gyógyszertári asszisztens',
        true,
        'Pingvin Patika',
        ['alvás']
    );

    showResults(pTwo);
    line();

    ////////////////////////////////////////
    // hibatlan noi pelda - hobbi nelkul
    ////////////////////////////////////////
    let pThree = new Person(
        'Emese',
        'Nagy',
        1985,
        FEMALE,
        'pénztáros',
        false,
        'ALDI Magyarország',
        []
    );

    showResults(pThree);
    line();

    ////////////////////////////////////////
    // kor nem megfelelo
    // itt a konstruktorban meg kell boruljon
    ////////////////////////////////////////
    let pFour = new Person(
        'Elemér',
        'Szabó',
        1900,
        MALE,
        'kőműves',
        false,
        'Nemzeti Építő',
        []
    );

    showResults(pFour);
    line();
});

function showResults(obj) {
    console.log('object adatai:', obj);
    console.log(obj.getGreetingStr());
    console.log('kor:', obj.getAge());
    console.log(obj.getHobbiesStr());
}

function line() {
    console.log(LINE);
}
