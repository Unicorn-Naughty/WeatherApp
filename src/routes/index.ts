

import Error404 from "../views/Error404";
import HomePage from "../views/HomePage";
import MapsOfHum from "../views/MapsOfHum";
import ThirtyDaysWeather from "../views/ThirtyDaysWeather";

export const routes = [
    {
        path: "/",
        Component: HomePage
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

]