import './App.css';
import styled from 'styled-components';
import Logo from '../src/assets/logo.svg'
import TabletHero from '../src/assets/tablet/image-hero.png'

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.header`
  display: flex; 
  flex-direction: column;

`

const LogoImage = styled.img`
  width: 30%;
  display: flex;
  margin: 48px auto;
`

const HeroImage = styled.img`
 width: calc(100vw + 40px);
 overflow: hidden;
 margin-bottom: 48px;
`

const HeroSlogan = styled.h1`
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 24px;
`

const HeroSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #87879D;
  width: 90%;
`

const App = () => {
  return (
    <Container>
      <Header>
           <LogoImage src={Logo} alt="Meet logo"/>
           <HeroImage src={TabletHero} alt="Meet users"/>
      </Header>
    <HeroSlogan>
      Group Chat <br/>for Everyone
    </HeroSlogan>
    <HeroSubtitle>
      Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
    </HeroSubtitle>
    </Container>
  );
}

export default App;
