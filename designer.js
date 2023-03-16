for (i of document.querySelectorAll(".abc a")) {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    let str = e.currentTarget.closest("li").dataset.filter;

    $.ajax({
      url: "./js/designer.json",
      dataType: "json",
      success: function (data) {
        //json type array 처리구문
        for (let i in data) {
          // for (let j = 0; j < data[i].length; j++) {
          for (j of data[i][str]) {
            console.log(j);
            let member = j;
            console.log(member);
            $(".designers").append(
              `
              <li>
              <img src="${member.image}" alt="" />
              <p>${member.name}</p>
            </li>
             `
            );
          }
        }
        // console.log(data.filter);
      },
    });
  });
}
