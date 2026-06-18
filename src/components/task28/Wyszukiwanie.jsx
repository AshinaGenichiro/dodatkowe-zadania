import { useState,useEffect } from 'react'
/*
*******************************************************
nazwa funkcji : Wyszukiwanie
opis funkcji: funkcja czeka az uzytkownik wpisze tekst po czym fetchuje do api i pokazuje wynik
parametry: brak
zwracany typ i opis: szwraca uzytkownikowi inputa oraz liste wyników pobrania z api 
autor: kacper
*******************************************************
*/
function Wyszukiwanie()
{
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
    if (!query) {
      setPosts([]);
      setStatus('');
      return;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      setStatus('Pobieranie…');


      fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`, {
        signal: controller.signal
      })
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setStatus('');
        })
        .catch(err => {
        
          if (err.name === 'AbortError') {
            console.log("Request anulowany"); 
            setStatus('Anulowano');
          } else {
            console.error("Inny błąd:", err);
            setStatus('Błąd pobierania');
          }
        });
    }, 500);
    return () => {
      clearTimeout(timeoutId); 
      controller.abort();     
    };
  }, [query]);
return(<>
<input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
      {status && <p>Status: {status}</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
</>)
}

export default Wyszukiwanie