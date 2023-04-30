const current = new Date();
const date: String =
  `${current.getDate()}`.padStart(2, "0") +
  "/" +
  `${current.getMonth() + 1}`.padStart(2, "0") +
  "/" +
  `${current.getFullYear()}`.slice(2);
export default date;
