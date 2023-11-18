import { promises as fs } from 'fs'
// You likely need to pass in something like "isSubItem"
// It get the headings right

// Also need to make decision on what properties subitems can have
// Will they be the same as Items or limited?

interface ItemHeader {
  createdAt: string,
  modifiedAt: string
  completedAt: string | null
  dueAt: string
  title: string
}



interface Contact {
  id: number
  name: string
  address?: string
  phone?: [{
    number: string
    type: "mobile" | "office" | "home"
  }]
}

const contact1: Contact = {
  "id": 1000,
  "name": "Sandy Smith",
  "address": "1234 Burning Tree Rd, San Jose, CA",
  phone: [{
    number: "111-111-1111",
    type: "mobile"
  }]
}

interface Item {
  header: ItemHeader
  contacts?: Contact[]
}

const a: ItemHeader = {
  createdAt: "hi",
  modifiedAt: "hi",
  completedAt: "hi",
  dueAt: "hi",
  title: "hi"
}



const b: Item = {
  header: a,
  
}


type Numeric = "numeric"

function formatDate(date) {
  let options = {
    // weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  const d = new Date(date)
  return new Intl.DateTimeFormat(undefined, options).format(d)
}

function RenderItem({item}) {
  // console.log('item', item)
  // console.log('contacts', item.contacts)
  return (
    <div>
      <h2>{item.title}</h2>
      <ul>

        <li>Due: {formatDate(item.dueAt)}</li>
        <li>Created: {formatDate(item.createdAt)}</li>
        <li>Created: {formatDate(item.createdAt)}</li>
        <li>Modified: {formatDate(item.modifiedAt)}</li>
        <li>Completed {item.completedAt === "" ? "No" : "Yes"}</li>
      </ul>
      <h3>Contacts</h3>
      {
        item.contacts?.map(c => {
          return (
            <div>
              <h4>{c.name}</h4>
              <ul>
                <li>Address: {c.address}</li>
                <li>Mobile {c.mobile}</li>
                <li>Office {c.office}</li>
              </ul>
            </div>
          )
        })
      }
      <h3>Notes</h3>
      {
        item.notes?.map(n => {
          return (
            <ul>
              <li>Created: {formatDate(n.createdAt)}</li>
              <li>Modified: {formatDate(n.modifiedAt)}</li>
              <li>{n.content}</li>
            </ul>
          )
        })
      }
      <h3>Sub-items</h3>
      
      {
        item.subItems?.map(si => {
          return <RenderItem item={si} />
        })
      }
    </div>
  )
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/data.json', 'utf8')
  const data = JSON.parse(file)
  console.log('data', data)
  return (
    <main>
      <h1>Items</h1>
      <div>
      {
        data.map(i => {
          return <RenderItem item={i} />
          // console.log('i', i)
        })
      }
      </div>
    </main >
  )
}
