let array = ["btn 1", "btn 2", "btn 3", "btn 4", "btn 5"];

let btnHtml = "";

array.forEach(btn => {
  btnHtml += `<div> <button> ${btn}  </button> </div>`;
});

document.getElementById("app").innerHTML = btnHtml;
