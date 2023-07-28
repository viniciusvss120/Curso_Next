import Filho from "./Filho";

interface Pairops {
  nome: string
  sobrenome: string
}
export default function Pai(props: Pairops){

  return (
    <div className={`
      flex
      gap-5
      flex-col
      bg-blue-500
      text-white
      border
      border-white
      rounded-md
      p-5
    `}>
      <div className="flex justify-center gap-2 text-xl">
        <span className="text-black">Pai</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-5">

        <Filho nome="Luiz Miguel" sobrenome={props.sobrenome} />
        <Filho nome="Alice" sobrenome={props.sobrenome} />
      </div>
     
    </div>
  )
}