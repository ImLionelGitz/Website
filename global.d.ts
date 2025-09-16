interface PlatformsTypes {
    'ROBLOX': string ,
    'ITCH_IO': string,
    'GAMEJOLT': string,
    'APKPURE': string
}

interface HTMLAnchorTarget {
    "_self" : string
    "_blank": string
    "_parent": string
    "_top": string
}

// Elemental types

interface WorkCardData {
    workType: "Games" | "Videos"
    description: string
}

interface NewsCardData {
    newsType: "Info" | "Warning" | "Alert"
    title: string
}

interface ContentBarType {
    type: "Videos" | "Apps"
}

interface ThumbBarType {
    homepage?: boolean
    thumbSrc?: string
}

// types

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number };