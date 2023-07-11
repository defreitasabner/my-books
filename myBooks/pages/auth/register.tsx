import React from 'react';
import { useRouter } from 'next/router';

import SimpleFormField from '../../src/components/SimpleFormField';
import AuthService from '../../src/services/AuthService';

export default function RegisterPage() {
    
    const router = useRouter();
    const authService = new AuthService();

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordCheck, setPasswordCheck] = React.useState('');

    async function registerNewUser(event) {
        event.preventDefault();
        const newUser = {
            "username": username,
            "email": email,
            "password": password,
            "passwordCheck": passwordCheck,
        };
        const registered = await authService.register(newUser);
        if(registered)
        {
            console.log("Usuário cadastrado com sucesso!");
            router.push("/")
        }
        else
        {
            console.log("Ocorreu um erro cadastrando o usuário...");
        }
    }
    
    return(
        <main>
            <form>
                <SimpleFormField
                    label="Username"
                    inputValue={username}
                    setInputValue={setUsername}
                    placeholder="Digite seu nome de usuário"
                />
                <SimpleFormField
                    label="Email"
                    inputValue={email}
                    setInputValue={setEmail}
                    placeholder="Digite um e-mail válido"
                />
                <SimpleFormField
                    label="Password"
                    inputValue={password}
                    setInputValue={setPassword}
                    placeholder="Digite sua senha"
                />
                <SimpleFormField
                    label="Password Check"
                    inputValue={passwordCheck}
                    setInputValue={setPasswordCheck}
                    placeholder="Digite sua senha novamente"
                />
                <input type="submit" value="Cadastrar" onSubmit={registerNewUser} />
            </form>
        </main>
    );
}