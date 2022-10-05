import React from 'react'

function Search() {
  return (
    <div>
        <nav>
        <form>
            <div className="search-button">
                <input type = "text" placeholder="Enter Movie Name" className="inputText">
                    </input>
                    <button>Search</button>

            </div>
        </form> 
        </nav>
    </div> 
  )
}

export default Search