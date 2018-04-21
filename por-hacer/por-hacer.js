const fs = require('fs');

let listadoPorhacer = [];

const cargarDB = () => {

    try {

        listadoPorhacer = require('../db/data.json');

    } catch (error) {
        listadoPorhacer = [];
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('no se puedo grabar', err);
    });
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = () => {

    cargarDB();
    return listadoPorhacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB()

    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = (descripcion) => {
    cargarDB()

    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorhacer.splice(index, 1)
        guardarDB();
        return true;
    }
    return false;

    //Forma 2 : 
    // let nuevoListado = listadoPorhacer.findIndex(tarea => {
    //     return tarea.descripcion !== descripcion
    // });

    // if (listadoPorhacer.lenght === nuevoListado.lenght) {
    //     return false;
    // } else {
    //     listadoPorhacer = nuevoListado;
    //     guardarDB();
    //     return true ;
    // }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}