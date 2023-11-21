import { formatDate } from "@/lib/formatDate"
import ItemHeader, { ItemHeaderType } from './ItemHeader'



interface subItemType {
  header: ItemHeaderType
  content: string
}

export interface ItemType {
  header: ItemHeaderType
  contacts?: [
    {
      id: string
      name: string
      address: string
      phone: [
        {
          number: string
          type: "mobile" | "office"
        }
      ]
    }
  ]
  notes?: [
    {
      createdAt: string
      modifiedAt: string
      content: string
    }
  ]
  subItems?: subItemType[]
}

interface Phone {
  number: string
  type: "mobile" | "office"
}

function Phone({ number, type }: Phone) {
  return `${number}, ${type}`

}

export default function Item({ item }: { item: ItemType }) {
  console.log('item', item)
  // console.log('item', item.contacts)
  return (
    <div>
      {/* <h2>{item.header.title}</h2>
      <ul>
        <li>Due: {dueAtFormat(item.dueAt)}</li>
        <li>Created: {formatDate(item.createdAt)}</li>
        <li>Created: {formatDate(item.createdAt)}</li>
        <li>Modified: {formatDate(item.modifiedAt)}</li>
        <li>Completed {completedFormat(item.completedAt)}</li>
      </ul> */}
      <ItemHeader {...item.header} />
      <h3>Contacts</h3>
      {
        item.contacts?.map(c => {
          return (
            <div>
              <h4>{c.name}</h4>
              <ul>
                <li>Address: {c.address}</li>
                {
                  c.phone.map((p: Phone) => <Phone {...p} />)
                }
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
        item.subItems?.map((si: ItemType) => {
          return <Item item={si} />
        })
      }
    </div>
  )
}
