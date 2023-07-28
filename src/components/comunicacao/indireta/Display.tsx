interface DisplayProps {
  valor: number
}

export default function Display(props: DisplayProps) {
  return (
    <div className="
      flex justify-center items-center
      rounded-md
      text-5xl
      font-black bg-slate-300 p-5 
      flex-1
      ">
      {props.valor}
    </div>

  )
}