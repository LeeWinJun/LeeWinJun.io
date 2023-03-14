let fonts = $(window).scrollTop();
console.log(fonts);
let rowSlide = $('#rowSlide').scrollTop();

gsap.registerPlugin(ScrollTrigger);
gsap.to("#fonts > div .text_1", {
  scrollTrigger: {
    trigger: "#fonts > div",
    markers: false,
    start: "top center",
    scrub: 3,
  },
  x: -400,
  duration: 3,
});
gsap.to("#fonts > div .text_2", {
  scrollTrigger: {
    trigger: "#fonts > div",
    markers: false,
    start: "top center",
    scrub: 3,
  },
  x: 400,
  duration: 3,
});
gsap.to("#fonts > div .text_3", {
  scrollTrigger: {
    trigger: "#fonts > div",
    markers: false,
    start: "top center",
    scrub: 3,
  },
  x: -400,
  duration: 3,
});

// slide_03
// gsap.registerPlugin(ScrollTrigger);

// gsap.set(".rowFlex img", { zIndex: (i, target, targets) => targets.length - i });

// var images = gsap.utils.toArray('.rowFlex img');

// images.forEach((image, i) => {
  
//   var tl = gsap.timeline({
    
//     scrollTrigger: {
//       trigger: "#rowSlide",
//       start: () => "top -" + (window.innerHeight*(i+0.5)),
//       end: () => "+=" + window.innerHeight,
//       scrub: true,
//       toggleActions: "play none reverse none",
//       invalidateOnRefresh: true,     
//     }
    
//   })
  
//   tl
//   .to(image, { height: 912 })
//   ;
  
// });

// gsap.set(".rowFlex span", { zIndex: (i, target, targets) => targets.length - i });

// var texts = gsap.utils.toArray('.rowFlex span');

// texts.forEach((text, i) => {
  
//   var tl = gsap.timeline({
    
//     scrollTrigger: {
//       trigger: "#rowSlide",
//       start: () => "top -" + (window.innerHeight*i),
//       end: () => "+=" + window.innerHeight,
//       scrub: true,
//       toggleActions: "play none reverse none",
//       invalidateOnRefresh: true,     
//     }
    
//   })
  
//   tl
//   .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
//   .to(text, { duration: 0.33, opacity: 0, y:"50%" })
//   ;
  
// });
// ScrollTrigger.create({

//   trigger: "#rowSlide",
//   scrub: true,
//   markers: true,
//   pin: true,
//   start: () => "top top",
//   end: () => "+=" + ((images.length + 1) * window.innerHeight),
//   invalidateOnRefresh: true,

// });
// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray("#rowSlide").forEach((section, i) => {
//   ScrollTrigger.create({
//     trigger: section,
//     // start: "top 0%", 
//     pin: true,
//     pinSpacing: false,
//   });
// });
// ScrollTrigger.create({
//   snap: 1 / 2
// });

gsap.to('#rowSlide .box',{
  scrollTrigger: {
      trigger: '#rowSlide .box',
      start: 'top 0%',
      endTrigger: '#rowSlide',
      scrub: 1,
      pin: true
  }
})