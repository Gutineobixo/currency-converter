async function convertCurrency() {
      const amount = document.getElementById('amount').value;
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const result = amount * rate;
      document.getElementById('result').textContent = `Resultado: ${result.toFixed(2)} ${toCurrency}`;
  }
async function convertCurrency() {
      const amount = document.getElementById('amount').value;
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;
      const errorElement = document.getElementById('error');
      const resultElement = document.getElementById('result');
  
      if (fromCurrency === toCurrency) {
          errorElement.textContent = 'Conversion between the same currency is not allowed.';
          resultElement.textContent = '';
          return;
      }
  
      try {
          const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
          const data = await response.json();
          const rate = data.rates[toCurrency];
          const result = amount * rate;
          resultElement.textContent = `Result: ${result.toFixed(2)} ${toCurrency}`;
          errorElement.textContent = '';
      } catch (error) {
          errorElement.textContent = 'Error fetching the exchange rate.';
          resultElement.textContent = '';
      }
  }
window.onload = convertCurrency;