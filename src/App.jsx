import './App.css';
import styled from 'styled-components';
import Logo from '../src/assets/logo.svg';
import TabletHero from './assets/tablet/image-hero.png';
import WomanVideoCall from './assets/desktop/image-woman-in-videocall.jpg';
import WomanVideoChat from './assets/desktop/image-women-videochatting.jpg';
import MenMeeting from './assets/desktop/image-men-in-meeting.jpg';
import ManTexting from './assets/desktop/image-man-texting.jpg';
import ImageFooter from './assets/mobile/image-footer.jpg';
import ImageFooterTablet from './assets/tablet/image-footer.jpg';
import ImageFooterDesktop from './assets/desktop/image-footer.jpg';
import HeroLeft from './assets/desktop/image-hero-left.png';
import HeroRight from './assets/desktop/image-hero-right.png';

const Container = styled.div`
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`;

// HEADER

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    margin-bottom: 8.5rem;
  }
`;

const LogoImage = styled.img`
  width: 30%;
  display: flex;
  margin: 48px auto;
  @media (min-width: 768px) {
    width: 15%;
  }
  @media (min-width: 1440px) {
    margin-top: 3rem;
    margin-bottom: 61px;
    width: 8rem;
  }
`;

const HeroImage = styled.img`
  width: calc(100vw + 40px);
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 72px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

const HeroImageLeft = styled.img`
  width: calc(37vw + 40px);
  @media (max-width: 1439px) {
    display: none;
  }
  @media (min-width: 1440px) {
    width: 40rem;
  }
`;

const HeroImageRight = styled.img`
  width: calc(37vw + 40px);
  margin-bottom: -50px;
  @media (max-width: 1439px) {
    display: none;
  }
  @media (min-width: 1440px) {
    width: 40rem;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -50px;
  @media (min-width: 1440px) {
    margin: 0 8.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 24px;
  width: 70%;
  color: #28283d;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    width: 40%;
  }
  @media (min-width: 1440px) {
    width: 55%;
    font-size: 64px;
    line-height: 64px;
  }
`;

const HeroSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #87879d;
  width: 80%;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    width: 60%;
    font-size: 18px;
    line-height: 32px;
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
  @media (min-width: 1440px) {
    margin-bottom: 0px;
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
  @media (min-width: 1440px) {
    margin-bottom: 0px;
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
  @media (min-width: 1440px) {
    margin-bottom: 0px;
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
  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    margin-bottom: 80px;
  }
`;

const GalleryImage = styled.img`
  border-radius: 8px;
  width: 151px;
  @media (min-width: 768px) {
    width: 164px;
  }
  @media (min-width: 1440px) {
    width: 255px;
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
  @media (min-width: 1440px) {
    width: 30%;
  }
`;

const FeaturesSubtitle = styled(HeroSubtitle)`
  margin-bottom: 64px;
  @media (min-width: 768px) {
    width: 75%;
    margin-bottom: 80px;
  }
  @media (min-width: 1440px) {
    width: 36%;
    margin-bottom: 72px;
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
  @media (min-width: 768px) {
    background: url(${ImageFooterTablet});
    background-color: #4d96a9;
    background-blend-mode: multiply;
    background-size: cover;
  }
  @media (min-width: 1440px) {
    background: url(${ImageFooterDesktop});
    background-color: #4d96a9;
    background-blend-mode: multiply;
    background-size: cover;
    height: 308px;
    flex-direction: row;
    justify-content: space-evenly;
  }
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
  @media (min-width: 1440px) {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 20%;
    text-align: left;
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
  @media (min-width: 1440px) {
    margin-bottom: 0px;
    width: 15%;
    text-align: left;
  }
`;

const FooterButton = styled(InfoButton)`
  width: 193px;
  margin-bottom: 72px;
  @media (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

const FooterVersion = styled.span`
  color: #d9b8ff;
`;

const App = () => {
  return (
    <Container>
      <LogoImage src={Logo} alt="Meet logo" />

      <Header>
        <HeroImage src={TabletHero} alt="Meet users" />

        <HeroImageLeft src={HeroLeft} />
        <HeroContainer>
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
        </HeroContainer>
        <HeroImageRight src={HeroRight} />
      </Header>
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
