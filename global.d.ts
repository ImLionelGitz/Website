// types

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number }

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
