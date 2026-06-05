function TimeButton({PlantWaterData, time}) {
   // let time = 0; // -1 to account for initial loading, actual start value should be zero
  
    function resetTime() {
        time = 0;

    }


    function passTime() {

        let control = 0;

        if(PlantWaterData != null){
            time = time + 1
        }
        let len = PlantWaterData.length
        console.warn(time);
        while (control < len){
           // console.warn(control);
            if (time >= PlantWaterData[control].urgency) {
                PlantWaterData[control].needsWater = true;
            }
            control = control + 1;
            console.warn(PlantWaterData[0].needsWater);
           
        }
        //let water = PlantWaterData[control].watered;
        //console.warn(water)
    
      }

   return (
    <div>
           <button onClick={() => passTime()}>Time Pass (+1 day)</button>
           <button onClick={() => resetTime()}>Reset Time</button>
    </div>
       )

}

export default TimeButton;