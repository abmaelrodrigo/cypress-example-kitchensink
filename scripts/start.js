const { execSync } = require('child_process')

const port = process.env.PORT || 3000
let cmd = `serve --listen ${port} --no-request-logging`

if (process.env.CI) cmd += ` --no-clipboard`

if (process.argv.length > 2) cmd += ` ${process.argv.slice(2).join(' ')}`

// eslint-disable-next-line no-console
console.log(`Running "${cmd}"...`)

execSync(cmd, { stdio: 'inherit' })
