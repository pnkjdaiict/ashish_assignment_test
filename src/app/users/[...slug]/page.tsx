import UserDetail from "@/components/user/UserDetail";
import { Constants } from "@/Constants/urls";
import apiDataController from "@/controllers/RequestController";
import React from "react";

export default async function page({ params }: any) {
  const param: any = await params;
  console.log("params are", param);
  const controller = new apiDataController();
  const userData = await controller.GetApi(
    `${Constants.userlist}${param.slug[0]}`
  );
  const userpost = await controller.GetApi(
    `${Constants.postsData}?userId=${param.slug[0]}`
  );
  console.log("userDatauserData", userpost);
  return (
    <div className="text-gray-800">
      <UserDetail user={userData} posts={userpost} />
    </div>
  );
}
