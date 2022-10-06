
const calcImc = () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let heightPow = height * height;
  let imc = Math.round((weight / heightPow) * 10000);
  alert(`Tu IMC es de ${imc}%`);
};
