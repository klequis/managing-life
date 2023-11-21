import DateBox from "./DateBox"
import { formatDate } from "@/lib/formatDate"

export interface NoteHeaderType {
  createdAt: string
  modifiedAt: string
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center'
}

export default function NoteHeader({ createdAt, modifiedAt }: NoteHeaderType) {
  return (
    <div style={headerStyle}>
      <DateBox dte={formatDate(createdAt)} lbl="Created" />
    </div>
  )
}