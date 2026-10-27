// PERSONAGENS DO QUIZ
// PERSONAGENS DO QUIZ
const personagens = {
    naruto: {
        nome: "Naruto Uzumaki",
        imagem: 'Imagens/NarutoUzumaki.png',
        descricao: "Você nunca desiste dos seus sonhos! É determinado, leal e faria qualquer coisa para proteger as pessoas que ama.",
        frase: "Eu nunca volto atrás na minha palavra! Esse é o meu jeito ninja!"
    },

    sasuke: {
        nome: "Sasuke Uchiha",
        imagem: "Imagens/Sasuke.png",
        descricao: "Você é independente, determinado e tem grandes objetivos. Prefere seguir seu próprio caminho e não desiste facilmente.",
        frase: "Eu tenho meus próprios objetivos e vou alcançá-los."
    },

    sakura: {
        nome: "Sakura Haruno",
        imagem: "Imagens/Sakura.png",
        descricao: "Você é dedicado e se importa muito com as pessoas. Quando alguém precisa de você, demonstra sua verdadeira força.",
        frase: "Eu também fiquei mais forte!"
    },

    kakashi: {
        nome: "Kakashi Hatake",
        imagem: "Imagens/Kakashi.png",
        descricao: "Você é inteligente, tranquilo e experiente. Analisa as situações antes de agir e valoriza muito seus companheiros.",
        frase: "Aqueles que abandonam seus companheiros são piores que lixo."
    },

    shikamaru: {
        nome: "Shikamaru Nara",
        imagem: "Imagens/Shikamaru.png",
        descricao: "Você é estratégico, inteligente e pensa vários passos à frente. Prefere resolver os problemas com a cabeça em vez de usar força bruta.",
        frase: "Que problemático..."
    }
};

// DESCOBRIR O PERSONAGEM
function descobrirPersonagem() {

    const pontuacao = {
        naruto: 0,
        sasuke: 0,
        sakura: 0,
        kakashi: 0,
        shikamaru: 0
    };

    // Verificar se todas as perguntas foram respondidas
    for (let i = 1; i <= 5; i++) {

        const resposta = document.querySelector(
            `input[name="pergunta${i}"]:checked`
        );

        if (!resposta) {
            alert(`Responda à pergunta ${i} antes de continuar!`);
            return;
        }

        pontuacao[resposta.value]++;
    }

    // Encontrar o personagem com mais pontos
    let vencedor = "naruto";

    for (const personagem in pontuacao) {
        if (pontuacao[personagem] > pontuacao[vencedor]) {
            vencedor = personagem;
        }
    }

    const resultado = personagens[vencedor];
    const areaResultado = document.getElementById("resultado");

    // Mostrar o resultado
    areaResultado.innerHTML = `
        <h2>🍥 SEU PERSONAGEM É...</h2>

        <h3 style="font-size: 28px; margin: 15px 0;">
            ${resultado.nome}
        </h3>

        <img
            id="imagem-personagem"
            src="${resultado.imagem}"
            alt="${resultado.nome}"
            style="
                max-width: 250px;
                max-height: 320px;
                object-fit: contain;
                margin: 20px auto;
                display: block;
            "
        >

        <p id="aviso-imagem" style="display: none;">
            Não foi possível carregar a imagem deste personagem.
        </p>

        <p style="margin: 20px 0;">
            ${resultado.descricao}
        </p>

        <p style="margin: 15px 0;">
            <strong>"${resultado.frase}"</strong>
        </p>

        <button type="button" onclick="reiniciarQuiz()">
            🔄 Fazer o teste novamente
        </button>
    `;

    // Mostrar aviso caso a imagem não carregue
    const imagem = document.getElementById("imagem-personagem");

    imagem.onerror = function () {
        this.style.display = "none";
        document.getElementById("aviso-imagem").style.display = "block";
    };

    // Rolar a página até o resultado
    areaResultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// REINICIAR O QUIZ
function reiniciarQuiz() {

    document.querySelector("form").reset();

    document.getElementById("resultado").innerHTML = `
        <h2>Seu resultado aparecerá aqui!</h2>
        <p>Responda às cinco perguntas para descobrir qual ninja você seria.</p>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
