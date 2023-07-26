import { useEffect, useState } from 'react';
import { useFetching } from 'src/hooks/useFetching';
import CharactersService from 'src/services/CharactersService';
import {
  CharacterCardWrapper,
  CharacterName,
  ImageWrapper,
  InfoText,
  InfoWrapper,
  StatusMark,
  StatusWrapper,
  TitleInfo
} from 'src/components/CharacterCard/style';

const CharacterCard = ({ character }) => {
  const [location, setLocation] = useState('');
  const [isLoading, fetchError, fetchCharactersInfo] = useFetching(async () => {
    const firstLocation = await CharactersService.fetchFirstSeenEpisode(character.episode[0]);
    setLocation(firstLocation);
  });

  useEffect(() => {
    fetchCharactersInfo();
    console.log(window.screen.width);
  }, [window]);

  return (
    <CharacterCardWrapper>
      <ImageWrapper src={character?.image} alt={character?.name} />

      <InfoWrapper>
        <CharacterName>{character?.name}</CharacterName>

        <StatusWrapper>
          <StatusMark color={character?.status} />

          <InfoText>
            {character?.status} - {character?.species}&nbsp;({character?.gender})
          </InfoText>
        </StatusWrapper>

        {window.screen.width > 768 && (
          <>
            <TitleInfo>Last known location:</TitleInfo>

            <InfoText>{character?.location.name}</InfoText>
          </>
        )}

        <TitleInfo>First seen in:</TitleInfo>

        <InfoText>{location?.name}</InfoText>
      </InfoWrapper>
    </CharacterCardWrapper>
  );
};

export default CharacterCard;
