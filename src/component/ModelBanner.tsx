import banner from '/public/images/modelBanner.jpg'

export function ModelBanner() {
    return (
        <>
            <div className="MainBanner">
               {/* <Image
                    src={banner}
                    alt="opel"
                    width={1000}
                    height={1000}
                />*/}

                {/* <img  className="ImgBanner" src={banner.src} alt="opel" /> */}
                {/* <div  className="ImgBanner2" /> */}
                    <div className="title">
                   </div>
            </div>

            <style jsx>{`
                .MainBanner {
                    display:flex; 
                    width: 100%;
                    height: 600px;
                    justify-content: center;
                    background-color:black;
                    background-position: center center;
                    background-image: url('${banner.src}');
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
                    font-family: 'Gilroy'; 
                }
                @media(max-width: 1000px) {
                    .MainBanner {
                        height: 400px;
                    }
                }
                @media(max-width: 700px) {
                    .MainBanner {
                        height: 300px;
                    }
                }
                @media(max-width: 500px) {
                    .MainBanner {
                        height: 200px;
                    }
                }
                @media(max-width: 350px) {
                    .MainBanner {
                        height: 100px;
                    }
                }
            `}</style>
        </>
    )
}