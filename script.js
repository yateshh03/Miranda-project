function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });


ScrollTrigger.refresh();

}

function loadingAnimation(){
  var tl = gsap.timeline()

tl.to("#loader",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#loader",{
    y:"-30vh",
    duration:1,
    delay:1
})
tl.to("#loader",{
    y:"0vh",
    rotate:-360,
    scale:1,
    duration:0.7
})
}

locomotiveScroll();
loadingAnimation();



