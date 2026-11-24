
const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {

    const campo1 = document.getElementById("numero1");
    const campo2 = document.getElementById("numero2");
    const resultado = document.getElementById("resultado");

    // Verificar se os campos estão preenchidos
    if (campo1.value.trim() === "" || campo2.value.trim() === "") {

        resultado.innerHTML = `
            <p class="erro">⚠️ Preencha os dois números!</p>
        `;

        return;
    }

    // Converter os valores para números
    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);

    // Verificar se os números são válidos
    if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {

        resultado.innerHTML = `
            <p class="erro">⚠️ Digite números válidos!</p>
        `;

        return;
    }

    // Realizar as operações
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;

    let divisao;

    if (numero2 === 0) {
        divisao = "Não é possível dividir por zero.";
    } else {
        divisao = numero1 / numero2;
    }

    // Formatar os resultados
    const formatar = (valor) => {

        if (typeof valor === "string") {
            return valor;
        }

        return valor.toLocaleString("pt-BR", {
            maximumFractionDigits: 8
        });

    };

    // Exibir os resultados
    resultado.innerHTML = `

        <h2>📊 Resultado dos cálculos</h2>

        <div class="resultado-item">
            <span>➕ Soma</span>
            <strong>${formatar(soma)}</strong>
        </div>

        <div class="resultado-item">
            <span>➖ Subtração</span>
            <strong>${formatar(subtracao)}</strong>
        </div>

        <div class="resultado-item">
            <span>✖️ Multiplicação</span>
            <strong>${formatar(multiplicacao)}</strong>
        </div>

        <div class="resultado-item">
            <span>➗ Divisão</span>
            <strong>${formatar(divisao)}</strong>
        </div>

    `;

});

