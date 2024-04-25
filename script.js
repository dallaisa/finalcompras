function validarCupom() {
    const cupomInput = document.getElementById("cupomInput").value;
    const cupomMsg = document.getElementById("cupomMsg");

    if (cupomInput.toUpperCase() === "FIAP24") {
        cupomMsg.innerText = "Cupom válido! Desconto aplicado.";
    } else {
        cupomMsg.innerText = "Este cupom não é válido.";
    }
}

function calcularTotal() {
    const qtdLunaDorata = parseInt(document.getElementById("qtdLunaDorata").value);
    const qtdIncantoTostano = parseInt(document.getElementById("qtdIncantoToscano").value);
    const qtdCharmedeProvence = parseInt(document.getElementById("qtdCharmedeProvence").value);
    const qtdEleganceLoire = parseInt(document.getElementById("qtdEleganceLoire").value);
    const qtdVentodelVeneto = parseInt(document.getElementById("qtdVentodelVeneto").value);
    const qtdDolceVita = parseInt(document.getElementById("qtdDolceVita").value);
    const qtdMareAmore = parseInt(document.getElementById("qtdMareAmore").value);
    const qtdRiservaOro = parseInt(document.getElementById("qtdRiservaOro").value);

    const precoLunaDorata = 180; 
    const precoIncantoTostano = 190; 
    const precoCharmedeProvence = 170; 
    const precoDourceurdeChampagne = 190; 
    const precoElegancedelaLoire = 180; 
    const precoDolcedelVita = 190; 
    const precoMareAmore = 180; 
    const precoRiservaOro = 170; 
    const precoVentodelVeneto = 170; 

    const subtotal = (qtdLunaDorata * precoLunaDorata) + (qtdIncantoTostano * precoIncantoTostano) + (qtdCharmedeProvence * precoCharmedeProvence)+ (qtdEleganceLoire * precoElegancedelaLoire)+  (qtdVentodelVeneto * precoVentodelVeneto)+ (qtdDolceVita * precoDolcedelVita)+ (qtdMareAmore * precoMareAmore)+ (qtdRiservaOro * precoRiservaOro);

    const cupomInput = document.getElementById("cupomInput").value;
    let desconto = 0;
    let cupomMsg = document.getElementById("cupomMsg");

    if (cupomInput.toUpperCase() === "FIAP24") {
        desconto = subtotal * 0.1;
        cupomMsg.innerText = "Cupom válido! Desconto aplicado.";
    } else {
        cupomMsg.innerText = "Este cupom não é válido.";
    }

    const total = subtotal - desconto;

    document.getElementById("total").innerText = `Total: R$${total.toFixed(2)}`;
}
