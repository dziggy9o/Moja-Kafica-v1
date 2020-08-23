import React from 'react';
import {Kafa} from '../index'


const instArtikli = [
    {naziv: 'Domaća kafa', slika: '/img/kafe/inst/artikli/dk.png', kolicina1: '8g'},
    {naziv: 'Domaća kafa + mleko', slika: '/img/kafe/inst/artikli/dkm.png', kolicina1 : '11g' },
    {naziv: 'Domaća kafa + šećer', slika: '/img/kafe/inst/artikli/dks.png', kolicina1: '11g'},
    {naziv: 'Moja kafica 2u1', slika: '/img/kafe/inst/artikli/2u1.png' },
    {naziv: 'Moja kafica 3u1', slika: '/img/kafe/inst/artikli/3u1.png' },
]

export const InstantKafa = () => (
    <Kafa 
        naslov='Instant kafa'
        profilna='/img/kafe/inst/profilna.png'
        pozadina={{backgroundImage: 'url(/img/kafe/inst/bg.jpg)'}}
        artikli={instArtikli}
        tekst='Gotova začas, na poslu i na putu, kad nam je neophodno da se razbudimo, izoštrimo pažnju i dobijemo dodatnu energiju da uspešno savladamo sve izazove i obaveze pretrpanog dana.'
    />
)
