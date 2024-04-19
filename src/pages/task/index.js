import React, { useState, useEffect } from 'react';
import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

export default function Tasks() {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            name: "Aprender React",
            goal: "Me tornar um Dev React experiente",
            estimatedDays: 450 + " " + "dias",
            category: "Aprendizado"
        },
        {
            id: uuidv4(),
            name: "Desligar máquinas EC2 não utilizadas",
            goal: "Implementar FinOps na organização",
            estimatedDays: 5 + " " + "dias",
            category: "Redução de Custos"
        },
        {
            id: uuidv4(),
            name: "Estudar Golang",
            goal: "Criar ferramentas DevOps",
            estimatedDays: 650 + " " + "dias",
            category: "Inovação"
        },
        {
            id: uuidv4(),
            name: "Realizar backup do banco de dados RDS",
            goal: "Persistência dos dados da aplicação",
            estimatedDays: 3 + " " + "dias",
            category: "Sustentação"
        }
    ]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="task-container">
            <header>
                <Link to="/tasks/profile">
                    <button className="my-profile-button">
                        Meu perfil
                    </button>
                </Link>
                <h1 className="title">Gerenciador de Tarefas</h1>
                <Link to="/tasks/categories">
                    <button className="categories-button">
                        Categorias
                    </button>
                </Link>
                <Link to="/tasks/new-task">
                    <button className="new-task-button">
                        Nova tarefa
                    </button>
                </Link>
                <button className="logout-button">
                    <h3>Sair</h3>
                </button>
            </header>
            <div className="tasks-wrapper">
                {tasks.map((task) => (
                    <div key={task.id} className="task">
                        <h3>{task.name}</h3>
                        <p><strong>Objetivo:</strong> {task.goal}</p>
                        <p><strong>Tempo Previsto:</strong> {task.estimatedDays}</p>
                        <p><strong>Categoria:</strong> {task.category}</p>
                        <div className="task-buttons">
                            <button className="finish-task-button">Finalizar</button>
                            <button className="update-task-button">Editar</button>
                            <button className="remove-task-button">Remover</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}