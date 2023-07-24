import {
  ColorWrapper,
  ColorsWrapper,
  FooterWrapper,
  StyledLink
} from 'src/components/Footer/style';

const Footer = () => {
  return (
    <FooterWrapper>
      <ColorsWrapper>
        <span>Colors asset:&nbsp;</span>

        <ColorWrapper
          style={{
            background: '#202329'
          }}
        />

        <ColorWrapper
          style={{
            background: '#272b33'
          }}
        />

        <ColorWrapper
          style={{
            background: '#3c3e44'
          }}
        />
      </ColorsWrapper>

      <StyledLink href={'https://rickandmortyapi.com/'}>
        This App created with The Rick and Morty API
      </StyledLink>
    </FooterWrapper>
  );
};

export default Footer;
