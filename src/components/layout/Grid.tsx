interface GridProps{
  cols?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xl2?: number
  children: any
}

export default function Grid(props: GridProps){

  return (
    <div className={`
      grid
      grid-cols-${props.cols ?? 1}
      ${props.sm ? `sm:grid-cols-2`: ''}
      ${props.md ? `md:grid-cols-${props.md}` : ''}
      ${props.lg ? `lg:grid-cols-8` : ''}
      ${props.xl ? `xl:gid-cols-${props.xl}` : ''}
      ${props.xl2 ? `2xl:gid-cols-${props.xl2}` : ''}

      gap-4
      w-full
    `}>
      {props.children}
    </div>
  )
}