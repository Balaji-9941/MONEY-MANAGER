const state = {
  default: [],
};
const container = document.querySelector(".sect");
const htmlSection = ({ income, expense, total, debt }) => `
        <p class="income mt-5">INCOME :  ₹${income}</p>
        <p class="expense">EXPENSE :  ₹${expense} </p>
        <p class="total">TOTAL :  ₹${total} </p>
        <p class="debt">DEBT(Loan):  ₹${debt}</p>
`;
const loadInitial = () => {
  const income = 0;
  const expense = 0;
  const total = 0;
  const debt = 0;
  container.insertAdjacentHTML(
    "beforebegin",
    htmlSection({ income, expense, total, debt })
  );
};
// const updatedLocalStorage = () => {
//   localStorage.setItem(
//     "task",
//     JSON.stringify({
//       tasks: state.default,
//     })
//   );
// };

// const loadInitialStorage = () => {
//   const localStorageCopy = JSON.parse(localStorage.task);
//   if (localStorageCopy) state.tasklist = localStorageCopy.tasks;
//   state.tasklist.map((date) => {
//     taskcontent.insertAdjacentHTML("beforeend", htmlTaskContent(date));
//   });
// };
