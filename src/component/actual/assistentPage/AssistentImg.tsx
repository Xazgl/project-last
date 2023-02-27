

import pic1 from '/public/images/logo-assistent/1.png';
import pic2 from '/public/images/logo-assistent/2.png';
import pic3 from '/public/images/logo-assistent/3.png';
import pic4 from '/public/images/logo-assistent/4.png';


export function AssistentImg(){

    return (
        <>
            <div className="background">
                <div className="imgContainer">

                    <div className="column">
                        <img className="img"
                            src={pic1.src}
                        />
                        <div className="desc">
                            СОХРАНЯЙТЕ<br />
                            СПОКОЙСТВИЕ
                        </div>
                    </div>

                    <div className="column">
                        <img className="img"
                            src={pic2.src}
                        />
                        <div className="desc">
                            ВКЛЮЧИТЕ АВАРИЙНУЮ<br />
                            СИГНАЛИЗАЦИЮ
                        </div>
                    </div>

                    <div className="column">
                        <img className="img"
                            src={pic3.src}
                        />
                        <div className="desc">
                            ПОЗВОНИТЕ<br />
                            АВАРИЙНОМУ КОМИССАРУ<br />
                            (8442) 52−45−44
                        </div>
                    </div>

                    <div className="column">
                        <img className="img"
                            src={pic4.src}
                        />
                        <div className="desc">
                            УСТАНОВИТЕ ЗНАК<br />
                            АВАРИЙНОЙ ОСТАНОВКИ
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .background {
                    display:flex;
                    justify-content:center;
                    width:100%;
                    height:auto;
            }

            .imgContainer{
                    display:flex;
                    justify-content:center;
                    flex-direction: row;
                    width:1000px;
                    height:auto;
            }

            .column {
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                    text-align: center;
            }

            .img {
                    height:250px;
                    width:250px;
                    background-size: cover;
                    background-position: no-repeat;
            }

            .desc {
                    display: flex;
                    width: 100%;
                    color: #0000CD;
                    text-align: center;
                    line-height: 1.6666666667rem;
                    margin-top:21px;
                    font-size: 16px;
                    justify-content: center;
            }

            @media(max-width: 900px) {
                .imgContainer{
                    width: 600px;
                    margin-top:50px;
                }

               .img{
                    height: 150px;
                    width: 150px;
                }
            }

           @media(max-width: 650px) {
                .imgContainer{
                        width:100%;
                        flex-direction: column;
                        margin-top: 20px;
                }
                
                .desc {
                    width: 100%;
                    padding: 10px;
                }
            }

            @media(max-width: 650px) {
                .img{
                    height: 100px;
                    width: 100px;
                }

                .desc {
                   font-size: 14px;
                }
            }


        `}</style>
        </>
    )}
        