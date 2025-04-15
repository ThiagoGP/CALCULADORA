function calcularParcelaMensal(principal, jurosAnual, anos) {
    const meses = anos * 12;
    const jurosMensal = (jurosAnual / 100) / 12;
    let total = 0;
    const parcela = principal * (jurosMensal * Math.pow(1 + jurosMensal, meses)) /
        (Math.pow(1 + jurosMensal, meses) - 1);

    total = parcela * meses;
    return [parcela, total];
}

function calcular2(principal, jurosAnual) {
    const jurosMensal = (jurosAnual / 100) / 12;
    const parcela = principal * jurosMensal;
    const total = parcela * jurosAnual;

    return [parcela, total];
}




const botao = document.getElementById("calc");
botao.addEventListener("click", function () {
    const input = document.getElementById("principal");
    const error = document.getElementById("vermelho");
    const error1 = document.getElementById("vermelho2");
    const error2 = document.getElementById("vermelho3");
    const error3 = document.getElementById("vermelho4");

    // document.getElementById("sem-resultado").style.display = "none";
    // document.getElementById("com-resultado").style.display = "flex";
    const principal = parseFloat(document.getElementById("principal").value);
    const juros = parseFloat(document.getElementById("juros").value);
    const anos = parseInt(document.getElementById("anos").value);
    const selecionado = document.querySelector('input[name="tipoPagamento"]:checked');
    if (selecionado?.value === undefined) {
        error3.style.display = "block";
    }
    console.log(selecionado?.value)
    if (isNaN(principal)) {
        error.style.display = "block";

    } if (isNaN(juros)) {
        error2.style.display = "block";
    } if (isNaN(anos)) {
        error1.style.display = "block";

    }
    if (selecionado?.value != undefined && !(isNaN(principal)) && !(isNaN(juros)) && !(isNaN(anos))) {
        if (selecionado?.value === "fixo") {
            const [parcela, total] = calcularParcelaMensal(principal, juros, anos);
            // alert("O valor da parcela mensal é: " + parcela.toFixed(2));
            document.getElementById("resultadoMensal").textContent = parcela.toFixed(2);
            document.getElementById("resultadoTotal").textContent = total.toFixed(2);
            // alert(principal);

        } else if (selecionado?.value === "variavel") {
            // Pega o valor de parcela retornado de calcular2
            const [parcela, total] = calcular2(principal, juros);
            document.getElementById("resultadoMensal").textContent = parcela.toFixed(2);
            document.getElementById("resultadoTotal").textContent = total.toFixed(2);
        }
    }

});


const inputPrincipal = document.getElementById("principal");
const error = document.getElementById("vermelho");
inputPrincipal.addEventListener("input", () => {
    if(inputPrincipal.value.trim() !== ""){
        error.style.display = "none";
    }
});

const inputJuros = document.getElementById("juros");
const error1 = document.getElementById("vermelho3");

inputJuros.addEventListener("input", () => {
    if(inputJuros.value.trim() !== ""){
        error1.style.display = "none";
    }
})

const inputAnos = document.getElementById("anos");
const error2 = document.getElementById("vermelho2");

inputAnos.addEventListener("input", () =>{
    if(inputAnos.value.trim() !== ""){
        error2.style.display = "none";
    }
});

const radios = document.querySelectorAll('input[name="tipoPagamento"]');
const error3 = document.getElementById("vermelho4");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (document.querySelector('input[name="tipoPagamento"]:checked')) {
            error3.style.display = "none"; 
        }
    });
});