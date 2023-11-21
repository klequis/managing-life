import { formatDate } from "@/lib/formatDate"
import ItemHeader, { ItemHeaderType } from './ItemHeader'
import Contact, { ContactType } from './Contact'
import Note, { NoteType } from "./Note"

export interface ItemType {
  header: ItemHeaderType
  contacts?: ContactType[]
  notes?: [
    {
      header: {createdAt: string
      modifiedAt: string
      }
      body: string
    }
  ]
}

export default function Item({ item }: { item: ItemType }) {
  // console.log('item', item)
  // console.log('item', item.contacts)
  return (
    <div>
      <ItemHeader {...item.header} />
      {item.contacts
        ? <>
          <h3>Contacts</h3>
          {item.contacts?.map(c => <Contact {...c} />)}
        </>
        : ""
      }
      <h3>Notes</h3>
      {
        item.notes?.map(n => {
          console.log('n', n)
          return (
              <Note header={n.header} body={n.body} />
          )
        })
      }
    </div>
  )
}
