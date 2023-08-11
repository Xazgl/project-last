import Link from 'next/link';
import { brandsCards } from '../../../../services/labelsBrands';



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
      justify-content: space-between;
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
      .background {
         justify-content:space-between ;
      }
    }

    @media(max-width: 460px) {
      .background {
         justify-content:center ;
      }
      .card {
         background-repeat: no-repeat;
         color:white;
      }

       ${brandsCards
          .map(
            (brand) => `
          #${brand.id} {
            background-image: url(${brand.card.src});
          }
        `
          )
          .join('\n')
        }
        
        h5{
          font-size: 18px;
          text-transform: uppercase;
        }

    }

    @media(max-width: 320px) {
      .logo {
        width: 50%;
      }
    }
     
`}</style>
    </>
  )
}

export default BrandsCards