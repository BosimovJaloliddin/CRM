export let months = [
  { short: "Yan", full: "Yanvar" },
  { short: "Fev", full: "Fevral" },
  { short: "Mart", full: "Mart" },
  { short: "Apr", full: "Aprel" },
  { short: "May", full: "May" },
  { short: "Iyun", full: "Iyun" },
  { short: "Iyul", full: "Iyul" },
  { short: "Avg", full: "Avgust" },
  { short: "Sen", full: "Sentabr" },
  { short: "Okt", full: "Oktabr" },
  { short: "Noy", full: "Noyabr" },
  { short: "Dek", full: "Dekabr" },
];
export let weeks = [
  { short: "Yak", full: "Yakshanba" },
  { short: "Dush", full: "Dushanba" },
  { short: "Sey", full: "Seyshanba" },
  { short: "Chor", full: "Chorshanba" },
  { short: "Pay", full: "Payshanba" },
  { short: "Jum", full: "Juma" },
  { short: "Shan", full: "Shanba" },
];

const getMinusDate = (number) => {
  let date = new Date(new Date().setDate(new Date().getDate() - number));
  return date;
};
const getPlusDate = (number) => {
  let date = new Date(new Date().setDate(new Date().getDate() + number));
  return date;
};

export const useDate = () => {
  let d = new Date();
  let date = d.getDate();
  let day = {
    short: weeks[d.getDay()].short,
    full: weeks[d.getDay()].full,
  };
  let year = d.getFullYear();
  let month = {
    short: months[d.getMonth()].short,
    full: months[d.getMonth()].full,
  };
  let week = (count = 0) => [
    getMinusDate(3 - count),
    getMinusDate(2 - count),
    getMinusDate(1 - count),
    getMinusDate(0 - count),
    getPlusDate(1 + count),
    getPlusDate(2 + count),
    getPlusDate(3 + count),
  ];

  return { date, day, week, year, month };
};

export default useDate;
