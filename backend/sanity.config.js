import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const singletonTypes = new Set(['homePage', 'achintyaPage', 'contactSettings'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Shohojatri',

  projectId: 'cbinx0cl',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton for Home Page
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            // Singleton for Achintya Page
            S.listItem()
              .title('Achintya Page')
              .id('achintyaPage')
              .child(
                S.document()
                  .schemaType('achintyaPage')
                  .documentId('achintyaPage')
              ),
            // Singleton for Contact Settings
            S.listItem()
              .title('Contact Settings')
              .id('contactSettings')
              .child(
                S.document()
                  .schemaType('contactSettings')
                  .documentId('contactSettings')
              ),
              
            S.divider(),
            
            // Regular document types
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (prev) =>
      prev.filter((template) => !singletonTypes.has(template.id)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly allowed
    actions: (prev, {schemaType}) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({action}) => action && singletonActions.has(action))
        : prev,
  },
})

