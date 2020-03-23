import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import * as IzgledSlajdera from '../slajder'

const slajdovi = [
    {id: 1, Naslov: 'Tradicionalna',Podnaslov: 'kafa',Tekst: 'Naša kafa se pravi od mešavine pažljivo odabrane sorte kafe Arabika i kafe Robusta, što joj daje savršen miris i ukus.', slika: './img/slajder/tradicionalna.png'},
    {id: 2, Naslov: 'Instant',Podnaslov: 'kafa',Tekst: 'Gotova začas, na poslu i na putu, kad nam je neophodno da se razbudimo, izoštrimo pažnju i dobijemo dodatnu energiju da uspešno savladamo sve izazove i obaveze pretrpanog dana', slika: './img/slajder/instant.png'}
]

export const PocetnaSlajder = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
    return (
        <section>
            <IzgledSlajdera.Slika>
                <div className="product-img">
                <Carousel interval={100000}  bsPrefix={'mojakafica'} indicators={false} activeIndex={index} onSelect={handleSelect}>
                    {slajdovi.map(mk => {
                        return (
                            <Carousel.Item key={mk.id} bsPrefix={'product-img__item'}> 
                                    <img src={mk.slika} alt={mk.Naslov} className="product-img__img"/>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                </div>
                <IzgledSlajdera.Tekst>
                <Carousel interval={100000} wrap={false}  controls={false} bsPrefix={'mojakafica-sadrzaj'} indicators={false} activeIndex={index} onSelect={handleSelect} >
                    {slajdovi.map(mk => {
                        return (
                            <Carousel.Item key={mk.id} bsPrefix={'product-slider__content'}>
                                <IzgledSlajdera.Slajderi {...mk} />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                </IzgledSlajdera.Tekst>  
            </IzgledSlajdera.Slika>
            </section>
    )
}

