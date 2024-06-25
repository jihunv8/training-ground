import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <section>
        <h2>SASS</h2>
        <ul>
          <li>
            <Link href="sass/splatoon3">splatoon3</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Styled Components</h2>
        <ul>
          <li>
            <Link href="styled-components/music-edu">music education</Link>
          </li>
          <li>
            <Link href="styled-components/construction">construction</Link>
          </li>
          <li>
            <Link href="styled-components/korean-air">대한항공</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
