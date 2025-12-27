// interfaces

// Home page

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

// types

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number }

// pf = Portfolio

type pfNextSlot = {
   icon: string
   content: string | Array<pfContent>
}

type pfContent = {
   platforms: number[]
   price: number
   remarks: string
   url: string
   isVideo: boolean
}

type dropdownOption = {
   value: string
   label: string
}
