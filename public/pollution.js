const display = () => {}
let data = [];


fetch('https://api.airvisual.com/v2/nearest_city?key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')

  //fetch('https://api.airvisual.com/v2/cities?state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
  
//  fetch('https://api.airvisual.com/v2/Brownsburg?lat=39.8434&lon=86.3978&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
  
  .then(function (response) {
    return response.json()
  })
  .then(
    function (results) {
       console.log(results.data)
      //  return results.data 
      displayCities(results.data)      
    },
  )
    function displayCities(items) {
      console.log(items)
      data = items.forEach((city) => {
        data.push(city)
        
      }); 
      console.log(data);
    };

fetch('https://api.airvisual.com/v2/city?city=Brownsburg&state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a') 
            .then(function (response) {
             return response.json()
                 })
                .then(
                function (results) {
                    console.log(results.data)
                displayIndiana(results.data2)      
                },
                    )
      function displayIndiana(items) {
        console.log(items)
        
        data = items.forEach((city2) => {
          data.push(city2)
          
        }); 
        console.log(city2);
      };

fetch('https://api.airvisual.com/v2/city?city=Brownsburg&state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
     .then(function (response) {
        return response.json()
      })
      .then(
        function (results) {
            console.log(results.data)
          displayBrownsburg(results.data3)      
        },
      )
        function displayBrownsburg(items) {
          console.log(items)
          data = items.forEach((city3) => {
            data.push(city3)
            
          }); 
          console.log(data3);
        };