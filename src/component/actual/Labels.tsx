import Link from "next/link";
import { brandsCards } from "../../services/labelsBrands";


export function Labels() {
    return (
        <>
            <div className="background" >
                <div className="labels">
                    {brandsCards.map((carBrand, index) => (
                         <Link href={carBrand.link} key={carBrand.id}>
                        <div className="label" key={index}>
                            <img alt={carBrand.id} src={carBrand.minLabel.src} title={carBrand.id} />
                        </div>
                        </Link>
                    ))}
                </div>
                {/* <div className="labels" >
                    <div className="label" >
                        <img alt="" src={chevrolet.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={chery.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={datsun.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={faw.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={ford.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={hyundai.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={jaguar.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={kia.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={lovol.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={landrov.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={mitsubishi.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={nissan.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={opel.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={peugeot.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={renault.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={subaru.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={suzuki.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={uaz.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={hisun.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={geely.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={exeed.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={usedcars.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={arkontSelect.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={baic.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={jac.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={jetour.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={kaiyi.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={jetta.src} title="" ></img>
                    </div>
                    <div className="label" >
                        <img alt="" src={donf.src} title="" ></img>
                    </div>
                </div> */}
            </div>

            <style jsx>{`

                .background {
                    display:flex; 
                    width: 100%;
                    height: auto;
                    justify-content: center; 
                    align-items: center;
                    margin-top:10px;
                    padding:30px;
                }

                .labels {
                    display:flex; 
                    width: 100%;
                    height: 100%;
                    justify-content: space-between; 
                    align-items: center;
                    gap:50px;
                    flex-wrap: wrap;
                }

                .label {
                    display: flex;
                    transition: 0.6s;
                    align-items: center;
                    cursor: pointer;
                }

                .label:hover {
                    transform: scale(1.20);
                }
                
                img {
                    background-size: cover;
                    background-position: center center;
                    background-repeat:no-repeat;
                    width: 75px;
                    height: 75px;
                }
            
               
                @media(max-width: 1200px) {
                    img {
                      width: 65px;
                      height: 65px;
                    }
                }
                @media(max-width: 1000px) {
                    img {
                      width: 50px;
                      height: 50px;
                    }
                }
                @media(max-width: 720px) {
                    img {
                      width: 44px;
                      height: 45px;
                    }
                    .labels {
                      gap:8px;
                    }
                }
                @media(max-width: 540px) {
                    .labels {
                      gap:5px;
                    }
                }
                @media(max-width: 350px) {
                    .labels {
                      gap:5px;
                    }
                    img {
                      width: 27px;
                      height: 27px;
                    }
                }
                
                @media(max-width: 250px) {
                    .title { 
                        font-size:9px;
                        margin-top:10px;
                    }
                    .titleMini {
                        font-size:7px;
                    }
                    .MainBanner { 
                        height: 130px;
                    }
                    .titleMini{
                        margin-bottom:00px;
                        margin-top:10px;
                    }
                }
        `}</style>
        </>
    )
}