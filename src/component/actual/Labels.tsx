import Link from "next/link";
import { MutableRefObject, useEffect, useMemo, useState } from "react";
import chevrolet from '/public/images/logo-brends/chev.webp';
import chery from '/public/images/logo-brends/chery.webp';
import datsun from '/public/images/logo-brends/da.webp';
import faw from '/public/images/logo-brends/faw.webp';
import ford from '/public/images/logo-brends/ford.webp';
import hyundai from '/public/images/logo-brends/hy.webp';
import jaguar from '/public/images/logo-brends/ja.webp';
import kia from '/public/images/logo-brends/kia.webp';
import landrov from '/public/images/logo-brends/lr.webp';
import mitsubishi from '/public/images/logo-brends/mmc.webp';
import nissan from '/public/images/logo-brends/nis.webp';
import opel from '/public/images/logo-brends/op.webp';
import peugeot from '/public/images/logo-brends/peu.webp';
import renault from '/public/images/logo-brends/re.webp';
import subaru from '/public/images/logo-brends/sub.webp';
import suzuki from '/public/images/logo-brends/suz.webp';
import uaz from '/public/images/logo-brends/yaz.webp';
import hisun from '/public/images/logo-brends/hisun.webp';
import geely from '/public/images/logo-brends/geely.webp';
import exeed from '/public/images/logo-brends/exeed.webp';
import usedcars from '/public/images/logo-brends/usedcars.webp';
import lovol from '/public/images/logo-brends/lov.webp';

import arkontSelect from '/public/images/logo-brends/arkontSelect.webp';
import baic from '/public/images/logo-brends/baic.webp';
import jac from '/public/images/logo-brends/jac.webp';
import jetour from '/public/images/logo-brends/jetour.webp';
import kaiyi from '/public/images/logo-brends/kaiyi.webp';
import jetta from '/public/images/logo-brends/jetta.webp';






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
                    justify-content: left; 
                    align-items: center;
                    gap:20px;
                    flex-wrap: wrap;
                }


                .label {
                    display: flex;
                    transition: 0.6s;
                    align-items: center;

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