import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await response.json();

  return {
    props: { character },
  };
};

const Home = ({ character }) => {
  return (
    <div>
      <Head>
        <title>{character.name}</title>
      </Head>
      <main className="container">
        {console.log(character)}
        <img src={character.image} />
        <h2 style={{ margin: 0, padding: 0, marginTop: 20 }}>
          {character.name}
        </h2>
        <small>
          {character.species} • {character.gender} • {character.status}
        </small>
        <br />
        <br />
        <Link href={"/"}>← Back Home</Link>
      </main>
    </div>
  );
};

export default Home;
