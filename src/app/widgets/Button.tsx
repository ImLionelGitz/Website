/**
 * Create a Button for interaction. **The param `children` should be ignored!**
 * @param  {boolean} bg Add background to this button (default `false`)
 * @param  {string}  href Link to an URL (**This will turn this button into an anchor**)
 * @param  {string}  className Add optional extra class names (useful when adding aditional styles)
 * @param  {void}    onclick Add a function when this button is clicked (**This param is useless, if `href` is specified!**)
 */

export default function Button({ children, bg, href, className, onclick }: Lbutton) {
    const bgType = (bg) ? 'ButtonWithBG' : 'ButtonWithoutBG'
    const extraClasses = (className) ? ` ${className}` : ''

    if (typeof href == 'string') return (<a className={bgType + extraClasses} href={href}>{children}</a>)
    else return (<button className={bgType + extraClasses} onClick={onclick}>{children}</button>)
}