import Caixa from "@/components/basicos/Caixa";

export default  function PaginaCaixa(){
  return (
    <div className={`
      flex
      gap-7
      p-7
    `}>
      <Caixa>#1Caixa</Caixa>
      <Caixa>#2Caixa</Caixa>
      <Caixa>#3Caixa</Caixa>

    </div>
  )
}