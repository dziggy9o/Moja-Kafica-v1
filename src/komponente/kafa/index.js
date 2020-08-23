import React, {Component} from 'react'
import Flickity from 'react-flickity-component';
import * as IKONE from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const podesavanja = {
    initialIndex: 2,
    wrapAround: true,
    pageDots: false,
    hash: true,
    prevNextButtons: false,
}

export class Kafa extends Component {
      sledeciArtikal = () => {
        this.flkty.next()
      }
      pretkhodniArtikal = () => {
        this.flkty.previous()
      }

    render() {
        return (
            <section className='mk-kafa'>
                <div className='kafa-head' style={this.props.pozadina}>
                    <p>{this.props.naslov}</p>
                    <div className='artikal'>
                        <img alt={this.props.naslov} src={this.props.profilna}></img>
                    </div>
                </div>
                
                <div className='kafa-sadrzaj'>
                <div className='kafa-tekst'>
                    <p>
                    <FontAwesomeIcon icon={IKONE.faQuoteLeft}/>
                    {this.props.tekst}
                    <FontAwesomeIcon icon={IKONE.faQuoteRight}/>
                    </p>
                </div>
                <Flickity
                    flickityRef={mk => this.flkty = mk}
                    className={'mk-artikli'}
                    elementType={'div'}
                    options={podesavanja} 
                >
                {this.props.artikli.map((x,i) => {
                    return (
                        <div key={i} className='mk-artikal'>
                            <div className='mk-artikal-sadrzaj'>
                            <p>{x.naziv}</p>
                            <p onClick={this.pretkhodniArtikal} className='levo'>{x.naziv}</p>
                            <p onClick={this.sledeciArtikal} className='desno'>{x.naziv}</p>
                            <img src={x.slika} alt={x.naziv}/>
                            <div className='mk-kolicina'>
                            {x.kolicina1 ? <p className='naslov'>Dostupna pakovanja:</p> : null}
                            {x.kolicina1 ? <p>{x.kolicina1}</p> : null}
                            {x.kolicina2 ? <p>{x.kolicina2}</p> : null}
                            {x.kolicina3 ? <p>{x.kolicina3}</p> : null}
                            {x.kolicina4 ? <p>{x.kolicina4}</p> : null}
                            </div>
                        </div>
                        </div>
                    )
                })}
                </Flickity>
                </div>
            </section>
        )
    }
}
   