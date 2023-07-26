import { LoaderComponent, LoaderWrapper } from 'src/components/Loader/style';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderComponent style={{ borderColor: '#964B00' }} />
      <LoaderComponent style={{ visibility: 'hidden' }} />
      <LoaderComponent style={{ borderColor: '#63C5DA' }} />
    </LoaderWrapper>
  );
};

export default Loader;
