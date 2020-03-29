import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [zapzap, setZapzap] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = { name, email, zapzap, city, uf }
        
        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso ${response.data}`)
            history.push('/')
        } catch (error) {
            alert('Erro no cadastro, tente novamente! Error description: ' + error)
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataform e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#e02041" />
                        Não tenho cadastro
                    </Link>                    
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="zapzap" placeholder="zapzap" value={zapzap} onChange={e => setZapzap(e.target.value)}  />
                    
                    <div className="input-group">
                        <input placeholder="cidade"value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="uf" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}