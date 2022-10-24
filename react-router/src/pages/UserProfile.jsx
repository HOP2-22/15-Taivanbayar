import { Link } from "react-router-dom";
import Oneuser from "./Oneuser";

const UserPrint = ({ userData }) => {
  // console.log(userData, 'userPrint');
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          width: "300px",
          height: "500px",
          borderRadius: "5%",
        }}
      >
        <img src={userData.avatar} />
        <Link to={userData.username}>{userData.username}</Link>
        <p>{userData.email}</p>
        <p>{userData.date_of_birth}</p>
        {/* <Oneuser userData={userData}/> */}
      </div>
    );
  };

  export default UserPrint