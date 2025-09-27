const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const exchangeRateText = document.getElementById("exchange-rate");
const fromFlag = document.getElementById("from-flag");
const toFlag = document.getElementById("to-flag");
const form = document.getElementById("converter-form");

// Populate dropdowns
for (let currency in countryList) {
    let option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    if (currency === "USD") option1.selected = true;
    fromCurrency.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    if (currency === "INR") option2.selected = true;
    toCurrency.appendChild(option2);
}

// Update flag image
function updateFlag(select, flagImg) {
    const currCode = select.value;
    const countryCode = countryList[currCode];
    flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

fromCurrency.addEventListener("change", () => updateFlag(fromCurrency, fromFlag));
toCurrency.addEventListener("change", () => updateFlag(toCurrency, toFlag));

// Fetch exchange rate
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === "" || amount <= 0) {
        exchangeRateText.textContent = "Please enter a valid amount";
        return;
    }

    try {
        // ✅ This API always works, no API key needed
        let url = `https://open.er-api.com/v6/latest/${from}`;
        let response = await fetch(url);
        let data = await response.json();

        if (!data || !data.rates || !data.rates[to]) {
            exchangeRateText.textContent = "Currency not supported";
            return;
        }

        let rate = data.rates[to];
        let finalAmount = (amount * rate).toFixed(2);
        exchangeRateText.textContent = `${amount} ${from} = ${finalAmount} ${to}`;
    } catch (error) {
        exchangeRateText.textContent = "Error fetching exchange rate";
        console.error(error);
    }
});