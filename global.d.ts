interface InputTypes {
    'CHECKBOX': string
    'RADIO': string
    'TOGGLE': string
}

interface Lbutton {
    children: any
    bg?: boolean
    href?: string
    extra_styles?: string
    onclick?: () => void
}

interface LInput {
    children: string
    type?: keyof InputTypes
    alt_text?: boolean
    width?: number
    height?: number
    oncheck?: (e: any) => void
}