function Dashboard({PlantsData}) {
  return (
    <div className="dashboard-container">
        <h2>Dashboard</h2>
        <h3>Total Number of Plants: {PlantsData.length} </h3> 


    </div>
  );
}

export default Dashboard;