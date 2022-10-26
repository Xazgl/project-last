import { useEffect, useState } from "react"


type keyWordsUtm = {
    id: number,
    name: string,
}

const keyWordsList:  keyWordsUtm [] = [
    {
        id: 1,
        name: 'масл',
    },
    {
        id: 2,
        name: 'диагностик',
    },
    {
        id: 3,
        name: 'ремонт',
    },
    {
        id: 4,
        name: 'кузов',
    },
    {
        id: 5,
        name: 'шиномонтаж',
    },
]


export function utmForMe() {
    const [utm, setUtm] = useState('')
    useEffect(() => {
        let utmKeywordsStr = new URLSearchParams(location.search).get('utm_term')   
        let findKey = keyWordsList.map(keyWord => {
            let myReg = new RegExp(`/+${keyWord.name}+/`)
            let t = utmKeywordsStr.match(myReg)

          })
       return  console.log(findKey)
       
    }, [])

}
