async function lagarta(){
    let lagarta = "()()()(-_-)";
    let lagarta_espichada = "( ) ( ) ( ) (-_-)"
    let espaco = " ";

    function sleep(ms){
        return new Promise ( resolve => setTimeout(resolve, ms));
    }

    for( let i = 0; i < 20; i++){
        lagarta = espaco + lagarta;
        lagarta_espichada = espaco + lagarta_espichada;
        console.log(lagarta);
        await sleep(100);
        console.clear();
        console.log(lagarta_espichada);
        await sleep(1);
        console.clear();
    }
}