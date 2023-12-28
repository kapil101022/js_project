const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for(let j = 0; j < country_list.length; j++){
        let selected = i == 0 ? country_list[j].name == "US Dollar" ? "selected" : "" : country_list[j].code == "INR" ? "selected" : "";
        let optionTag = `<option value="${country_list[j].code}" ${selected}>${country_list[j].name}-${country_list[j].code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.getElementById("fromAmount");
    const resultAmount = document.getElementById("toAmount");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    console.log(fromCurrency);
    let url = ` https://v6.exchangerate-api.com/v6/39e544fd9e5e3422bfbfba94/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        resultAmount.value = `${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{
        alert("Something went wrong");
    });
}