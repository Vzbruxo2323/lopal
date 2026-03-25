function loop(){
    let texto = "";
    let i = 0;

    if (i > 10){return;}

    while (i < 10){
        texto += "O número é " + i + "<br>";
        i++;
    }
 
    document.getElementById("demo").innerHTML = texto;
}
 