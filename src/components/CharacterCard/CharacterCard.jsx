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

const CharacterCard = ({ character, setIsVisiable, setCurrent, clickable }) => {
  const [firstEpisode, setFirstEpisode] = useState('');
  const [isLoading, fetchError, fetchCharactersInfo] = useFetching(async () => {
    const episode = await CharactersService.fetchFirstSeenEpisode(character.episode[0]);
    setFirstEpisode(episode);
  });

  useEffect(() => {
    fetchCharactersInfo();
  }, []);

  const handleOpenModal = () => {
    if (setIsVisiable === undefined && setCurrent === undefined) return;

    if (character !== null) {
      setCurrent(character);
    }

    setIsVisiable(true);
  };

  return (
    <CharacterCardWrapper clickable={clickable ? 1 : 0} onClick={() => handleOpenModal()}>
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

        <InfoText>{firstEpisode?.name}</InfoText>
      </InfoWrapper>
    </CharacterCardWrapper>
  );
};

export default CharacterCard;
