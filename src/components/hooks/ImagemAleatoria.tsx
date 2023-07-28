import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {
  const[pesquisa, alterarPesquisa] = useState<string>('')
  const [tamanho, alterarTamanho] = useState<number>(300)
  // let pesquisa: string = ''
  const url = 'https://source.unsplash.com/featured/'
  
  

  function urlImagem(){
    return `${url}${pesquisa}`

  }

  function renderizarBotao(valor: string){
    return (
      <button className={`
        bg-blue-500
        px-4
        py-2
        rounded-md
      `}
      onClick={() => {
        alterarPesquisa(valor)
      }}
      >
        {valor}
      </button>
    )
  }
   return(
    <div className={`
      flex flex-col gap-3
      border border-zinc-500
      p-7
      rounded-md
    `}>
      <div className={`flex justify-center gap-6`}>
        <span>{pesquisa}</span>
        <span>{tamanho}x{tamanho}</span>
      </div>
      <img 
        src={`${url} ${tamanho}x${tamanho}? ${pesquisa}`} 
        height={300} 
        width={300} 
        alt="Image"
      />
      <div className={`flex justify-between gap-5`}>
      {renderizarBotao('abstract')}
      {renderizarBotao('city')}
      {renderizarBotao('person')}
      </div>
      <div>
        <input 
        type="number"
        value={tamanho} 
        className={`
          bg-zinc-300
          p2 
          rounded-md
        `}
        onChange={e => {
          // alterarTamanho(+e.target.value)
        }}
        />
      </div>
    </div>
   )
}