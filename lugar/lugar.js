const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    
    const encodedUrl = encodeURI(direccion)
    
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=5e7c77ef65c340fafb508ccb9e2f2d25`
        
    });
    
    const resp = await instance.get()

    if (resp.data.lenght === 0){
        throw new Error(`No hay resultados para ${direccion}`) 
    }

    const ciudad = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        ciudad,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

