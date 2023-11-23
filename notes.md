     ```js
      <section className="box-container my-2">
        {/* work box */}
        <article className=" relative   bg-LightRedWork rounded-b-xl rounded-t-xl">
          <div className=" bg-icon-work bg-no-repeat bg-right h-8 "></div>
          <div className="bg-darkBlue rounded-t-xl rounded-b-xl px-4 py-8">
            <div className=" flex justify-between">
              <h2>
                work
              </h2>
              <p>...</p>
            </div>
            <div className="flex justify-between">
              <p>{hours}</p>
              <p>last week - 36hrs</p>
            </div>
          </div>
        </article>
      </section>
```


```jsx
import jeremyPicture from "./images/image-jeremy.png";
import { useState } from "react";
import jsonData from "./data.json";

function App() {
  console.log(jsonData);
  const [hours, setHours] = useState("daily");
  const backgroundColors = [
    "bg-LightRedWork",
    "bg-SoftBlue",
    "bg-LightRedStudy",
    "bg-LimeGreen",
    "bg-Violet",
    "bg-SoftOrange",
  ];
  const backgroundImages = [
    "url(./src/images/icon-work.svg)",
    "url(./src/images/icon-play.svg)",
    "url(./src/images/icon-study.svg)",
    "url(./src/images/icon-exercise.svg)",
    "url(./src/images/icon-social.svg)",
    "url(./src/images/icon-self-care.svg)",
  ];

  const clickHandler = (hour) => {
    setHours(hour);
  };

  return (
    <>
      <header className="capitalize bg-darkBlue rounded-t-xl rounded-b-xl">
        <div className="flex items-center justify-center bg-Blue gap-2 rounded-xl p-6
        sm:flex-col sm:items-start sm:justify-start sm:gap-8 sm:h-[45vh] sm:w-[15vw]">
          <div><img
            src={jeremyPicture}
            alt="admin-profile-picture"
            className=" block w-16 sm:border-[3px] sm:border-white sm:rounded-full"
          /></div>
          <div>
            <p className=" text-[#A9A9A9]">report for</p>
            <h1 className="sm:text-4xl ">jeremy <span className="sm:block">robson</span></h1>
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
      {/* dashboard */}
      <section className="my-2 text-lg sm:grid sm:grid-cols-3 sm:gap-4 sm:my-0">
        {jsonData.map((item, index) => (
          <article
            // className=" bg-LightRedWork rounded-b-xl rounded-t-xl my-2"
            className={`rounded-b-xl rounded-t-xl my-2 sm:w-[14vw] sm:my-0 ${
              backgroundColors[index % backgroundColors.length]
            }`}
            key={item.id}
          >
            <div
              //  className="h-8  bg-icon-work bg-no-repeat bg-right"
              className="h-8 bg-no-repeat bg-right mr-8"
              style={{
                backgroundImage:
                  backgroundImages[index % backgroundImages.length],
              }}
            >
              {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-darkBlue rounded-t-xl rounded-b-xl px-4 py-8 sm:h-[27vh]">
              <div className=" flex justify-between items-center">
                <h2 className="sm:font-normal">{item.title}</h2>
                <p className="sm:text-xl">...</p>
              </div>
              <div>
                {hours === "daily" && (
                  <div className=" flex justify-between sm:flex-col sm:mt-4 sm:gap-2">
                    <p className="sm:text-5xl">{item.timeframes.daily.current}hrs</p>
                    <p className="text-[#A9A9A9]">last day - {item.timeframes.daily.previous}hrs</p>
                  </div>
                )}
                {hours === "weekly" && (
                  <div className=" flex justify-between sm:flex-col sm:mt-4 sm:gap-2">
                    <p className="sm:text-5xl">{item.timeframes.weekly.current}hrs</p>
                    <p className="text-[#A9A9A9]" >last week - {item.timeframes.weekly.previous}hrs</p>
                  </div>
                )}
                {hours === "monthly" && (
                  <div className="flex justify-between sm:flex-col sm:mt-4 sm:gap-2 ">
                    <p className="sm:text-5xl">{item.timeframes.monthly.current}hrs</p>
                    <p className="text-[#A9A9A9]">last month - {item.timeframes.monthly.previous}hrs</p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;

```
