const DOWN_SYMBOL = '▼',
UP_SYMBOL = '▲'

const CACHE_VADLIDITY = 7 * 24 * 60 * 60 * 1000

const Platforms = {
    'ROBLOX': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg',
    'ITCH_IO': 'https://static.itch.io/images/itchio-textless-black.svg',
    'GAMEJOLT': 'https://m.gjcdn.net/fireside-post-image/900/21484737-n26gxyff-v4.jpg',
    'APKPURE': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/APKPure_Logo.jpg/240px-APKPure_Logo.jpg'
}

const VideoDB = 'https://raw.githubusercontent.com/ImLionelGitz/AppsDatabase/main/videos.json',
GameDB = 'https://raw.githubusercontent.com/ImLionelGitz/AppsDatabase/main/apps.json'

const API_KEY = process.env.API_KEY,
CHANNEL_ID = 'UCPijoO9BXpKQdoPCRHYw5RA'

export { DOWN_SYMBOL, UP_SYMBOL, Platforms, API_KEY, CHANNEL_ID, CACHE_VADLIDITY, VideoDB, GameDB }