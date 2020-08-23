import React, {Component} from 'react'
import {LogoTxt} from '../index'
import * as MKIB from '@fortawesome/free-brands-svg-icons'
import * as MKIS from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as emailjs from 'emailjs-com';

export class Kontakt extends Component {
    constructor(){
        super();
        this.state = {
            poruka: '',
			ime: '', 
			email: '',
			greska: {
				poruka: '',
				ime: '',
				email: ''
			},
			uspesno: ''
        }
    }
    proveriValidnost = () => {
		let greska = {};
		let validnostForme = true;

		if(!this.state.ime || this.state.ime.length < 3) {
			greska.ime = '- Minimalno tri slova!';
			validnostForme = false;
		}
		if(!this.state.poruka || this.state.poruka.length < 10) {
			greska.poruka = '- Minimalno 10 karaktera!';
			validnostForme = false;
		}
		if(!this.state.email || this.state.email.length < 3) {
			greska.email = '- Minimalno tri slova!'
			validnostForme = false;
		}
		let patern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if(!patern.test(this.state.email)) {
			greska.email = '- Adresa nije validna!';
			validnostForme = false;
		}
		this.setState({
			greska: greska
		})
		return validnostForme	
	} 

	potvrda  = (e) => {
		e.preventDefault();
		if(!this.proveriValidnost()) {
			return
		}

		var tempParams = {
			from_name: this.state.ime + '(' + this.state.email + ')',
			message_html: this.state.poruka,
			reply_to: this.state.email
		}
		emailjs.send('default_service', 'template_x0Em6pUP', tempParams, 'user_xSdBYkVIiaCfAFdt8GumC')
			.then(function (res) {
				alert('Uspešno ste poslali poruku. Hvala Vam na ukazanom poverenju!')
				console.log('Uspesno!', res.status, res.text);
			}, function(err) {
				
				console.log(err)
			})
			this.setState({
				poruka: '',
				email: '',
				ime: ''
			})
	}

    obrisati = () => {
		this.setState({
			poruka: '',
			email: '',
			ime: ''
		})
    }
    
    render(){
        return (
            <section id='kontakt'>
                <div className='mk-sd-levo'>
                    <div className='gradijent'>
                        <div className='logokontakt'>
                            <LogoTxt />
                        </div>
                        <div className='informacije'>
                            <div className='ipolje'>
                            <h5><FontAwesomeIcon icon={MKIS.faMailBulk} />Email</h5>
                            
                            <a href='mailto:office@mojakafica.rs' target='_blank' rel="noopener noreferrer">office@mojakafica.rs</a>
                            </div>
                            <div className='ipolje'>
                            <h5><FontAwesomeIcon icon={MKIS.faPhone} /> Telefon</h5>
                            <h6>Kruševac</h6>
                            <a href='tel:38137421870'>+381 37 421 870</a><br/>
                            <a href='tel:381606420117'>+381 60 6420 117</a><br/>
                            <h6>Beograd</h6>
                            <a href='tel:381600666234'>+381 60 0666 234</a><br/>
                            </div>
                            <div className='ipolje'>
                            <h5><FontAwesomeIcon icon={MKIS.faLocationArrow} />Lokacija</h5>
                            <h4>DECO CAKE doo</h4><br/>
                            <a href='tel:0111234567' target='_blank' rel="noopener noreferrer">Jasički put 25, 37000 Kruševac</a>
                            </div>
                            <div className='ipolje'>
                            <h5>Društvene mreže</h5>
                            <a href='tel:0111234567'><FontAwesomeIcon icon={MKIB.faFacebookSquare}/></a>
                            <a href='tel:0111234567'><FontAwesomeIcon icon={MKIB.faInstagramSquare}/></a>
                            <a href='tel:0111234567'><FontAwesomeIcon icon={MKIB.faTwitterSquare}/></a>
                            <a href='tel:0111234567'><FontAwesomeIcon icon={MKIB.faLinkedin}/></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='mk-sd-desno'>
                    <h1>Kontaktirajte nas</h1>
                    <form className='mk-forma' method="post" action="#">
						<div className="mk-forma-sadrzaj">
							<div className="polje">
							<label htmlFor="name">Ime <h5> {this.state.greska.ime}</h5></label>
							<input type="text" name="name" value={this.state.ime} onChange={e => this.setState({ime: e.target.value})} id="name" />
						    </div>
							<div className="polje">
							<label htmlFor="email">Email <h5> {this.state.greska.email}</h5></label>
							<input type="text" name="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} id="email" />
							</div>
							<div className="polje poruka">
							<label htmlFor="message">Poruka <h5> {this.state.greska.poruka}</h5></label>
							<textarea name="message" id="message" value={this.state.poruka} onChange={e => this.setState({poruka: e.target.value})} rows="6"></textarea>
							</div>
						</div>
						<ul className="mk-forma-dugme">
							<li><input type="submit" value="Pošalji poruku" className="primary" onClick={this.potvrda} /></li>
							<li><input type="reset" value="Obriši" onClick={this.obrisati}/></li>
						</ul>
					</form>
                </div>
            </section>
        )
    }
}