interface PerrsonagensProps{
  personagens: any[]
  selecionar: (personagem:any) => void
}

export default function Personagens(props: PerrsonagensProps){

  return(
   <table className="w-3/5 text-xl opacity-80 rounded-lg overflow-hidden">
    <thead>
      <tr className="text-white bg-zinc-900">
        <th className="p-2 font-black">Nome</th>
        <th className="p-2 font-black">Altura</th>
        <th className="p-2 font-black">Peso</th>
        <th className="p-2 font-black">Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.personagens.map((p:any, indice: number)=> (
        <tr 
          key={p.name} 
          className={`
            ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
            text-center

          `}
        >
          <td className="p-2 text-white">{p.name}</td>
          <td className="p-2 text-white">{p.height}</td>
          <td className="p-2 text-white">{p.mass}</td>
          <td className="p-2 text-white">
            <button className="botao" onClick={() => props.selecionar(p)}>
              Check
            </button>
          </td>
        </tr>
      ))}
    </tbody>
   </table>
  )
}