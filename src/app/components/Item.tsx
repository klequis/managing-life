import { formatDate } from "@/lib/formatDate"

interface subItem {
  createdAt: string
  modifiedAt: string
  completedAt ?: string
  dueAt?: string
  title: string
  content: string
}

export interface ItemType {
  createdAt: string
  modifiedAt: string
  completedAt?: string
  dueAt?: string
  title: string
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
  subItems?: subItem[]
}

function Phone({number, type}: {number: string, type: "mobile | office"}) {
  return `${number}, ${type}`
  
}

function dueAtFormat(dte: string | undefined): string {
  return dte === undefined ? "None" : formatDate(dte)
}

function completedFormat(dte: string | undefined): string {
  return dte === undefined ? "No" : formatDate(dte)
}

export default function Item({item}: {item: ItemType}) {
  // console.log('item', item)
  // console.log('item', item.contacts)
  return (
    <div>
      <h2>{item.title}</h2>
      <ul>
        <li>Due: {dueAtFormat(item.dueAt)}</li>
        <li>Created: {formatDate(item.createdAt)}</li>
        <li>Created: {formatDate(item.createdAt)}</li>
        <li>Modified: {formatDate(item.modifiedAt)}</li>
        <li>Completed {completedFormat(item.completedAt)}</li>
      </ul>
      <h3>Contacts</h3>
      {
        item.contacts?.map(c => {
          return (
            <div>
              <h4>{c.name}</h4>
              <ul>
                <li>Address: {c.address}</li>
                {
                  c.phone.map(p => <Phone p />)
                }
                {/* <li>Mobile {c.phone } </li>
                <li>Office {c.office}</li> */}
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
