import { API_KEY, CHANNEL_ID, CACHE_VADLIDITY } from "./variables";

export function SetCache(key: string, data: any) {
  const cache = {
    data: data,
    timestamp: Date.now()
  }

  localStorage.setItem(key, JSON.stringify(cache))
}

export function GetCache(key: string) {
  const data = localStorage.getItem(key)

  if (data) {
    const parsedData = JSON.parse(data) as { data: any, timestamp: number },
      currentTime = Date.now()

    if (currentTime - parsedData.timestamp <= CACHE_VADLIDITY) {
      return parsedData.data
    }

    localStorage.removeItem(key)
  }
  
  return null
}

export function GetRandomData(data: any, dataAmount: number, activeOnly?: boolean) {
  const dataKeys = Object.keys(data)

  let copyOfArray = [...dataKeys],
  arrayOutput = []

  if (activeOnly) {
    copyOfArray = copyOfArray.filter(key => data[key].activity === 'active')
  }

  for (let i = 0; i < dataAmount; i++) {
    const randomIndex = Math.floor(Math.random() * copyOfArray.length),
    pickedElement = copyOfArray[randomIndex]
    arrayOutput.push(pickedElement)
    copyOfArray = copyOfArray.filter(key => key !== pickedElement)
  }

  return arrayOutput
}

export function TruncateString(str: string, maxLength: number) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}