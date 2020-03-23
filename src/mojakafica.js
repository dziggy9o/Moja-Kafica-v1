import React from 'react'
import * as MK from './komponente'
import {LogoSajt} from './komponente/meni'
import {BrowserRouter as Router} from 'react-router-dom'

const MojaKafica = () => (
    <Router>
        <LogoSajt/>
        <MK.Meni />
        <MK.Rute />
        <MK.PocetnaSlajder />
    </Router>
)

export default MojaKafica;