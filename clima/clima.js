const axios = require('axios');


const getClima = async(lat, lng) => {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5e7c77ef65c340fafb508ccb9e2f2d25&units=metric`);

   return resp.data.main.temp;
}


module.exports = {
    getClima
}