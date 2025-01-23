/**
 * Aquesta funcio suma tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function suma(...valors) {
    
}


/**
 * Aquesta funcio multiplica tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function multiplica(...valors) {
    return valors.reduce((acc, valor) => acc * valor, 1);
}

module.exports.suma = suma;
module.exports.multiplica = multiplica;