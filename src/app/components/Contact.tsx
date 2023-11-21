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

export default function Contact({
  id,
  name,
  address,
  phones
}: ContactType) {
  console.log('phones', phones)

  return (
    <div>
      <h4>{name}</h4>
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