import Moeda from "@/uteis/Moeda"
import CarrinhoItem from "./CarrinhoItens"
import ItemCarrinho from "./ItemCarrinho"

interface CarrinhoProps{
  itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {
  const total = props.itens.reduce((soma, item) => {
    return soma + item.quantidade * item.produto.preco
  },0)
  return (
    <div className="flex flex-col w-full border border-zinc-500 rounded-md overflow-hidden">
      <div className="flex justify-between items-center bg-zinc-500 text-3xl p-3 ">
        <span>Carrinho</span>
        <span>{Moeda.formartar(total)}</span>
      </div>
      <div className="flex gap-5 p-5">
        {props.itens.length === 0 ? (
          <>
            Carrinho vazio :(
          </>
        ): (
          props.itens.map((item, i) => {
            return (
              <CarrinhoItem key={i} {...item}/>
            )
          })
        )}

      </div>
    </div>
  )
}