const dateBoxStyle = {
  border: '1px solid black',
  padding: '2px',
  marginRight: '5px',
}

export default function DateBox({ dte, lbl }: { dte: string, lbl: string }) {
  return (
    <div style={dateBoxStyle}>
      <div>{lbl}</div>
      <div>{dte}</div>
    </div>
  )
}