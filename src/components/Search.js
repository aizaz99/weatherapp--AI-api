import '../styles/components/Search.scss';
import { searchPlaces } from '../api';
import { useContext, useState } from 'react';
import WeatherContext from '../context/weather.context';

function Search() {
  const {setPlace} = useContext(WeatherContext)
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function onSearch(e) {
    const input = e.target.value;
    setText(input);
    if (input.trim()) {
      const data = await searchPlaces(input);
      setSearchResults(data || []);
    } else {
      setSearchResults([]);
    }
  }
const changePlace = () => {

}
  return (
    <div className="search-container">
      <div className="search-icon">
        <i className='bi bi-search'></i>
      </div>
      <div className="search-input">
        <input
          type='text'
          name='search-city'
          placeholder="Search city"
          value={text}
          onChange={onSearch}
        />
      </div>
      <div className='search-results'>
        <div className='results-container'>
          {searchResults.map((place) => (
            <div className='result' key={place.place_id} onClick={changePlace}>
              {place.name}, {place.adm_area1}, {place.country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
