import React from 'react'
import {Link} from 'react-router-dom'
import {LogoTxt} from '../index'

const trenutnaGodina = new Date().getFullYear();

export const Futer = () => (
    <footer className='mkfuter'>
        <div>
            <p>&copy; {trenutnaGodina}<Link to='/onama'><LogoTxt/> </Link>Sva prava zadržana. Dizajn: <a target='_blank' rel="noopener noreferrer" href="http://citymarketingservice.rs/"><div className='cms' /></a>
            </p>
            </div>
    </footer>
)