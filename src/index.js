#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const { parse, resync, stringify } = require('subtitle')

console.log('🔄 Resyncing Subtitles...')

/**
 * Get arguments and file content
 */
const [fileName, delay] = process.argv.slice(2)
const filePath = path.resolve(process.cwd(), fileName)
const fileContent = fs.readFileSync(filePath, 'utf-8')

/**
 * Resync subtitles
 */
const parsedSubtitles = parse(fileContent)
const resyncedSubtitles = resync(parsedSubtitles, Number(delay))

/**
 * Override file
 */
fs.writeFileSync(filePath, stringify(resyncedSubtitles))

console.log('✅ Resync completed!')
