import Link from 'next/link';
import { brandsCards } from '../../../../services/functions';


function BrandsCards({ }) {

  return (
    <>
      <div className='background'>
        {brandsCards.map((brand) => (
          brand.link ? (
            <Link href={brand.link} key={brand.id}>
              <div className="card" id={brand.id}>
                <div className="row">
                  <img className="logo" alt={brand.title} src={brand.card.src} title={brand.title} />
                </div>
                <div className="row">
                  <h5>{brand.title}</h5>
                </div>
              </div>
            </Link>
          ) : (
            <div className="card" id={brand.id} key={brand.id}>
              <div className="row">
                <img className="logo" alt={brand.title} src={brand.card.src} title={brand.title} />
              </div>
              <div className="row">
                <h5>{brand.title}</h5>
              </div>
            </div>
          )
        ))}
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

    .card {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-around;
      width: 210px;
      height: 190px;
      background-color: #f2f2f2;
      padding: 10px;
      cursor: pointer;
      transition: 0.3s ease;
    }

    .card:hover {
      background-size: cover;
      color:white;
      transition:  0.3s ease;
    }

    ${brandsCards
          .map(
            (brand) => `
          #${brand.id} {
            background-image: url(${brand.card2.src});
          }

          #${brand.id}:hover {
            background-image: url(${brand.card.src});
          }
        `
          )
          .join('\n')
    }

    .card:hover .logo{
      display: none;
    }

    .row{
      display: flex;
      width: 100%;
    }

    .logo {
      align-items: flex-start;
      display: none;
      width: 40%;
    }

    h5 {
      padding-left: 10px;
      padding-top:46px;
      font-size:17px;
    }

    @media(max-width: 860px) {
      .card {
        width: 190px;
        height: 170px;
      }
    }

    @media(max-width: 440px) {
      .card {
        width: 150px;
        height: 150px;
      }
    }

    @media(max-width: 320px) {
      .card {
        width: 100%;
        height: 200px;
      }
      
      .logo {
        width: 50%;
      }

      h5{
        font-size: 18px;
      }
    }
     
`}</style>
    </>
  )
}

export default BrandsCards