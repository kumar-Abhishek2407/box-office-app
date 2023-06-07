// import { Link } from 'react-router-dom';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="{name}" />
      </div>
      <h4>
        {name} {!!gender && `(${gender})`}
      </h4>

      <p>{country ? `Comes from ${country}` : 'No country Known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};
export default ActorCard;
