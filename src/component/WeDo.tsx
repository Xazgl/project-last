
import router from "next/router";

export function WeDo() {
    async function showService() {
        const res = await fetch('/api/serviceClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ })
        })
        if (res.ok) {
        const result = await (await res).json()
            if (result.redirectUrl) {
               router.push(result.redirectUrl as string)
            }
      }
    }  

    async function showModel() {
        const res = await fetch('/api/modelClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ })
        })
        if (res.ok) {
        const result = await (await res).json()
            if (result.redirectUrl) {
               router.push(result.redirectUrl as string)
            }
      }
    }  

    return (
        <>
            <div className="background">
                <div className='mainTitle'>Что мы делаем</div>
            </div>
            <div className="background">
             <div className="container" >
               <div className="row">
                   <div className="el" id='yellow' onClick={showModel}>
                        <div className="title" >Продам автомобили</div>
                        <div className="words"></div>
                   </div>
                   <div className="el">
                        <div className="pic"></div>
                    </div>
                   <div className="el" id='white'  onClick={showService}> 
                        <div className="title">Обслуживаем</div>
                        <div className="words"></div>
                    </div>
                </div>
                <div className="row">
                   <div className="el">
                        <div className="pic2"></div>
                   </div>
                   <div className="el" id='grey'  onClick={showModel}>
                        <div className="title" id='greyT' >Продаем с выгодой</div>
                        <div className="words"></div>
                   </div>
                   <div className="el">
                        <div className="pic3"></div>
                   </div>
                </div>
                </div>
            </div>

            <style jsx>{`
                .background {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    background: rgba(0, 0, 0, .50);
                    color:white;

                }
                .mainTitle{
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    font-size:30px;
                    margin-top:50px;
                    font-weight: bold;

                }
                .container {
                    display:flex;
                    flex-direction:column;
                    width:900px;
                    align-items:center;
                    justify-content:center;
                    margin-top:50px;
                    margin-bottom:50px;
                  
                }
                .row{
                    display:flex;
                    flex-direction:row;
                    justify-content:center;
                }
                .el{
                    height:250px;
                    width:300px;
                    display:flex;
                    border:solid;
                    border:black;
                    flex-direction:column;
                    transition: transform.3s ;
                }
                .el:hover{
                    transform: scale(1.01);

                }
                .pic {
                    background-color:rgb(255,255,255);
                    height: 300px;
                    background-position: center center;
                    overflow: hidden;
                    background-repeat: no-repeat;

                    background-size: cover;
                 
                }
                .pic2 {
                    background-color:rgb(255,255,255);
                    height: 300px;
                    background-position: center center;
                    overflow: hidden;
                    background-repeat: no-repeat;

                    background-size: cover;
                 
                }
                .pic3 {
                    background-color:rgb(255,255,255);
                    height: 300px;
                    background-position: center center;
                    overflow: hidden;
                    background-repeat: no-repeat;

                    background-size: cover;
              
                }
                .txt {
                    height: 300px;
                    width:300px;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
                #yellow{
                    background-color:rgb(255,255,255);
                }
                #white {
                    background-color:rgb(255,255,255);
                }
                #grey{
                    background-color:rgb(255,255,255);
                }
                #greyT{
                    color:white;
                }
                .title{
                    display:flex;
                    flex-direction:row;
                    margin-top:30px;
                    justify-content:center;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    margin-top: 30%;
                    font-size:23px;
                }

                
                @media(max-width: 1000px) {
                    .container{
                       width: 630px;
                    }
                    .el{
                        height:200px;
                        width:210px;
                    }
                    .title{
                        font-size:18px;
                        margin-top: 40%;
                    }
                }
                @media(max-width: 720px) {
                    .mainTitle{
                        font-size: 25px;
                        margin-top: 30px;
                    }
                    .container{
                       width: 480px;
                    }
                    .el{
                        height:160px;
                        width:160px;
                    }
                    .title{
                        font-size:14px;
                        margin-top: 40%;
                    }
                }
                @media(max-width: 540px) {
                    .row{
                      display:flex;
                      flex-direction: column;
                    }
                    .container{
                       width: 630px;
                       margin-top:10px;
                       margin-bottom: 0px;
                    }
                    .el{
                        height:150px;
                        width:210px;
                    }
                    .title{
                        font-size:14px;
                        margin-top: 30%;
                    }
                }
                @media(max-width: 350px) {
                    .mainTitle{
                        font-size: 15px;
                        margin-top: 10px;
                    }
                    .container{
                       width: 500px;
                       margin-top:10px;
                       margin-bottom: 0px;
                    }
                    .el{
                        height:100px;
                        width:166px;
                    }
                }
                @media(max-width: 250px) {
                    .title{
                        font-size:12px;
                        margin-top: 30%;
                    }
                }
            `}</style>
        </>
    )
}