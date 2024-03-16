// utility function
import { nameFormatter } from "./nameFormatter";

export default function PokemonCard({
  img,
  id,
  name,
  base,
  type,
  nameLanguage,
}) {
  return (
    <div className="pokemon-card">
      <img src={img} alt="" />

      <p>{`[${id}] ${nameFormatter(name, nameLanguage)}`}</p>

      <ul className="type-container">
        {type.map((t, index) => {
          return <li key={index}>{t}</li>;
        })}
      </ul>

      <div className="pokemon-info">
        <div className="first-section">
          <div className="info">
            <p>hp: </p>
            <p>{base.HP}</p>
          </div>
          <div className="info">
            <p>def: </p>
            <p>{base.Defense}</p>
          </div>
          <div className="info">
            <p>attk: </p>
            <p>{base.Attack}</p>
          </div>
        </div>
        <div className="second-section">
          <div className="info">
            <p>speed: </p>
            <p>{base.Speed}</p>
          </div>
          <div className="info">
            <p>sp. attk: </p>
            <p>{base["Sp. Attack"]}</p>
          </div>
          <div className="info">
            <p>sp. def: </p>
            <p>{base["Sp. Defense"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
