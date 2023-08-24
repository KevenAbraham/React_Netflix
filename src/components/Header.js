import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}> 
            <div className="header--logo">
                 <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" />
                 </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPpV9wkAko5kR4KJ5gh7l2ElEmZgfOqkzvw&usqp=CAU" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}