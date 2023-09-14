import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import admin from '/public/images/admin.png';

export function RegComponent() {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const router = useRouter()

    async function reg(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const res = await fetch('/api/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, pass })
        })
        if (res.ok) {
            const result = await res.json()
            if (result.redirectUrl) {
                router.push(result.redirectUrl as string)
            }
            console.log(result);
        }
    }
    return (
        <>
            <div className="background">
                <form className="form" onSubmit={reg}>
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
                        <button className="btn" type="submit">ОК</button>
                    </div>
                </form>
            </div>

            <style jsx>{`
.background{
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    background-position: center center;
    background-image: url('${admin.src}');
    background-repeat:no-repeat;
    background-size: cover;

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

.input {
    width: 500px;
    height: 50px;
    font-family: 'Gilroy', sans-serif; 
    font-size: 20px;
    padding: 11px 11px;
    border:none;
    outline: none;
}

.btn {
    font-family: 'Gilroy', sans-serif; 
    transition: transform.3s ;
    color: #ffffff;
    background-color:  #131313;
    width: 500px;
    height: 50px;
    font-size: 20px;
    border: none;
    cursor: pointer;
}

.btn:hover {
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
    background-color: #113d6c;
} 

@media(max-width: 600px) {
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
    .btn {
     width: 250px;

    }
}
`}</style>

        </>)
}