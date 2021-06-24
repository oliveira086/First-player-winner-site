import React from 'react';
import { BiFilterAlt, BiSearch } from 'react-icons/bi';
import { useHistory, Link } from 'react-router-dom';

import { Header, Card, Icon, SearchBox, SearchContainer } from './styles';

const HeaderMainPage: React.FC = () => {
  const { push } = useHistory();
  return (
    <Header>
      <SearchContainer>
        <SearchBox>
          <div>
            <BiSearch size="16px" color="#696969" />
          </div>
          <input placeholder="Buscar campeonato" />
        </SearchBox>

        <Icon>
          <BiFilterAlt size="12px" color="#01582B" />
        </Icon>
      </SearchContainer>
      <Card>
        <div>
          <span>
            Disponível <br />{' '}
          </span>
          <span>$ 100,00 </span>
          <hr />
          <Link to="/extract">Ver extrato</Link>
        </div>
        <button type="button" onClick={() => push('/contacts')}>
          Transferir
        </button>
      </Card>
    </Header>
  );
};

export default HeaderMainPage;
