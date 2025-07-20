const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const App = () => {
  const currentDate = new Date();
  const currDay = currentDate.getDay();

  return (
    <div className="sm:w-[400px] w-[300px] p-2 mx-auto">
      <div className="flex justify-between items-center text-white bg-[var(--Red-500)] rounded-md p-4">
        <div>
          <p>My balance</p>
          <p className="text-2xl font-bold">$921.48</p>
        </div>
        <img className="w-15" src="./logo.svg" />
      </div>

      <div className="bg-white mt-4 rounded-md p-4">
        <p className="text-[26px] font-bold text-[var(--Brown-950)]">
          Spending - Last 7 days
        </p>
        <div className="grid grid-cols-7 gap-x-2 items-end mt-2">
          {data.map(({ day, amount }, index) => (
            <div
              key={day}
              className="flex flex-col items-center group cursor-pointer"
            >
              <span className="bg-[var(--Brown-950)] text-white mb-1 rounded-md text-base invisible group-hover:visible font-semibold p-1">
                ${amount}
              </span>
              <span
                style={{ height: amount * 2 }}
                className={`${
                  (currDay === 0 ? 6 : currDay - 1) === index
                    ? "bg-[var(--Blue-300)]"
                    : "bg-[var(--Red-500)]"
                } sm:w-10 w-8 block rounded-md group-hover:opacity-70 transition-all`}
              ></span>
              <p className="text-[var(--Brown-400)]">{day}</p>
            </div>
          ))}
        </div>

        <div className="border-t-1 mt-5 pt-5 border-[var(--Brown-400)]">
          <p className="text-[var(--Brown-400)]">Total this month</p>
          <div className="flex justify-between items-center -mt-1">
            <p className="text-[var(--Brown-950)] font-bold text-3xl">
              $479.33
            </p>
            <div>
              <p className="text-right text-[var(--Brown-950)]">+2.4%</p>
              <p className="text-[var(--Brown-400)] -mt-1">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
