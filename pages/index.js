import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const json = await response.json();
  const characters = json.results;
  return {
    props: { characters },
  };
};

const Home = ({ characters }) => {
  React.useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <main className="container">
        <div>
          <h1 style={{ margin: 0, padding: 0 }}>List of Characters:</h1>
          <small style={{ marginBottom: 20 }}>
            Click on every item to show details.
          </small>
          <ul style={{ minWidth: 500 }}>
            {characters.map((character) => {
              return (
                <li key={character.id}>
                  <Link href={`/character/${character.id}`}>
                    {character.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <small style={{ opacity: 0.5 }}>
            Designed by Bahman World (bahman.world@gmail.com)
          </small>
        </div>
      </main>
    </div>
  );
};

export default Home;
