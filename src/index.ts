import fetch from "node-fetch"
import { convertedData, reqData, weatherFinderOptions } from "./types.js"
import { weatherConditions } from "./constant.js"

/**
* Find out the weather forecast for a region.
* @example weatherFinder("new york", "ny, united states")
* @returns {reqData}
* @async
*/
export const weatherFinder = async (place: string, area: string, options: weatherFinderOptions = { allData: false, icons: null }): Promise<convertedData> => {
  try{
    const req = await fetch(`https://en.ilmatieteenlaitos.fi/api/weather/forecasts?${
    new URLSearchParams({
      place,
      area
    })
  }`)

  // Convert Data
  const data: reqData = await req.json() as reqData
  return options.allData ? data as any :  {
    day: {
      length: data.dayLength.lengthofday,
      sunrise: data.dayLength.sunrise,
      sunset: data.dayLength.sunset
    },
    forecast: {
      values: data.forecastValues,
      time: {
        mod: data.forecastModtime.modtime,
        iso: data.fractilesModtime.isotime
      }
    },
    fractile: {
      values: data.fractiles,
      time: {
        mod: data.fractilesModtime.modtime,
        iso: data.fractilesModtime.isotime
      }
    },
    symbolDescriptions: data.symbolDescriptions.map(des => ({
      icon: options.icons ? options.icons?.[des.id] : `https://cdn.fmi.fi/symbol-images/smartsymbol/v3/p/${des.id}.svg`,
      text: des.text_en
    }))
  }
  } catch(err) {
    console.log("An error has occurred. Make sure that the area or place parameters are entered correctly.")
    throw err
  }
}

export const getDefaultSymbol = (id: number) => {
  return `https://cdn.fmi.fi/symbol-images/smartsymbol/v3/p/${id}.svg`
}

export const getWeatherConditionsById = (id: number) => {
  return weatherConditions[id]
}