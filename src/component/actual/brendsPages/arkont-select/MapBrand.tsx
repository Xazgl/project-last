import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from 'next/link';
import { LogoList, driverTypeStr, logoFind, numberWithSpaces } from '../../../../services/functions';
import bannerDc from '/public/images/catalogPages/select/dc_vlg.png'
import bannerDcVlz from '/public/images/catalogPages/select/dc_vlz.png'
import bannerDcMonolite from '/public/images/catalogPages/select/monolite.jpg'
import arkontSelect from '/public/images/logo-around/usedCars/arkont_select.png';


import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';



function MapBrand({ }) {


  return (
    <>
      <div className='background'>
        <div className='cards' id="desktop">

          <div className='descBrand'>
            <div className='titleBrand'>О АРКОНТ СЕЛЕКТ</div>
            <div className='txtBrand'>
              АРКОНТ СЕЛЕКТ - ваш надежный партнер в мире автомобилей с пробегом!
              Мы являемся уважаемым участником автомобильного рынка уже 30 лет. Наша компания специализируется на продаже
              высококачественных и тщательно проверенных автомобилей, предлагая вам надежные варианты для выбора.
              Независимо от ваших предпочтений, у нас вы обязательно найдете подходящий автомобиль.
              Доверьтесь нашему опыту и профессионализму, чтобы приобрести авто, которое вам подойдет!
            </div>
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
                          sx={{ maxWidth: '50px', maxHeight: '80px', marginLeft: '10px' }}
                          aria-label="brand"
                          src={arkontSelect.src}
                        />
                      }
                      action={
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.758962%2C44.496026&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0NTk3MBJB0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINGD0LvQuNGG0LAg0JfQtdC80LvRj9GH0LrQuCwgMjUiCg3v-zFCFS0JQ0I%2C&source=wizroute&z=12">
                          <a rel="noopener noreferrer">
                            <IconButton aria-label="settings">
                              <AddLocationAltIcon sx={{ cursor: 'pointer' }} />
                            </IconButton>
                          </a>
                        </Link>
                      }
                      title={'АРКОНТ СЕЛЕКТ'}
                      subheader={'на Землячке'}
                    />

                    <Link href={{
                      pathname: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.758962%2C44.496026&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0NTk3MBJB0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINGD0LvQuNGG0LAg0JfQtdC80LvRj9GH0LrQuCwgMjUiCg3v-zFCFS0JQ0I%2C&source=wizroute&z=12',
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
                  <span id="titleMap">АРКОНТ СЕЛЕКТ </span>
                </div>
                <div className="descBrand">
                  <a className='href_a' href="tel:+78442525750">+7 (8442) 52-57-50</a>
                </div>
                <div className="descBrand">
                  г. Волгоград, ул. Землячки, 25
                </div>
                <div className="descBrand">
                  <a className='href_a' href="mailto:atz.auc25@arkont.ru">atz.auc25@arkont.ru</a>
                </div>
                <div className="descBrand">
                  <Link href="https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.758962%2C44.496026&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0NTk3MBJB0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINGD0LvQuNGG0LAg0JfQtdC80LvRj9GH0LrQuCwgMjUiCg3v-zFCFS0JQ0I%2C&source=wizroute&z=12">
                    <a rel="noopener noreferrer">
                      <button className='btn'>Построить маршрут </button>
                    </a>
                  </Link>
                  {/* <a className='href_a' style={{ color: 'black' }} href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">Построить маршрут</a> */}
                </div>
              </div>
            </div>
            <div className="descBrand" id='deskMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d85f219d0bef01e7a89d4695d12a2cdcc4159dafd02597d393e031d917b179d&amp;source=constructor" width="100%" height="250" frameBorder="0"></iframe>
            </div>
            <div className="descBrand" id='mobMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d85f219d0bef01e7a89d4695d12a2cdcc4159dafd02597d393e031d917b179d&amp;source=constructor" width="100%" height="350" frameBorder="0"></iframe>
            </div>
          </div>
        </div>

        <div className='cards' id="desktop">
          <div className='descBrand'>
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
                          sx={{ maxWidth: '50px', maxHeight: '80px', marginLeft: '10px' }}
                          aria-label="brand"
                          src={arkontSelect.src}
                        />
                      }
                      action={
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.772454%2C44.567981&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&source=wizroute&z=12">
                          <a rel="noopener noreferrer">
                            <IconButton aria-label="settings">
                              <AddLocationAltIcon sx={{ cursor: 'pointer' }} />
                            </IconButton>
                          </a>
                        </Link>
                      }
                      title={'АРКОНТ СЕЛЕКТ'}
                      subheader={'на Монолите'}
                    />

                    <Link href={{
                      pathname: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.772454%2C44.567981&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&source=wizroute&z=12',
                    }}>
                      <CardMedia
                        component="img"
                        height={194}
                        image={bannerDcMonolite.src}
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
                  <span id="titleMap">АРКОНТ СЕЛЕКТ</span>
                </div>
                <div className="descBrand">
                  <a className='href_a' href="tel:+78442220302">+7 (8442) 22-03-02</a>
                </div>
                <div className="descBrand">
                  г. Волгоград, пр-т Ленина, 113 д
                </div>
                <div className="descBrand">
                  <a className='href_a' href="mailto:atz.auc25@arkont.ru">atz.auc25@arkont.ru</a>
                </div>
                <div className="descBrand">
                  <Link href="https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.772454%2C44.567981&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&source=wizroute&z=12">
                    <a rel="noopener noreferrer">
                      <button className='btn'>Построить маршрут </button>
                    </a>
                  </Link>
                  {/* <a className='href_a' style={{ color: 'black' }} href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">Построить маршрут</a> */}
                </div>
              </div>
            </div>
            <div className="descBrand" id='deskMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afbcc8aadb904ac81d1a9720d8cbe2474f833559323ee5770f1d9f2e4abcebb22&amp;source=constructor" width="100%" height="250" frameBorder="0"></iframe>
            </div>
            <div className="descBrand" id='mobMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afbcc8aadb904ac81d1a9720d8cbe2474f833559323ee5770f1d9f2e4abcebb22&amp;source=constructor" width="100%" height="350" frameBorder="0"></iframe>
            </div>
          </div>
        </div>

        <div className='cards' id="desktop">
          <div className='descBrand'>
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
                          sx={{ maxWidth: '50px', maxHeight: '80px', marginLeft: '10px' }}
                          aria-label="brand"
                          src={arkontSelect.src}
                        />
                      }
                      action={
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.757240%2C44.790844&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI4MzMwMzI5EnjQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQktC-0LvQttGB0LrQuNC5LCDQv9GA0L7RgdC_0LXQutGCINC40LzQtdC90Lgg0JvQtdC90LjQvdCwLCAzNTkiCg3UKTNCFWoHQ0I%2C&source=wizroute&z=12">
                          <a rel="noopener noreferrer">
                            <IconButton aria-label="settings">
                              <AddLocationAltIcon sx={{ cursor: 'pointer' }} />
                            </IconButton>
                          </a>
                        </Link>
                      }
                      title={'АРКОНТ СЕЛЕКТ'}
                      subheader={'в Волжском'}
                    />

                    <Link href={{
                      pathname: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.757240%2C44.790844&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI4MzMwMzI5EnjQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQktC-0LvQttGB0LrQuNC5LCDQv9GA0L7RgdC_0LXQutGCINC40LzQtdC90Lgg0JvQtdC90LjQvdCwLCAzNTkiCg3UKTNCFWoHQ0I%2C&source=wizroute&z=12',
                    }}>
                      <CardMedia
                        component="img"
                        height={194}
                        image={bannerDcVlz.src}
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
                  <span id="titleMap">АРКОНТ СЕЛЕКТ</span>
                </div>
                <div className="descBrand">
                  <a className='href_a' href="tel:+78443206240">+7 (8443) 20-62-40</a>
                </div>
                <div className="descBrand">
                  г. Волжский, пр-т Ленина, 359
                </div>
                <div className="descBrand">
                  <a className='href_a' href="mailto:atz.auc25@arkont.ru">atz.auc25@arkont.ru</a>
                </div>
                <div className="descBrand">
                  <Link href="https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.757240%2C44.790844&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI4MzMwMzI5EnjQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQktC-0LvQttGB0LrQuNC5LCDQv9GA0L7RgdC_0LXQutGCINC40LzQtdC90Lgg0JvQtdC90LjQvdCwLCAzNTkiCg3UKTNCFWoHQ0I%2C&source=wizroute&z=12">
                    <a rel="noopener noreferrer">
                      <button className='btn'>Построить маршрут </button>
                    </a>
                  </Link>
                  {/* <a className='href_a' style={{ color: 'black' }} href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">Построить маршрут</a> */}
                </div>
              </div>
            </div>
            <div className="descBrand" id='deskMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d0e71c9218ffcc0d0e010a5952950f10a48726e01a4f3cf14b28010ae14c270&amp;source=constructor" width="100%" height="250" frameBorder="0"></iframe>
            </div>
            <div className="descBrand" id='mobMap'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d0e71c9218ffcc0d0e010a5952950f10a48726e01a4f3cf14b28010ae14c270&amp;source=constructor" width="100%" height="350" frameBorder="0"></iframe>
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
      flex-direction: column;
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