import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Container, Header } from './styles';

const ChampionshipDetails: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Header>
        <button type="button" onClick={() => goBack()}>
          <FiChevronLeft size={30} />
        </button>
      </Header>
      <main>
        <h2>Campeonato da firma</h2>
      </main>
      <section>
        <div>
          <button type="button">Participantes</button>
          <button type="button">Times</button>
        </div>
        <ul>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQg2xOLt8a9_9_iu7-YGP0y7SjSdOpa7WLNio3o1i9iXBla7qxkwB53ssQ1wd75_DijXM&usqp=CAU"
              alt="andre olveira"
            />
            <span>André Oliveira</span>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQg2xOLt8a9_9_iu7-YGP0y7SjSdOpa7WLNio3o1i9iXBla7qxkwB53ssQ1wd75_DijXM&usqp=CAU"
              alt="andre olveira"
            />
            <span>André Oliveira</span>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQg2xOLt8a9_9_iu7-YGP0y7SjSdOpa7WLNio3o1i9iXBla7qxkwB53ssQ1wd75_DijXM&usqp=CAU"
              alt="andre olveira"
            />
            <span>André Oliveira</span>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQg2xOLt8a9_9_iu7-YGP0y7SjSdOpa7WLNio3o1i9iXBla7qxkwB53ssQ1wd75_DijXM&usqp=CAU"
              alt="andre olveira"
            />
            <span>André Oliveira</span>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default ChampionshipDetails;
