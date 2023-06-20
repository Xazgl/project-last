



function BrandsMap({ }) {
  return (
    <>
      <div className='background'>
        <iframe className="desk" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa57b3438c5f629f7d423f7d527fdbecefc9caa448fb666f7d32b08088eb52456&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
        <iframe className="mob" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa57b3438c5f629f7d423f7d527fdbecefc9caa448fb666f7d32b08088eb52456&amp;source=constructor" width="100%" height="600" frameBorder="0"></iframe>

      </div >

      <style jsx>{`              
    .background {
      display:flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: start;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .mob{
        display: none;
    }


    @media(max-width: 1100px) {

    }

    @media(max-width: 860px) {
    
    }

    @media(max-width: 660px) {
      .desk {
        display: none;
      }
      .mob{
        display: flex;
      }
    }

            
  `}</style>
    </>
  )
}

export default BrandsMap