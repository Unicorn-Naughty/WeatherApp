function createHtttp(optionz: string) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${optionz}&APPID=92a343d2995882d9b1e03daab3b81510`
        ;
}
export default createHtttp

