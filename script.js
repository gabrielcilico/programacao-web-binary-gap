function convertToBinary() {
  // ">>>" -> Atribuiçãode bit-a-bit deslocamento á direita não assinado
  return (document.getElementById("value").value >>> 0).toString(2);
}

function checkGaps(gaps) {
  if (Array.isArray(gaps) && gaps.length > 2) {
    gaps[0] = "";
    gaps[gaps.length - 1] = "";
    return gaps.sort((a, b) => b.length - a.length)[0].length;
  }
  return gaps.length;
}

function getBinaryGap() {
  var binary = convertToBinary();
  if (binary.match(/1.*0.*1/)) {
    return checkGaps(binary.split("1"));
  }
  return 0;
}

function updateInput() {
  document.getElementById("value").value = document
    .getElementById("value")
    .value.replace(/[^0-9]/, "");
}

function isInputEmpty() {
  return document.getElementById("value").value === "";
}

function getBinaryHTML() {
  return isInputEmpty() ? "" : "Valor Binário: " + convertToBinary();
}

function getGapHTML() {
  return isInputEmpty() ? "" : "Maior gap: " + getBinaryGap();
}

function updateGap() {
  updateInput();
  document.getElementById("binary").innerHTML = getBinaryHTML();
  document.getElementById("gaps").innerHTML = getGapHTML();
}

document.getElementById("value").oninput = () => updateGap();
