import { useState } from "react"
import If from "./if"

interface PerguntaProps{
  indice: number
  pergunta: string
  resposta: string
  aberto: boolean
  alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps){
  // const [aberta, setAberta] = useState<boolean>(false)


  return (
    <div className={`
      border
      border-zinc-600
      rounded-md
      overflow-hidden

    `}>
      <div 
      className="bg-zinc-400  p-5 cursor-pointer select-none"
      onClick={() => props.alternarVisibilidade(props.indice)}
      >
        <span>{props.pergunta}</span>
      </div>
      <If teste={props.aberto}>
         <div className=" p-5">
            {props.resposta}
          </div>
      </If>

    
    </div>
  )
}