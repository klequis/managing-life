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
  marginRight: '5px',
  
}

function DateBox({dte, lbl}: {dte: string, lbl: string}) {
  return (
    <div style={dateBoxStyle}>
      <div>{lbl}</div>
      <div>{dte}</div>
    </div>
  )
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
      <DateBox dte={formatDate(modifiedAt)} lbl="Modified"/>
      <DateBox dte={completedFormat(completedAt)} lbl="Completed" />
      <DateBox dte={dueAtFormat(dueAt)} lbl="Due" />
    </div>
  )
}