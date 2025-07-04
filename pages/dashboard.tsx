
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [faktury, setFaktury] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userID = localStorage.getItem('userID');
      const res = await axios.get(`/api/faktury?userID=${userID}`);
      setFaktury(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Twoje faktury</h2>
      <ul>
        {faktury.map((f: any, i: number) => (
          <li key={i}>{f.dostawca} – {f.kwota} zł</li>
        ))}
      </ul>
    </div>
  );
}
