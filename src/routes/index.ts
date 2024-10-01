

import Error404 from "../views/Error404";
import MapsOfHum from "../views/MapsOfHum";
import ThirtyDaysWeather from "../views/ThirtyDaysWeather";
import WeatherData from "../views/WeatherData";

export const routes = [
    {
        path: "/",
        Component: WeatherData
    },
    {
        path: "*",
        Component: Error404
    },
    {
        path: "/map",
        Component: MapsOfHum
    },
    {
        path: "/thirtyDaysForecaster",
        Component: ThirtyDaysWeather
    },
]

export const routesForBreadCrumbs = [
    {
        path: "/",
        title: "Weather for today"
    },
    {
        path: "/map",
        title: "Precipitation map"
    },
    {
        path: "/thirtyDaysForecaster",
        title: "Weather for 30 days"
    },
]