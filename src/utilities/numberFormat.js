const numberFormat = (value, currencyFormat = 'INR') => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyFormat,
}).format(value)

export default numberFormat