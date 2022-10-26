import Link from "next/link";
import { MutableRefObject } from "react";
// import styles from "./Menu.module.css";
import banner from '/public/images/label.svg'

const hundler = (event: React.SyntheticEvent) => {
  console.log('Click');
  event.preventDefault()
}

type MuneProps = {
  refs: {
    refSales: MutableRefObject<HTMLDivElement>,
    refContact: MutableRefObject<HTMLDivElement>,
    refAdvatages: MutableRefObject<HTMLDivElement>
  }
}
export function Menu({ refs }: MuneProps) {
  return <nav>

    <ul >
      <li className="menuEL">
        <Link href={'/calcToPage'}><span>КАЛЬКУЛЯТОР ТО</span></Link>
      </li>
      <li className="menuEL">
        <a onClick={(e) => {
          e.preventDefault()
          refs.refAdvatages.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          })
        }}><span>УСЛУГИ</span></a>
      </li>
      <li className="menuEL">
        <a onClick={(e) => {
          e.preventDefault()
          refs.refSales.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }}><span>АКЦИИ</span></a>
      </li>
      <li className="menuEL" >
        <Link href={'/'}><span>ЗАПЧАСТИ</span></Link>
      </li>
      <li className="menuEL">
        <a onClick={(e) => {
          e.preventDefault()
          refs.refContact.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }}><span>КОНТАКТЫ</span></a>
      </li>
      <li className="menuEL">
        <a href="tel:+78442222222"><span>+7(8442)22-70-72</span></a>
      </li>
    </ul>


    <style jsx>{`
      .menu {
        display: flex;
      }

      .menuEl {
        list-style: none;
      }

      ul {
        justify-content: space-evenly; 
        font-family: 'TacticSans-Reg','sans-serif'; 
        border-bottom: 1px solid #eaeaea;   
        font-size:21px;
        position: fixed;
        width: 100%;
        background-color: #2e2e2e;
        border:none;
        z-index:9999;
        margin-top:0;
        display:flex;
        align-items:center;
        height: 72px;
        color:white;
        top:0;
      }
      
      .menuEL {
        display:flex;
        justify-content:center;
        list-style: none;
        transition: 0.4s linear;
        position:relative;
      }

      span::after{
        position:absolute;
        content:"";
        width:0%;
        height:1.7px;
        background-color:white;
        left:50%;
        bottom:-1px;  
        transition:all 0.3s ease-in-out;
      }

      span:hover {
        cursor:pointer;
        transform:scale(1.04);
        transition:0.2s;
      }

      span:hover:after {
        cursor:pointer;
        width:100%;
        left:0;
      }

      .menuLebel {
        display:flex;
        justify-content:start;
        list-style: none;
      }


      @media(max-width: 1100px) {
        ul {
          font-size: 18px;
        }

      }
    @media(max-width: 700px) {
      ul {
         display:none;
        z-index:none;
      }
}
    `}</style>
  </nav>
}