let len = prompt("How Many Tiles Length?")
let wid = prompt("How Many Tiles Width?")

for (let i = 0; i < len; i++) {
    //create a pointer to area we need to add things to
    const sketchArea = document.querySelector(".sketch-area");

    // create row flexbox and append
    const div = document.createElement("div")
    div.setAttribute('style', 'display: flex; justify-content: center; align-items:center; flex-grow: 1; width: 100%; height: 100%');  
    sketchArea.appendChild(div)

    for (let i = 0; i < wid; i++) {
        const rowdiv = document.createElement('div')
        rowdiv.classList.add('Tile')
        rowdiv.setAttribute("style", "border: .4rem solid black; background: rgba(0,0,0,0.4); border-radius: .5rem; margin: 0rem; font-size: 1.5rem; padding: 0rem ; width: 50%; text-align: center; color: white; text-shadow: 0 0 .5rem black; flex-grow: 1; height: 70%;")
        div.appendChild(rowdiv)
    }
}

let Tile = document.querySelectorAll(".Tile");
console.log(Tile)


Tile.forEach((e) => {
    e.addEventListener("mouseover", function(e){
    e.target.style.background = "#bac9d8";

    // reset the color after a short delay
    setTimeout(function() {
        e.target.style.background = "rgba(0,0,0,0.4)";
    }, 1000)
})

})
