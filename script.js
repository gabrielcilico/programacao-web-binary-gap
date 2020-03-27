function convertToBinary() {
  return (document.getElementById("value").value >>> 0).toString(2);
}

function checkGaps(gaps) {
  if (Array.isArray(gaps) && gaps.length > 2) {
    return gaps.sort((a, b) => b.length - a.length)[0].length;
  }
  return gaps.length;
}

function getBinaryGap() {
  var binary = convertToBinary();
  if (binary.match(/1.*0.*1/)) {
    console.log("Achou: " + binary);
    return checkGaps(binary.split("1"));
  }
  return 0;
}

function checkNumber() {
  var regex = /[^0-9]/;
  var binaryValue = "";
  var gapValue = "";
  document.getElementById("value").value = document
    .getElementById("value")
    .value.replace(regex, "");
  if (document.getElementById("value").value != "") {
    binaryValue = "Valor Binário: " + convertToBinary();
    gapValue = "Maior gap: " + getBinaryGap();
  }
  document.getElementById("binary").innerHTML = binaryValue;
  document.getElementById("gaps").innerHTML = gapValue;
}