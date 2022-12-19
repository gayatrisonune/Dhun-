import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Player from './Player'
const searchicon=<FontAwesomeIcon icon={faMagnifyingGlass} />
const Search= React.createContext();
const Header= () =>{
  const [song, setSong] = React.useState("");
  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(event);
    setSong(event.target[0].value);
  }
  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <div className="searchbox">
          <input
            className="sb"
            name="song"
            placeholder="Find your dhun🎶"
          />
          <button type="submit" className="sico">
            {searchicon}
          </button>
        </div>
      </form>
      <Search.Provider value={song}>
        <Player/>
      </Search.Provider>
    </div>
  ); 
}
export default Header;
export {Search};

