function WaterAllButton({onWater}){
    return(
       // test = getData(PlantsData),
        <button onClick={() => onWater()}>Water All</button>
    )
}

export default WaterAllButton;
