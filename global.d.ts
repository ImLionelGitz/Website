// interfaces

interface Portfolios {
   media: Record<string, pfNextSlot[]>
   apps: Record<string, pfNextSlot[]>
   models: Record<string, pfNextSlot[]>
}

interface PortfoliosHaxe {
   media: Array<pfHaxeSlot>
   apps: Array<pfHaxeSlot>
   models: Array<pfHaxeSlot>
}

interface HaxeData {
   action: string
   data: PortfoliosHaxe
}

// types

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number }

type pfNextSlot = {
   price: number
   remarks: string
   imgUrl: string
   url: string
   isVideo: boolean
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
