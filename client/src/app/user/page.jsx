'use client'
import { useEffect, useState } from "react"
import { useLogin } from "@/context/login";
import { useRouter } from "next/navigation";
import { pizzas } from "@/database/pizza";
import { Boton_pizza } from "@/components/boton_pizza";


export default function User() {

  const router = useRouter()
  const { islogin } = useLogin()
  const [pedido, setPedido ] = useState({
      tipo : "",
      sabor : ""
  })

  useEffect(() => {
    if (!islogin) {
      router.replace("/")
    }
  }, [islogin, router])

  const submit = (sabor) => {
    router.push(`/recibo/${pedido.tipo}/${sabor}`)
  }

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center items-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full items-center">
              <div className="w-full text-center mb-8 md:mb-12">
                <h1 className="text-gray-900 tracking-tight text-3xl sm:text-4xl font-bold leading-tight">Elige tu tipo de Pizza</h1>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full p-4">
              {
                pedido.tipo == "" 
                ?
                Object.keys(pizzas).map((tipo_pizza, index) => {
                  return(<Boton_pizza key={index} producto={tipo_pizza} clave={'tipo'} pedido={pedido} setPedido={setPedido} ></Boton_pizza>)
                })
                :
                pizzas[pedido.tipo].map((sabor_pizza, index) => {
                  return( <button key={index} onClick={() => submit(sabor_pizza)}><Boton_pizza producto={sabor_pizza} clave={'sabor'} pedido={pedido} setPedido={setPedido} ></Boton_pizza></button>)
                })
              }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

