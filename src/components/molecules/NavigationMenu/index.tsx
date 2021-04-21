import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineAlignLeft,
  AiOutlinePlus,
  AiFillTrophy,
} from 'react-icons/ai';
import { GiClover } from 'react-icons/gi';
import { Container, ListItem } from './styles';

import NavigationModal from './NavigationModal';

const NavigationMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
          onClick={() => handleSelectItem(0)}
          selected={selectedItem === 0}
        >
          <AiOutlineHome size={20} />
          <Link to="/home">Início</Link>
        </ListItem>
        <ListItem
          onClick={() => handleSelectItem(1)}
          selected={selectedItem === 1}
        >
          <AiFillTrophy size={20} />
          <Link to="/home">Campeonatos</Link>
        </ListItem>
        <div>
          <button type="button" onClick={handleToggleModal}>
            <AiOutlinePlus size={25} color="#020c28" />
          </button>
        </div>
        <ListItem
          onClick={() => handleSelectItem(2)}
          selected={selectedItem === 2}
        >
          <GiClover size={20} />
          <Link to="/home">Apostas</Link>
        </ListItem>
        <ListItem
          onClick={() => handleSelectItem(3)}
          selected={selectedItem === 3}
        >
          <AiOutlineAlignLeft size={20} />
          <Link to="/home">Mais</Link>
        </ListItem>
      </ul>
    </Container>
  );
};

export default NavigationMenu;
