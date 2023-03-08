
import { Button } from '@mui/material';
import React, { ChangeEvent, Suspense, useCallback, useMemo, useRef } from 'react'
import { FormEvent, useState } from 'react'
import { dealerList, OfficeDealer } from '../actual/contact/array'


export function DealerAdd() {
    // const [dealer, setDealer] = useState<OfficeDealer[]>([])

    async function addDealers() {
        try {
            const res = await fetch('/api/addDealers', {
                method: 'POST',
                body:  JSON.stringify(dealerList) 
            })
            if (res.ok) {
                const answer = await res.json()
                console.log(answer)

            }
        } catch (error) {
            console.log(error)
        }
    }

    return<>
        <Button sx={{
            marginLeft: '30px', marginTop: '20px', marginBottom: '10px', textAlign: 'center', backgroundColor: '#2e2e2e', color: 'white', border: 'solid 2px white', fontFamily: 'TacticSans-Reg',
            '&:hover': {
                backgroundColor: '#0069d9',
            },
        }} onClick={addDealers}>Добавить все ДЦ</Button>


        <style jsx>{`  
            `}</style>
    </>


}
  

