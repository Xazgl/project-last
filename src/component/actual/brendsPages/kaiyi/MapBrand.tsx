import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from 'next/link';
import { LogoList, driverTypeStr, logoFind, numberWithSpaces } from '../../../../services/functions';
import bannerDc from '/public/images/catalogPages/kaiyi/dc.png'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';



function MapBrand({ }) {


  return (
    <>
      <div className='background'>
        {/* <div className="leftC" ></div> */}
        <div className='cards' id="desktop">

          <div className='descBrand'>
            <div className='titleBrand'>О Kaiyi</div>
            <div className='txtBrand'>
              KAIYI - это бренд, который вобрал в себя смелость, инновации и
              превосходство. Каждая деталь их автомобилей выражает эстетику
              и техническую изысканность, отражая стремление к совершенству.            </div>
            <div className='rowColumn'>
              <div className='columnBrand'>
                <div className='cardDiv'>
                  <Card sx={{
                    width: '100%', height: 'auto', display: 'flex', border: '1px  solid transparent',
                    flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',

                  }} >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{ maxWidth: '30px', maxHeight: '50px', marginLeft: '10px' }}
                          aria-label="brand"
                          src={logoFind(LogoList, 'Kaiyi')}
                        />
                      }
                      action={
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">
                          <a rel="noopener noreferrer">
                            <IconButton aria-label="settings">
                              <AddLocationAltIcon sx={{ cursor: 'pointer' }} />
                            </IconButton>
                          </a>
                        </Link>
                      }
                      title={'Официальный дилер'}
                      subheader={'Kaiyi Арконт'}
                    />

                    <Link href={{
                      pathname: 'https://yandex.ru/maps/10951/volzhskiy/?ll=44.682852%2C48.763465&mode=routes&rtext=48.757486%2C44.790162~48.772454%2C44.567981&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&z=12.59',
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
                  <span id="titleMap">Kaiyi Арконт</span>
                </div>
                <div className="descBrand">
                  <a className='href_a' href="tel:+78442205073">+7 (844) 220-50-73</a>
                </div>
                <div className="descBrand">
                  г. Волгоград, пр. имени Ленина, 113Д<br/>
                  г. Волжский, пр. имени Ленина, 359
                </div>
                <div className="descBrand">
                  <a className='href_a' href="mailto:kaiyi@arkont.ru">kaiyi@arkont.ru</a>
                </div>
                <div className="descBrand">
                  <Link href="https://yandex.ru/maps/10951/volzhskiy/?ll=44.682852%2C48.763465&mode=routes&rtext=48.757486%2C44.790162~48.772454%2C44.567981&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&z=12.59">
                    <a rel="noopener noreferrer">
                      <button className='btn'>Построить маршрут </button>
                    </a>
                  </Link>
                  {/* <a className='href_a' style={{ color: 'black' }} href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">Построить маршрут</a> */}
                </div>
              </div>
            </div>
            <div className="descBrand" id='deskMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac7cd9133d6c3c25da4ecf06e7c0e392f09e5cc793bdb57727d0e0d1783ebcb78&amp;source=constructor" width="100%" height="250" frameBorder="0"></iframe>
            </div>
            <div className="descBrand" id='mobMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac7cd9133d6c3c25da4ecf06e7c0e392f09e5cc793bdb57727d0e0d1783ebcb78&amp;source=constructor" width="100%" height="350" frameBorder="0"></iframe>
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
      font-family: 'Roboto',sans-serif;
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
      font-family: 'Roboto','sans-serif'; 
      cursor: pointer;
    }

    .btn:hover {
      background-color:#fdb913; 
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
      font-family: 'Roboto','sans-serif'; 

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
      font-family: 'Roboto','sans-serif'; 

    }

    #priceMonth {
      width: 100%;
      height: auto;
      font-weight: bold;
      margin-top:20px;
      font-family: 'Roboto','sans-serif'; 
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