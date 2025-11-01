import characterData from "../data/characterData.json";
import Character from "./Character";
// This component should show all Characters defined in src/data/characterData.json

// Should render it as list of character component

function CharacterGallery() {
  return (
    <div>
      {characterData.map((character) => (
        <Character
          key={character.id}
          {...character}
          // _id={character._id}
          // height={character.height}
          // race={character.race}
          // gender={character.gender}
          // birth={character.birth}
          // spouse={character.spouse}
          // death={character.death}
          // realm={character.realm}
          // hair={character.hair}
          // name={character.name}
          // wikiUrl={character.wikiUrl}
          // imgUrl={character.imgUrl}

          // name={character.name}
          // img={character.imgUrl}
          // birth={character.birth}
          // death={character.death}
          // race={character.race}
          // realm={character.race}
          // spouse={character.spouse}
        />
      ))}
    </div>
  );
}

export default CharacterGallery;
