import { useCallback, useEffect, useState } from "react"
import useProcessando from "@/data/hooks/useProcessando"

export default function useStarWars(){
  const {processando,iniciarProcessamento,finalizarProcessamento} = useProcessando()
  const [personagens, setPersonagens] = useState<any[]>([])
  const [personagem, setPersonagem] = useState<any>([])
  const [filmes, setFilmes] = useState<any>([])

  const obterFilmes = useCallback( async (personagem: any) => {
    if (!personagem?.films?.length) return
    try{
      iniciarProcessamento()
      const reqs = personagem.films.map(async (filme: string) => {
        const resp = await fetch(filme)
        return resp.json()
       })
       const filmes = await Promise.all(reqs)
       setFilmes(filmes)
 
    }finally{
      finalizarProcessamento()
    }
  },[iniciarProcessamento, finalizarProcessamento])

   const obterPersonagens = useCallback(async function(){
    try{
      iniciarProcessamento()
      const resp = await fetch('https://swapi.dev/api/people/')
      const dados = await resp.json()
      setPersonagens(dados.results)
    }finally{
      finalizarProcessamento()
    }
  }, [iniciarProcessamento,finalizarProcessamento])

  function selecionarPersonagem(personagem: any){
    setPersonagem(personagem)
    console.log('Selecionar ' +  personagem.films)
  }

  function voltar(){
    setPersonagem(null)
    setFilmes([])
  }

  useEffect(() => {
    obterPersonagens()
  }, [obterPersonagens])
  
  useEffect(() => {
    obterFilmes(personagem)
  },[personagem, obterFilmes])
 
  return {
    personagens,
    processando,
    filmes,
    voltar,
    selecionarPersonagem
    
  }
}