import './App.css';
import styled from 'styled-components';
import Logo from '../src/assets/logo.svg';
import TabletHero from './assets/tablet/image-hero.png';
import WomanVideoCall from './assets/desktop/image-woman-in-videocall.jpg';
import WomanVideoChat from './assets/desktop/image-women-videochatting.jpg';
import MenMeeting from './assets/desktop/image-men-in-meeting.jpg';
import ManTexting from './assets/desktop/image-man-texting.jpg';
import ImageFooter from './assets/mobile/image-footer.jpg';

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

// HEADER

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  width: 30%;
  display: flex;
  margin: 48px auto;
  @media (min-width: 768px) {
    width: 15%;
  }
`;

const HeroImage = styled.img`
  width: calc(100vw + 40px);
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 72px;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 24px;
  width: 75%;
  color: #28283d;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    width: 40%;
  }
`;

const HeroSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #87879d;
  width: 90%;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 32px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 80px;
  }
`;

const Button = styled.button`
  background-color: #4d96a9;
  color: #fff;
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
    background-color: #71c0d4;
  }
`;

const Version = styled.span`
  color: #8fe3f9;
`;

const InfoButton = styled(Button)`
  background-color: #855fb1;
  color: #fff;
  width: 139px;
  margin-bottom: 64px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    margin-left: 16px;
  }

  &:hover {
    background-color: #b18bdd;
  }
`;

const VertLine = styled.div`
  border-left: 1px solid #d8d8d8;
  height: 84px;
`;

const Circle = styled.div`
  border-radius: 50%;
  border: 1px solid #d8d8d8;
  width: 56px;
  height: 56px;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    margin-bottom: 67px;
  }
`;

const CircleFooter = styled.div`
  border-radius: 50%;
  border: 1px solid #d8d8d8;
  background-color: #fff;
  width: 56px;
  height: 56px;
  position: relative;
  z-index: 2;
`;

const CircleIndex = styled.span`
  color: #87879d;
  font-weight: 900;
  font-size: 16px;
  line-height: 56px;
  display: flex;
  justify-content: center;
`;

// GRID

const PhotoGalleryGrid = styled.div`
  display: grid;
  width: 90%;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(151px, 1fr));
  margin-bottom: 64px;
  @media (min-width: 768px) {
    margin-bottom: 48px;
    gap: 11px;
    grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
  }
`;

const GalleryImage = styled.img`
  border-radius: 8px;
  width: 151px;
  @media (min-width: 768px) {
    width: 164px;
  }
`;

const GallerySubtitle = styled.h2`
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #4d96a9;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FeaturesTitle = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  width: 85%;
  color: #28283d;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 55%;
    font-size: 40px;
    line-height: 44px;
  }
`;

const FeaturesSubtitle = styled(HeroSubtitle)`
  margin-bottom: 64px;
  @media (min-width: 768px) {
    width: 75%;
    margin-bottom: 80px;
  }
`;
// FOOTER

const Footer = styled.footer`
  height: 428px;
  background: url(${ImageFooter});
  background-color: #4d96a9;
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
`;

const FooterTitle = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin-top: 92px;
  margin-bottom: 24px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    width: 50%;
    margin-bottom: 32px;
  }
`;

const FooterSubtitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #fff;
  margin-bottom: 32px;
  width: 80%;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

const FooterButton = styled(InfoButton)`
  width: 193px;
  margin-bottom: 72px;
`;

const FooterVersion = styled.span`
  color: #d9b8ff;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <LogoImage src={Logo} alt="Meet logo" />
        <HeroImage src={TabletHero} alt="Meet users" />
      </Header>
      <HeroTitle>Group Chat for Everyone</HeroTitle>
      <HeroSubtitle>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </HeroSubtitle>
      <ButtonContainer>
        <Button type="button">
          Download <Version>v1.3</Version>
        </Button>
        <InfoButton>What is it?</InfoButton>
      </ButtonContainer>
      <VertLine />
      <Circle>
        <CircleIndex>01</CircleIndex>
      </Circle>
      <PhotoGalleryGrid>
        <GalleryImage src={WomanVideoCall} alt="A woman videocalling" />
        <GalleryImage
          src={WomanVideoChat}
          alt="Three women videocalling on a phone"
        />
        <GalleryImage
          src={MenMeeting}
          alt="A man in a video call with another man"
        />
        <GalleryImage src={ManTexting} alt="A man on a phone" />
      </PhotoGalleryGrid>
      <GallerySubtitle>Built for Modern Use</GallerySubtitle>
      <FeaturesTitle>Smarter meetings, all in one place</FeaturesTitle>
      <FeaturesSubtitle>
        Send messages, share files, show your screen, and record your meetings -
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </FeaturesSubtitle>
      <VertLine />
      <CircleFooter>
        <CircleIndex>02</CircleIndex>
      </CircleFooter>
      <Footer>
        <FooterTitle>Experience more together</FooterTitle>
        <FooterSubtitle>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </FooterSubtitle>
        <FooterButton type="button">
          Download <FooterVersion>v1.3</FooterVersion>
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default App;
