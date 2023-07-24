import { useNavigate } from 'react-router-dom';
import {
  CharacterCard,
  CharactersListButton,
  CharactersListWrapper,
  ListWrapper
} from 'src/components/Characters/style';

const Characters = () => {
  const navigate = useNavigate();

  return (
    <CharactersListWrapper>
      <CharactersListButton
        onClick={() => {
          navigate('/home');
        }}>
        Back
      </CharactersListButton>

      <ListWrapper>
        <CharacterCard />
      </ListWrapper>
    </CharactersListWrapper>
  );
};

export default Characters;
