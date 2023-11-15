interface InputTypes {
    'CHECKBOX': string
    'RADIO': string
    'TOGGLE': string
}

interface PlatformsTypes {
    'ROBLOX': string ,
    'ITCH_IO': string,
    'GAMEJOLT': string,
    'APKPURE': string
}

interface PopupTypes {
    'SETTINGSMENU': string
    'PLATFORMSMENU': string
}

interface HTMLAnchorTarget {
    "_self" : string
    "_blank": string
    "_parent": string
    "_top": string
}

// Elemental types

interface Lbutton {
    children: any
    bg?: boolean
    href?: string
    className?: string
    target?: keyof HTMLAnchorTarget
    onclick?: (e: any) => void
}

interface LInput {
    children: any
    type: keyof InputTypes
    alt_text?: boolean
    width?: number
    height?: number
    onchange: (e: any) => void
    className?: string
}

interface GCard {
    icon: string
    title: string
    platforms: Array<keyof PlatformsTypes>
    links: Array<string>
    onSlotClick: (platforms: Array<keyof PlatformsTypes>, links: Array<string> ) => void
    className?: string
}

interface LDropdown {
    label: string
    msg: string
    options: string[]
}

interface LMain {
    children: any,
    className?: string
}

interface VCard {
    icon: string
    title: string
    url: string
    activity: string
    className?: string
}

interface PFOCard {
    icon: string
    url: string
    className?: string
}

interface LHeader {
    ytThumb?: boolean
    imgPath: string
    className?: string
}

interface Popup {
    Content: any
    onClose: (event: any) => void
    Type: keyof PopupTypes
    className?: string
}

interface ContactSlot {
    children: any
    info: string
    bgcolor: string
    className?: string
}

interface GameDBStructure {
    name: string
    icon: string
    available: Array<keyof PlatformsTypes>
    urls: string[]
}

interface VideoDBStructure {
    name: string
    thumbnail: string
    playlist: string
    activity: string
}

interface CheckedDataReturnType {
    source: string
    box: HTMLInputElement
    value: boolean
}

interface GDriveLoader {
    src: string
}

interface Footer {
    className?: string
}