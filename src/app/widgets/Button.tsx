const btnWithBG = "bg-green-600 text-white p-2 rounded active:bg-emerald-700"
const btnWithoutBG = "text-white active:text-emerald-700"

/**
 * Create a Button for interaction. **The param `children` should be ignored!**
 * @param  {boolean} bg Add background to this button (default `false`)
 * @param  {string}  href Link to an URL (**This will turn this button into an anchor**)
 * @param  {string}  extra_styles Add optional extra class names (useful when adding aditional styles)
 * @param  {void}    onclick Add a function when this button is clicked (**This param is useless, if `href` is specified!**)
 */

export default function Button({ children, bg, href, extra_styles, onclick }: Lbutton) {
    const bgType = (bg) ? btnWithBG : btnWithoutBG
    const extraClasses = (extra_styles) ? ` ${extra_styles}` : ''

    return (
        <>{
            (typeof href == 'string') ?
            <a className={bgType + extraClasses} href={href}>{children}</a> :
            <button className={bgType + extraClasses} onClick={onclick}>{children}</button> 
        }</>
    )
}