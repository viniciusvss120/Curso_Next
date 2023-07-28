interface TabelaSerieAProps{
  times:string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps){

  const itens2 = props.times.map((time, i) => {
    return (
      <li key={time} className={`text-2xl list-decimal ${i % 2 ? 'text-blue-500': 'font-yellow-400'}`}>
        {time}
      </li>
    )
  })
  return(
    <ol>
      {itens2}
    </ol>
  )
}