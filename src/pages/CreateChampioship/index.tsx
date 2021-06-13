import React, { useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import AwardInput from '../../components/atoms/CreateChampionship/AwardsInput';
import Input from '../../components/atoms/CreateChampionship/Input';
import SelectInput from '../../components/atoms/CreateChampionship/SelectInput';
import Header from '../../components/molecules/Header';
import TextArea from '../../components/atoms/CreateChampionship/Textarea';
import Button from '../../components/atoms/Button';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  button {
    max-width: calc(100% - 60px);
  }
`;

const CreateChampionship: React.FC = () => {
  // Recebe da api
  const [games, setGames] = useState([
    'Principe da persia',
    'gta',
    'needforspeed',
    'Frifas',
  ]);
  const [championshipTypes, setChampionshipTypes] = useState([
    'Diário',
    'Semanal',
    'Mensal',
  ]);
  const [championshipName, setChampionshipName] = useState('');
  const [rules, setRules] = useState('');
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [gameSelected, setGameSelected] = useState(games[0]);
  const [championshipTypesSelected, setchampionshipTypesSelected] = useState(
    championshipTypes[0],
  );
  return (
    <Container>
      <Header />
      <Input
        label="Nome do campeonato"
        value={championshipName}
        setValue={setChampionshipName}
        maxLength={50}
        placeholder="Seu Campeonato"
      />
      <SelectInput
        label="Games"
        value={gameSelected}
        items={games}
        setValue={setGameSelected}
      />
      <SelectInput
        label="Tipo de Campeonato"
        value={championshipTypesSelected}
        items={championshipTypes}
        setValue={setchampionshipTypesSelected}
      />
      <Input
        label="Data de inicio"
        value={startDate}
        setValue={setStartDate}
        date
      />
      <AwardInput />
      <TextArea
        label="Regras"
        value={rules}
        setValue={setRules}
        placeholder="Suas regras do campeonato"
      />
      <Button statusType="confirmation">Criar campeonato</Button>
    </Container>
  );
};

export default CreateChampionship;
