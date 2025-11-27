'use client'

import { useState } from "react";
import { user_data } from "@/database/database_user.js";
import { useRouter } from 'next/navigation';

export default function Register() {

    const [usuario, setUsuario] = useState("")
    const [pass, setPass] = useState("")
    const router = useRouter();

    const Submit = () => {

        if(usuario=="" | pass==""){
            alert('error, contenido vacio')
        }else{
            user_data.user = usuario
            user_data.pass = pass

            router.push('/')
        }

    }


    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden" >
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
                        <h2 className="text-[#0d141b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create your account</h2>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Usuario</p>
                                <input
                                    placeholder="Coloque su usuario"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-slate-50 focus:border-[#cfdbe7] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Password</p>
                                <input
                                    placeholder="Enter your password"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-slate-50 focus:border-[#cfdbe7] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                                    type="password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="flex px-4 py-3 justify-center">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1380ec] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                                onClick={Submit}
                            >
                                <span className="truncate">Registrar</span>
                            </button>
                        </div>
                        <p className="text-[#4c739a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Already have an account? Sign in</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

