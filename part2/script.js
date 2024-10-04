// gsap.to(".page2 h1",{
//     transform: "translateX(-150%)",
//     scrollTrigger:{
//         trigger:".page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -100%",
//         scrub:2,
//         pin:true
//     }
// })

gsap.to(".page2 h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})