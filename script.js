function hitung() {
  let angka1 = parseFloat(document.getElementsByName("angka1")[0].value);
  let angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
  let operator = document.querySelector('input[name="operator"]:checked').value;


  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("popup").classList.remove("hidden");
    return;
  }


  let hasil;
  switch (operator) {
    case "penjumlahan":
      hasil = angka1 + angka2;
      break;
    case "pengurangan":
      hasil = angka1 - angka2;
      break;
    case "perkalian":
      hasil = angka1 * angka2;
      break;
    case "pembagian":
      hasil = angka1 / angka2;
      break;
    case "pangkat":
      hasil = Math.pow(angka1, angka2);
      break;
  }


  document.getElementById("hasil").innerHTML = hasil;
}

function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function hidePopup() {
  document.getElementById("popup").classList.add("hidden");
}