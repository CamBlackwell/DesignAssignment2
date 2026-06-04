import App from "../App";
import TimeButton from "./TimeButtonForReal";
function Dashboard({PlantsData,dashTime}) {

  let index = 0;

  let waterCount = 0;
  let overdueCount = 0;
  let fineCount = 0;

  let internalfineCount = 0;
  let internalwaterCount = 0;

  let refresh = true;

  //let test = App();

 // let dashTime = "aa" //test.getAppTime();

  //dashTime = App.time;

  console.warn(dashTime);

  loadDash();
  function loadDash(){
    while (index < PlantsData.length) {
      console.warn("urgency", PlantsData[index]);
      console.warn("time", dashTime);
      if (PlantsData[index].urgency < dashTime) {
        console.warn("this triggered");
        overdueCount = overdueCount + 1
      }
      else if (PlantsData[index].needsWater == true) {
        console.warn("bb", refresh);
        internalwaterCount = waterCount + 1;
      }
      else if (PlantsData[index].needsWater == false) {
        internalfineCount = fineCount + 1;
      }
      index = index + 1;
    }
  }

   // console.warn(dashTime);
  return (
    <div className="dashboard-container">
        <h2>Dashboard</h2>
        <h3>Total Number of Plants: {PlantsData.length} Plants due: {waterCount} Plants Overdue: {overdueCount} Plants OK: {fineCount}</h3>
        <button onClick={() => loadDash()}>Load DAsh</button>
    </div>
  );
}

export default Dashboard;