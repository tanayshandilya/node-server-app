#!/bin/usr/env node

const {execSync} = require('child_process')

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'})
  } catch (error) {
    console.log(`Failed to execute ${command}`, error)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/tanayshandilya/node-server-app.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with name ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand)

if(!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCommand)

if(!installedDeps) process.exit(-1)

console.log('Yay!! You are ready to start. Follow the following commands to start.')

console.log(`cd ${repoName} && npm start`)