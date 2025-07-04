
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1>Panel pracownika</h1>
      <ul>
        <li><Link href="/login">Zaloguj się</Link></li>
        <li><Link href="/dodaj-fakture">Dodaj fakturę</Link></li>
        <li><Link href="/dodaj-wydatek">Dodaj wydatek</Link></li>
      </ul>
    </div>
  );
}
