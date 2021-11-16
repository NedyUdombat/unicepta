import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Component(s) */
import SearchInput from '../../components/input/SearchInput';
import SearchResults from '../../components/SearchResults';

import { searchNasa } from '../../store/modules/nasa';

/** Type(s) */
import { RootState } from '../../store/rootReducer';

const Index = () => {
  const data = useSelector((state: RootState) => state.nasa.data);
  const [searchParam, setsearchParam] = useState('neptune');
  const dispatch = useDispatch();

  const searchImages = useCallback(
    (param) => {
      dispatch(searchNasa(param));
    },
    [dispatch],
  );

  useEffect(() => {
    if (searchParam != '') {
      searchImages(searchParam);
    }
  }, [searchImages, searchParam]);

  return (
    <section className="base-page">
      <section className="search-section">
        <SearchInput
          onInputChange={(e) => {
            console.log('e.target.value', e.target.value);
            setsearchParam(e.target.value);
          }}
          inputClassName="searchbar"
          placeholder="Search..."
          value={searchParam}
        />
      </section>
      <section className="result-section">
        <SearchResults results={data} />
      </section>
    </section>
  );
};

export default Index;
