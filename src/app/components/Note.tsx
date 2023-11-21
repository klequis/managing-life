import NoteHeader, { NoteHeaderType } from "./NoteHeader"
import NoteBody from "./NoteBody"

export interface NoteType {
  header: NoteHeaderType
  body: string
}

export default function Note({
  header,
  body
}: NoteType) {
  console.log('Note.body',typeof body )
  return (
    <>
      <NoteHeader {...header} />
      <NoteBody body={body} />
    </>
  )
}