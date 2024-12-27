import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    // dts({ rollupTypes: true })
    dts()
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: '@abw/badger-timestamp',
      fileName: 'badger-timestamp'
    }
  },
  test: {
    include: ['test/**/*.[jt]s'],
    exclude: ['test/library/*.[jt]s'],
    reporters: ['html'],
    outputFile: './tmp/test/index.html',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      reportsDirectory: './tmp/coverage'
    },
  },
})

