function obterTaxaDolar(apiKey) {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.result === 'success') {
                return data.conversion_rates.BRL;
            } else {
                throw new Error(`Erro ao acessar a API`);
            }
        });
}
