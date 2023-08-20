import { useState } from "react";
import styles from "./tabs.module.css";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const toggleTabVisibility = (name: string) => {
    setActiveTab(name);
  };

  return (
    <div>
      <ul>
        <li
          className={activeTab === "All" ? styles.active_tab : styles.li}
                    onClick={() => toggleTabVisibility("All")}
        >
          All
        </li>
        <li
          className={activeTab === "My favorites" ? styles.active_tab : styles.li}
                    onClick={() => toggleTabVisibility("My favorites")}
        >
          My favorites
        </li>
        <li
          className={activeTab === "Popular" ? styles.active_tab : styles.li}
                    onClick={() => toggleTabVisibility("Popular")}
        >
          Popular
        </li>
      </ul>
      <div id={styles.line}></div>
    </div>
  );
};
