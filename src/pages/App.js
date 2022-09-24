import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';
import { ItemContainer } from '../components/ItemRepo/styles';

function App() {
  const [currentRepo, SetCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id) {
      const exist = repos.find(repo => repo.id === data.id);

      if(!exist) {
        setRepos(prev => [...prev, data]);
      SetCurrentRepo('');
      return
      }
    } else {
      alert('Repositório não encontrado');
    }
  }

  const handleRemoveRepo = (id) => {
    const repoParaRemover = repos.filter(repo => repo.id === id);
    
    if(repoParaRemover) {
      const repoSelecionado = document.getElementById(id);
      repoSelecionado.parentNode.removeChild(repoSelecionado);
    }
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={e => SetCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;