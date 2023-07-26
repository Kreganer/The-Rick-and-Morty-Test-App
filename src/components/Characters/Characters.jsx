import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFetching } from 'src/hooks/useFetching';
import CharactersService from 'src/services/CharactersService';
import { getPagesCount } from 'src/utils/pages';
import Loader from 'src/components/Loader/Loader';
import CharacterCard from 'src/components/CharacterCard/CharacterCard';
import Pagination from 'src/components/Pagination/Pagination';
import {
  CharactersListButton,
  CharactersListWrapper,
  ListWrapper
} from 'src/components/Characters/style';

const Characters = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [charactersData, setCharactersData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);

  const [isLoading, fetchError, fetchCharactersInfo] = useFetching(async () => {
    const characters = await CharactersService.fetchCharacters(Number(searchParams.get('page')));
    setCharactersData(characters);
    const totalCharacters = characters.info.count;
    setPagesCount(getPagesCount(totalCharacters, 20));
  });

  useEffect(() => {
    fetchCharactersInfo();
    checkSearchParams();
  }, [searchParams]);

  const checkSearchParams = () => {
    if (searchParams.get('page') === null) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    } else {
      return;
    }
  };

  const handleChangePage = (page) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
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
              <CharacterCard key={character.id} character={character} />
            ))}
          </>
        )}
      </ListWrapper>

      <Pagination
        charactersData={charactersData}
        changePage={handleChangePage}
        page={searchParams.get('page')}
        pagesCount={pagesCount}
        isLoading={isLoading}
      />
    </CharactersListWrapper>
  );
};

export default Characters;
