
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/login', { pin });
      localStorage.setItem('userID', res.data.userID);
      router.push('/dashboard');
    } catch (err) {
      alert('Błędny PIN');
    }
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <input value={pin} onChange={e => setPin(e.target.value)} placeholder="PIN" />
      <button onClick={handleLogin}>Zaloguj</button>
    </div>
  );
}
