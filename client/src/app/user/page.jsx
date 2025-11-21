import { Navbar } from "../../components/navbar.jsx";

export default function User() {


    return(
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Hola, Sofia!</h1>
            <p className="text-[#0d141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Bienvenida de nuevo a StudyCentral. Explora tus cursos, revisa tu calendario, o descubre nuevos recursos para ayudarte en tus estudios.
            </p>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1380ec] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Mis Cursos</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0d141b] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Calendario</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}

