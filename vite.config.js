import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { coverageConfigDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./test-setup.js"],
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      exclude: ['./src/index.jsx', ...coverageConfigDefaults.exclude]
    }
  }
})
