function calcularParcelaMensal(principal, jurosAnual, anos) {
    const meses = anos * 12;
    const jurosMensal = (jurosAnual / 100) / 12;
    let total = 0;
    const parcela = principal * (jurosMensal * Math.pow(1 + jurosMensal, meses)) / 
                    (Math.pow(1 + jurosMensal, meses) - 1);

    total = parcela * meses;
    return [parcela, total];
}

function calcular2(principal, jurosAnual){
    const jurosMensal = (jurosAnual / 100) / 12;
    const parcela = principal * jurosMensal;
    const total = parcela * jurosAnual;

    return [parcela, total];
}




const botao = document.getElementById("calc");
botao.addEventListener("click",function(){
    // document.getElementById("sem-resultado").style.display = "none";
    // document.getElementById("com-resultado").style.display = "flex";
    const principal = parseFloat(document.getElementById("principal").value);
    const juros = parseFloat(document.getElementById("juros").value);
    const anos = parseInt(document.getElementById("anos").value);
    const selecionado = document.querySelector('input[name="tipoPagamento"]:checked');
    console.log(selecionado?.value)
    if(selecionado?.value  === "fixo"){
        const [parcela, total] = calcularParcelaMensal(principal, juros, anos);
        // alert("O valor da parcela mensal é: " + parcela.toFixed(2));
        document.getElementById("resultadoMensal").textContent = parcela.toFixed(2);
        document.getElementById("resultadoTotal").textContent = total.toFixed(2);

    } else if (selecionado?.value === "variavel") {
        // Pega o valor de parcela retornado de calcular2
        const [parcela, total] = calcular2(principal, juros);
        document.getElementById("resultadoMensal").textContent = parcela.toFixed(2);
        document.getElementById("resultadoTotal").textContent = total.toFixed(2);
    }

});