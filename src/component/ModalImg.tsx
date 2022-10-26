
// import styles from "./Menu.module.css";

import { FormEvent, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";

type ModelProps = {
    showModal: boolean,    
    setShowModal: Dispatch<SetStateAction<boolean>>,
    imgSrc: string
}

export function ModalImg({showModal, setShowModal, imgSrc}: ModelProps) {
    const [closeStarting, setCloseStarting] = useState(false)
    function closeModal() {
        setCloseStarting(true)
        setTimeout(() => {
            setShowModal(false)
            setCloseStarting(false)
        }, 500)
    }
   
    const backgroundEl = useRef(null)
    const className = [
        'modalBackground',
        showModal ? 'modalBackground_show': '',
        closeStarting ? 'modalBackground_close-starting': '', 
    ]
    return <>    
        <div className={className.join(' ')} style={{color: 'red'}} id="modalBackground" ref={backgroundEl} onClick={(event) => {
                if (event.target === backgroundEl.current) closeModal()
            }}>
            <div className="modalWindow" id="modalWindow">
            </div>
        </div>

        <style jsx>{`
            @keyframes modalBackground-open {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes modalBackground-close {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }

            .disable-scroll {
                overflow: hidden;
            }

            .modalBackground
            {
                display: none;
                position: fixed;
                justify-content: center;
                top: 0;
                right: 0;
                left: 0;
                height: 100vh;
                background-color: rgb(0,0,0, 0.5);
                align-items: center;
            }

            .modalBackground_show {
                animation:modalBackground-open.5s ;
                display: flex;
            }

            .modalBackground_close-starting {
                animation:modalBackground-close.5s ;
            }

            .modalWindow {
                height: 500px;
                width: 700px;
                background-image: url('${imgSrc}');
                background-position: center center;
                background-repeat: no-repeat;
                overflow: hidden;
                background-size:contain;
            }
            @media(max-width: 1100px) {
                .modalWindow {
                 height: 400px;
                  width: 600px;
                }
            }
            @media(max-width: 900px) {
                .modalWindow {
                 height: 300px;
                  width: 400px;
                }
            }
            @media(max-width: 600px) {
                .modalWindow {
                 height: 200px;
                  width: 300px;
                }
            }
            @media(max-width: 350px) {
                .modalWindow {
                 height: 100px;
                  width: 200px;
                }
            }
            
      `}
        </style>
    </>
}
