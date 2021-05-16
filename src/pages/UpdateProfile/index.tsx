import React, { useEffect, useState } from 'react';
import { formatISO, parseISO } from 'date-fns';
import { FiChevronLeft } from 'react-icons/fi';
import NavigationMenu from '../../components/molecules/NavigationMenu';
import Carousel from '../../components/molecules/Carousel';

import {
  Container,
  Content,
  ContentHeader,
  InputContainer,
  CarouselItem,
} from './styles';

import profileImg from '../../assets/imgs/profile.jpg';

const UpdateProfile: React.FC = () => {
  const [birthDate, setBirthDate] = useState('');

  useEffect(() => {
    // if (birthDate.length === 10) {
    //   const formattedDate = formatISO(parseISO(birthDate), {
    //     format: 'extended',
    //     representation: 'complete',
    //   });
    //   console.log(formattedDate);
    // }
  }, [birthDate]);

  return (
    <Container>
      <Content>
        <ContentHeader backgroundImage={profileImg}>
          <button type="button">
            {' '}
            <FiChevronLeft size={25} />
          </button>

          <div>
            <h2>Filipe Brombilla</h2>
            <span>Salvar alterações</span>
          </div>
        </ContentHeader>
        <main>
          <strong>Dados Pessoais</strong>

          <form>
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">Data de nascimento</label>
              <input
                id="name"
                type="date"
                data-date-format="DD MMMM YYYY"
                onChange={e => setBirthDate(e.target.value)}
                value={birthDate}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">Email</label>
              <input id="name" type="email" />
            </InputContainer>
          </form>

          <Carousel arrows={false} slidesToShow={1} dots={false}>
            <CarouselItem>Alterar chave pix</CarouselItem>
            <CarouselItem>Alterar senha de confirmação</CarouselItem>
            <CarouselItem>Alterar senha de acesso</CarouselItem>
            <CarouselItem>Alguma outra coisa aqui</CarouselItem>
          </Carousel>
        </main>
      </Content>
      <NavigationMenu />
    </Container>
  );
};

export default UpdateProfile;
