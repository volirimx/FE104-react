import Avatar from "../Avatar/Avatar";
import styles from "./header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Input from "../Input/Input";
import { ChangeEvent, useContext, useRef } from "react";
import ContextSearchInput from "../../ContextSearchInput";
import { useNavigate } from "react-router-dom";
import ContextTheme from "../../ContextTheme";

import { FormControlLabel, Switch } from "@mui/material";

const Header = () => {
  const { setSearchInput } = useContext(ContextSearchInput);
  const { darkMode, setDarkMode } = useContext(ContextTheme);

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/posts");
    searchInputRef.current.value = "";
  };

  const searchInputRef = useRef();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header
      className={styles.header}
      style={{ background: darkMode ? "darkred" : "white" }}
    >
      <BurgerMenu />
      <Input
        placeholder="Search"
        handleChange={handleChange}
        onClick={redirect}
        ref={searchInputRef}
      />
      <Avatar
        disableBorder={false}
        disableBorderName={true}
        username="Oskar Nesh"
      />

      <FormControlLabel
        control={
          <Switch size="medium" color="warning" onChange={changeTheme} />
        }
        label="DarkMode"
      />
    </header>
  );
};

export default Header;
