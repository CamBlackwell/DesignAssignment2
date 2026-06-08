import App from "../App";
import TimeButton from "./TimeButtonForReal";
function Dashboard({ PlantsData, dashTime }) {

  //Calculates the urgency of the plant data and then returns the ammount of each, updates whenever there are changes to the system

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


  //The various colours done in the css
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
