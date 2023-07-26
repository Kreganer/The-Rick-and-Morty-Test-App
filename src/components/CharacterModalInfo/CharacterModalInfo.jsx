import { useEffect, useState } from 'react';
import CharactersService from 'src/services/CharactersService';
import { useFetching } from 'src/hooks/useFetching';
import {
  CharacterImage,
  CharacterInfo,
  CharacterModalInfoWrapper,
  CharacterName,
  InfoText,
  StatusMark,
  StatusWrapper,
  TitleInfo
} from './style';

const CharacterModalInfo = ({ character }) => {
  const [episodes, setEpisodes] = useState(null);
  const [isLoading, fetchError, fetchCharactersInfo] = useFetching(async () => {
    const episodes = await CharactersService.fetchSeenEpisodes(character?.episode);
    setEpisodes(episodes);
  });

  useEffect(() => {
    fetchCharactersInfo();
    correctDate();
  }, [character]);

  const correctDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(date);

    return d.toLocaleDateString('us-US', options);
  };

  return (
    <CharacterModalInfoWrapper>
      <CharacterImage src={character?.image} alt={character?.name} />

      <CharacterInfo>
        <CharacterName>{character?.name}</CharacterName>

        <StatusWrapper>
          <StatusMark color={character?.status} />

          <InfoText>
            {character?.status} - {character?.species}&nbsp;({character?.gender})
          </InfoText>
        </StatusWrapper>

        <TitleInfo>Character created:</TitleInfo>

        <InfoText>{correctDate(character?.created)}</InfoText>

        <TitleInfo>Last known location:</TitleInfo>

        <InfoText>{character?.location.name}</InfoText>

        <TitleInfo>Origin location:</TitleInfo>

        <InfoText>{character?.origin.name}</InfoText>

        <TitleInfo>Seen in:</TitleInfo>

        {episodes?.map((episode) => (
          <InfoText key={episode?.id}>{episode?.name}</InfoText>
        ))}
      </CharacterInfo>
    </CharacterModalInfoWrapper>
  );
};

export default CharacterModalInfo;
