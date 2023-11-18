{
  name: "joe"
  job: "manage"
  workers: [
    {
      name: "ann"
      job: "finance"
    },
    {
      name: "ken"
      job: "booking"
    }
  ]
}

item: {
  name: String,
  job: String
}

function PrintItem(item) {
  print item.name + item.job
  if (has workers) {
    workers.map(w => PrintItem(w))
  }
}




