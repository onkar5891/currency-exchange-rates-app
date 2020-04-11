export interface CurrencyExchangeRates {
    rates: [{
        code: string,
        value: number
    }]
    base: string
}