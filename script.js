function loco(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();


var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
var vd = document.querySelector(".page1 video")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 1 + "px"
    crsr.style.top = dets.y + 1 + "px"
})

// vd.addEventListener("mouseenter", function(){
//     crsr.style.backgroundColor = "#000"
//     crsr.style.color = "#fff"
//     crsr.innerHTML = "Sound On"
// })

// vd.addEventListener("mouseleave", function(){
// })

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "#main",
        start: "top 25%",
        end: "top 0",
        scrub: 2
    }
})

tl.to(".page1 h1",{
    x: -100,
},"rohit")

tl.to(".page1 h2",{
    x: 100,
}, "rohit");

tl.to(".page1 video",{
    width: "90%"
}, "rohit");

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "#main",
        start: "top -145%",
        end: "top -150",
        scrub: 2
    }
});

tl2.to(".page2",{
    backgroundColor:"#fff"
})




var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "#main",
        start: "top -420%",
        end: "top -450%",
        scrub: 3
    }
});

tl3.to(".page3", {
    backgroundColor: "#0F0D0D"
},"rohit")
tl3.to(".page4", {
    backgroundColor: "#0F0D0D"
}, "rohit");



//////

var boxs = document.querySelectorAll(".page5 .box")


boxs.forEach(function(elm){
elm.addEventListener("mouseenter", function(){
   var att = elm.getAttribute("data-image")
   crsr.style.width = "280px"
   crsr.style.height = "310px"
   crsr.style.borderRadius = "0"
   crsr.style.backgroundImage = `(${att})`
   console.log(att);
});

elm.addEventListener("mouseleave", function(){
   crsr.style.width = "30px"
   crsr.style.height = "30px"
   crsr.style.borderRadius = "50%"
   crsr.style.backgroundImage = `none`
});
});


//////nav

var prpl = document.querySelector(".purple")
var h = document.querySelectorAll(".nav h4")
h.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
    prpl.style.opacity = "1"
    prpl.style.display = "block"
    });

    elem.addEventListener("mouseleave", function(){
        prpl.style.opacity = "0"
        prpl.style.display = "none"
        });
})