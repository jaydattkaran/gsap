// function breakTheText(){
//     var h1 = document.querySelector("h1")
//     var h1Text = h1.textContent

//     var splittedText = h1Text.split("")
//     var clutter = ""

//     splittedText.forEach(function(e){
//         clutter += `<span>${e}</span>`
//     })

//     h1.innerHTML = clutter
// }
// breakTheText()

// gsap.from("h1 span",{
//     y:75,
//     opacity:0,
//     duration:0.7,
//     delay:0.5,
//     stagger:0.2
// })




function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")
    var halfValue = Math.floor(splittedText.length/2)

    var clutter = ""

    splittedText.forEach(function(e, index){
        if(index<halfValue){
            clutter += `<span class="a">${e}</span>`
        } else{
              clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}
breakTheText()

gsap.from("h1 .a",{
    y:50,
    duration:0.5,
    delay:0.5,
    stagger: 0.15,
    opacity:0
})
gsap.from("h1 .b",{
    y:50,
    duration:0.5,
    delay:0.5,
    stagger: -0.15,
    opacity:0
})