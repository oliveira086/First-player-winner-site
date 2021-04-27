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
    </Container>
  );
};

export default ListContacts;
