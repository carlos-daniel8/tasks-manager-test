import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function login(e){
        e.preventDefault()

        const mockEmail = 'test@example.com'
        const mockPassword = 'password'

        if(email === mockEmail && password === mockPassword){
            navigate('/tasks')
        } else {
            alert('Login failed! Try again')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={login}>
                    <h1>Login</h1>
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                </form>
            </section>
        </div>
    )
}