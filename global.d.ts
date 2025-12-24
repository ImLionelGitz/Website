// interfaces

interface Portfolios {
   media: Record<string, pfNextSlot>
   apps: Record<string, pfNextSlot>
   models: Record<string, pfNextSlot>
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

interface BtnCall {
   action: string
   data: { btnName: string; btnType: string }
}

// types

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number }

// pf = Portfolio

type pfMediaData = {
   price: number
   remarks: string
   url: string
   isVideo: boolean
}

type pfAppData = {
   platforms: number[]
   remarks: string
   url: string
}

type unitedPF = pfAppData & pfMediaData

type pfNextSlot = {
   icon: string
   content: unitedPF[] | string
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

type dropdownOption = {
   value: string
   label: string
}
