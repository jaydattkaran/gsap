var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5
    })
})
imageDiv.addEventListener("mouseenter", function(){
    // cursor.innerHTML = "view more"

    // gsap.to("#overlay", {
    //     opacity:1
    // })
    gsap.to(cursor,{
        scale:3,
        borderRadius:"10%",
        backgroundColor:"#ffffff8a"
    })
})
imageDiv.addEventListener("mouseleave", function(){
    // cursor.innerHTML = ""

    // gsap.to("#overlay", {
    //     opacity:0
    // })
    gsap.to(cursor,{
        scale:1,
        borderRadius:"50%",
        backgroundColor: "#fff"
    })
})