import Link from "next/link";
import { MutableRefObject, useEffect, useMemo, useState } from "react";
import chevrolet from '/public/images/logo-brends/chev.jpg';
import chery from '/public/images/logo-brends/chery.jpg';
import datsun from '/public/images/logo-brends/da.jpg';
import faw from '/public/images/logo-brends/faw.jpg';
import ford from '/public/images/logo-brends/ford.jpg';
import hyundai from '/public/images/logo-brends/hy.jpg';
import jaguar from '/public/images/logo-brends/ja.jpg';
import kia from '/public/images/logo-brends/kia.jpg';
import landrov from '/public/images/logo-brends/lr.jpg';
import mitsubishi from '/public/images/logo-brends/mmc.jpg';
import nissan from '/public/images/logo-brends/nis.jpg';
import opel from '/public/images/logo-brends/op.jpg';
import peugeot from '/public/images/logo-brends/peu.jpg';
import renault from '/public/images/logo-brends/re.jpg';
import subaru from '/public/images/logo-brends/sub.jpg';
import suzuki from '/public/images/logo-brends/suz.jpg';
import uaz from '/public/images/logo-brends/yaz.jpg';
import hisun from '/public/images/logo-brends/hisun.jpg';
import geely from '/public/images/logo-brends/geely.jpg';
import exeed from '/public/images/logo-brends/exeed.jpg';
import usedcars from '/public/images/logo-brends/usedcars.jpg';



export function Labels() {
    return (
        <>
            <div className="background" >
                <div className="labels" >
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

                </div>
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
                    width: 1100px;
                    height: 100%;
                    justify-content: center; 
                    gap:20px;
                    flex-wrap: wrap;
                }


                .label {
                    display: flex;
                    transition: 0.6s;
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
                }
                @media(max-width: 460px) {
                    .labels {
                      gap:10px;
                    }
                }
                @media(max-width: 350px) {
                    .labels {
                      gap:2px;
                    }
                    img {
                      width: 35px;
                      height: 35px;
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