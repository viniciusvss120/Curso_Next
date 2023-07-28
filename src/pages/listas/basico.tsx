import TabelaSerieA from "@/components/listas/TabelaSerieA"

export default function PaginaListasBasicas(){
  const tabelaSerieA = [
    'Botafogo',
    'Flamengo',
    'Grêmio',
    'São Paulo',
    'Fluminense',
    'Palmeiras',
    'Bragantino',
    'Athletico-PR',
    'Fortaleza'
  ]

  return(
    <div className={`
      flex
      flex-col 
      justify-center
      items-center
      h-screen
    `}>
      <h1 className="text-5xl font-bold">Tabela Série A</h1>
      <TabelaSerieA times={tabelaSerieA}/>
    </div>
  )
}