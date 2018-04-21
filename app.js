const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();

        console.log('===========Por Hacer ========'.green)
        for (const tarea of listado) {

            console.log('===>'.blue)
            console.log('+', tarea.descripcion)
            if (tarea.completado === true) {
                console.log(colors.green('Completado'))
            } else {
                console.log(colors.red('Pendiente'))
            }
        }
        console.log('=========== Por Hacer ========'.green)
        break;
    case 'actualizar':
        console.log('actualizar')

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;
    case 'borrar':
        console.log('borrar')

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;
    default:
        console.log('comando no reconocido')
        break;
}