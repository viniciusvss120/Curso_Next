import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {
  const [num, setNum] = useState<number>(0)

  function incrementar(valor: number){
    setNum(num + valor)
  }

  function decrementar(valor: number){
    setNum(num - valor)
  }
  return (
    <div className={`
      flex
      flex-col
      border
      border-zinc-400
      rounded-lg
      p-2
      w-72
      h-72
    `}>
      <Display valor={num}/>
      <Botoes
        inc={incrementar}
        dec={decrementar}
      />
    </div>

  )
}