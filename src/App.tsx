import "./App.css";
import { Title } from './components/Title/index.tsx';
import { Menu } from './components/Menu/index.tsx';
import { Tab, Tabs } from './components/Tabs/index.tsx';

function App() {
  const tabItems: Tab[] = [
    { name: 'All', active: true },
    { name: 'My favorites', active: false },
    { name: 'Popular', active: true }
  ]
  return <div>
    <Title name="Sign In" />
    <Menu />
    <Tabs items={tabItems} />
  </div>;
}

export default App;
