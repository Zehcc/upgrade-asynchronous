/* 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
async-await. */

const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut();

const runTimeOutAW = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    console.log('Time out')
} 

runTimeOutAW();

/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */
window.onload = () => {
    getCharactersSA ();
}

function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

const getCharactersSA = async () => {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const resultToJson = await result.json();
    console.log(resultToJson)
}



