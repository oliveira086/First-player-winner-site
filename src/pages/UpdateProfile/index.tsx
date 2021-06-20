/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import NavigationMenu from '../../components/molecules/NavigationMenu';
import DateInput from '../../components/atoms/DateInput';
import Carousel from '../../components/molecules/Carousel';
import Button from '../../components/atoms/Button';
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
  const { goBack } = useHistory();

  return (
    <Container>
      <Content>
        <ContentHeader backgroundImage={profileImg}>
          <button type="button" onClick={() => goBack()}>
            {' '}
            <FiChevronLeft size={25} />
          </button>

          <div>
            <h2>Filipe Brombilla 3</h2>
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
              <DateInput
                mask="dd/mm/yyyy"
                placeholder="dd/mm/yyyy"
                onChange={value => setBirthDate(value)}
                value={birthDate}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">Email</label>
              <input id="name" type="email" />
            </InputContainer>
          </form>

          <Carousel arrows={false} slidesToShow={3} dots={false}>
            <CarouselItem>
              <div>Alterar chave pix</div>
            </CarouselItem>
            <CarouselItem>
              <div> Alterar senha de confirmação</div>
            </CarouselItem>
            <CarouselItem>
              <div>Alterar senha de acesso</div>
            </CarouselItem>
            <CarouselItem>
              <div>Alguma outra coisa aqui</div>
            </CarouselItem>
          </Carousel>
          <Button statusType="confirmation" maxWidth="100%">
            Salvar alterações
          </Button>
        </main>
      </Content>
      <NavigationMenu />
    </Container>
  );
};

export default UpdateProfile;
