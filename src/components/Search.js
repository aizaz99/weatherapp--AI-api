import '../styles/components/Search.scss';
import { searchPlaces } from '../api';
import { useState } from 'react';

function Search() {
  const [text,setText] = useState ('')
  const [searcResults, setSearchResults] = useState([])

  async function onSearch (e)  {
    setText(e.target.value);
   const data = await searchPlaces(e.target.value)
   setSearchResults(data);
  }
  return (
   <>
   <div className="search-container">
    <div className="search-icon">
        <i className='bi bi-search'></i>
    </div>
    <div className="search-input">
        <input
        type= 'text'
        name= 'search-city'
        placeholder="Search city"
        value={text}
        onChange={onSearch}/>
    </div>
    <div className='search-results'>
      <div className='results-container'>
        {
          <div className='result'><div>
        }
      </div>
    </div>
   </div>
   </>
  )
}

export default Search