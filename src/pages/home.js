import React from 'react'
import "./home.css"
import {Link} from "react-router-dom"
import {useGlobalContext} from "../context"

function Home() {
  const {IssearchOpen,closeSearch} = useGlobalContext()
  return (
    <div className={`${IssearchOpen?"search-wrappe-on":"app-container"}`} >
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
      {/* main content section */}
      <section className='main-content'>
          main content
      </section>
      {/* footer section */}
      <section className='footer-area'>
        footer
      </section>
    </div>
    )
}

export default Home