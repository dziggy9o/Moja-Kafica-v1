import React, {Component} from 'react'
import {Link} from 'react-router-dom'


const menilst = [
    {naziv: 'Početna', adresa: '/'},
    {naziv: 'O nama', adresa: '/onama'},
    {naziv: 'Tradicionalna kafa', adresa: '/tradicionalna-kafa'},
    {naziv: 'Instant kafa', adresa: '/instant-kafa'},
    {naziv: 'Kontakt', adresa: '/kontakt'},
]

export class Meni extends Component{
    constructor(){
        super();
        this.state = {
            cekirano: false
        }
    }

    obradaCekiranog = () => {
        this.setState(prev => ({
            cekirano:!prev.cekirano
        }))
    }
    render() {
        const cekiranO = this.state.cekirano ? 'cekirano' : '';
        return (
            <div className='mkmeni'>
            <input type="checkbox" className={`${cekiranO}`} defaultChecked={this.state.cekirano} onChange={this.obradaCekiranog} id="menu-toggle"/>
            <label id="trigger" htmlFor="menu-toggle"></label>
            <label id="burger" htmlFor="menu-toggle"></label>
            <label id="menu" >
                
                <div className='mklink'>
            
                {menilst.map((x,i) => {
                    return (
                        <li  key={i}>
                            <Link onClick={this.obradaCekiranog}  to={x.adresa}>{x.naziv}</Link>
                        </li>
                    )
                })}
                </div>
            </label>
        </div>
        )
    }
}
