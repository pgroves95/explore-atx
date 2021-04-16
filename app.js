checks = document.getElementsByClassName("checks")
submitBtn = document.querySelector("#submit")
schedule = document.querySelector(".modal-inner")
schedList = document.querySelector("#sched-list")
mornBlock = document.getElementsByClassName("m")
aftBlock = document.getElementsByClassName("a")
evenBlock = document.getElementsByClassName("e")
lateBlock = document.querySelector(".l")
resetBtn = document.querySelector("#reset")



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



resetBtn.addEventListener("click", () => {
    for(check of checks){
        if (check.checked){
            check.checked = false;
        }
    }
    location.reload()
})


submitBtn.addEventListener("click", () =>{
    checkList = []
    for(check of checks){
        if(check.checked){
            checkList.push({
                id : check.id[0],
                url : check.name
            })
        }
    }


    const placeResults = checkList.map(async (item) => {
            const placeObj = {}
            const data = await fetch(item.url)
            const json = await data.json()
            const place = await json.results[0]
            placeObj.id = item.id
            placeObj.json = await place
            placeObj.ll = await place.geometry.location
            return placeObj
        
    })
    Promise.all(placeResults)
        .then(results => results.forEach( result => {
            console.log(result)
            if(result.id === "m"){
                if(mornBlock[0].innerText.includes("OPEN")){
                    mornBlock[0].innerHTML = mornBlock[0].innerText.replace("OPEN", `${result.json.name},<br><a href="https://google.com/maps/place/${result.ll.lat},${result.ll.lng}">Directions</a>`)
                    return;
                }
                else if(mornBlock[1].innerText.includes("OPEN") && !mornBlock[0].innerText.includes(result.json.name)){
                    mornBlock[1].innerHTML = mornBlock[1].innerText.replace("OPEN", `${result.json.name},<br><a href="https://google.com/maps/place/${result.ll.lat},${result.ll.lng}">Directions</a>`)
                    return;
                }
                else return;
            }
            else if(result.id === "a"){
                    if(aftBlock[0].innerText.includes("OPEN")){
                        aftBlock[0].innerHTML = aftBlock[0].innerText.replace("OPEN", `${result.json.name},<br><a href="https://google.com/maps/place/${result.ll.lat},${result.ll.lng}">Directions</a>`)
                        return;
                    }
                    else if(aftBlock[1].innerText.includes("OPEN") && !aftBlock[0].innerText.includes(result.json.name)){
                        aftBlock[1].innerHTML = aftBlock[1].innerText.replace("OPEN", `${result.json.name},<br><a href="https://google.com/maps/place/${result.ll.lat},${result.ll.lng}">Directions</a>`)
                        return;
                    }
                    else return;
                }
            else if(result.id === "e"){
                    if(evenBlock[0].innerText.includes("OPEN")){
                        evenBlock[0].innerHTML = evenBlock[0].innerText.replace("OPEN", `${result.json.name},<br><a href="https://google.com/maps/place/${result.ll.lat},${result.ll.lng}">Directions</a>`)
                        return;
                    }
                    else if(evenBlock[1].innerText.includes("OPEN") && !evenBlock[0].innerText.includes(result.json.name)){
                        evenBlock[1].innerHTML = evenBlock[1].innerText.replace("OPEN", `${result.json.name},<br><a href="https://google.com/maps/place/${result.ll.lat},${result.ll.lng}">Directions</a>`)
                        return;
                    }
                    else return;
        }
            else {
                lateBlock.innerHTML = lateBlock.innerText.replace("OPEN", `${result.json.name},<br><a href="https://google.com/maps/place/${result.ll.lat},${result.ll.lng}">Directions</a>`)
                        return;
            };
        }), setTimeout(() => schedule.style.display = "flex", 2500))




    
})