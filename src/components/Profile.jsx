import jeremyPicture from "../images/image-jeremy.png";
import Grid from "./Grid";
import { useState } from "react";

function Profile() {
  const [hours, setHours] = useState("daily");
  const clickHandler = (selectHours) => {
    setHours(selectHours);
  };
  return (
    <>
      <header className="capitalize bg-darkBlue rounded-t-xl rounded-b-xl">
        <div
          className="flex items-center justify-center bg-Blue gap-2 rounded-xl p-6
        sm:flex-col sm:items-start sm:justify-start sm:gap-8 sm:h-[45vh] sm:w-[15vw]"
        >
          <div>
            <img
              src={jeremyPicture}
              alt="admin-profile-picture"
              className=" block w-16 sm:border-[3px] sm:border-white sm:rounded-full"
            />
          </div>
          <div>
            <p className=" text-[#A9A9A9]">report for</p>
            <h1 className="sm:text-4xl ">
              jeremy <span className="sm:block">robson</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-between text-sm p-4 cursor-pointer text-desaturatedBlue sm:flex-col sm:gap-4 ">
          <p
            className=" hover:text-white"
            onClick={() => clickHandler("daily")}
          >
            daily
          </p>
          <p
            className=" hover:text-white"
            onClick={() => clickHandler("weekly")}
          >
            weekly
          </p>
          <p
            className=" hover:text-white"
            onClick={() => clickHandler("monthly")}
          >
            monthly
          </p>
        </div>
      </header>
      <Grid hours={hours}/>
    </>
  );
}

export default Profile;
