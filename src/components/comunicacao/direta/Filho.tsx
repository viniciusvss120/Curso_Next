interface Filhorops {
  nome: string
  sobrenome: string
}

export default function Filho(props: Filhorops){
  return (
    <div className={`
      flex justify-center items-center
      bg-green-500 rounded-md p-5
    `}>
      <div className="flex justify-center gap-2 text-xl">
        <span className="text-black">Filho</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      {/* <div className="flex gap-5">
        <Filho />
        <Filho />
      </div> */}
    </div>
  )
}