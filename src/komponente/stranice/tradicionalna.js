import React from 'react';
import {Kafa} from '../index'


const tradArtikli = [
    {naziv: 'Moja Kafica', slika: '/img/kafe/trad/artikli/Moja-Kafica---200g-.png', kolicina1: '100g', kolicina2: '200g', kolicina3: '500g'},
    {naziv: 'Select', slika: '/img/kafe/trad/artikli/Select-100g-200g-500g.png', kolicina1: '100g', kolicina2: '200g', kolicina3: '500g'},
    {naziv: 'Select kutija', slika: '/img/kafe/trad/artikli/MojaKafica---Select-200g.png', kolicina1: '200g'},
    {naziv: 'Select Arabica', slika: '/img/kafe/trad/artikli/MojaKafica---Select-Arabica-200g.png', kolicina1: '200g'},
]

export const TradicionalnaKafa = () => (
    <Kafa 
        naslov='Tradicionalna kafa'
        profilna='/img/kafe/trad/profilna.png'
        pozadina={{backgroundImage: 'url(/img/kafe/trad/bg.jpg)'}}
        artikli={tradArtikli}
        tekst='Naša kafa se pravi od mešavine pažljivo odabrane sorte kafe Arabika i kafe Robusta, što joj daje savršen miris i ukus.'
        kolicina={tradArtikli.kolicina}
    />
)
