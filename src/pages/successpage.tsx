import { Title } from "../components/Title/title";
import { TemplateBody } from "../components/TemplateBody/templateBody";
import { Button } from "../components/Button_primary/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/user";
import { RootState } from "../redux/store";


export const Successpage = () => {
  const navigate = useNavigate();
  const goPosts = () => navigate("/posts");

  // const user = useSelector(selectUser);
  const accessToken = useSelector((state: RootState) => state.user.access);
  console.log("access:" + accessToken);
  
  
  return (
    <>
      <Title title="Success" />
      <TemplateBody title={`Email confirmed \nYour registration is completed`}>
        <Button content="Go to posts" mode="primary" onClick={goPosts} />        
      </TemplateBody>
    </>
  );
};
