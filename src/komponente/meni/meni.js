import React from 'react'
import {Link} from 'react-router-dom'

export const Meni = () => (
    <div className='mkmeni'>
        <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" for="menu-toggle"></label>
        <label id="burger" for="menu-toggle"></label>
        <ul id="menu">
            <div class='mklink'>
            <li><a href="#">Početna</a></li>
            <li><a href="#">O nama</a></li>
            <li><a href="#">Proizvodi</a></li>
            <li><a href="#">Kontakt</a></li>
            </div>
            
        </ul>
    </div>
)
