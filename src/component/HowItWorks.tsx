import card1 from '/public/images/card1.jpg';
import card2 from '/public/images/card2.jpg';
import card3 from '/public/images/card3.jpg';
import card4 from '/public/images/card4.jpg';
export function HowItWorks() {
    return (
        <>
             <div className="background">
                 <div className="contentEL">
                 <div className="title">Как работает покупка в АРКОНТ </div>
                 <div className="row">
                   <div className='card'>
                     <div className="cardRow">
                         <div className="numeric">1</div>
                         <div className="img" id="card1"></div>
                     </div>
                     <div className="rowUp">Оставить заявку</div>
                   </div>
                   <div className='card'>
                     <div className="cardRow">
                         <div className="numeric">2</div>
                         <div className="img"  id="card2"></div>
                     </div>
                     <div className="rowUp">Пройти тест-драйв</div>
                   </div>
                   <div className='card'>
                     <div className="cardRow">
                         <div className="numeric">3</div>
                         <div className="img"  id="card3"></div>
                     </div>
                     <div className="rowUp">Выбрать выгодные условия</div>
                    </div>
                    <div className='card'>
                     <div className="cardRow">
                         <div className="numeric">4</div>
                         <div className="img"  id="card4"></div>
                     </div> 
                     <div className="rowUp">Поставить авто на учет</div>
                    </div>
                </div>
 
                     
                </div>
             </div>

            <style jsx>{`
                .background {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    background-color:black;
                    height:350px;
                }
                .contentEl{
                 display:flex; 
                 width: 900px;
                 justify-content: center;
                 flex-direction:row;
                 margin-top:50px;
                }
                .title {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    font-size:43px;
                    color:yellow;
                    font-weight:bold;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    margin-top:20px;
                }
                .row {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                }
                .card {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
                .cardRow {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    height:150px;
                    width:250px;
                }
 
                .img {
                    display:flex;
                    height:250px;
                    width:100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                    overflow: hidden;
                    border-radius: 5px;
                    background-size:contain;
                    border-radius:10px;
                }
                #card1{
                    background-image: url('${card1.src}');
                }
                #card2{
                    background-image: url('${card2.src}');
                }
                #card3{
                    background-image: url('${card3.src}');
                }
                #card4{
                    background-image: url('${card4.src}');
                }
                .rowUp {
                    display:flex;
                    justify-content:center;
                    color:white;
                    font-size:14px;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    margin-top:40px;
                }
                .numeric{
                    display:flex;
                    color:yellow;
                    font-size:150px;
                }
            @media(max-width: 1000px) {
                .row {
                 flex-direction: column;
                }
                .background {
                    height: auto
                }
                .rowUp {
                    font-size:18px;
                }
                .title {
                    font-size:25px;
                }
                .numeric{
                    font-size:160px;
                }
            }
            @media(max-width: 600px) {
                .title {
                    font-size:17px;
                }
                .rowUp {
                    font-size:14px;
                }
            }
            @media(max-width: 400px) {
                .background{
                    display:none;
                }
            }
            `}</style>
        </>
    )
}