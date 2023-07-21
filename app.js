// Hare Krishan
(function () {
  let answer;
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  //   Buttons
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  // Equal
  equal.addEventListener("click", function () {
    if (screen.value === "") {
      screen.value = "Please Enter";
    } else {
      answer = eval(screen.value);
      screen.value = answer;
    }
  });

  // Clear
  clear.addEventListener("click", function () {
    screen.value = "";
  });
})();
