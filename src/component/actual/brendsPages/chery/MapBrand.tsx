import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from 'next/link';
import { LogoList, driverTypeStr, logoFind, numberWithSpaces } from '../../../../services/functions';
import bannerDc from '/public/images/catalogPages/chery/dc.png'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';



function MapBrand({ }) {


  return (
    <>
      <div className='background'>
        {/* <div className="leftC" ></div> */}
        <div className='cards' id="desktop">

          <div className='descBrand'>
            <div className='titleBrand'>О Chery</div>
            <div className='txtBrand'>
              Chery - это автомобильный бренд, который зарекомендовал себя как один из
              ведущих производителей автомобилей в Китае. Бренд Chery объединяет
              инновационные технологии, современный дизайн и высокое качество изготовления,
              предлагая широкий ассортимент автомобилей для различных потребностей и предпочтений
              покупателей.
            </div>
            <div className='rowColumn'>
              <div className='columnBrand'>
                <div className='cardDiv'>
                  <Card sx={{
                    width: '100%', height: 'auto', display: 'flex', border: '1px  solid transparent',
                    flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Gilroy',

                  }} >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{ maxWidth: '30px', maxHeight: '50px', marginLeft: '10px' }}
                          aria-label="brand"
                          src={logoFind(LogoList, 'Chery')}
                        />
                      }
                      action={
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.490567%2C48.756841&mode=routes&origin=jsapi_2_1_79&rtext=~48.756968%2C44.490263&rtt=auto&ruri=~&z=19.3">
                          <a rel="noopener noreferrer">
                            <IconButton aria-label="settings">
                              <AddLocationAltIcon sx={{ cursor: 'pointer' }} />
                            </IconButton>
                          </a>
                        </Link>
                      }
                      title={'Официальный дилер'}
                      subheader={'Chery Арконт'}
                    />

                    <Link href={{
                      pathname: 'https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.490567%2C48.756841&mode=routes&origin=jsapi_2_1_79&rtext=~48.756968%2C44.490263&rtt=auto&ruri=~&z=19.3',
                    }}>
                      <CardMedia
                        component="img"
                        height={194}
                        image={bannerDc.src}
                        sx={{
                          cursor: 'pointer',
                        }}
                        loading="lazy"
                        decoding='async'

                        alt="car"
                      />
                    </Link>
                  </Card>
                </div>

              </div>
              <div className='columnBrand'>
                <div className='titleBrand'>
                  <span id="titleMap">Chery Арконт</span>
                </div>
                <div className="descBrand">
                  <a className='href_a' href="tel:+78442205073">+7 (844) 220-50-73</a>
                </div>
                <div className="descBrand">
                  г. Волгоград, ул. Землячки, 19Г
                </div>
                <div className="descBrand">
                  <a className='href_a' href="mailto:chery@arkont.ru">chery@arkont.ru</a>
                </div>
                <div className="descBrand">
                  <Link href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.490567%2C48.756841&mode=routes&origin=jsapi_2_1_79&rtext=~48.756968%2C44.490263&rtt=auto&ruri=~&z=19.3">
                    <a rel="noopener noreferrer">
                      <button className='btn'>Построить маршрут </button>
                    </a>
                  </Link>
                  {/* <a className='href_a' style={{ color: 'black' }} href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">Построить маршрут</a> */}
                </div>
              </div>
            </div>
            <div className="descBrand" id='deskMap'>
              <iframe  src="https://yandex.ru/map-widget/v1/?um=constructor%3A86a032f393c01460c431406807aad16835cc2975a953d4101ff462839bc82e02&amp;source=constructor" width="100%" height="250" frameBorder="0"></iframe>
            </div>
            <div className="descBrand" id='mobMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A86a032f393c01460c431406807aad16835cc2975a953d4101ff462839bc82e02&amp;source=constructor" width="100%" height="350" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </div >

      <style jsx>{`              
    .background {
      display:flex;
      width: 100%;
      padding: 20px;
      justify-content: center;
      background-color: #f5f2f261;
      height: auto;
    }

   
    .descBrand{
      display: flex; 
      flex-direction: column;
      width: 100%;
      height: auto;
    }

    #deskMap {
      display: flex;
    }

    #mobMap {
      display: none;
    }

    .titleBrand {
      display: flex;
      justify-content: flex-start;
      font-size: 25px;
      font-weight: bold;
    }

    .txtBrand {
      display:flex;
      justify-content: flex-start;
      margin-top:20px;
    }

    .rowColumn {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top:20px;
    }

    .columnBrand{
      display: flex;
      justify-content: flex-start;
      width: 50%;
      flex-direction:column;
    }

    #titleMap {
      border-bottom:solid   #131313  2px;
    }

    .descBrand {
      display: flex;
      margin-top: 20px;
    }

    .href_a{
      text-decoration: none;
      color: #131313;
    }


    .cards {
      display: flex;
      justify-content: start;
      gap:30px;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .cardDiv{
      width: 345px;
    }
 
    .price {
      font-size: 15px;
      line-height: 18px;
      display: flex;
      align-items: center;
      letter-spacing: normal;
      font-family: 'Gilroy',sans-serif;
      color:black;
    }

    .priceMonth {
      display: flex;
      justify-content: start;
      width: 80%;
      height: 35px;

    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding:1px;
      width:50%;
      height: 35px;
      border: solid 1px #131313;
      color: white;
      background-color:  #131313;
      font-size: 15px;
      transition: 0.6s;
      font-family: 'Gilroy','sans-serif'; 
      cursor: pointer;
    }

    .btn:hover {
      background-color:#D1AC02; 
    }

    a{
      text-decoration: none;
      color:black;
    }

    ul {
      list-style: none;
    }

    .office{
      display: flex;
      justify-content: start;
      margin-top: 10px;
      font-size: 12px;
      align-items: center;
      font-family: 'Gilroy','sans-serif'; 

    }

    #mob{
      display: none;
      gap:10px;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      flex-wrap: nowrap;
    }

    .row {
      display:flex;
      flex-direction: row;
    }

    .column {
      display:flex;
      flex-direction: column;
      height: auto;
    }

    #priceModbile{
      font-size: 17px;
      height: 30px;
      margin-top:15px;
      font-weight: bold;
      width: 100%;
      font-family: 'Gilroy','sans-serif'; 

    }

    #priceMonth {
      width: 100%;
      height: auto;
      font-weight: bold;
      margin-top:20px;
      font-family: 'Gilroy','sans-serif'; 
    }

    @media(max-width: 1250px) {
      .cards {
       justify-content: center;
      }

      .rowColumn {
        flex-direction: column;
      }
      .leftC{
       display: none;
      }

      .cardDiv{
        width: 345px;
      }
      
      .columnBrand{
        margin-top: 20px;
        width: 100%;
      }
    }

    @media(max-width: 860px) {
     
    }

    @media(max-width: 660px) {
      .btn {
        width: 90%
      }

      .office{
        font-size: 9px;
      }
      .background{
        height: auto;
      }

      .cardDiv {
        width: 100%;
      }
    }

    @media(max-width: 400px) {

      h3{
        font-weight: 300;
      }

      .titleBrand {
        font-size: 20px;
      }

      .txtBrand {
        font-size:14px;
      }

      #deskMap {
        display: none;
      }
  
      #mobMap {
        display: flex;
      }
      .descBrand {
         font-size: 16px;
      }
    }
    @media(max-width: 340px) {
      .descBrand {
         font-size: 14px;
      }
    }

    

  
            
  `}</style>
    </>
  )
}

export default MapBrand