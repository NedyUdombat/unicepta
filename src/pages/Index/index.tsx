import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Component(s) */
import SearchInput from '../../components/input/SearchInput';
import Loader from '../../components/Loader';
import SearchResults from '../../components/SearchResults';

import { searchNasa } from '../../store/modules/nasa';

/** Type(s) */
import { RootState } from '../../store/rootReducer';

const Index = (): JSX.Element => {
  const data = useSelector((state: RootState) => state.nasa.data);
  const [searchParam, setsearchParam] = useState('earth');
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
          onInputChange={(e) => setsearchParam(e.target.value)}
          inputClassName="searchbar"
          placeholder="Search..."
          value={searchParam}
          id="searchParam"
          name="searchParam"
        />
      </section>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <section className="result-section">
          <SearchResults results={data} />
        </section>
      )}
    </section>
  );
};

export default Index;
