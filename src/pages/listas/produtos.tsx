import Carrinho from "@/components/listas/Carrinho";
import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constantes/produtos";
import CarrinhoContexto from "@/data/contexts/CarrinhoContexto";
import Link from "next/link";
import { useState, useContext } from "react";

export default function PaginaProdutos(){
  const ctx =  useContext(CarrinhoContexto)

  return (
    <div className={`
     flex
     flex-col
     gap-10
     justify-center
     items-center
    `}>
      <Carrinho itens={ctx.itens} />
      <ListaProdutos produtos={produtos} comprar={ctx.adicionarProduto} />
      <Link href="/">Voltar</Link>
    </div>
  )
}