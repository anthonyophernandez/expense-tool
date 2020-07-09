import { Server } from 'miragejs'
import typesJSON from './types.json'
import categoriesJSON from './categories.json'
import expensesJSON from './expenses.json'

export default function () {
  const server = new Server()

  server.namespace = 'api'

  server.get('/types', ({ db }, request) => db.types)
  server.get('/categories', ({ db }, request) => db.categories)
  server.get('/expenses', ({ db }, request) => db.expenses)

  server.db.loadData({ types: typesJSON })
  server.db.loadData({ categories: categoriesJSON })
  server.db.loadData({ expenses: expensesJSON })
}
