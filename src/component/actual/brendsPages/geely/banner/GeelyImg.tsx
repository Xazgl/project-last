import banner from '/public/images/catalogPages/geely/bannerDesktop.webp'
import bannerMobile from '/public/images/catalogPages/geely/bannerMobile.webp'

export function GeelyImgDestop() {
    return (
        <>
            <div className="banner">
                <div className="title">
                </div>
            </div>

            <div className="bannerMobile">
            </div>

            <style jsx>{`
                .banner {
                    display:flex; 
                    width: 100%;
                    height: 400px;
                    justify-content: center;
                    background-color:black;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    padding-top: 42px;
                }

             .bannerMobile {
                    display:none; 
                    width: 100%;
                    height: 00px;
                    justify-content: center;
                    background-color:black;
                    background-position: center center;
                    background-image: url('${bannerMobile.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    padding-top: 42px;
                    }

                
                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:black;
                    font-family: 'Montserrat'; 
                }

                @media(max-width: 1300px) {
                    .banner {
                        height: 300px;
                    }
                }
                @media(max-width: 900px) {
                    .banner {
                        height: 200px;
                    }
                }
            
                
                @media(max-width: 400px) {
                    .banner {
                        height: 100px;
                    }
                }

            `}</style>
        </>
    )
}