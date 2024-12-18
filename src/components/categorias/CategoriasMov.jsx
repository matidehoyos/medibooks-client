import useCategoryNavigation from '@/hooks/useCategoryNavigation';
import Link from 'next/link';

const CategoriasMovil = () => {
  const { categorias, handleCategoryChange } = useCategoryNavigation();

  return (
    <div className="w-full px-[2%] py-3 flex justify-start items-stretch lg:hidden bg-[#1b7b7e] overflow-hidden">
      <Link
        href="/productos"
        className="block text-[#1b7b7e] text-xl font-bold text-center bg-gray-50 py-1 px-4 rounded-md border border-gray-600"
      >
        Todas
      </Link>
      <select
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="w-[180px] px-1 ml-2 flex-1 text-[#1b7b7e] text-xl font-bold bg-gray-50 rounded-md border border-gray-600"
      >
        <option value="">Seleccione categoría</option>
        {categorias?.map((category) => (
          <option key={category.id} value={category.nombre}>
            {category.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriasMovil;
