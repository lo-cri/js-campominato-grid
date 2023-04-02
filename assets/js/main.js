function startbox(){
    let containerHtml = document.querySelector(".container");
    document.getElementById("main-color").style.backgroundColor="aquamarine";
    
    for( let x = 1; x <= 100; x++){
        let createDiv = document.createElement('div');
    
            createDiv.className = 'box'
            createDiv.setAttribute("id", `${x}`)
            createDiv.setAttribute("onclick", `game(${x});`)
            containerHtml.append( createDiv )
            createDiv.innerHTML = x;
    
        }

}

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

function game(x){
    console.log(x)
    document.getElementById(x).style.backgroundColor="#8593c6";
}