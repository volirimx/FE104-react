import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { registerUser, selectUser } from "../redux/user/user";

export const Home = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  console.log(user);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDispatchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      registerUser({
        email: "asdfgjgnsdjnggbos@gmail.com",
        password: "gmskerkwmagke",
        username: "nwvjweaiiwmam",
      })
    );
  };

  return (
    <div className="flex flex-col gap-3 max-w-[300px] m-auto">
      <input placeholder="email"></input>
      <input placeholder="username"></input>
      <input placeholder="password"></input>
      <input placeholder="repeat password"></input>
      <button onClick={handleDispatchClick}>Register</button>
    </div>
  );
};
