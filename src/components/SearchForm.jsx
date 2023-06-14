import { useState, useEffect } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  // 1)mounts
  // 2)rerender
  // 2.5) logic before next rerender
  // 3)unmount

  // console.log('component rerrender');
  // useEffect(() => {
  //   console.log('search option changes', searchOption);

  //   return () => {
  //     console.log('before next useeffecr run', searchOption);
  //   };
  // }, [searchOption]);
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
