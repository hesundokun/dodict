import { useConfig } from '@/contexts';
import Routes from '@/Routes';
import Layout from '@/layout';

const App = () => {
  const config = useConfig();

  console.log('config', config);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
