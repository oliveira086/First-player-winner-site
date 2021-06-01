import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineAlignLeft,
  AiOutlinePlus,
  AiFillTrophy,
} from 'react-icons/ai';
import { GiClover } from 'react-icons/gi';
import { Container, ListItem } from './styles';

import NavigationModal from './NavigationModal';

// eslint-disable-next-line no-shadow
enum SelectRouteType {
  HOME = 'home',
  CHAMPIONSHIP = 'championship',
  BETS = 'bets',
  MORE = 'more',
}

const NavigationMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SelectRouteType | string>(
    SelectRouteType.HOME,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname.toString().replace('/', '');
    setSelectedItem(currentRoute);
  }, [location, setSelectedItem]);

  const handleSelectItem = useCallback(item => {
    setSelectedItem(item);
  }, []);

  const handleToggleModal = useCallback(() => {
    setModalOpen(state => !state);
  }, []);

  return (
    <Container>
      <NavigationModal isOpen={modalOpen} setIsOpen={handleToggleModal} />
      <ul>
        <ListItem
          to="/home"
          onClick={() => handleSelectItem(SelectRouteType.HOME)}
          selected={selectedItem === SelectRouteType.HOME}
        >
          <AiOutlineHome size={20} />
          <span>Início</span>
        </ListItem>
        <ListItem
          to="/championship"
          onClick={() => handleSelectItem(SelectRouteType.CHAMPIONSHIP)}
          selected={selectedItem === SelectRouteType.CHAMPIONSHIP}
        >
          <AiFillTrophy size={20} />
          <span>Campeonatos</span>
        </ListItem>
        <div>
          <button type="button" onClick={handleToggleModal}>
            <AiOutlinePlus size={25} color="#020c28" />
          </button>
        </div>
        <ListItem
          to="/home"
          onClick={() => handleSelectItem(SelectRouteType.BETS)}
          selected={selectedItem === SelectRouteType.BETS}
        >
          <GiClover size={20} />
          <span>Apostas</span>
        </ListItem>
        <ListItem
          to="/home"
          onClick={() => handleSelectItem(SelectRouteType.MORE)}
          selected={selectedItem === SelectRouteType.MORE}
        >
          <AiOutlineAlignLeft size={20} />
          <span>Mais</span>
        </ListItem>
      </ul>
    </Container>
  );
};

export default NavigationMenu;
