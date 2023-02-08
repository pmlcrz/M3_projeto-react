import fetch from '../../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NewPost.module.css'

export default function NewPost() {

    const navigate = useNavigate()

    const [nome, setName] = useState()
    const [ano, setAno] = useState()
    const [email, setemail] = useState()
    const [cpf, setCpf] = useState()

    
    const createPost = async(e) => {
        e.preventDefault();
        await fetch.post("/cadastro",{
            nome: nome,
            cpf: cpf,
            email: email,
            ano: ano,
        })
        alert(`Parabéns! "${nome}" cadastrado com sucesso!`)
    }

    return(
        <div className={styles.newPost}>
            <h2>Cadastre-se</h2>
            <form onSubmit={(e)=>createPost(e)}>
                <div className={styles.formControl}>
                    <label htmlFor="nome">Nome completo:</label>
                    <input type="text" name="nome" required placeholder="Digite seu nome" className={styles.nomeInput} id="nome" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="ano">Data de nascimento:</label>
                    <input type="number" required min={1900} max={2022} maxLength={4} minLength={4} name="ano" placeholder="Ex.: 1993" className={styles.anoInput} id="ano" onChange={(e) => setAno(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" required name="email" placeholder="Digite seu melhor email" className={styles.emailInput} id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="imagem">CPF:</label>
                    <input type="text" required name="cpf" placeholder="Insira seu cpf" id="cpf" className={styles.cpfInput} onChange={(e) => setcpf(e.target.value)}/>
                </div>
                <input type="submit" className={styles.btn} value="Cadastrar" />
            </form>
        </div>
    )
}
