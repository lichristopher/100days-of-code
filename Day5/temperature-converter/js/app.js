const temperatureConverter = {
  celsiusToFahrenheit: function(celsius) {
    return (celsius * 9) / 5 + 32;
  },
  celsiusToKelvin: function(celsius) {
    return celsius + 273.15;
  }
};

const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const temperatureIcon = document.querySelector("#temperature-icon");
celsiusInput.addEventListener("input", function(e) {
  const celsius = Number(e.target.value);
  const fahrenheit = temperatureConverter.celsiusToFahrenheit(celsius);
  const kelvin = temperatureConverter.celsiusToKelvin(celsius);
  console.log(celsius);
  console.log(fahrenheit);
  console.log(kelvin);
  fahrenheitInput.value = fahrenheit;
  kelvinInput.value = kelvin;

  if (celsius >= 32) {
    temperatureIcon.setAttribute(
      "src",
      "https://www.misskatecuttables.com/uploads/shopping_cart/8072/large_hot-hot-hot-title.png"
    );
  } else {
    temperatureIcon.setAttribute(
      "src",
      "http://pngimg.com/uploads/ice/ice_PNG9332.png"
    );
  }
});
