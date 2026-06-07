import App from "../App";
import TimeButton from "./TimeButtonForReal";
function Dashboard({ PlantsData, dashTime }) {
  const dueCount = PlantsData.filter(
    plant => plant.urgency + plant.lastWatered - dashTime <= 0
  ).length;

  // const overdueCount = PlantsData.filter( plant => plant.urgency + plant.lastWatered - dashTime < 0
  // ).length;

  const tomorrowCount = PlantsData.filter(
    plant => plant.urgency + plant.lastWatered - dashTime === 1
  ).length;

  const okCount = PlantsData.filter(
    plant => plant.urgency + plant.lastWatered - dashTime > 1
  ).length;
  //let test = App();

  // let dashTime = "aa" //test.getAppTime();

  //dashTime = App.time;

  // console.warn(dashTime);
  //
  // loadDash();
  // function loadDash() {
  //   while (index < PlantsData.length) {
  //     console.warn("urgency", PlantsData[index]);
  //     console.warn("time", dashTime);
  //     if (PlantsData[index].urgency < dashTime) {
  //       console.warn("this triggered");
  //       overdueCount = overdueCount + 1
  //     }
  //     else if (PlantsData[index].needsWater == true) {
  //       console.warn("bb", refresh);
  //       internalwaterCount = waterCount + 1;
  //     }
  //     else if (PlantsData[index].needsWater == false) {
  //       internalfineCount = fineCount + 1;
  //     }
  //     index = index + 1;
  //   }
  // }

  // console.warn(dashTime);
  return (
    <div className="dashboard-container">
      {/* <h2>Dashboard</h2> */}
      <div className="dashboard-total"><h3>Total Number of Plants: {PlantsData.length}</h3></div>
      <div className="dashboard-due"><h3> Water Today: {dueCount}</h3></div>
      {/* <div className="dashboard-due"><h3>Plants Overdue: {overdueCount}</h3></div> */}
      <div className="dashboard-tomorrow"><h3>Water Tomorrow: {tomorrowCount}</h3></div>
      <div className="dashboard-ok"><h3>Plants OK: {okCount}</h3></div>
      {/* <button onClick={() => loadDash()}>Load DAsh</button> */}
    </div>
  );
}

export default Dashboard;
