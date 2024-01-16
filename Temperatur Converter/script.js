function convert() {
    var temperatureInput = document.getElementById('temperature');
    var temperature1 = document.getElementById('temperature-convert');
    var unit1 = document.getElementById('unit');
    var result1 = document.getElementById('result');

    if (temperatureInput.value !== '' && !isNaN(temperatureInput.value)){
        var temperature = parseFloat(temperatureInput.value);
        var convertedTemperature;

        if(temperature1.value === 'kelvin'){
            switch (unit1.value) {
                case 'celsius':
                    convertedTemperature = temperature - 273.15;
                    result1.innerHTML = `${temperature.toFixed(2)} °K is equal to ${convertedTemperature.toFixed(2)} °C.`;
                    break;
                case 'fahrenheit':
                    convertedTemperature = ((temperature - 273.15) * 9/5) + 32;
                    result1.innerHTML = `${temperature.toFixed(2)} °K is equal to ${convertedTemperature.toFixed(2)} °F.`;
                    break;
                default:
                    result1.innerHTML = 'Same unit choosen.';
                    break;
            }
        }

        else if(temperature1.value === 'celsius'){
            switch (unit1.value) {
                case 'kelvin':
                    convertedTemperature = temperature + 273.15;
                    result1.innerHTML = `${temperature.toFixed(2)} °C is equal to ${convertedTemperature.toFixed(2)} °K.`;
                    break;
                case 'fahrenheit':
                    convertedTemperature = (temperature * 9/5) + 32;
                    result1.innerHTML = `${temperature.toFixed(2)} °C is equal to ${convertedTemperature.toFixed(2)} °F.`;
                    break;
                default:
                    result1.innerHTML = 'Same unit choosen.';
                    break;
            }
        }

        else if(temperature1.value === 'fahrenheit'){
            switch (unit1.value) {
                case 'celsius':
                    convertedTemperature = (temperature - 32) * 5/9;
                    result1.innerHTML = `${temperature.toFixed(2)} °F is equal to ${convertedTemperature.toFixed(2)} °C.`;
                    break;
                case 'kelvin':
                    convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
                    result1.innerHTML = `${temperature.toFixed(2)} °F is equal to ${convertedTemperature.toFixed(2)} °K.`;
                    break;
                default:
                    result1.innerHTML = 'Same unit choosen.';
                    break;
            }
        }
    }
    else{
        result1.innerHTML = 'Please enter a valid temperature value.';
    }
}
