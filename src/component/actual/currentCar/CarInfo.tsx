import { Circle } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AllCarDto } from "../../../../@types/dto";

export function InfoCar() {

    const router = useRouter()
    const [car, setCar] = useState(null) // TODO: написать тип ДТО {}
    const { id } = router.query

    useEffect(() => {
        async function start() {
            const res = await fetch('/api/car/' + router.query.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (res.ok) {
                const carFetch = await res.json()
                console.log(carFetch);

                setCar(carFetch)
            }
        }
        if (router.isReady) {
            start()
            console.log('start');

        }
    }, [router.isReady]);


    return (
        <>
            { car !== null ? <div>
                    <div> {car.CarModel.brandName}</div>
                    <button onClick={() => (console.log(car))}></button>
                </div>
                :<Circle/>
            }

        </>

    )

}


