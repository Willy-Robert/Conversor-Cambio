document.getElementById('teste-API').addEventListener('click', function () {

    const apiKey = '********';


    obterTaxaDolar(apiKey)
        .then(dolarRate => {
    
            document.getElementById('dolar').innerText = `Dólar: R$ ${dolarRate}`;
        })
        .catch(error => {
            console.error('Erro ao obter a taxa do dólar: ', error);
        });
});
