import { createContext, useContext, useState } from 'react';
import CONFIG from '../config';

export const FilterContext = createContext(null);

function FilterContextProvider({ children }) {
  const [pickedSize, setPickedSize] = useState('');
  const [pickedMinimum, setPickedMinimum] = useState('');
  const [pickedMaximum, setPickedMaximum] = useState('');
  const [pickedColor, setPickedColor] = useState('');
  const [urlWithFilters, setUrlWithFilters] = useState('');
  const [type, setType] = useState('');

  function handleClearFilters() {
    setPickedSize('');
    setPickedMinimum('');
    setPickedMaximum('');
    setPickedColor('');
    setUrlWithFilters('');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleFilterCall() {
    const urlWithFilters = `${CONFIG.BASE_URL}/shoes?gender=${type}${
      pickedColor && '&color=' + pickedColor.toLowerCase()
    }${pickedSize && `&sizesEU=EU-${pickedSize.toFixed(1)}`}${
      pickedMinimum && `&price[gte]=${pickedMinimum}`
    }${pickedMaximum && `&price[lte]=${pickedMaximum}`}`;

    setUrlWithFilters(urlWithFilters);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log(urlWithFilters);
  }

  return (
    <FilterContext.Provider
      value={{
        pickedSize,
        onSetPickedSize: setPickedSize,
        pickedMinimum,
        onSetPickedMinimum: setPickedMinimum,
        pickedMaximum,
        onSetPickedMaximum: setPickedMaximum,
        pickedColor,
        onSetPickedColor: setPickedColor,
        onSetClearFilters: handleClearFilters,
        onSetFilter: handleFilterCall,
        urlWithFilters,
        onSetType: setType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('Filter context should be used within FilterContextProvider');
  }
  return context;
}

export default FilterContextProvider;
