/**
 * @function trycatch
 * @param {Promise} promise 
 * @returns {Promise<Object|Error>}
 */
module.exports = async function(promise){
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    return [null, error]
  }
}