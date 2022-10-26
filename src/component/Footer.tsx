
import Link from 'next/link';

export function Footer() {
    return (
        <>
            <div className="footer">
              <div className="column">
                   <div className="label"></div> 
               </div>
               <div className="column">
                <Link href="/">
                  <div className="el">Официальный дилер OPEL АРКОНТ</div>  
                </Link>
                  <div className="el">г.Волгоград, ул.Вильнюсская, д.42</div>  
               
                </div> 

                <div className="column">
                <Link href="/servicePage">
                  <div className="el">Сервис Арконт</div> 
                </Link>   
                <Link href="arkont.ru/owners/diskontnaia-programma-special">
                  <div className="el">АРКОНТ SPECIAL</div>
                </Link>       
                </div> 

                <div className="column">
                  <Link href="/modelPage">
                    <div className="el">Модельный ряд</div>
                  </Link>    
                  <div className="el">+7(8442)22-22-22</div>
                </div>     
            </div>

    <style jsx>{`
      .footer {
        display:flex;
        justify-content: space-around; 
        background-color:black;
      }

      .label {
        display:flex;
        background-position: center center;
        background-image: url('${brend.src}');
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        margin-right: 20px;
      }

      .column {
        display:flex;
        flex-direction:column;
        font-family: 'OpelNextW01-Regular', sans-serif; 
        color:white;
      }
     
      .el {
        display:flex;
        justify-content:row;
        justify-content:center;
        margin-top:20px;
        transition: transform.3s ;
      }
      .el:hover {
        transform: scale(1.02);
        color:yellow;
      }
      @media(max-width: 900px) {
            .el {
                font-size:14px;
            }
            .label {
              width: 80px;
              height: 80px;
            }
        }
        @media(max-width: 700px) {
            .el {
                font-size:10px;
            }
            .label {
              width: 80px;
              height: 80px;
            }
        }
        @media(max-width: 535px) {
            .el {
                font-size:7px;
            }
            .label {
              width: 50px;
              height: 50px;
            }
        }
        @media(max-width: 415px) {
            .el {
                font-size:4px;
            }
            .label {
              width: 50px;
              height: 50px;
            }
        }
        @media(max-width: 270px) {
            .el {
                font-size:2px;
            }
            .label {
              width: 50px;
              height: 50px;
            }
        }
    `}</style>
 </>
    )
}