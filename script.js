document.getElementById('convertButton').addEventListener('click', function() {
    let temperature = parseFloat(document.getElementById('temperatureInput').value);
    let unit = document.getElementById('unitInput').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number!';
    } else {
        if (unit === 'Celsius') {
            let fahrenheit = (temperature * 9/5) + 32;
            let kelvin = temperature + 273.15;
            result = `${temperature} °C is ${fahrenheit.toFixed(2)} °F and ${kelvin.toFixed(2)} K.`;
        } else if (unit === 'Fahrenheit') {
            let celsius = (temperature - 32) * 5/9;
            let kelvin = celsius + 273.15;
            result = `${temperature} °F is ${celsius.toFixed(2)} °C and ${kelvin.toFixed(2)} K.`;
        } else if (unit === 'Kelvin') {
            let celsius = temperature - 273.15;
            let fahrenheit = (celsius * 9/5) + 32;
            result = `${temperature} K is ${celsius.toFixed(2)} °C and ${fahrenheit.toFixed(2)} °F.`;
        }
    }

    document.getElementById('result').innerText = result;
});
