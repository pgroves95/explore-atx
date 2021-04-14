checks = document.getElementsByClassName("checks")
submitBtn = document.querySelector("#submit")
console.log(checks)

const CALLPATH = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc"
function randLLQuery(){
    const LATF = 6.15649818383
    const LONGF = 7.35564545789
    const lat = (30.22443 + (Math.random()/LATF)).toFixed(5)
    const long = (-97.82211 + (Math.random()/LONGF)).toFixed(5)
    return `&location=${lat},${long}`
}

checks[0].name = CALLPATH + randLLQuery() + "&radius=5000&type=cafe"
checks[1].name = CALLPATH + randLLQuery() + "&radius=5000&type=park"
checks[2].name = CALLPATH + randLLQuery() + "&radius=5000&type=tourist_attraction"
checks[3].name = CALLPATH + randLLQuery() + "&radius=5000&type=restaurant&keyword=lunch"
checks[4].name = CALLPATH + randLLQuery() + "&radius=5000&type=tourist_attraction"
checks[5].name = CALLPATH + randLLQuery() + "&radius=5000&type=museum"
checks[6].name = CALLPATH + randLLQuery() + "&radius=5000&type=restaurant&keyword=dinner"
checks[7].name = CALLPATH + randLLQuery() + "&radius=5000&type=tourist_attraction"
checks[8].name = CALLPATH + randLLQuery() + "&radius=5000&type=bar&keyword=music"
checks[9].name = CALLPATH + randLLQuery() + "&radius=5000&type=night_club"


//feed params to showApi: user input translates to type and keyword queries
const getPlace= async (query) => {
    const data = await fetch(query)
    const json = await data.json()
    return json.results[0]

}


submitBtn.addEventListener("click", async () =>{
    checkList = []
    for(check of checks){
        if(check.checked){
            checkList.push(check.name)
        }
    }

    const placePromises = checkList.map(async (url) => await getPlace(url))
    const placeResults = await Promise.all(placePromises) 
    console.log(placeResults)

})
