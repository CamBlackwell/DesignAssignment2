function TimeButton({ plants, setPlants, currentDay, setCurrentDay }) {

  function resetTime() {
    setCurrentDay(0);
    setPlants(prevPlants =>
      prevPlants.map(plant => ({
        ...plant,
        needsWater: false
      }))
    );
  }

  function passTime() {
    const newDay = currentDay + 1;
    console.warn(newDay);
    setCurrentDay(newDay);

    setPlants(prevPlants =>
      prevPlants.map(plant => {
        const needsWater = plant.needsWater || newDay >= plant.urgency;
        console.warn(plant.name, needsWater);
        return { ...plant, needsWater };
      })
    );
  }

  return (
    <div className="demo-time-changer">
      <div className="demo-inside-section">
        <h1 className="demo-text"> Demo Time Changer </h1>
        <div className="demo-inside-button-group">
          <button className="demo-time-button" onClick={passTime}>Time Pass (+1 day)</button>
          <button className="demo-time-button" onClick={resetTime}>Reset Time</button>
        </div >
      </div >
    </div >
  );

}

export default TimeButton;
