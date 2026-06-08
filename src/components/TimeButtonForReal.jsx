function TimeButton({ plants, setPlants, currentDay, setCurrentDay }) {

  //resets time, slight bug here, it can add extra days to the plants if they are watered and then the reset is hit, didn't have time to fix as it is only for demo purposes anyway, probably dont need to use it at all only pass time
  function resetTime() {
    setCurrentDay(0);
    setPlants(prevPlants =>
      prevPlants.map(plant => ({
        ...plant,
        needsWater: false
      }))
    );
  }

  //increments the time
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

  // Time passing purple demo console in the bottom left
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
