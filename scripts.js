const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const convertedCurrencyValue = document.querySelector(".currency-value")// outras moedas


    const dollarToday = 5.2
    const euroToday = 6.2
    const librasToday = 6.1


    if (currencySelect.value == "dollar") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
    }

    if (currencySelect.value == "euro") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libras") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / librasToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libras") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = ".assets/libra 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
