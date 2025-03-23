document.getElementById('teste-API').addEventListener('click', function () {

    const apiKey = 'cf19793aad631d61e884eacb';


    obterTaxaDolar(apiKey)
        .then(dolarRate => {
    
            document.getElementById('dolar').innerText = `Dólar: R$ ${dolarRate}`;
        })
        .catch(error => {
            console.error('Erro ao obter a taxa do dólar: ', error);
        });
});
