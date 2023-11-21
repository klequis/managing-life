import { promises as fs } from 'fs'
import { ItemType } from './components/Item'
import Item from './components/Item'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/data.json', 'utf8')
  const data: ItemType[] = JSON.parse(file)
  // console.log('data', data)
  return (
    <main>
      <h1>Items</h1>
      <div>
      {
        data.map((i: ItemType) => {
          return <Item item={i} />
        })
      }
      </div>
    </main >
  )
}
