const cep = '94135340';

const fetchResult  = fetch(`https://viacep.com.br/ws/${cep}/json/`);


async function getJsonResponse(url){
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

/*
JEITO 01

getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => {
        console.log(result);
    });
*/


/* 
JEITO 02
*/
async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
}

showCepData(94135340);

console.log("A");
console.log("B");