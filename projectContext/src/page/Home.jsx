import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

export const Home = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div>
      <button onClick={() => changeTheme()}>change theme</button>
      <div>home theme:{theme} </div>
    </div>  
  );
};
  
export default Home;
