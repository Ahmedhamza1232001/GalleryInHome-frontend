import React from 'react'
import './search.css'
import {useGlobalContext} from "../context"

function Search() {
    const {closeSearch} = useGlobalContext()

return (
    <section className='search-wrapper'>
        <div className="search-close" onClick={closeSearch}>
            <i className="fa fa-times fa-lg"></i>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="search-content">
                        <input type="text" name="search" placeholder='Type what you want to search for...'></input>
                        <button className='btn'>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
  </section>

  )
}

export default Search