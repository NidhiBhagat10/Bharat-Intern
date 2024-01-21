
// resume button//

document.getElementById('resumeButton').addEventListener('click', function () {
    var pdfUrl = 'assets/RESUME.pdf';

    var embedElement = document.createElement('embed');
    embedElement.setAttribute('src', pdfUrl);
    embedElement.setAttribute('type', 'application/pdf');
    embedElement.setAttribute('width', '100%');
    embedElement.setAttribute('height', '100%');

    var newWindow = window.open();
    newWindow.document.body.appendChild(embedElement);
})

///// gsap- for animation /////

// landing page //

gsap.to("#nav-container", {
    height: "70px",
    duration: 0.5,
    Delay: 0.3,

    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //markers:true,
        start: "top -5%",
        end: "top -6%",
        scrub: 1
    }
})

//  about section  //

gsap.to("#nav-menu a", {
    height: "70px",
    duration: 0.5,
    Delay: 0.3,
    x: -10,
    y: 22,
    color: "#0e2340",

    scrollTrigger: {
        trigger: "#landing-page",
        scroller: "body",
        //markers:true,
        start: "bottom 15%",
        end: "bottom 16%",
        scrub: 1
    }
})

gsap.to("#about", {
    height: "70px",
    duration: 1,
    Delay: 0.3,
    x: 170,
    y: 10,
    color: "#0e2340",

    scrollTrigger: {
        trigger: "#landing-page",
        scroller: "body",
        //markers:true,
        start: "bottom 90%",
        end: "bottom 16%",
        scrub: 1
    }
})

// project-section //

gsap.to("#nav-container", {
    height: "70px",
    duration: 1,
    Delay: 1,

    backgroundColor: "#0e2340",

    scrollTrigger: {
        trigger: "#project-section",
        scroller: "body",
        //markers:true,
        start: "top 9%",
        end: "top 10%",
        scrub: 1
    }
})

gsap.to("#nav-menu a", {
    height: "70px",
    duration: 0.5,
    Delay: 0.3,
    x: -500,
    y: 22,
    color: "#fff9f0",

    scrollTrigger: {
        trigger: "#project-section",
        scroller: "body",
        //markers: true,
        start: "top 9%",
        end: "top 10%",
        scrub: 1
    }
})

gsap.to(".card", {
    duration: .5,
    Delay: 2,
    y: 170,
    color: "#fff9f0",

    scrollTrigger: {
        trigger: "#project-section",
        scroller: "body",
        //markers:true,
        start: "top 9%",
        end: "top 10%",
        scrub: 1
    }
})

gsap.to("project-heading",{
    duration: .5,
    x:150,
    color: "#000",

    scrollTrigger: {
        trigger: "#project-section",
        scroller: "body",
        //markers:true,
        start: "top 9%",
        end: "top 10%",
        scrub: 1
    }
})

// skill-section //

gsap.to("#nav-menu a", {
    duration: 0.5,
    Delay: 0.3,
    x: -500,
    y: 22,
    color: "#567094",

    scrollTrigger: {
        trigger: "#skills-section",
        scroller: "body",
        //markers:true,
        start: "top 9%",
        end: "top 10%",
        scrub: 1
    }
})

gsap.to("#nav-container", {
    height: "70px",
    duration: 0.5,
    Delay: 0.3,
    backgroundColor: "#fff9f0",

    scrollTrigger: {
        trigger: "#skills-section",
        scroller: "body",
        //markers:true,
        start: "top 10%",
        end: "top 11%",
        scrub: 1
    }
})

gsap.to("#skills-section", {
    backgroundColor: "#73c7e3",
    scrollTrigger: {
        trigger: "#project",
        scroller: "body",
        //markers: true,
        start: "top -50%",
        end: "top -100%",
        scrub: 1
    }
})