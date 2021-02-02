import { useState } from "react";
function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  const [myIDnew, setMyID] = useState([]);
  let myID = 620610773;

  function minusID(myid) {
    myid -= 1;
  }
  function plusID(myid) {
    myid += 1;
  }
  function resetID(myid) {
    myid = 620610773;
  }

  return (
    <form
      minus={(myID) => {
        minusID(myID);
      }}
      plus={(myID) => {
        plusID(myID);
      }}
      reset={(myID) => {
        resetID(myID);
      }}
    >
      <div class="ml-2">
        {/* Code me please! */}

        <div class="mb-4">
          <h3 class="title is-3">ID Counter</h3>
          <p>{myID}</p>
          <button type="minus">-</button>
          <button type="reset">reset</button>
          <button type="plus">+</button>
        </div>
        {/* Convert me to a component! */}
        <h3 class="title is-3">Person List</h3>
        <table class="table is-bordered mb-3">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Bob</td>
              <td>male</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default App;
