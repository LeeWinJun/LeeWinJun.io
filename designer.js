$.ajax({
  url: "./js/designer.json",
  dataType: "json",
  success: function (data) {
    //json type array 처리구문
    // let str = JSON.stringify(data);
    // console.log(str);
    for (let i in data) {
      console.log(data[i].a.member[0]);
      //   $(".designers").append(`<li>${data.filter[i].member}</li>`);
      //   let member = data[i].filter;
      //   console.log(member[i]);
      //   $(".designers").append(
      //     `<li>
      //         <img src=${member[i].image} alt="" />
      //         <figcaption>
      //           <h1>${member[i].name}</h1>
      //         </figcaption>
      //       </li>`
      //   );
    }
    // console.log(data.filter);
  },
});
