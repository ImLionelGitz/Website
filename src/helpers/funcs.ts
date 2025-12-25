import { Pages } from './enums'

export async function getWebData(page: Pages) {
   const resp = await fetch('/Test2.json')

   if (resp.ok) {
      const data = await resp.json()

      return data[page]
   }

   return null
}
