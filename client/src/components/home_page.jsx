import Link from "next/link"


export const Home_page = () => {

    return(
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-[#0d141b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Bienvenido a StudyHub</h2>
            <p className="text-[#0d141b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Organiza tus estudios, colabora con compañeros y alcanza tus metas académicas con StudyHub.
            </p>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                <Link href="/register">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#1380ec] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] w-full"
                  >
                    Registrarse
                  </button>
                </Link>
                <Link href="/login">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#e7edf3] text-[#0d141b] text-base font-bold leading-normal tracking-[0.015em] w-full"
                  >
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}

