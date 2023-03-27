

import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"

  
  
export function Service({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
        <>
        <div className='cont'>
                 <div className='el'>
                   <span className='word'>Запишитесь на сервис в один клик</span>
                 </div>
                <div className='el'>
                <form onSubmit={showModal}>
                  <button className='btn'>Записаться</button>
                </form>
           </div>
        </div>

       
<style jsx>{`

.cont {
    display:flex;
    justify-content:center;
    align-items:center;
    background-blend-mode: darken;
    background: rgba(0, 0, 0, .40);
 
    background-size: cover;
    width: auto;
    height: 700px;
    background-repeat:no-repeat;
    flex-direction:column;
 
}



.el {
    display:flex;
    justify-content:center;
    alight-items: center;

}

.word {
    font-family: 'OpelNextW01-Regular', sans-serif;
    color:white;
    font-size: 60px;
    margin-bottom:150px;

}
.btn {
    font-family: 'OpelNextW01-Regular', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 320px;
    height: 55px;
    font-size: 35px;
    margin-bottom:120px;
    border:solid;
    border-color: #f7ff14;
}



.btn:hover {
    background-color: #f7ff14;
    border: none;
    font-family: 'OpelNextW01-Regular', sans-serif;
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}
@media(max-width: 1300px) {
    .word {
        font-size: 50px;
    }
    .cont {
        height: 500px;
    }
}
@media(max-width: 1000px) {
    .word {
        font-size: 40px;
        margin-bottom:80px;
    }
    .cont {
        height: 500px;
    }
    .btn {
        width: 220px;
       height: 50px;
       font-size: 26px;
         margin-bottom: 0px;
    }
}
@media(max-width: 800px) {
    .word {
        font-size: 30px;
    }
    .cont {
        height: 400px;
    }
    .btn {
        width: 190px;
       height: 45px;
       font-size: 20px;
    }
}
@media(max-width: 600px) {
    .word {
        font-size: 20px;
    }
    .cont {
        height: 300px;
    }
    .btn {
        width: 150px;
       height: 35px;
       font-size: 20px;
    }
}
@media(max-width: 400px) {
    .word {
        font-size: 15px;
    }
    .cont {
        height: 180px;
    }
    .btn {
       width: 90px;
       height: 30px;
       font-size: 10px;
    }
}
@media(max-width: 300px) {
    .word {
        font-size: 9px;
        margin-bottom:40px;
    }
    .cont {
        height: 130px;
    }
    .btn {
       width: auto;
       height:auto;
       font-size: 9px;
    }
}
`}</style>
 </>
    )
}