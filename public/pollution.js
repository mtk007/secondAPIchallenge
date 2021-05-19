const display = () => {}
let data = [];


fetch('https://api.airvisual.com/v2/nearest_city?key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
  .then(function (response) {
    return response.json()
  })
  .then(
    function (results) {
       console.log(results.data)
      //  return results.data 
      displayIndy(results.data)      
    },
  )
    function displayIndy(items) {
      data = items.forEach((city) => {
        data.push(city)
        
      }); 
      console.log(city);
    };

fetch('https://api.airvisual.com/v2/city?city=Brownsburg&state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a') 
            .then(function (response) {
             return response.json()
                 })
                .then(
                function (results) {
                    console.log(results.data)
                displayBrownsburg(results.data2)      
                },
                    )
      function displayBrownsburg(items) {
        
        data = items.forEach((city2) => {
          data.push(city2)
          
        }); 
        console.log(city2);
      };

fetch('https://api.airvisual.com/v2/city?city=Fishers&state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
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
          console.log(city3);
        };

fetch('https://api.airvisual.com/v2/city?city=Greencastle&state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')
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
             data = items.forEach((city4) => {
               data.push(city4)
               
             }); 
             console.log(city4);
           };

  fetch('https://api.airvisual.com/v2/cities?state=Indiana&country=USA&key=3e48273e-816e-40dc-bc0c-a40ef1e4a37a')

  .then(function (response) {
    return response.json()
  })
  .then(
    function (results) {
        console.log(results.data)
      displayAll(results.data3)      
    },
  )
    function displayAll(items) {
      console.log(items)
      data = items.forEach((allCities) => {
        data.push(allCities)
        
      }); 
      console.log(allCities);
    };

