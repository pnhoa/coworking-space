import MainWrapper from './Main';
import Routes from 'routes';

const App = () => {
  document.title = 'TopSpace: The best cowoking space';
  return (
    <MainWrapper>
      <Routes />
    </MainWrapper>
  );
};

export default App;
