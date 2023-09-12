import { FormEvent, useState } from "react";
import admin from '/public/images/admin.png';
import router from "next/router";

export function Login() {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(login);
        console.log(pass);
        const res = await fetch(`/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, pass })
        })
        if (res.ok) {
            const result = await (await res).json()
            if (result.redirectUrl) {
                router.push(result.redirectUrl as string)
            }
            console.log(result);
        }
    }

    return (
        <>
            <div className="background">
                <form className="form" onSubmit={submit}>
                    <div className="mb-3">
                        <h1 className="loginTitle">АРКОНТ ADMIN</h1>
                    </div>
                    <div className="mb-3">
                        <label>
                            <input className="input" placeholder="Логин" value={login} onChange={(event) => setLogin(event.target.value)} type="text" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label>
                            <input className="input" placeholder="Пароль" value={pass} onChange={(event) => setPass(event.target.value)} type="password" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <button className="btn" type="submit">ВОЙТИ</button>
                    </div>
                </form>
            </div>

            <style jsx>{`

    @keyframes neon-1 {
        from {
            text-shadow: 0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52), 0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78), 0 0 54px rgba(191, 226, 255, 0.92);
        }
        to {
            text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF;
        }
    }
    
    .background{
        display: flex;
        justify-content: center;
        top: 0;
        right: 0;
        left: 0;
        height: 100vh;
        background-position: center center;
        background: rgba(0, 0, 0, .10);
        background-blend-mode: darken;
        background-image: url('${admin.src}');
        background-repeat:no-repeat;
        background-size: cover;
        align-items: center;
        position: absolute;
    }
    
    .form {
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
    }
    
    .mb-3 {
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-top:30px;
    }
    
    input {
        width: 500px;
        height: 50px;
        font-family: 'Roboto', 'sans-serif';
        font-size: 20px;
        outline:none;
        border: none;
        padding: 11px 11px;
        
    }
    
    .btn {
        font-family: 'Roboto', 'sans-serif';
        transition: transform.3s ;
        color: #f9b518;
        background-color:  #131313;
        border: solid 2px #f9b518;
        width: 500px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.5s;
    }
    
    .btn:hover {
        box-shadow: 0 0 16px rgba(202,228,225,.92);        
    } 
    
    .loginTitle{
        font-size: 70px;
        font-weight: 600;
        background-image: linear-gradient(to left,  #131313,white);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        animation: neon-1 .1s ease-in-out infinite alternate;
        text-align: center;
    }
    
    
    @media(max-width: 600px) {

        .loginTitle{
            font-size: 40px;
        }
        
        .input {
          width: 300px;
          height: 40px;
        }
        .btn {
         width: 300px;
         height: 40px;  
        }
    }
    @media(max-width: 320px) {
        .input {
          width: 250px;
        }

        .loginTitle{
            font-size: 30px;
        }
        
        .btn {
         width: 250px;
    
        }
    }
  `}</style></>)
}