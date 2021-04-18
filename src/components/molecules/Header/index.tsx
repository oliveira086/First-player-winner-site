/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import styled from 'styled-components';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';

export const Container = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

interface HeaderProps {
  search?: boolean | undefined;
  qrCode?: boolean | undefined;
}

const Header: React.FC<HeaderProps> = ({ search = false, qrCode = false }) => {
  return (
    <Container>
      <IconContext.Provider value={{ size: '20px' }}>
        <FiChevronLeft />
      </IconContext.Provider>
      {search && (
        <IconContext.Provider value={{ size: '18px' }}>
          <FiSearch size={18} />
        </IconContext.Provider>
      )}
      {qrCode && (
        <IconContext.Provider value={{ size: '18px' }}>
          <FiSearch size={18} />
        </IconContext.Provider>
      )}
    </Container>
  );
};

export default Header;
