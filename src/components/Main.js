import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import './Main.css';


export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [
            'Acordar',
            'Ir pra academia',
            'Tomar café',
            'Estudar JS'
        ],
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }


    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className='main'>
                <h1>Lista de tarefas</h1>
                <form action='#' className='form'>
                    <input
                    onChange={this.handleChange}
                    type='text'
                    value={novaTarefa}
                    />
                    <button type='submit'>
                        <FaPlus />
                    </button>
                </form>

                <ul className='tarefas'>
                    {tarefas.map(tarefas => (
                        <li>{tarefas}</li>
                    ))}
                </ul>
            </div>
        );
    }
}



