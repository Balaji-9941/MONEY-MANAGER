const state = {
  default: [],
};
const container = document.querySelector(".sect");
const htmlSection = ({ income, expense, total, debt }) => `
     <div class="sect_part_1">
        <p class="income_txt">INCOME : ₹${income}</p>
        <button class="inc_button">
          <i class="fa-solid fa-plus"></i>Add income
        </button>
        <button class="inc_button_2" style="background-color: greenyellow">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="sect_part_1">
        <p class="expense_txt">EXPENSE : ₹${expense}</p>
        <button class="exp_button">
          <i class="fa-solid fa-plus"></i>Add expense
        </button>
        <button class="exp_button_2" style="background-color: red">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="sect_part_1">
        <p class="debt_txt">LOAN: ₹${debt}</p>
        <button class="debt_button">
          <i class="fa-solid fa-plus"></i>Add Loan
        </button>
        <button class="debt_button_2" style="background-color: darkkhaki">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="sect_part_1">
        <p class="total_txt">TOTAL : ₹${total}</p>
      </div>
`;
const loadInitial = () => {
  const income = 0;
  const expense = 0;
  const total = 0;
  const debt = 100000000;
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
