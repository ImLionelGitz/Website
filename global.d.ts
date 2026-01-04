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
   data: iconData
}

// types

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number }

// pf = Portfolio

type pfNextSlot = {
   icon: string
   content: string | Array<pfContent>
}

type iconData = {
   btnName: string
   btnType: 'media' | 'apps' | 'models'
}

type pfContent = {
   platforms: number[]
   price: number
   views: number
   remarks: string
   url: string
   isVideo: boolean
}

type dropdownOption = {
   value: string
   label: string
}

type review = {
   name: string
   comments: string
   pfp: string
   ratings: number
}

type contactData = {
   name: string
   discord: string
   category: string
   message: string
}
