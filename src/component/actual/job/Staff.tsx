import banner from '/public/images/5.jpg';

export function Staff() {
    return (
        <>
            <div className="background" id="main">
                <div className='titleFlex'>Истории успеха некоторых наших сотрудников:</div>
            </div>
            <div className="background">
                <div className="content">
                    <div className="col1" id="imgColumn">
                    </div>
                    <div className="col" id="contentColumn">
                        <p className='title'>Алексей Финогенов — Директор направления автомобилей с пробегом ARKONT USED CARS</p>
                        <p>2003 г. — продавец — консультант;</p>
                        <p>2006 г. — руководитель отдела продаж;</p>
                        <p>с 2008 г. — директор дилерского центра Nissan / Datsun;</p>
                        <p>с 2021 г. — директор направления автомобилей с пробегом ARKONT USED CARS</p>
                        <p className='mini'>«Системный подход, внимание к людям, четкая работа со временем — вот залог удачной карьеры!»</p>
                    </div>
                </div>

            </div>


            <style jsx>{`

                 .titleFlex {
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:20px;
                    width: 900px;
                 }
                 #main{
                    height: 100px;
                 }
                 .background {
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 500px;
                 }
                 .content {
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    width: 900px;
                    height: 500px;
                 }
                 .col {
                    display: flex;
                    flex-direction: column;
                    align-items:start;
                    width: 50%;
                    height: 100%;
                    text-align: start;
                 }
                 .col1 {
                    display: flex;
                    flex-direction: column;
                    align-items:center;
                    width: 50%;
                    height: 100%;
                    background-image: url('${banner.src}'); 
                    background-repeat: no-repeat;
                    background-size: contain;
                    justify-content: start;
                 }

                 #contentColumn{
                    font-size:15px;
                    font-family: 'Roboto','sans-serif'; 
                    justify-content: start;
                    width:60%;
                 }

                 .title {
                    font-weight: bold;
                 }
                 .mini {
                    margin-top:30px;
                    font-weight: bold;
                 }
            `}</style>
        </>
    )
}