import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name exactly.
// If deploying to https://<username>.github.io/<repo-name>/  ->  base: '/<repo-name>/'
// If deploying to a custom domain or a <username>.github.io root repo -> base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
})
