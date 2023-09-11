
import pic1 from '/public/images/logo-assistent/1.png';
import pic2 from '/public/images/logo-assistent/2.png';
import pic3 from '/public/images/logo-assistent/3.png';
import pic4 from '/public/images/logo-assistent/4.png';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Button } from '@mui/material';


export function AssistentTxt() {

    return (
        <>
            <div className="background">
                <div className="blockDesc">
                    <p className='title'>
                        Наши специалисты произведут все обязательные действия непосредственно на месте ДТП,
                        а также окажут консультационную, правовую и психологическую поддержку.
                    </p>
                    <ul><p className="titleMini">АВАРИЙНЫЙ КОМИССАР «АРКОНТ» ПОМОЖЕТ ВАМ:</p>
                        <li> <DoneOutlineIcon sx={{ color: ' #131313', fontSize: '14px' }} /> Вызвать сотрудников ГИБДД на место ДТП</li>
                        <li><DoneOutlineIcon sx={{ color: ' #131313', fontSize: '14px' }} />Правильно оформить все документы для возмещения ущерба</li>
                        <li><DoneOutlineIcon sx={{ color: ' #131313', fontSize: '14px' }} />Дать объяснения сотрудникам ГИБДД</li>
                        <li><DoneOutlineIcon sx={{ color: ' #131313', fontSize: '14px' }} /> Отстоять вашу точку зрения в случае психологического давления</li>
                        <li><DoneOutlineIcon sx={{ color: ' #131313', fontSize: '14px' }} />Провести необходимые замеры и фото, видеосъёмку</li>
                        <li><DoneOutlineIcon sx={{ color: ' #131313', fontSize: '14px' }} />При необходимости эвакуировать автомобиль с места ДТП</li>
                        <li><DoneOutlineIcon sx={{ color: ' #131313', fontSize: '14px' }} />Рассчитать предварительную стоимость ремонта</li>
                    </ul>
                    <h4 style={{ color: ' #131313' }}>
                        ТЕЛЕФОН: +7(8442)52−45−44
                    </h4>

                    <div className='divBtn'>
                    <Button
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        width:'100%',
                        height:'100%',
                        fontSize:'16px',
                        backgroundColor:' #131313',
                        '&:hover': { color: '#131313', background: '#f9b518' }
                    }}
                    variant="contained"
                    href="tel:+78442524544">Связаться</Button>
                </div>
                </div>
            </div>

            <style jsx>{`
                .background {
                    display:flex;
                    justify-content:center;
                    width:100%;
                    height:auto;
                    margin-top:50px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }

                .title {
                    display:flex;
                    text-align: start;
                    font-size:18px;
                    justify-content: start;
                    color: #2e2d2d;
                    font-family: 'Roboto','sans-serif'; 

                }

                .titleMini {
                    display:flex;
                    text-align: start;
                    font-size:18px;
                    justify-content: start;
                    color:  #131313;
                    font-family: 'Roboto','sans-serif'; 

                }

                .blockDesc{
                    display:flex;
                    align-items: start;
                    flex-direction: column;
                    gap:20px;
                    width:1000px;
                    height:auto;
                }

                .column {
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                    text-align: center;
                }

                ul{
                    list-style: none;
                }

                li {
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    margin-top:15px;
                    gap:10px;
                }

                .divBtn{
                    display: flex;
                    width: 300px;
                    height: 40px;
                    margin-top: 15px;
                }

              


           @media(max-width: 900px) {
                .imgContainer{
                    width: 600px;
                }

               .img{
                    height: 150px;
                    width: 150px;
                }

                .blockDesc{
                    width: 600px;
                }
            }

           @media(max-width: 650px) {
                .imgContainer{
                        width:100%;
                        flex-direction: column;
                        margin-top: 20px;
                }
                .desc {
                    justify-content: center;
                    width: 100%;
                    padding: 10px;
                }

                .blockDesc{
                    width: 400px;
                }


                .titleMini {
                    font-size:16px;
                }

                li {
                    align-items: baseline;
                }
            }

           @media(max-width: 440px) {
                .desc {
                  font-size: 13px;
                }
                .blockDesc{
                    width: 300px;
                }
           }

           
           @media(max-width: 300px) {
                .blockDesc{
                    width: 250px;
                }
                .title {
                    font-size: 14px; 
                }
                .divBtn {
                    width:250px;
                }
                h4 {
                    font-size: 14px;  
                }
           }

        `}</style>
        </>
    )
}