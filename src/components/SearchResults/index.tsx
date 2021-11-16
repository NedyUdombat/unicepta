import React from 'react';

/** Type(s) */
import { ResultItem } from '../../@types/item.type';

/** Component(s) */
import ListItem from '../ListItem';

interface SearchResultsProps {
  results: ResultItem[];
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div className="result-grid">
      {results.length &&
        results.map((item, index) => <ListItem key={index} item={item} />)}
    </div>
  );
};

export default SearchResults;
