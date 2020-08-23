import React from 'react'
import {Route} from 'react-router-dom'
import * as RUTA from './rutenaz'
import * as MK from '../../komponente/'

export const Rute = () => (
    <div>
        <Route exact path={RUTA.POCETNA}>
            <MK.PocetnaSlajder/>
        </Route>
        <Route path={RUTA.TRADICIONALNA}>
            <MK.TradicionalnaKafa/>
        </Route>
        <Route path={RUTA.INSTANT}>
            <MK.InstantKafa/>
        </Route>
        <Route path={RUTA.KONTAKT}>
            <MK.Kontakt/>
        </Route>
        <Route path={RUTA.ONAMA}>
            <MK.Onama/>
        </Route>
    </div>
)
