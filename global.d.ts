// interfaces

// Home page

interface Home {
   reviews: review[]
   news: news[]
}

// Portfolio page
interface Portfolios {
   media: Record<string, pfNextSlot>
   apps: Record<string, pfNextSlot>
   models: Record<string, pfNextSlot>
}

interface BtnCall {
   action: string
   data: { btnName: string; btnType: string }
}

interface PortfoliosHaxe {
   media: Array<pfHaxeSlot>
   apps: Array<pfHaxeSlot>
   models: Array<pfHaxeSlot>
   parallax: Array<string>
}

interface HaxeData {
   action: string
   data: PortfoliosHaxe
}

// types

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number }

// pf = Portfolio

type pfNextSlot = {
   icon: string
   content:
      | string
      | Array<{
           platforms: number[]
           price: number
           remarks: string
           url: string
           isVideo: boolean
        }>
}

type pfHaxeSlot = {
   imgUrl: string
   name: string
   url: string // this is for models only
}

type review = {
   name: string
   comments: string
   pfp: string
   ratings: number
}

type news = {
   title: string
   summry: string
   author: string
   uploadDate: string
   link: string
}

type dropdownOption = {
   value: string
   label: string
}
