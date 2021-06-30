import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCopy, FiSearch } from 'react-icons/fi';
import {
  AiFillBank,
  AiFillTrophy,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai';
import { GiClover } from 'react-icons/gi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import Header from '../../components/molecules/Header';
import NavigationMenu from '../../components/molecules/NavigationMenu';

import { Container, UserInfo, Options } from './styles';

const MenuMore: React.FC = () => {
  const [userId, setUserId] = useState('aosidsfjaosida-123asdfas');
  const history = useHistory();

  function handleNavigate(path: string) {
    history.push(path);
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(userId);
  }

  return (
    <Container>
      <Header />
      <UserInfo>
        <img
          src="https://avatars.githubusercontent.com/u/55895943?v=4"
          alt="User Avatar"
        />
        <div className="user-id">
          <span>{userId}</span>
          <button type="button" onClick={handleCopyToClipboard}>
            <FiCopy size={16} />
          </button>
        </div>
      </UserInfo>
      <Options>
        <button type="button" onClick={() => handleNavigate('profile')}>
          <AiOutlineUser size={24} />
          <span>Dados pessoais</span>
        </button>
        <button type="button" onClick={() => handleNavigate('home')}>
          <AiOutlineHome size={24} />
          <span>Inicio</span>
        </button>
        <button type="button" onClick={() => handleNavigate('championship')}>
          <FiSearch size={24} />
          <span>Buscar</span>
        </button>
        <button type="button" onClick={() => handleNavigate('championship')}>
          <AiFillTrophy size={24} />
          <span>Campeonatos</span>
        </button>
        <button type="button" onClick={() => handleNavigate('bets')}>
          <GiClover size={24} />
          <span>Apostas</span>
        </button>
        <button type="button" onClick={() => handleNavigate('contacts')}>
          <RiMoneyDollarCircleFill size={24} />
          <span>Transferências</span>
        </button>
        <button type="button" onClick={() => handleNavigate('extract')}>
          <AiFillBank size={24} />
          <span>Saques</span>
        </button>
      </Options>
      <NavigationMenu />
    </Container>
  );
};

export default MenuMore;
