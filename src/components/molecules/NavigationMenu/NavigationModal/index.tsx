import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal, { IModalProps } from '../../Modal';
import Button from '../../../atoms/Button';

import { Container } from './styles';

const NavigationModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <div>
          <button type="button" onClick={setIsOpen}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <Button>Nova transferência</Button>
        <Button>Criar campeonato</Button>

        <Button statusType="cancel" onClick={setIsOpen}>
          Voltar
        </Button>
      </Container>
    </Modal>
  );
};

export default NavigationModal;
