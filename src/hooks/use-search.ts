import { useContext } from 'react';

import { SearchContext } from '../contexts/filter.context';

export const useSearch = () => useContext(SearchContext);
