import { useConfig } from '@/contexts';

const App = () => {
  const config = useConfig();

  console.log('config', config);

  return <h1 className="text-3xl font-bold underline text-red-300">Hello world!</h1>;
};

export default App;
