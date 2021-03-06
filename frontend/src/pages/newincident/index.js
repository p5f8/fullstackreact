import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function NewIncident() {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    async function handleIncidentNew(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('/incidents', data, {
                headers : {
                    ong : ongId
                }
            })

             history.push('/profile')
        } catch (error) {
            console.log(error)
            alert('Erro ao inserir novo caso, tente novamente')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="16" color="#e02041" />
                        Voltar para Home
                    </Link>                    
                </section>

                <form onSubmit={handleIncidentNew}>
                    <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição do caso" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}