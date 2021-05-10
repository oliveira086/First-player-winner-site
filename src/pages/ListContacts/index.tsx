import React from 'react';
import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import BalanceHeader from '../../components/molecules/BalanceHeader';
import Header from '../../components/molecules/Header';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: rgba(247, 247, 247, 1);
`;

const SearchBoxContainer = styled.div`
  display: flex;
  width: calc(100vw - 60px);
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-top: 30px;
  border: 1px solid black;
  padding-left: 10px;
  border-radius: 5px;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 100%;
  background-color: rgba(247, 247, 247, 1);
  border: none;
  padding-left: 30px;
  border-radius: 5px;
`;

const ContactsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  align-items: center;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ContactCard = styled.div`
  display: flex;
  height: 50px;
  width: calc(100% - 60px);
  padding-left: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 16px;
  .name {
    text-align: left;
    font-size: 14px;
    line-height: 21px;
  }
  .email {
    font-size: 12px;
    line-height: 18px;
  }
  :active {
    background-color: #e6e6e6;
    box-shadow: none;
    user-select: none;
  }
`;

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
    </Container>
  );
};

export default ListContacts;
