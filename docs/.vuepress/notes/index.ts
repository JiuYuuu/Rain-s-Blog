import { defineNotesConfig } from 'vuepress-theme-plume'
import read from './read'

export default defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        read
    ]
})