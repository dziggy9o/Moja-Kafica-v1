import React from 'react'

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
    <div className='slajd'>
    <h1 className="product-slider__title">
    {props.Naslov} <br/>
    {props.Podnaslov}
    </h1>
    <div className="product-ctr">
    <div className="product-labels">
    <div className="product-labels__title">{props.Tekst}</div>
    </div>
</div>
<a href='https://mojakafica.rs' target='_blank' rel="noopener noreferrer">
    Naši proizvodi
</a>

</div>
)