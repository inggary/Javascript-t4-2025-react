'use client'


export default async function Recibo({ params }) {
    const { id_tipo, id_sabor } = await params

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4 group/design-root">
            <div className="w-full max-w-lg rounded-xl bg-white dark:bg-[#1b0d0d]/50 shadow-lg border border-neutral-200 dark:border-neutral-800">
                <div className="p-8">
                    <div className="flex flex-col gap-2 mb-8">
                        <p className="text-[#1b0d0d] dark:text-white text-3xl font-black leading-tight tracking-[-0.03em]">Resumen de tu Pedido</p>
                        <p className="text-[#9a4c4c] dark:text-[#f3e7e7]/60 text-base font-normal leading-normal">Por favor, revisa los detalles de tu pedido antes de confirmar.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <div className="flex justify-between gap-x-6 py-3">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#9a4c4c] dark:text-[#f3e7e7]/60 text-xl" data-icon="restaurant_menu">restaurant_menu</span>
                                    <p className="text-[#9a4c4c] dark:text-[#f3e7e7]/60 text-sm font-normal leading-normal">Tipo</p>
                                </div>
                                <p className="text-[#1b0d0d] dark:text-white text-sm font-semibold leading-normal text-right">{id_tipo}</p>
                            </div>
                            <div className="flex justify-between gap-x-6 py-3">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#9a4c4c] dark:text-[#f3e7e7]/60 text-xl" data-icon="local_pizza">local_pizza</span>
                                    <p className="text-[#9a4c4c] dark:text-[#f3e7e7]/60 text-sm font-normal leading-normal">Sabor</p>
                                </div>
                                <p className="text-[#1b0d0d] dark:text-white text-sm font-semibold leading-normal text-right">{id_sabor}</p>
                            </div>
                        </div>
                        <hr className="border-t border-neutral-200 dark:border-neutral-800 my-4" />
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between gap-x-6 py-2">
                                <p className="text-[#9a4c4c] dark:text-[#f3e7e7]/60 text-sm font-normal leading-normal">Subtotal</p>
                                <p className="text-[#1b0d0d] dark:text-white text-sm font-normal leading-normal text-right">$12.00</p>
                            </div>
                            <div className="flex justify-between gap-x-6 py-2">
                                <p className="text-[#9a4c4c] dark:text-[#f3e7e7]/60 text-sm font-normal leading-normal">Impuestos (IVA)</p>
                                <p className="text-[#1b0d0d] dark:text-white text-sm font-normal leading-normal text-right">$1.50</p>
                            </div>
                            <div className="flex justify-between gap-x-6 py-3">
                                <p className="text-[#1b0d0d] dark:text-white text-base font-bold leading-normal">Total</p>
                                <p className="text-[#1b0d0d] dark:text-white text-lg font-bold leading-normal text-right">$13.50</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-1 gap-3 pt-8 justify-end">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#f3e7e7] dark:bg-white/10 text-[#1b0d0d] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors">
                            <span className="truncate">Cancelar</span>
                        </button>
                        <button className="flex flex-1 sm:flex-none min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="truncate">Confirmar Compra</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
