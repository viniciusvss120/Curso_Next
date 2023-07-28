import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq(){
  const [ativo, setAtivo] = useState<number>(0)

  function alternarVisibilidade(indice: number){
    if (indice === ativo) {
      setAtivo(-1)
    }else{
      setAtivo(indice)
    }
  }
  return (
    <div className="flex gap-2 md:w-3/5">
      <Pergunta
        indice={0}
        aberto={ativo === 0}
        pergunta="Qual é o jogo mais importante hoje?"
        resposta="O jogo do Corinthians"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta 
        indice={1}
        aberto={ativo === 1}
        pergunta="Que dia é hoje?"
        resposta="Terça"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={2}
        aberto={ativo === 2}
        pergunta="Quanto é o valor do produto?"
        resposta="455,00"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={3}
        aberto={ativo === 3} 
        pergunta="Qual é a linguagem utilizada"
        resposta="Javascript"
        alternarVisibilidade={alternarVisibilidade}
      />
    </div>
  )
}