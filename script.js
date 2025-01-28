const state = {
  moma: [],
};
let for_id = 0;
const container = document.querySelector(".sect");
const htmlSection = ({ income, expense, total, debt }) => `
     <div class="sect_part_1">
  <p class="income_txt">INCOME : ₹${income}</p>
  <button
    class="inc_button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <i class="fa-solid fa-plus"></i>Add income
  </button>
  <button
    class="inc_button_2"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <i class="fa-solid fa-plus"></i>
  </button>
</div>
<div class="sect_part_1">
  <p class="expense_txt">EXPENSE : ₹${expense}</p>
  <button class="exp_button">
    <i class="fa-solid fa-plus"></i>Add expense
  </button>
  <button class="exp_button_2">
    <i class="fa-solid fa-plus"></i>
  </button>
</div>
<div class="sect_part_1">
  <p class="debt_txt">LOAN: ₹${debt}</p>
  <button class="debt_button"><i class="fa-solid fa-plus"></i>Add Loan</button>
  <button class="debt_button_2">
    <i class="fa-solid fa-plus"></i>
  </button>
</div>
<div class="sect_part_1">
  <p class="total_txt">TOTAL : ₹${total}</p>
</div>

`;
const loadInitial = () => {
  try {
    const localStorageCopy = JSON.parse(localStorage.task);
    state.moma = localStorageCopy.tasks;
  } catch (error) {
    // console.log("hello world");
  }
  let size = state.moma.length;
  console.log(size);
  let i = 0;
  let incomepre = 0;
  if (size >= 1) {
    while (i < size) {
      incomepre += parseInt(state.moma[i].amount);
      i++;
    }
  }
  const income = incomepre;
  const expense = 0;
  const total = 0;
  const debt = 100000000;
  container.insertAdjacentHTML(
    "beforebegin",
    htmlSection({ income, expense, total, debt })
  );
};
const updatedLocalStorage = () => {
  localStorage.setItem(
    "task",
    JSON.stringify({
      tasks: state.moma,
    })
  );
};

// const loadInitialStorage = () => {
//   const localStorageCopy = JSON.parse(localStorage.task);
//   if (localStorageCopy) state.tasklist = localStorageCopy.tasks;
//   state.tasklist.map((date) => {
//     taskcontent.insertAdjacentHTML("beforeend", htmlTaskContent(date));
//   });
// };
const handlesubmit = (Event) => {
  let ids = document.getElementById("inc_date").value;
  let size = state.moma.length;
  let i = 0;
  idexist = 0;
  if (size >= 1) {
    for (i = 0; i < size; i++) {
      if (state.moma[i].id === ids) {
        idexist = 1;
        break;
      }
    }
  }
  if (idexist === 1) {
    console.log("hello world");
  } else {
    const input = {
      id: ids,
      amount: document.getElementById("inc_amount").value,
    };
    if (input.amount === "" || input.id === "") {
      return alert("Please fill the required fields");
    }
    state.moma.push({ ...input });
  }
  updatedLocalStorage();
  window.location.reload();
};
