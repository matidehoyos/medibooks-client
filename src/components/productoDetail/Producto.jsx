import Image from "next/image";

const Producto = ({producto, cantidad, setCantidad,terminacion, setTerminacion, agregarAlCarrito}) => {

    return(
        <div className='w-full h-auto md:h-auto pt-[78px] md:pt-[80px] flex flex-col justify-start sm:flex-row sm:items-center sm:justify-start md:justify-center'>
          <div className='sm:w-[40%] md:w-[60%] lg:w-[80%] h-auto overflow-hidden'>
            <div className='w-auto h-auto px-0 pb-2 sm:pb-0 md:p-5 sm:px-3 md:px-0 flex items-center md:justify-end'>
              <Image
                src={producto.imagen || '/default.png'}
                alt={`Portada del libro ${producto.titulo}`}
                width={500}
                height={500}
                className="w-[210px] sm:w-[96%] md:w-[96%] lg:w-[360px] h-[330px] sm:h-auto ml-3 sm:ml-0 py-4 md:py-10 md:px-10 object-contain lg:hover:scale-[1.1] transition-all duration-700 overflow-visible"
                style={{ filter: 'drop-shadow(6px 6px 6px rgba(0,0,0,.6))' }}
                priority
              />
            </div>
          </div>
          <div className='md:w-full px-[3%] pb-8 md:pb-0 sm:px-0 flex flex-col md:justify-start'>
            <p className='md:pt-[12px] text-[20px] md:text-[24px] lg:text-[26px]  font-[800] leading-3 md:leading-none text-gray-600 md:text-gray-600 font-sans'><span className='font-[400] text-[17px] md:text-[20px] lg:text-[22px]'>Autor/es: </span>{producto.autor}</p>
            <h1 className='pt-2 lg:pt-3 text-[26px] md:text-[36px] lg:text-[42px] font-extrabold leading-[101%] md:leading-normal lg:leading-[104%]  text-gray-800 font-sans'>{producto.titulo}</h1>
            <div className='w-auto mt-2 flex justify-start items-center gap-2'>
              {producto.precioAnterior !== producto.precio && (
                <p className='md:text-xl text-gray-400 font-bold line-through'>${producto.precioAnterior}</p>
              )}
              <p className='text-[24px] md:text-3xl font-[700] lg:font-[800] text-green-600'>${producto.precio}</p>
            </div>
            <label className='mt-3 md:mt-6 text-[18px] lg:text-[20px] font-medium text-gray-800'>
                <span className='hidden md:inline'>Terminación:</span>
                <select
                  className='ml-1 p-1 border text-[16px] lg:text-[18px] border-gray-700 rounded-md bg-transparent'
                  value={terminacion}
                  onChange={(e) => setTerminacion(e.target.value)}
                >
                  <option value="Encuadernado">Encuadernado</option>
                  <option value="Anillado">Anillado</option>
                </select>
            </label>
            <div className='flex items-center justify-start mt-6 md:mt-8 gap-4'>
              <div className="h-full">
                <span className='hidden md:inline'>Cantidad:</span>
                <button className='px-[6px] py-0 ml-1 text-2xl bg-gray-300 lg:hover:bg-gray-500 lg:hover:text-gray-50 border border-gray-400 rounded-sm' onClick={() => setCantidad(cantidad - 1)} disabled={cantidad < 2}>-</button>
                <span className='font-bold mx-2 text-xl'>{cantidad}</span>
                <button className='px-[6px] py-0 mr-1 text-2xl bg-gray-300 lg:hover:bg-gray-500 lg:hover:text-gray-50 border border-gray-400 rounded-sm' onClick={() => setCantidad(cantidad + 1)} disabled={cantidad === producto.stock}>+</button>
              </div>
              <button
                onClick={agregarAlCarrito}
                className='w-auto px-4 py-1 md:px-6 md:py-2 bg-red-400 lg:bg-red-500 text-white font-bold border border-gray-500 rounded-md md:rounded-md md:hover:bg-red-300 transition-colors duration-300'
              >
                Agregar al Carrito
              </button>
            </div>     
          </div>
      </div>
    )
}


export default Producto;