export interface PhoneType {
  number: string
  type: "mobile" | "office"
}

export interface ContactType {
  id: string
  name: string
  address: string
  phones: PhoneType[]
}

function Phone({ number, type }: PhoneType) {
  return `${number}, ${type}`
}

const h4Style = {
  marginBlockEnd: '0.3325em'

  
}

export default function Contact({
  id,
  name,
  address,
  phones
}: ContactType) {

  return (
    <div>
      <h4 style={h4Style}>{name}</h4>
      {address !== '' ? <div>{address}</div> : ''}
      { phones !== undefined
        ? phones.map((p: PhoneType) => {
          return <Phone {...p} />
        })
        : ""
      }
    </div>
  )
}