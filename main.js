gsap.from("header h1", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0
})
gsap.from(".nav a", {
    y: -200,
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 0.2,
    ease: "buounce.out"
})

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    console.log(e)
    gsap.to(cursor, {
        left: e.x,
        top: e.y,
        duration: 0.2,
        ease: "bounce.out"
    })
})

gsap.from(".left", {
    y: -200,
    duration: 1,
    delay: 1,
    opacity: 0,
})
gsap.from(".right img", {
    y: 200,
    duration: 1,
    delay: 1,
    opacity: 0,
})

var img = document.querySelector(".right img");
img.addEventListener("mouseover", (e) => {
    gsap.to(".right img", {
        scale: 1.1,
        duration: 1,
    })
})
var img = document.querySelector(".right img");
img.addEventListener("mouseleave", () => {
    gsap.to(".right img", {
        scale: 1,
        duration: 1,
    })
})

gsap.from("#about-img", {
    y: -200,
    duration: 2,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about-section",
        scroller: "body",
        start: "top 50%",
        end: "bottom 70%%",
        scrub: true,
    }
})
gsap.from(".right-about h3", {
    y: -200,
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".right-about",
        scroller: "body",
        start: "top 50%",
        end: "bottom 60%",
        scrub: true,
    }
})
gsap.from(".right-about p", {
    y: -200,
    duration: 3,
    delay: 1,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".right-about",
        scroller: "body",
        start: "top 40%",
        end: "bottom 80%",
        scrub: true,     
    }
})

gsap.from(".project-item .cards", {
    y: -200,
    duration: 3,
    delay: 1,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".project-section",
        scroller: "body",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true,     
    }
})