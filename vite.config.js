import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base:"/gitactionexecom/",
  plugins: [react()],
})
