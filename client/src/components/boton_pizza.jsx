

export const Boton_pizza = ({producto, clave, pedido, setPedido}) => {

    return (
            <div onClick={() => setPedido({...pedido, [clave]: producto})} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    data-alt="Una pizza vegetariana vibrante con pimientos, aceitunas y champiñones sobre un fondo de madera rústica."
                    style={{
                        backgroundImage: `url("https://www.foodandwine.com/thmb/iJw7N_NfcPpd-EB8rpYbzrkSFIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-mozzarella-pizza-FT-RECIPE0725-e7244e979c504188a049623668c15b2e.jpg")`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="relative flex flex-col justify-end p-6 h-80 sm:h-96">
                    <p className="text-white text-2xl font-bold leading-tight">{producto}</p>
                </div>
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </div>

        
    )

}
