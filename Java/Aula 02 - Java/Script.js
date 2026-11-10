const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  const campo1 = document.getElementById("numero1");
  const campo2 = document.getElementById("numero2");
  const resultado = document.getElementById("resultado");

  if (campo1.value === "" || campo2.value === "") {
    resultado.textContent = "Preencha os dois números.";
    return;
  }

  const numero1 = Number(campo1.value);
  const numero2 = Number(campo2.value);
  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao = numero2 === 0
    ? "Não é possível dividir por zero."
    : numero1 / numero2;

  resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});
