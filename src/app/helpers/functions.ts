import { API_KEY, CHANNEL_ID, CACHE_VADLIDITY } from "./variables";

export async function GetThumbnail() {
  const searchResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&part=id`
  );
  const searchResult = await searchResponse.json();

  const video_id = searchResult.items[0].id.videoId;
  const videoResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${video_id}&part=snippet`
  );
  const videoResult = await videoResponse.json();

  const thumbnail_url = videoResult.items[0].snippet.thumbnails.maxres.url;
  return thumbnail_url as string
}

export class SharedDataHolder {
  private static sharedData: Record<string, string> = {}

  public static AddData(key: string, value: string) {
    if (!this.sharedData[key]) this.sharedData[key] = value
  }

  public static ClearData() {
    this.sharedData = {}
  }

  public static GetData() {
    return this.sharedData
  }
}

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