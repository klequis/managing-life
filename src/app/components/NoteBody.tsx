
export default function NoteBody({body}: {body: string}) {
  console.log('NoteBody.body', typeof body )
  return <div>{body}</div>
  // return ""
}