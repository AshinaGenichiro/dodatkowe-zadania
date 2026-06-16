import { useState,useEffect } from 'react'
/*
nazwa funkcji : Hide
opis funkcji: odlicza ile sekund mineło od kliknięcia przycisku który jest odpowiedzialny za "uruchomienie" tego komponentu
parametry: brak
zwracany typ i opis: czas ile mineło od klikniecia w przycisk odkrycia 
*/
function Hide()
{
    const [seconds, setSeconds] = useState(0);   
    
    useEffect(() => {
    
        const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [])
    return (<>
    <p>Czas {seconds} sekund </p>
    </>)
}
export default Hide