import UserList from "@/components/user/UserList";
import { Constants } from "@/Constants/urls";
import apiDataController from "@/controllers/RequestController";
import Image from "next/image";

export default async function Home() {
  const controller = new apiDataController();
  const userlist = await controller.GetApi(Constants.userlist);
  console.log("userlistuserlist", userlist);
  return (
    <div className=" ">
      <UserList data={userlist} />
    </div>
  );
}
