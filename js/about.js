let fonts = $(window).scrollTop();
console.log(fonts);

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "#fonts > div",
//       start: fonts,
//       endTrigger: "#fonts > div",
//       end: fonts + "20px",
//       scrub: true,
//     },
//   })

//   .fromTo(
//     "#fonts > div .text_1",
//     { x: "20%" },
//     { x: "-100%", ease: "none", duration: 10 },
//     0
//   )
//   .fromTo(
//     "#fonts > div .text_2",
//     { x: "-20%" },
//     { x: "100%", ease: "none", duration: 10 },
//     0
//   )
//   .fromTo(
//     "#fonts > div .text_3",
//     { x: "20%", y: "-1vw" },
//     { x: "-80%", y: "-1vw", ease: "none", duration: 10 },
//     0
//   );

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
