/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { AiOutlineQrcode } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Container, IconContainer } from './styles';

interface HeaderProps {
  search?: boolean | undefined;
  qrCode?: boolean | undefined;
}

const Header: React.FC<HeaderProps> = ({ search = false, qrCode = false }) => {
  const { goBack } = useHistory();

  return (
    <Container>
      <IconContainer onClick={() => goBack()}>
        <IconContext.Provider value={{ size: '20px' }}>
          <FiChevronLeft />
        </IconContext.Provider>
      </IconContainer>

      {search && (
        <IconContext.Provider value={{ size: '18px' }}>
          <FiSearch size={18} />
        </IconContext.Provider>
      )}
      {qrCode && (
        <IconContext.Provider value={{ size: '18px' }}>
          <AiOutlineQrcode size={18} />
        </IconContext.Provider>
      )}
    </Container>
  );
};

export default Header;
