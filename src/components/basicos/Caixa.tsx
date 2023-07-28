export default function Caixa(props: any){
  return (
    <div className={`
      flex justify-center items-center
      bg-purple-500 
      m-2 
      rounded-md
      p-2
      w-64
      h-44
      text-3xl
    `}>
      {props.children}
    </div>
  )
}