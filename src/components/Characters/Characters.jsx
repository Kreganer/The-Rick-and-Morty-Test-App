import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetching } from 'src/hooks/useFetching';
import CharactersService from 'src/services/CharactersService';
import { getPagesCount } from 'src/utils/pages';
import Loader from 'src/components/Loader/Loader';
import {
  CharacterCard,
  CharactersListButton,
  CharactersListWrapper,
  ListWrapper
} from 'src/components/Characters/style';
import Pagination from '../Pagination/Pagination';

const Characters = () => {
  const navigate = useNavigate();
  const [charactersData, setCharactersData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);

  const [isLoading, fetchErrors, fetchCharacters] = useFetching(async () => {
    const characters = await CharactersService.fetchCharacters(page);
    setCharactersData(characters);
    const totalCharacters = characters.info.count;
    setPagesCount(getPagesCount(totalCharacters, 20));
  });

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  const chagnePage = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <CharactersListWrapper>
      <CharactersListButton
        onClick={() => {
          navigate('/home');
        }}>
        Back
      </CharactersListButton>

      <ListWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {charactersData?.results.map((character) => (
              <CharacterCard key={character.id}>
                <img width={200} src={character.image} alt={character.name} />
                <span>{character.name}</span>
              </CharacterCard>
            ))}
          </>
        )}
      </ListWrapper>

      <Pagination
        charactersData={charactersData}
        changePage={chagnePage}
        page={page}
        pagesCount={pagesCount}
      />
    </CharactersListWrapper>
  );
};

export default Characters;
