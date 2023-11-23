import jsonData from "../data.json";

function Grid({ hours }) {
  const backgroundColors = [
    "bg-LightRedWork",
    "bg-SoftBlue",
    "bg-LightRedStudy",
    "bg-LimeGreen",
    "bg-Violet",
    "bg-SoftOrange",
  ];

  const backgroundImages = [
    "url(../images/icon-work.svg)",
    "url(../images/icon-play.svg)",
    "url(../images/icon-study.svg)",
    "url(../images/icon-exercise.svg)",
    "url(../images/icon-social.svg)",
    "url(../images/icon-self-care.svg)",
  ];
  console.log('backgroundImages Path:', backgroundImages)

  
  return (
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
                  <p className="sm:text-5xl">
                    {item.timeframes.daily.current}hrs
                  </p>
                  <p className="text-[#A9A9A9]">
                    last day - {item.timeframes.daily.previous}hrs
                  </p>
                </div>
              )}
              {hours === "weekly" && (
                <div className=" flex justify-between sm:flex-col sm:mt-4 sm:gap-2">
                  <p className="sm:text-5xl">
                    {item.timeframes.weekly.current}hrs
                  </p>
                  <p className="text-[#A9A9A9]">
                    last week - {item.timeframes.weekly.previous}hrs
                  </p>
                </div>
              )}
              {hours === "monthly" && (
                <div className="flex justify-between sm:flex-col sm:mt-4 sm:gap-2 ">
                  <p className="sm:text-5xl">
                    {item.timeframes.monthly.current}hrs
                  </p>
                  <p className="text-[#A9A9A9]">
                    last month - {item.timeframes.monthly.previous}hrs
                  </p>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Grid;
