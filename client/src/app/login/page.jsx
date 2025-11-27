'use client'
import { useState } from "react";
import { user_data } from "@/database/database_user.js";
import { useLogin } from "@/context/login";

export default function Login() {

  const [usuario, setUsuario] = useState("")
  const [pass, setPass] = useState("")
  const { setIsLogin } = useLogin()

  const Submit = () => {
    
    if(user_data.user==usuario & user_data.pass==pass){
      setIsLogin(true)
    }else{
      alert('Credenciales incorrectas')
    }

  }

    return(
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-[#0d141b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Iniciar Sesion</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Username</p>
                <input
                  placeholder="Enter your username"
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
            <p className="text-[#4c739a] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">Forgot password?</p>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#1380ec] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={Submit}
              >
                <span className="truncate">Login</span>
              </button>
            </div>
            <p className="text-[#4c739a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Don't have an account? Sign up</p>
          </div>
        </div>
      </div>
    </div>
    )

}

