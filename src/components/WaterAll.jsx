function WaterAllButton({PlantsData}){
    function getData(PlantsData) {
        return (
            PlantsData
        )
    }

    let test = getData(PlantsData);
    let index = 0;
    //console.warn("aa",test);

   
    

    while (index < PlantsData.len) {
      //  console.warn("Help")
        if (PlantsData[index].needsWater == true) {
            PlantsData[index].needsWater = false;
        }
    }
    console.warn(test)
    return(
        test = getData(PlantsData),
        <button onClick={() => WaterAllButton({test})}>Test</button>
    )
}

export default WaterAllButton;
