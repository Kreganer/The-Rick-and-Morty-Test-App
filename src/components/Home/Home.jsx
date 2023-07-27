import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeWrapper,
  HomeTitle,
  InformationBox,
  HomeButton,
  CharacterCard
} from 'src/components/Home/style';
import { useFetching } from 'src/hooks/useFetching';
import CharactersService from 'src/services/CharactersService';
import Loader from 'src/components/Loader/Loader';

const Home = () => {
  const navigate = useNavigate();
  const [charactersData, setCharactersData] = useState(null);
  const [isLoading, fetchErrors, fetchCharacters] = useFetching(async () => {
    const characters = await CharactersService.fetchRandomCharacter();
    setCharactersData(characters);
  });

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <HomeWrapper>
      <HomeTitle>Title</HomeTitle>

      <InformationBox>
        <span>App Info Title</span>

        <span>Info</span>

        <CharacterCard>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <img width={200} src={charactersData?.image} alt={charactersData?.name} />
              <span>{charactersData?.name}</span>
            </>
          )}
        </CharacterCard>

        <HomeButton
          onClick={() => {
            navigate('/characters');
          }}>
          Go to Characters Info
        </HomeButton>
      </InformationBox>
    </HomeWrapper>
  );
};

export default Home;
