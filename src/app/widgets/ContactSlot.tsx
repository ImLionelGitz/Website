import { useRef } from 'react'

export default function ContactSlot({ children, info, bgcolor, className }: ContactSlot) {
  const tooltip = useRef<HTMLDivElement>(null)

  function OnMouseEnter() {
    if (tooltip.current) {
      const RealTooltip = tooltip.current

      if (!RealTooltip.classList.contains('GetIn')) RealTooltip.classList.add('GetIn')
    }
  }

  function OnMouseLeave() {
    if (tooltip.current) {
      const RealTooltip = tooltip.current

      if (RealTooltip.classList.contains('GetIn')) RealTooltip.classList.remove('GetIn')
    }
  }

  return (
    <div onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave}
      style={{ '--logo-color': bgcolor } as React.CSSProperties} className={'Contact ' + className || ''}
    >
      <div ref={tooltip} className='round-icon'>{children}</div>
      <div className='p-2'>{info}</div>
    </div>
  );
}