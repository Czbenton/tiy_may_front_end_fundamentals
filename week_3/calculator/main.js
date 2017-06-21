var btn = document.querySelectorAll(".btn");
var clear = document.querySelector(".clear");
var equals = document.querySelector(".equals");
var output = document.querySelector(".output");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(e) {
    var value = e.target.innerHTML;
    output.innerHTML += value;
  });
}

clear.addEventListener("click", function(e) {
  output.innerHTML = "";
});

equals.addEventListener("click", function(e) {
  var value = output.innerHTML;
  var total = eval(value);
  output.innerHTML = total;
});
