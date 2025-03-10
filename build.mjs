import { build } from 'vite'

async function buildApp() {
  try {
    await build({
      configFile: './vite.config.js'
    })
    console.log('Build completed successfully!')
  } catch (e) {
    console.error('Build failed:', e)
    process.exit(1)
  }
}

buildApp() 