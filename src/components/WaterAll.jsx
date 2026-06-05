function WaterAllButton(PlantsData){
    let index = 0;
    let test = PlantsData;
    console.warn("Help")

    while (index < PlantsData.len) {
        if (PlantsData[index].needsWater == true) {
            PlantsData[index].needsWater = false;
        }
    }

    return(
        <button onClick={() => WaterAllButton(test)}>Test</button>
    )
}

export default WaterAllButton;
