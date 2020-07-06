import { Server } from 'miragejs'
import typesJSON from './types.json'

export default function () {
  const server = new Server()

  server.namespace = 'api'

  server.get('/types', ({ db }, request) => db.types)

  server.db.loadData({ types: typesJSON })
}
