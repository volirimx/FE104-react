import React, { useState } from 'react';
import styles from "./Tabs.module.css"

interface TabProps {
 title: string;
 isActive: boolean;
 disabled?: boolean;
 onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isActive, disabled, onClick }) => {
 const handleClick = () => {
  onClick();
 };

 return (
  <button
   className={isActive ? styles.active : styles.tab}
   disabled={disabled}
   onClick={handleClick}
  >
   {title}
  </button>
 );
};

export const Tabs: React.FC = () => {
 const [activeTab, setActiveTab] = useState<string | null>("All");

 const handleTabClick = (title: string) => {
  setActiveTab(title);
 };

 return (
  <div className={styles.tabs}>
   <Tab
    title="All"
    isActive={activeTab === 'All'}
    disabled={false}
    onClick={() => handleTabClick('All')}
   />
   <Tab
    title="My favorites"
    isActive={activeTab === 'My favorites'}
    disabled={false}
    onClick={() => handleTabClick('My favorites')}
   />
   <Tab
    title="Popular"
    isActive={activeTab === 'Popular'}
    disabled={true}
    onClick={() => handleTabClick('Popular')}
   />
  </div>
 );
};

