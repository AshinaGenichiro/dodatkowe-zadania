import { useState,useEffect } from 'react'
/*
*******************************************************
nazwa funkcji : TablicaDependencji
opis funkcji: funkcja wybiera 3 komentarze albo posty z api i wyświetla je uzytkownikowi 
parametry: brak
zwracany typ i opis: zwraca przyciski, w zaleznosci od tego który sie kliknie to ładuje posty/komentarze  i wyświetla
autor: kacper
*******************************************************
*/
function TablicaDependencji()
{
const [selectedType, setSelectedType] = useState('posts');
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [count, setCount] = useState(0);
const [searchQuery, setSearchQuery] = useState('');
const [debouncedQuery, setDebouncedQuery] = useState('');
useEffect(() => {
    setLoading(true);
    const endpoint = selectedType === 'posts' ? 'https://jsonplaceholder.typicode.com/posts?_limit=3' : 'https://jsonplaceholder.typicode.com/comments?_limit=3';

    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [selectedType]);

useEffect(() => {
    setCount(prevCount => prevCount + 1); 
  }, [selectedType]);
  
useEffect(() => {
    
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery); 
    }, 300);

return () => clearTimeout(timer);
  }, [searchQuery]);

const filteredData = data.filter(item => {
    const textToSearch = item.title || item.name || '';
    return textToSearch.toLowerCase().includes(debouncedQuery.toLowerCase());
  });
return(
 <>
 <button onClick={() => setSelectedType('posts')}>Posty</button>
 <button onClick={() => setSelectedType('comments')}>Komentarze</button>
 <p>wykonało sie {count} razy  </p>
 {loading && <p>Ładowanie…</p>}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
 </>)
}

export default TablicaDependencji