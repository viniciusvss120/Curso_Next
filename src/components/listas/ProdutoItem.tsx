import Produto from "@/model/Produto";
import Moeda from "@/uteis/Moeda";
import Image from "next/image";

interface ProdutoItemProps{
  produto: Produto
  comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const {produto} = props
  return (
    <div className={`
     flex
     flex-col
     border
     border-zinc-500
     rounded-md
     p-1
    `}>
      <Image 
        src={props.produto.imagem} 
        width={300} 
        height={200} 
        alt="Imagem"
        className="rounded-md"
      />
      <div className="flex flex-col p-3 gap-3">
        <div className="flex justify-between items-center ">
          <div className="text-2xl font-black">{produto.nome}</div>
          <div className="text-blue-500 font-bold">{Moeda.formartar(produto.preco)}</div>
        </div>
        <div>
          <div className="text-gray-500">{produto.descricao}</div>
        </div>
        <div>
          <button 
          className="botao flex w-full justify-center"
          onClick={() => props.comprar(produto)}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}