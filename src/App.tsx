import "./App.css";
import { Title } from './components/Title/index.tsx';
import { Menu } from './components/Menu/index.tsx';
import { Tab, Tabs } from './components/Tabs/index.tsx';
import { useState } from "react";

function App() {
  const tabItems: Tab[] = [
    { name: 'All', id: 1 },
    { name: 'My favorites', id: 2 },
    { name: 'Popular', id: 3, disabled: true }
  ]
  const [selectedTab, setSelectedTab] = useState(tabItems[0].id);
  const handleTabClick = (selectedId: number) => {
    setSelectedTab(selectedId);
  }

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenuClick = (isOpenMenu: boolean) => {
    if (isOpenMenu)
      setIsOpenMenu(false);
    else
      setIsOpenMenu(true);
  }

  return <div>
    <Title name="Sign In" />
    <Menu isOpen={isOpenMenu} onMenuClick={handleMenuClick} />
    <Tabs tabs={tabItems} selectedId={selectedTab} onTabClick={handleTabClick} />
  </div>;
}

export default App;
