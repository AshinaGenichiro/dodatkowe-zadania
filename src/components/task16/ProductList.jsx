/*
*******************************************************
Nazwa Funkcji: ProductList
Opis Funkcji: Funkcja bierze liste produktów z usestate i wypisuje jezeli produkty sie zgadzaja
parametry: product - produkty w useState
zwracany typ i opis: funckja wypisuje produkty jezeli istnieja
autor:kacper
*******************************************************
*/

function ProductList({ products }) {

return (
    <>
    <h3>Wyniki wyszukiwania:</h3>
        {products.length === 0 ? (<p>Brak produktów pasujących do filtra.</p>) :
      (
    <ul>
        {products.map((product, index) => (
        <li key={index}>{product}</li>))}
    </ul>
      )}
    </>

);
}
export default ProductList