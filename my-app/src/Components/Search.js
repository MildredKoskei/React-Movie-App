import React, { useState } from 'react'

function Search({searchMovie}) {
    const[search, setSearch] = useState();
    
  return (
    <div>
        <nav>
        <form>
            <div className="search-button">
                <input type = "text" placeholder="Enter Movie Name" className="inputText" onChange ={(e) => {setSearch(e.target.value)}} 
                value = {search} onKeyPress = {searchMovie}>
                    </input>
                    <button onClick={()=> (searchMovie)}>Search</button>

            </div>
        </form> 
        </nav>
    </div> 
  )
}

export default Search