import ItemCarrinho from "@/model/ItemCarrinho"
import Moeda from "@/uteis/Moeda"

export default function CarrinhoItem(props: ItemCarrinho){
 
  return(
    <div className={`
      flex
      rounded-full
      bg-blue-500
    `}>
      <span 
        className={`
          flex
          justify-center
          items-center
          w-7
          h-7
          rounded-full
          p-2
          bg-blue-700
        `}
      >
        {props.quantidade}
      </span> 
      <span className="">
        {props.produto.nome}
      </span>
      <span>
        {Moeda.formartar(props.produto.preco * props.quantidade)}
      </span>
    </div>
  )
}