import * as React from "react"
import viewPassesStyle from "./ViewPasses.module.css"

export default function Pass(item) {
  const startDate = item.start

  return (
    <div className={viewPassesStyle.card}>
      <div>
        <p>Name: </p>
        <p> Email:</p>
        <p>Phone:</p>
        <p>Duration:</p>
        <p>Start Date:</p>
        <p>Start Time: </p>
      </div>
      <div className={viewPassesStyle.item}>
        <p>{item.generateId} </p>
        <p> {item.name}</p>
        <p> {item.email}</p>
        <p>{item.phone}</p>
        <p>{item.duration}</p>
        <p>{startDate?.substring(0,10)}</p>
        <p>{startDate?.substring(11, startDate.length-8)}</p>
      </div>
    </div>
  )
}
