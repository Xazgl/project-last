
export function ToTable() {


    return (
        <>
            <div className="background">
                <div className="table">
                    <div className="column" id="c1"><span className="title"></span>
                        <div className="row">ТО - 0</div>
                        <div className="row">ТО - 1</div>
                        <div className="row">ТО - 2</div>
                        <div className="row">ТО - 3</div>
                        <div className="row">ТО - 4</div>
                        <div className="row">ТО - 5</div>
                    </div>
                    <div className="column" id="c2"><span className="title">Срок эксплуатации</span>

                        <div className="row"></div>
                        <div className="row">3 мес.</div>
                        <div className="row">12 мес.</div>
                        <div className="row">24 мес.</div>
                        <div className="row">36 мес.</div>
                        <div className="row">48 мес.</div>
                    </div>
                    <div className="column" id="c3"><span className="title">Пробег</span>
                        <div className="row"></div>
                        <div className="row">2 000 км</div>
                        <div className="row">10 000 км</div>
                        <div className="row">20 000 км</div>
                        <div className="row">30 000 км</div>
                        <div className="row">40 000 км</div>
                    </div>
                </div>

                <div className="words">
                    <div className="title" id="tit">Акции совместемы с любым ТО</div>
                    <div className="btnDiv">
                        <button className="btn">ПОСМОТРЕТЬ  &#10095;</button>
                    </div>
                </div>



            </div>

            <style jsx>{`

        .background {
                    display:flex; 
                    width: 100%;
                    height: 800px;
                    justify-content: center;
                    align-items:center;
                    flex-direction: column;
                    background-position: center center;
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-color: rgb(56,56,56);
        }

        .table {
            display: flex;
            flex-direction: row;
            width:900px;
            color:white;
            font-family: 'TacticSans-Reg', 'sans-serif';
        }

        .column {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: baseline;
            border:solid 1px white;
        }

        #c1{
            width:200px;
        }

        #c2{
            width:350px;
        }

        #c3{
            width:350px;
        }

        .title {
            font-size: 25px;
            height: 80px;
            display: flex; 
            align-items: center;
            justify-content: center;
        }

        .row {
            display: flex; 
            flex-direction: row;
            height: 60px;
            width: 100%;
            justify-content: center;
            border-bottom:solid 1px white;
            border-top:solid 1px white;
            font-size: 22px;
            align-items: center;
            font-family: 'TacticSans-Reg', 'sans-serif';
        }

        .words {
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            width: 500px;
            margin-top:40px;

        }
        .title {
            width: 100%;
            display:flex;
            justify-content:center;
            flex-direction:row;
            align-items:center;
            flex-direction:row;
            font-family: 'TacticSans-Reg', 'sans-serif';
            font-size: 35px;
            color:white;
        }

        .btnDiv{
            display:flex;
            justify-content:center;
            flex-direction:row;
            align-items:center;
            flex-direction:row;
        }

        .btn {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    transition: transform.3s;
                    width: 250px;
                    height: 55px;
                    background: transparent;
                    border: 1px white solid;
                    font-family: 'TacticSans-Reg', 'sans-serif';
                    color:white;
                    font-size:20px;
                    text-align: center;
        }

        .btn:hover {
                    background:rgba(0, 0, 0, 0.535);
        }

        @media(max-width: 900px) {
            .table {
                width:700px;
            }
            .title {
                font-size:27px;
                
            }
         }
         @media(max-width: 700px) {
            .table {
                width:500px;
            }
            .title {
                font-size:20px;
            }
         }
         @media(max-width: 540px) {
            .table {
                width:400px;
            }
            .row {
                font-size:20px;
            }
            .title {
                font-size:20px;
            }
            .word {
                width:100%;
            }
            .column {
                width:100%;
            }
            .title {
                text-align: center;
            }
            .divForm{
                width:400px;
            }
            .inputTitle{
                width:100%;
            }
            .words {
                width:100%;
            }
            .two {
                display:none;
            }
            .btn {
                width:400px;
                height:45px;
            }
         }
         @media(max-width: 540px) {
            .btn {
                width:300px;

            }
         }
         @media(max-width: 390px) {
            .btn {
                width:300px;

            }
            .table {
                width:300px;
            }
            .title {
                font-size:16px;
            }
            #tit {
                font-size:20px;
                width: 200px;
            }
         }
         @media(max-width: 320px) {
            .btn {
                width:250px;

            }
            .table {
                width:250px;
            }
            .row {
                font-size:15px;
            }
         }
        `}</style>
        </>
    )
}
