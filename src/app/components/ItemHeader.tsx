import { formatDate } from "@/lib/formatDate"

export interface ItemHeaderType {
  createdAt: string
  modifiedAt: string
  completedAt: string | ""
  dueAt: string | ""
  title: string
}

function dueAtFormat(dte: string | ""): string {
  console.log('dueAtFormat:dte', dte === undefined)
  return dte === "" ? "None" : formatDate(dte)
}

function completedFormat(dte: string | ""): string {
  console.log('completedAtFormat:dte', dte === "")
  return dte === "" ? "No" : formatDate(dte)
}

const dateBoxStyle = {
  border: '1px solid black',
  padding: '2px',
  marginRight: '5px'
}

function DateBox({dte}: {dte: string}) {
  return <span style={dateBoxStyle}>{dte}</span>
}
export default function ItemHeader({
  createdAt,
  modifiedAt,
  completedAt,
  dueAt,
  title
}: ItemHeaderType) {
  return (
    <div>
      <h2>{title}</h2>
      <DateBox dte={formatDate(createdAt)} />
      <DateBox dte={formatDate(modifiedAt)} />
      <DateBox dte={completedFormat(completedAt)} />
      <DateBox dte={dueAtFormat(dueAt)} />
    </div>
  )
}