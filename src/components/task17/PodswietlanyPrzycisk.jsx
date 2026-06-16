/*
 nazwa funkcji: PodswietlanyPrzycisk
 opis funkcji: funkcja zlicza liczbę kliknięc ale w app.js ponieważ tam jest usestate ktory zapisuje ile było klikniec przed ukryciem
 parametry: onClick - funkcja dodające kliknięcia
 clicks- liczba klikniec 
 zwracany typ: przycisk dzieki któremu mozna dodawac klikniecia

 */
function PodswietlanyPrzycisk({onClick, clicks})
{
return <>
<button onClick={onClick}> Przycisk został kliknięty: {clicks} </button>
</>
}
export default PodswietlanyPrzycisk