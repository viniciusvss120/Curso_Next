import Produto from "@/model/Produto";

export default interface ItemCarrinho{
  produto: Produto
  quantidade: number
}