import { useNavigate } from 'react-router-dom';
import { HomeWrapper, HomeTitle, InformationBox, HomeButton } from 'src/components/Home/style';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <HomeTitle>Title</HomeTitle>

      <InformationBox>
        <span>App Info Title</span>

        <span>Info</span>

        <span>Example</span>

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
