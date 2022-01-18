import './App.css';
import styled from 'styled-components';
import Logo from '../src/assets/logo.svg';
import TabletHero from './assets/tablet/image-hero.png';
import WomanVideoCall from './assets/desktop/image-woman-in-videocall.jpg';
import WomanVideoChat from './assets/desktop/image-women-videochatting.jpg';
import MenMeeting from './assets/desktop/image-men-in-meeting.jpg';
import ManTexting from './assets/desktop/image-man-texting.jpg';

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
  margin-bottom: 32px;
`

const DownloadButton = styled.button`
  background-color: #4D96A9;
  color: #FFF;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  border-radius: 29px;
  border: none;
  width: 193px;
  height: 58px;
  margin-bottom: 16px;
`

const Version = styled.span`
  color: #8FE3F9;
`

const Info = styled.button`
  background-color: #855FB1;
  color: #FFF;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  border-radius: 29px;
  border: none;
  width: 139px;
  height: 58px;
  margin-bottom: 64px;
`

const VertLine = styled.div`
  border-left: 1px solid #D8D8D8;
  height: 84px;
`

const Circle = styled.div`
  border-radius: 50%;
  border: 1px solid #D8D8D8;
  width: 56px;
  height: 56px;
  margin-bottom: 64px;
`

const CircleIndex = styled.span`
  color: #87879D;
  font-weight: 900;
  font-size: 16px;
  line-height: 56px;
  display: flex;
  justify-content: center;
`

const PhotoGallery = styled.div`
  display: grid;
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
    <DownloadButton type="button">Download <Version>v1.3</Version></DownloadButton>
    <Info>What is it?</Info>
    <VertLine/>
    <Circle><CircleIndex>01</CircleIndex></Circle>





    </Container>
  );
}

export default App;
