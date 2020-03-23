import React from 'react'
import {Route} from 'react-router-dom'
import * as RUTA from './rutenaz'

export const Rute = () => (
    <div>
        <Route exact path={RUTA.POCETNA}/>
    </div>
)
