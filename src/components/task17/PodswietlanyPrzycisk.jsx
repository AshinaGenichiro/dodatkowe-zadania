function PodswietlanyPrzycisk({onClick, clicks})
{
return <>
<button onClick={onClick}> Przycisk został kliknięty: {clicks} </button>

</>
}
export default PodswietlanyPrzycisk