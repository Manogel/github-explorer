import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/38564520?s=460&u=5797e66f1ae727ff8f29d330f1832b8ba44ff125&v=4"
            alt="Manoel Gomes"
          />
          <div>
            <strong>manogel/rn-search-header</strong>
            <p>Descritcao</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
