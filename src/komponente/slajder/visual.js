import React from 'react'
import {Link} from 'react-router-dom'

export const Tekst = (props) => (
    <div className='product-slider'>
                <div className='product-slider__item'>
                <div className="product-slider__card">
                <img src="./img/slajder/sldbg.jpg" alt="Slajder pozadina" className="product-slider__cover"/>
                {props.children}
                </div>
                </div>
    </div>
)
export const Slika = (props) => (
    <div className="mkwrapper">
                <div className="content">
                <div className="bg-shape">
                    <img src="./img/slajder/zrno.png" alt="Moja kafica zrno"/>
                </div>
                {props.children}
                </div>
    </div>
)

export const Slajderi = (props) => (
    <div className='mk-slajd'>
    <h1>{props.Naslov}</h1>
    <p>{props.Tekst}</p>
    <Link to={props.link}>Naši proizvodi</Link>
    </div>
)