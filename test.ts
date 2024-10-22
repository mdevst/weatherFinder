import weatherfinder from "./src/index.js";

async function main(){
  const weather = await weatherfinder.find("new york", "ny, united states")
  console.log(weather)
}

main()