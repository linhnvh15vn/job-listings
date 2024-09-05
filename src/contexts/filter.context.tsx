import { createContext, ReactNode, useContext, useState } from 'react';

interface FilterContextProps {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextProps>({
  filters: [],
  setFilters: () => {},
});

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleRemoveTag = (tag: string) => {
    const newFilters = filters.filter((filter) => filter !== tag);
    setFilters(newFilters);
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        handleRemoveTag,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => {
  const { filters, setFilters, handleRemoveTag } = useContext(FilterContext);
  return { filters, setFilters, handleRemoveTag };
};

export { FilterContext, FilterProvider, useFilters };
