#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'

const text  = readFileSync('dist/index.d.ts', { encoding: 'utf8' })

const fixed = text.replace(
  'declare module "Timestamp"',
  'declare module "@abw/badger-timestamp"'
)

writeFileSync('dist/index.d.ts', fixed, { encoding: 'utf8' })

