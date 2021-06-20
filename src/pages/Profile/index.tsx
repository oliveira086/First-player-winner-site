/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import NavigationMenu from '../../components/molecules/NavigationMenu';
import {
  Container,
  Content,
  ContentHeader,
  Achievements,
  CarouselsContainer,
} from './styles';

import profileImg from '../../assets/imgs/profile.jpg';
import GamesCarousel from '../../components/molecules/GamesCarousel';
import ChampionshipCarousel from '../../components/molecules/ChampionshipCarousel';

const Profile: React.FC = () => {
  const { goBack, push } = useHistory();

  return (
    <Container>
      <Content>
        <ContentHeader backgroundImage={profileImg}>
          <button type="button" onClick={() => goBack()}>
            {' '}
            <FiChevronLeft size={25} />
          </button>

          <div>
            <h2>Filipe Brombilla</h2>
            <button type="button" onClick={() => push('/profile/update')}>
              Editar perfil
            </button>
          </div>
        </ContentHeader>
        <main>
          <Achievements>
            <div>
              <span>100</span>
              <p>Campeonatos</p>
            </div>
            <div>
              <span>20</span>
              <p>Vitórias</p>
            </div>
            <div>
              <span>5</span>
              <p>Games</p>
            </div>
          </Achievements>
          <CarouselsContainer>
            <GamesCarousel />

            <ChampionshipCarousel />
          </CarouselsContainer>
        </main>
      </Content>
      <NavigationMenu />
    </Container>
  );
};

export default Profile;
