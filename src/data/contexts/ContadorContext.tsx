import { createContext, useState } from "react"

interface ContedorContexProps {
  numero: number
  incrementar: () => void
  decrementar: () => void
}

const ContadorContext = createContext<ContedorContexProps>({} as any)
export default ContadorContext

export function ContadorProvider(props: any) {
  const [numero, setNumero] = useState(123 )

  function incrementar() {
    setNumero(numero + 1)
  }
  function decrementar() {
    setNumero(numero - 1)
  }
  return (
    <ContadorContext.Provider value={{
      numero, incrementar, decrementar
    }}>
      {props.children}
    </ContadorContext.Provider>
  )
}