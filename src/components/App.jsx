// create your App component here
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleSetDog = async () => {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDog(data.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        handleSetDog();
    }, []);

  return (
    <div className='app'>
        {loading ? <p>Loading...</p> : <img src={dog} alt="A Random Dog" />}
        <button onClick={handleSetDog}>Fetch New Dog</button>
    </div>
  );
};

export default App;
