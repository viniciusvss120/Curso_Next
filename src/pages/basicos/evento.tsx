import Evento from "@/components/basicos/Evento";

export default function PaginaEventos(){
  return (
    <div className="
      flex
      justify-center
      items-center
      flex-wrap
      gap-5"
    >
      <Evento />
      <Evento />
      <Evento />
      <Evento />
    </div>
  )
}