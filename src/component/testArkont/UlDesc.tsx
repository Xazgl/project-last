

import { Checkbox, FormControlLabel } from "@mui/material"
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"
import { CarDto } from "../../../@types/dto"



export function UlDesc({ car }: { car: CarDto }) {

    return (
        <>
            <div className='background'>
                <div className="desc">
                    <ul>
                        {car.img.map((img) => <li key={img}>

                            <FormControlLabel
                                control={<Checkbox />}
                                // onChange={event => (!alarmSystem)}
                                label={img}
                            />
                        </li>)}
                    </ul>
                </div>

            </div>


            <style jsx>{`

.background {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
}

.desc {
    display: flex;
    width: 1000px;
    height:auto;
    flex-direction: column;
    align-items: start;
}

li {
    list-style: decimal;
}

@media(max-width: 1300px) {
    .word {
        font-size: 50px;
    }
    .cont {
        height: 500px;
    }
}
@media(max-width: 1000px) {
    .word {
        font-size: 40px;
        margin-bottom:80px;
    }
    .cont {
        height: 500px;
    }
    .btn {
        width: 220px;
       height: 50px;
       font-size: 26px;
         margin-bottom: 0px;
    }
}
@media(max-width: 800px) {
    .word {
        font-size: 30px;
    }
    .cont {
        height: 400px;
    }
    .btn {
        width: 190px;
       height: 45px;
       font-size: 20px;
    }
}
@media(max-width: 600px) {
    .word {
        font-size: 20px;
    }
    .cont {
        height: 300px;
    }
    .btn {
        width: 150px;
       height: 35px;
       font-size: 20px;
    }
}
@media(max-width: 400px) {
    .word {
        font-size: 15px;
    }
    .cont {
        height: 180px;
    }
    .btn {
       width: 90px;
       height: 30px;
       font-size: 10px;
    }
}
@media(max-width: 300px) {
    .word {
        font-size: 9px;
        margin-bottom:40px;
    }
    .cont {
        height: 130px;
    }
    .btn {
       width: auto;
       height:auto;
       font-size: 9px;
    }
}
`}</style>
        </>
    )
}