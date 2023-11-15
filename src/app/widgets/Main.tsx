export default function Main({ children, className }: LMain) {
    return (
        <div className={((className) ? className : '')}>{children}</div>
    )
}