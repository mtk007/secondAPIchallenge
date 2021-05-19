const display = () => {}
let data = []

//fetch('https://api.airvisual.com/v2/nearest_station?lat={{39}}&lon={{86}}&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')

  fetch('https://api.airvisual.com/v2/cities?state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
  
  fetch('https://api.airvisual.com/v2/Brownsburg?lat=39.8434&lon=86.3978&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
  
  .then(function (response) {
    return response.json()
  })
  .then(
    function (results) {
      //  console.log(results.data)
      //  return results.data 
      displayBrownsburg(results.data)      
    },
  )
    function displayCities(items) {
      console.log(items)
      data = items.forEach((city) => {
        data.push(city)
        
      }); 
      console.log(data);

     fetch('https://api.airvisual.com/v2/city?city=Brownsburg&state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a') 
      .then(function (response) {
        return response.json()
      })
      .then(
        function (results) {
          //  console.log(results.data)
          //  return results.data 
          displayBrownsburg(results.data)      
        },
      )
        function displayCities(items) {
          console.log(items)
          data = items.forEach((city) => {
            data.push(city)
            
          }); 
          console.log(data);

        fetch('https://api.airvisual.com/v2/Brownsburg?lat=39.8434&lon=86.3978&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')

      /*let table = document.createElement('table')
      let row = document.createElement('tr')
      let th1 = document.createElement('th')
      let th2 = document.createElement('th')
      let th3 = document.createElement('th')
      let th4 = document.createElement('th')
      section.appendChild(table)
      table.appendChild(row)
      row.appendChild(th1)
      row.appendChild(th2)
      row.appendChild(th3)
      row.appendChild(th4)
      th1.innerHTML = 'city'
      th2.innerHTML = 'location'
      th3.innerHTML = 'aqius'
      th4.innerHTML = 'pollution'

      items.forEach((data) => {
        let dRow = document.createElement('tr')
        table.appendChild(dRow)

        let iCity = document.createElement('td')

        let iLocation = document.createElement('td')

        let iPollution = document.createElement('td')

        dRow.appendChild(iCity)
        dRow.appendChild(iLocation)
        dRow.appendChild(iAQIUS)
        dRow.appendChild(iPollution)

        ;(iCity.innerHTML = data.city),
          (iLocation.innerHTML = data.location),
          (iCurrent.innerHTML = data.current),
          (iPollution.innerHTML = data.pollution)

        console.log(iCity)
      })
    }
