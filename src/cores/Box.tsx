import React from 'react'

export enum BoxAlign {
   TOP_LEFT,
   TOP_RIGHT,
   TOP_MIDDLE,
   BOTTOM_LEFT,
   BOTTOM_RIGHT,
   BOTTOM_CENTER,
   CENTER,
   CENTER_LEFT,
   CENTER_RIGHT,
}

interface Box {
   alignment: BoxAlign
   children: React.ReactNode
   className?: string
}

export function Box({ children, alignment, className }: Box) {
   const style: CSSVars = {
      display: 'grid',
   }

   switch (alignment) {
      case BoxAlign.TOP_LEFT:
         style.alignItems = 'start'
         style.justifyItems = 'start'
         break

      case BoxAlign.TOP_RIGHT:
         style.alignItems = 'start'
         style.justifyItems = 'end'
         break

      case BoxAlign.TOP_MIDDLE:
         style.alignItems = 'start'
         style.justifyItems = 'center'
         break

      case BoxAlign.BOTTOM_LEFT:
         style.alignItems = 'end'
         style.justifyItems = 'start'
         break

      case BoxAlign.BOTTOM_RIGHT:
         style.alignItems = 'end'
         style.justifyItems = 'end'
         break

      case BoxAlign.BOTTOM_CENTER:
         style.alignItems = 'end'
         style.justifyItems = 'center'
         break
      case BoxAlign.CENTER:
         style.alignItems = 'center'
         style.justifyItems = 'center'
         break

      case BoxAlign.CENTER_LEFT:
         style.alignItems = 'center'
         style.justifyItems = 'start'
         break

      case BoxAlign.CENTER_RIGHT:
         style.alignItems = 'center'
         style.justifyItems = 'end'
         break
   }

   const stackedChildren = React.Children.map(children, (child) => {
      return <div style={{ position: 'absolute' }}>{child}</div>
   })

   return (
      <div style={style} className={className || ''}>
         {stackedChildren}
      </div>
   )
}
