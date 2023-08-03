import "./Username.css";
interface username {
  username: string;
}
export function Username({ username }: username) {
  const userInitials = username
    .split(" ")
    .map((item) => item.substring(0, 1).toUpperCase());
  return (
    <div className="boxUser">
      <div className="userIconsBox">
        <div className="userIcons">{userInitials}</div>
      </div>
      <div className="userNameBox">
        <h1>{username}</h1>
      </div>
    </div>
  );
}
