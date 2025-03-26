function f(g, h) {
    setTimeout(() => {
       if( 10> 0){
        g("P");
       }
       else{
        h("Q")
       }
}, 5000);
}

const minhaPromisse = new Promise(f);

minhaPromisse.then(value => {
    console.log("Resolveu com o valor " + value);
}).catch(value => {
    console.log("Rejeitou com o valor " + value)
});

console.log(minhaPromisse);