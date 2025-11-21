'use client'

import { useState } from "react";

export default function Ejemplo() {

    const [cambiar, setCambiar] = useState(false)

    const presionar = () => {
        setCambiar(!cambiar)

    }

    return(
        <div>
            <p>lorem</p>

            <button onClick={presionar}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1380ec] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >presionar</button>
        </div>
    )

}

