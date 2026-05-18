import { Navigate, Outlet } from "react-router-dom";
import { FriendsContext } from "../context/friendsContext";

let friends = [
  { user_name: "ñlsdj", status: "accepted", user_id: "123" },
  { user_name: "ñlsdj", status: "accepted", user_id: "123455" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12344" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12343" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12342" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12341" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12340" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12349" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12348" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12347" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12346" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12345" },
];

export const PrivateRoutes = ({ auth }) => {
  return (
    <FriendsContext value={friends}>
      {auth ? <Outlet /> : <Navigate to={"/login"} />}
    </FriendsContext>
  );
};
