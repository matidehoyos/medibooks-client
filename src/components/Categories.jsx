'use client'
import { getCategorias } from '@/services/serviceCategoria';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Categories = () => {
  const router = useRouter();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const loadCategorias = async () => {
      try {
        const data = await getCategorias();
        setCategorias(data);
      } catch (error) {
        console.log('Error loading categories from categories: ' + error.message);
      }
    };
    loadCategorias();
  },[]);  

  const handleCategoryChange = (category) => {
    router.push(`/productos?category=${category}`);
  };


  return (
    <div className="hidden md:flex w-full h-auto py-6 px-4  items-start justify-center flex-wrap bg-gray-200 space-x-2">
      {categorias?.map((categoria, index) => (
        <div key={index} className="relative group">
          <button 
            onClick={() => handleCategoryChange(categoria.nombre)} 
            className="text-[#1b7b7e] text-lg px-2 font-bold cursor-pointer hover:bg-[#1b7b7e] hover:text-white rounded-md transition-all duration-500 whitespace-nowrap"
          >
            {categoria.nombre}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
