import { Box, Button } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import { Driver, Drivers, Genders } from '../../type'

type Props = {
    setDrivers: Dispatch<SetStateAction<Drivers>>,
    driver: Driver
}

function DriverCurrentForm({ driver, setDrivers }: Props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'row',
                marginTop: '10px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    width: '30%',
                    marginTop: '10px',
                    flexDirection: 'column',
                }}
            >
                <div className="inputTitle">Возраст*</div>
                <input type="text"
                    className="name"
                    id="name"
                    name="name"
                    placeholder="Solaris"
                    required
                    value={driver.yearsOld} //age
                    onChange={e => {
                        if (!/^\d{0,2}$/.test(e.target.value)) return;
                        setDrivers(drivers => {
                            return drivers.map(d => d.id === driver.id ? ({ ...driver, yearsOld: e.target.value }) : d)
                        })
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    width: '30%',
                    marginTop: '10px',
                    flexDirection: 'column',
                }}
            >
                <div className="inputTitle">Стаж*</div>
                <input type="text"
                    className="name"
                    id="name"
                    name="name"
                    placeholder="Solaris"
                    required
                    value={driver.exp}
                    onChange={e => {
                        if (!/^\d{0,2}$/.test(e.target.value)) return;
                        setDrivers(drivers => {
                            return drivers.map(d => d.id === driver.id ? ({ ...driver, exp: e.target.value }) : d)
                        })
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    width: '30%',
                    marginTop: '10px',
                    flexDirection: 'column',
                }}
            >
                <div className="inputTitle">Пол*</div>
                <select className="selectModel" name="office"
                    value={driver.gender}
                    onChange={e => setDrivers(drivers => {
                        return drivers.map(d => d.id === driver.id ? ({ ...driver, gender: e.target.value as "Мужской" | "Женский" }) : d)
                    })}
                >
                    <option value={0} selected disabled></option>
                    {Genders.map(gender => <option key={gender.id} value={gender.name}>{gender.name}</option>)}
                </select>
            </Box>
            <Box>
                {
                    driver.id > 0 ? <Button onClick={() => {setDrivers(drivers => {
                        return drivers.filter(d => d.id !== driver.id)
                    })}}>Удалить</Button> : null
                }
            </Box>
        </Box>
    )
}

export default DriverCurrentForm