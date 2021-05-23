const display = () => {}
let data = [];
let results = document.getElementById('results')
/* need to set up the calls so they don't call at the same time on every refresh of the page*/

//brownsburg

//fetch("https://airvisual1.p.rapidapi.com/cities/get-information?id=5bc822aa41fdcdf1939e6485", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72",
    "x-rapidapi-host": "airvisual1.p.rapidapi.com"
              }
            })
            .then(response => {
              return response.json()
            })
            .then(
              function (brownsburg) {
                displayCity(brownsburg) 
              }
            )
            .catch(err => {
              console.error(err);
            });


//clermont
     //      fetch("https://airvisual1.p.rapidapi.com/cities/get-information?id=5bc822aa41fdcdf1939e648d", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72",
              "x-rapidapi-host": "airvisual1.p.rapidapi.com"
            }
          })
          .then(response => {
            return response.json()
          })
          .then(
            function (clermont) {
              displayCity(clermont)   
            }
          )
          .catch(err => {
            console.error(err);
          });

  
//speedway
      //    fetch("https://airvisual1.p.rapidapi.com/cities/get-information?id=5bc822ac41fdcdf1939e64fc", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72",
              "x-rapidapi-host": "airvisual1.p.rapidapi.com"
            }
          })
          .then(response => {
            return response.json()
          })
          .then(
            function (speedway) {
              displayCity(speedway)    
            }
          )
          .catch(err => {
            console.error(err);
          });

//zionsville
      //    fetch("https://airvisual1.p.rapidapi.com/cities/get-information?id=5bc822ac41fdcdf1939e650a", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72",
              "x-rapidapi-host": "airvisual1.p.rapidapi.com"
            }
          })
          .then(response => {
            return response.json()
          })
          .then(
            function (zionsville) {
              displayCity(zionsville)   
            }
          )
          .catch(err => {
            console.error(err);
          });

let displayCity=(weatherdata) => {
      console.log(weatherdata.data.city);
      console.log(weatherdata.data.current_measurement.aqius);
      console.log(weatherdata.data.current_weather.wd);
      console.log(weatherdata.data.current_weather.ws);
      let parent = document.createElement('div');  
      let cityName = document.createElement('p');  
      let airQuality = document.createElement('a');
      let windSpeed = document.createElement('s');
      let windDirection = document.createElement('d');
      cityName.innerHTML = (weatherdata.data.city);
      airQuality.innerHTML = (weatherdata.data.current_measurement.aqius);
      windSpeed.innerHTML = (weatherdata.data.current_weather.ws);
      windDirection.innerHTML = (weatherdata.data.current_weather.wd);
      parent.appendChild(cityName);
      results.appendChild(parent);
      parent.appendChild(airQuality);
      results.appendChild(parent);
      parent.appendChild(windSpeed);
      results.appendChild(parent);
      parent.appendChild(windDirection);
      results.appendChild(parent);
    };




//general Pro query
          /*fetch("https://airvisual1.p.rapidapi.com/auto-complete?query=indianapolis", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72",
              "x-rapidapi-host": "airvisual1.p.rapidapi.com"
            }
          })
          .then(response => {
            return response.json()
          })
          .then(
            function (results) {
              console.log(results.data);
            }
          )
          .catch(err => {
            console.error(err);
          });*/



// free API key configs below
          /***************************************************************
          *************************************************************/


/*fetch('https://api.airvisual.com/v2/nearest_city?key=3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72')
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

fetch('https://api.airvisual.com/v2/city?city=Brownsburg&state=Indiana&country=USA&key=3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72') 
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

fetch('https://api.airvisual.com/v2/city?city=Fishers&state=Indiana&country=USA&key=33ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72')
     .then(function (response) {
        return response.json()
      })
      .then(
        function (results) {
            console.log(results.data)
          displayBrownsburg(results.data)      
        },
      )
        function displayBrownsburg(items) {
          console.log(items)
          data = items.forEach((city3) => {
            data.push(city3)
            
          }); 
          console.log(city3);
        };

//fetch('https://api.airvisual.com/v2/city?city=Greencastle&state=Indiana&country=USA&key=3ec19f0389msh7b3a40819ec9bfep18bdedjsnf2a96f4f0c72')
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
           }; */
