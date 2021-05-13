import React from 'react';
import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import BalanceHeader from '../../components/molecules/BalanceHeader';
import Header from '../../components/molecules/Header';
import NavigationMenu from '../../components/molecules/NavigationMenu';
import {
  ContactCard,
  ContactsContainer,
  Container,
  SearchBox,
  SearchBoxContainer,
} from './styles';

const ListContacts: React.FC = () => {
  return (
    <Container>
      <Header qrCode />
      <BalanceHeader salt="150,00" />
      <SearchBoxContainer>
        <IconContext.Provider value={{ size: '18px', color: '#696969' }}>
          <FiSearch size={18} />
        </IconContext.Provider>
        <SearchBox placeholder="Buscar contato" />
      </SearchBoxContainer>
      <ContactsContainer>
        <ContactCard>
          <span className="name"> Jose soares costa silva</span>
          <span className="email"> josesoares@hotmail.com</span>
        </ContactCard>
        <ContactCard>
          <span className="name"> Vitor Rafael Rocha Campelo</span>
          <span className="email"> vitinho123@gmail.com</span>
        </ContactCard>
        <ContactCard>
          <span className="name"> Jesus Santos di Maria</span>
          <span className="email"> jj_tudo_pode321@hotmail.com</span>
        </ContactCard>
      </ContactsContainer>
      <NavigationMenu />
    </Container>
  );
};

export default ListContacts;
