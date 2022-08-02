const uuid = require('uuid')
const _resp = {
  /**
   * @function success
   * @param {Function} res 
   * @param {object} data 
   * @param {object} error 
   * @param {Number} code 
   * @returns {void}
   */
  success(res, data, error = null, code = 200){
    res.statusCode = code
    return res.json({
      reqId: uuid.v1(),
      success: true,
      data,
      error,
      timeStamp: new Date().toJSON()
    })
  },
  /**
   * @function failure
   * @param {Function} res 
   * @param {object} data 
   * @param {object} error 
   * @param {Number} code 
   * @returns {void}
   */
  failure(res, error, data = null, code = 400){
    res.statusCode = code
    return res.json({
      reqId: uuid.v1(),
      success: false,
      data,
      error,
      timeStamp: new Date().toJSON()
    })
  },
  /**
   * @function accept
   * @param {Function} res 
   * @param {object} data 
   * @param {object} error 
   * @param {Number} code 
   * @returns {void}
   */
  accept(res, data = null, error = null, code = 302){
    res.statusCode = code
    return res.json({
      reqId: uuid.v1(),
      success: true,
      data,
      error,
      timeStamp: new Date().toJSON()
    })
  },
  /**
   * @function reject
   * @param {Function} res 
   * @param {object} data 
   * @param {object} error 
   * @param {Number} code 
   * @returns {void}
   */
  reject(res, data = null, error = null, code = 402){
    res.statusCode = code
    return res.json({
      reqId: uuid.v1(),
      success: false,
      data,
      error,
      timeStamp: new Date().toJSON()
    })
  }
}

module.exports = _resp