checks = document.getElementsByClassName("checks")
submitBtn = document.querySelector("#submit")
console.log(checks)

function randLLQuery(){
    const LATF = 6.15649818383
    const LONGF = 7.35564545789
    const lat = (30.22443 + (Math.random()/LATF)).toFixed(5)
    const long = (-97.82211 + (Math.random()/LONGF)).toFixed(5)
    return `${lat},${long}`
}
console.log(randLLQuery())

checks[0].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[1].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[2].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[3].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[4].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[5].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[6].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[7].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[8].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`
checks[9].innerHTML = `?${randLLQuery()}&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc`


//create func to return random lat/long within atx geo-rectangle DONE
//feed params to showApi: user input translates to type and keyword queries
//      rand lat/long passed as location value
const showApi = async () => {
    //place search for type restaurant with keyword dinner in Austin
    //within 600m of lat/long 30.2672,-97.741
    const data = await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.2672,-97.741&radius=600&opennow&type=restaurant&keyword=dinner&key=AIzaSyD4iATDK-gfM5Q_mSWMhrfBjxnval2wzvc")
    const json = await data.json()
    return json

}

submitBtn.addEventListener("click", async () =>{
    // json = await showApi()
    // console.log(json)
    // for(place of json.results){
    //     console.log(place.name)
    // }
    for(check of checks){
        console.log(check.checked)
    }

})
