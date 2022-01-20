import './App.css';
import styled from 'styled-components';
import Logo from '../src/assets/logo.svg';
import TabletHero from './assets/tablet/image-hero.png';
import WomanVideoCall from './assets/desktop/image-woman-in-videocall.jpg';
import WomanVideoChat from './assets/desktop/image-women-videochatting.jpg';
import MenMeeting from './assets/desktop/image-men-in-meeting.jpg';
import ManTexting from './assets/desktop/image-man-texting.jpg';
import ImageFooter from './assets/mobile/image-footer.jpg'

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

// HEADER

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
 margin-bottom: 48px;
`

const HeroSlogan = styled.h1`
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 24px;
  width: 75%;
  color: #28283D;
`

const HeroSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #87879D;
  width: 80%;
  margin-bottom: 64px;
`

const Button = styled.button`
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
  cursor: pointer;

  &:hover {
    background-color: #71C0D4;
  }
`

const Version = styled.span`
  color: #8FE3F9;
`

const InfoButton = styled(Button)`
  background-color: #855FB1;
  color: #FFF;
  width: 139px;
  margin-bottom: 64px;
  cursor: pointer;
  
  &:hover {
    background-color: #B18BDD;
  }
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

const CircleFooter = styled.div`
  border-radius: 50%;
  border: 1px solid #D8D8D8;
  background-color: #fff;
  width: 56px;
  height: 56px;
  position: relative;
  z-index: 2;
`

const CircleIndex = styled.span`
  color: #87879D;
  font-weight: 900;
  font-size: 16px;
  line-height: 56px;
  display: flex;
  justify-content: center;
`

// GRID

const PhotoGalleryGrid = styled.div`
  display: grid;
  width: 90%;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(151px, 1fr));
  margin-bottom: 64px;
`

const GalleryImage = styled.img`
  border-radius: 8px;
  width: 151px;
`

const GallerySubtitle = styled.h2`
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #4D96A9;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
  margin-bottom: 24px;
`

const FeaturesTitle = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  width: 85%;
  color: #28283D;
  margin-bottom: 32px;
`

// FOOTER

const Footer = styled.footer`
  height: 428px;
  background: url(${ImageFooter});
  background-color: #4D96A9;
  background-blend-mode: multiply;
  background-size: cover;
  margin-top: -28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`

const FooterTitle = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin-top: 92px;
  margin-bottom: 24px;
  color: #fff;
`

const FooterSubtitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #fff;
  margin-bottom: 32px;
  width: 80%;
`

const FooterButton = styled(InfoButton)`
  width: 193px;
  margin-bottom: 72px;
`

const FooterVersion = styled.span`
  color: #D9B8FF;
`

const App = () => {
  return (
    <Container>
      <Header>
           <LogoImage src={Logo} alt="Meet logo"/>
           <HeroImage src={TabletHero} alt="Meet users"/>
      </Header>
      <HeroSlogan>
        Group Chat for Everyone
      </HeroSlogan>
      <HeroSubtitle>
        Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
      </HeroSubtitle>
      <Button type="button">Download <Version>v1.3</Version></Button>
      <InfoButton>What is it?</InfoButton>
      <VertLine/>
      <Circle><CircleIndex>01</CircleIndex></Circle>
      <PhotoGalleryGrid>
        <GalleryImage src={WomanVideoCall} alt="A woman videocalling"/>
        <GalleryImage src={WomanVideoChat} alt="Three women videocalling on a phone"/>
        <GalleryImage src={MenMeeting} alt="A man in a video call with another man"/>
        <GalleryImage src={ManTexting} alt="A man on a phone"/>
      </PhotoGalleryGrid>
      <GallerySubtitle>
        Built for Modern Use
      </GallerySubtitle>
      <FeaturesTitle>Smarter meetings, all in one place</FeaturesTitle>
      <HeroSubtitle>
        Send messages, share files, show your screen, and record your meetings - all in one workspace. Control who can join
        with invite-only team access, data encryption, and data export.
      </HeroSubtitle>
       <VertLine/>
      <CircleFooter><CircleIndex>02</CircleIndex></CircleFooter>
      <Footer>
        <FooterTitle>Experience more together</FooterTitle>
        <FooterSubtitle>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</FooterSubtitle>
        <FooterButton type="button">Download <FooterVersion>v1.3</FooterVersion></FooterButton>
      </Footer>
    </Container>
  );
}

export default App;
