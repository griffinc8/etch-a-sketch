for (let i = 0; i < 4; i++) {
    //create a pointer to area we need to add things to
    const sketchArea = document.querySelector(".sketch-area");

    // create row flexbox and append
    const div = document.createElement("div")
    div.setAttribute('style', 'display: flex; justify-content: center; align-items:center; flex-grow: 1; ');  
    div.textContent = "Hi" 
    sketchArea.appendChild(div)

    for (let i = 0; i < 4; i++) {
        const rowdiv = document.createElement('div')
        rowdiv.setAttribute("style", "border: .4rem solid black; background: rgba(0,0,0,0.4); border-radius: .5rem; margin: 1rem; font-size: 1.5rem; padding: .5rem .5rem; width: 10rem; text-align: center; color: white; text-shadow: 0 0 .5rem black; flex-grow: 1; height: 80%;")
        div.appendChild(rowdiv)
    }
}
