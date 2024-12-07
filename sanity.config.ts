import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanityStudio',

  projectId: 'bkvrlxx2',
  dataset: 'production',
  basePath: "/studio",
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
