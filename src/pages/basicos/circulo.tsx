import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
  return (
    <div className="
      flex
      justify-between
      items-center
      h-screen
    ">
      <Circulo texto="Circ #1"></Circulo>
      <Circulo texto="Circ #2"></Circulo>
      <Circulo texto="Circ #3"></Circulo>
    </div>
  )
}