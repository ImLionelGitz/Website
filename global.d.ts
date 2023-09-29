interface InputTypes {
    'CHECKBOX': string
    'RADIO': string
    'TOGGLE': string
}

interface Lbutton {
    children: any
    bg?: boolean
    href?: string
    className?: string
    onclick?: (e: any) => void
}

interface LInput {
    children: any
    type?: keyof InputTypes
    alt_text?: boolean
    width?: number
    height?: number
    onchange?: (e: any) => void
    className?: string
}

interface GCard {
    icon: string
    title: string
    id: string
    className?: string
}

interface LDropdown {
    label: string
    msg: string
    options: string[]
}

interface LMain {
    children: any
}

interface VCard {
    icon: string
    title: string
    url: string
    className?: string
}