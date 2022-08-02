const fs = require('fs')
const path = require('path')

/**
 * @function logError
 * @param {Error} error 
 */
module.exports = function(error){
  if(error){
    const _date = new Date()
    const y = _date.getFullYear()
    const m = (_date.getMonth()+1).toString().padStart(2,'0')
    const d = _date.getDate().toString().padStart(2, '0')
    const file = path.join(__dirname, '../errors', `error-${d}-${m}-${y}.log`)
    const data = '-'.repeat(50)+'\n'+`TimeStamp: ${new Date().toJSON()}`+'\n'+error.stack.toString()+'\n'+'-'.repeat(50)+'\n'
    const exists = fs.existsSync(file)

    if(exists){
      fs.appendFile(file, data, (err)=>{
        if(err){
          return console.log(err)
        }
      })
    }else{
      fs.writeFile(file, data, 'utf-8', (err)=>{
        if(err){
          return console.log(err)
        }
      })
    }
  }
}