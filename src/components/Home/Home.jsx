import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetching } from 'src/hooks/useFetching';
import CharactersService from 'src/services/CharactersService';
import Loader from 'src/components/Loader/Loader';
import CharacterCard from 'src/components/CharacterCard/CharacterCard';
import { HomeWrapper, HomeTitle, InformationBox, HomeButton } from 'src/components/Home/style';

const Home = () => {
  const navigate = useNavigate();
  const [charactersData, setCharactersData] = useState(null);
  const [isLoading, fetchError, fetchCharacters] = useFetching(async () => {
    const characters = await CharactersService.fetchRandomCharacter();
    setCharactersData(characters);
  });

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <HomeWrapper>
      <HomeTitle>Rick And Morty Characters</HomeTitle>

      <InformationBox>
        <HomeTitle>Get nfo About Characters</HomeTitle>

        <span>
          Information is displayed in the form of cards with minimal information, but you can click
          on it and see more.
        </span>

        {isLoading ? <Loader /> : <CharacterCard character={charactersData} />}

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
