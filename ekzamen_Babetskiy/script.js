document.getElementById("task").onclick = function () {
  const inputs = document.getElementsByClassName("cls");
  let total = 0;

  for (let i = 0; i < inputs.length; i++) {
    total += Number(inputs[i].value);
  }

  document.getElementById("sum").value = total;
};
