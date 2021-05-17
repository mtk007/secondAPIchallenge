const display = () => {
  
};
  
fetch('http://api.airvisual.com/v2/countries?key={{3e48273e-816e-40dc-bc0c-a40ef1e4a37a}}')
.then(function(response)
    {
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson)
    })

const apiUrl = 'http://api.airvisual.com/v2/countries?key={{3e48273e-816e-40dc-bc0c-a40ef1e4a37a}}';
const name = '';
const retrieveLocation = async (id) => {
};

