interface FilmesProps{
  filmes: any[]
  voltar: () => void
}

export default function Filmes(props: FilmesProps){

  return(
    <div className="flex flex-col gap-5 items-center w-full">
      <button className="botao" onClick={props.voltar}>Voltar</button>
      <table className="w-3/5 text-xl opacity-80 rounded-lg overflow-hidden">
        <thead>
          <tr className="text-white bg-zinc-900">
            <th className="p-2 font-black">Título</th>
            <th className="p-2 font-black">Epsódio</th>
            <th className="p-2 font-black">Data</th>
          </tr>
        </thead>
        <tbody>
          {props.filmes.map((filme:any, indice: number)=> (
            <tr 
              key={filme.title} 
              className={`
                ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
                text-center

              `}
            >
              <td className="p-2 text-white">{filme.title}</td>
              <td className="p-2 text-white">{filme.episode_id}</td>
              <td className="p-2 text-white">{new Date(filme.release_date).toLocaleDateString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}