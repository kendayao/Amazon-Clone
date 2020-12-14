import React from 'react'
import SearchIcon from "@material-ui/icons/Search";


function Header() {
    return (
        <div className="header">
             <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            />

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
        </div>
        
        </div>
    )
}

export default Header
