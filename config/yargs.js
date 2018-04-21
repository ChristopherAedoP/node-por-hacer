const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea por hacer.'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea de la lista', {
        descripcion
    })
    .command('listar', 'lista las tareas por hacer')
    .help()
    .argv;

module.exports = {
    argv
}