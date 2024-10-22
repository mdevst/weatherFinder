import { weatherFinder } from "./src/index.js";

async function main(){
  const weather = await weatherFinder("london", "united kingdom", { allData: false, icons: null })
  console.log(weather.forecast)
}

main()