const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const valor = Number(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    if (valor > 500) {
        const desconto = valor * 0.1;
        const total = valor - desconto;

        resultado.textContent =
            "Desconto: R$ " + desconto + " | Total com desconto: R$ " + total;
    }
    else if (valor > 100) {
        const desconto = valor * 0.05;
        const total = valor - desconto;

        resultado.textContent =
            "Desconto: R$ " + desconto + " | Total com desconto: R$ " + total;
    }
    else {
        resultado.textContent = "Sem desconto. Total: R$ " + valor;
    }
});