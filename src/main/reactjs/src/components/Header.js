import React from 'react';
import './Header.css';
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header>
                <h3>Project&Study Talk Web</h3>
                <img src={Logo} />
                <div>
                    <Link to="/signup"><button>sign up</button></Link>
                    <a>/</a>
                    <button>login</button>
                </div>
            </header>
        </div>
    );
}

export default Header;