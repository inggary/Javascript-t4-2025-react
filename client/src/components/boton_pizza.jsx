

export const Boton_pizza = ({producto}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full p-4">
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    data-alt="Una pizza vegetariana vibrante con pimientos, aceitunas y champiñones sobre un fondo de madera rústica."
                    style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9rr3rWLnuqKcZkWPQOUoPH56Yq2DnuElq6wlKUEkjJ7rlWgDXd2XITPX597FAsynossOstRRfUwE4xl-PMdyyf7SFTxv3hqxjoRUaY8VwEqv-xETARiJ8IAgRDn6n0Pd7JveuXCBQmTlSs74V1aah4rsYwrQfVBS0eTVHDZb4oK6DIm54mF09sEkprez0VMHaFPH0biLD2lVJIl8_2yN2vdYEMFnQV_SogCfnqC29KtbYh9Jjpt6AUAyw-391O6SXNwlEZl_-HsQm")`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="relative flex flex-col justify-end p-6 h-80 sm:h-96">
                    <p className="text-white text-2xl font-bold leading-tight">{producto}</p>
                </div>
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </div>

        </div>
    )

}
