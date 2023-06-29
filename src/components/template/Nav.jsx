import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Alunos
            </Link>
            <Link to="/teacher">
                <i className="fa fa-user"></i> Professores
            </Link>
            <Link to="/class">
                <i className="fa fa-book"></i> Salas de Aula
            </Link>
            
            <Link to="/calendar">
                <i className="fa fa-book"></i> Calendário
            </Link>
        </nav>
    </aside>