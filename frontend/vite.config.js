import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('Vite config loaded — cwd:', process.cwd())

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
