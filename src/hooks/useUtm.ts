import { useEffect, useState } from "react"
type UtmType = {
    utm_term?: string
    utm_price?: string
    utm_service?: string
}

export function useUtm(utmNameList: Array<'utm_term' | 'utm_price' | 'utm_service'>) {
    const [utmList, setUtmList] = useState<UtmType>({})
    // utm_mdl utm_price utm_service
    useEffect(() => {
        let utmObj = {}
        utmNameList.forEach(utmName => {
            utmObj[utmName] = new URLSearchParams(location.search).get(utmName)
        })
        setUtmList(utmObj)        
    }, [])
    console.log(utmList)
    return utmList
}
