import React, { useState } from 'react';
import styled from 'styled-components';
import AwardInput from '../../components/atoms/CreateChampionship/AwardsInput';
import SelectInput from '../../components/atoms/CreateChampionship/SelectInput';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

const CreateChampionship: React.FC = () => {
  // Recebe da api
  const [games, setGames] = useState([
    'Principe da persia',
    'gta',
    'needforspeed',
    'Frifas',
  ]);
  const [gameSelected, setGameSelected] = useState(games[0]);

  return (
    <Container>
      <span>Hi my name is Vitor</span>
      <SelectInput
        value={gameSelected}
        items={games}
        setValue={setGameSelected}
      />
      <AwardInput
        value={gameSelected}
        items={games}
        setValue={setGameSelected}
      />
    </Container>
  );
};

export default CreateChampionship;
