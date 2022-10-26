import { useEffect, useState } from "react";


    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
export function Timer() {
    return (
        <>
         <div className="background">
            <div className="cards">
              <div className="card" id="c1" >
                <h3>1</h3>
              </div>
              <div className="card"  id="c2">
              <h3>2</h3>
              </div>
              <div className="card" id="c3" >
              <h3>3</h3>
              </div>
              <div className="card"  id="c4">
              <h3>4</h3></div>   
            </div>
        </div>
            
<style jsx>{`

`}</style>

</>)}   