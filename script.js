let dolar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})
brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert ("usd-to-brl")

//Functions

function formatCurrency(value) {
    let fixedValue = fixvalue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
    
}


function fixvalue(value) {
    let fixedValue = value.replace (",", ".")
    let floatValue = parseFloat(fixedValue)
    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
if (type == "usd-to-brl") {
let fixedValue = fixvalue(usdInput.value)

let result = fixedValue * dolar
result = result.toFixed(2)

brlInput.value = formatCurrency(result)
}
if (type == "brl-to-usd") {
let fixedValue = fixvalue(brlInput.value)

let result = fixedValue / dolar

result = result.toFixed(2)

usdInput.value = formatCurrency(result)
}
}