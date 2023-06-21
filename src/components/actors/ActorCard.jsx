// import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt="{name}" />
      </SearchImgWrapper>
      <h4>
        {name} {!!gender && `(${gender})`}
      </h4>

      <p>{country ? `Comes from ${country}` : 'No country Known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};
export default ActorCard;
