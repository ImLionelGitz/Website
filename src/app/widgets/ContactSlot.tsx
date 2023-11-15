import { useRef } from 'react'

export default function ContactSlot({ children, info, bgcolor, className }: ContactSlot) {
  const coverIcon = useRef<HTMLDivElement>(null)

  function OnMouseMove() {
    if (coverIcon.current) {
      const tooltip = coverIcon.current
      
      if (!tooltip.classList.contains('GetIn')) {
        tooltip.classList.add('GetIn')
      }

      else {
        tooltip.classList.remove('GetIn')
      }
    }
  }

  return (
    <div onMouseEnter={OnMouseMove} onMouseLeave={OnMouseMove}
      style={{ '--logo-color': bgcolor } as React.CSSProperties} className={'Contact ' + ((className) ? className : '')}
    >
      <div ref={coverIcon} className='round-icon'>{children}</div>
      <div className='p-2'>{info}</div>
    </div>
  );
}