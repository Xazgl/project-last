
import { Button, CircularProgress } from '@mui/material';
import { Offer } from '@prisma/client';
import { MutableRefObject } from 'react';
import ReactMarkdown from 'react-markdown';


type Props = {
    offer: Offer,
    refForm:MutableRefObject<HTMLDivElement>,
}


export function OfferDesc({ offer, refForm }: Props) {

return (
    <>
        <div className="background">
            {offer !== null ?
                <div className="blockDesc">
                    <p ><ReactMarkdown>{offer.description}</ReactMarkdown></p>
                    <div className='divBtn'>
                        <Button
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                fontSize: '16px',
                                fontFamily: 'Gilroy',
                                backgroundColor:' #131313',
                                borderRadius:'0px'
                            }}
                            onClick={
                                (e) => {
                                    e.preventDefault()
                                    refForm.current.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center',
                                        inline: 'center'
                                    })
                                }
                            }
                            variant="contained"
                            href="tel:+78442524544">Связаться</Button>
                    </div>
                </div>
                : <CircularProgress />
            }
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
                }

                .titleMini {
                    display:flex;
                    text-align: start;
                    font-size:18px;
                    justify-content: start;
                    color: #0000CD;
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