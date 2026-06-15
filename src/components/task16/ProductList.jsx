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