import { formatDate } from "@/lib/formatDate"
import DateBox from './DateBox'

export interface ItemHeaderType {
  createdAt: string
  modifiedAt: string
  completedAt: string | ""
  dueAt: string | ""
  title: string
}

function dueAtFormat(dte: string | ""): string {
  return dte === "" ? "None" : formatDate(dte)
}

function completedFormat(dte: string | ""): string {
  return dte === "" ? "No" : formatDate(dte)
}

const itemHeaderStyle = {
  display: 'flex',
  alignItems: 'center'
}

const h2Style = {
  margin: 0
}

export default function ItemHeader({
  createdAt,
  modifiedAt,
  completedAt,
  dueAt,
  title
}: ItemHeaderType) {
  return (
    <div style={itemHeaderStyle}>
      <h2 style={h2Style}>{title}</h2>
      <DateBox dte={formatDate(createdAt)} lbl="Created" />
      <DateBox dte={formatDate(modifiedAt)} lbl="Modified" />
      <DateBox dte={completedFormat(completedAt)} lbl="Completed" />
      <DateBox dte={dueAtFormat(dueAt)} lbl="Due" />
    </div>
  )
}