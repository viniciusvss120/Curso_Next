import Background from "@/components/starwars/Background";
import Filmes from "@/components/starwars/Filmes";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars"
export default function PaginaStarWars(){
  const {personagens, processando, filmes, voltar,selecionarPersonagem} = useStarWars()


  return(
    <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
      <Background />
      {/* <button 
        onClick={obterPersonagens}
        className="bg-blue-500 p-2"
      >
        Obter
      </button> */}
      {processando ?(
        <span className="text-white"> Processando...</span>
      ): filmes.length > 0 ? (
        <Filmes filmes={filmes} voltar={voltar}/>
      ): personagens.length > 0 ? (
        <Personagens personagens={personagens} selecionar={selecionarPersonagem}/>
      ) : ( <div className="text-white">Nenhum personagem encontrado</div>)}
    </div>
  )
}