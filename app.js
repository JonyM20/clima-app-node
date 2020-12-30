const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* argv.direccion;*/

// lugar.getLugarLatLng(argv.direccion)
// .then(console.log);

// clima.getClima(-35.81,-61.9)
//      .then(console.log)

const getInfo = async( direccion ) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lng) 
        return `El clima de ${coords.ciudad} es de ${temp}°C`
            
    } catch (e) {
           return `No se pudo determinar el clima de ${direccion}`
    }
    
        


    //Salida
    //El clima de XXXXX es de XX C
    //No se pudo determinar el clima de la ciudad indicada
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);

