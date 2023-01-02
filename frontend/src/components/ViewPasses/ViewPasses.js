import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import viewPassesStyle from "./ViewPasses.module.css"
import axios from "axios"
import Pass from "./Pass"
import { apiUrl } from "../../services/config"

const ViewPasses = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  const fetchPasses = async () => {
    try {
      setError("")
      const res = await axios.get(`${apiUrl}/passes/viewPasses/`, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      setData(res.data.passes)
    } catch (err) {
      if (err.response) {
        setError(err.response.data)
      }
    }
  }

  useEffect(() => {
    fetchPasses()
  }, [])

  return (
    <>
      <div className={viewPassesStyle.ViewPasses}>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item xs={4}>
              <Pass
                key={item?.id}
                generateId={item?.generateId}
                name={item?.name}
                email={item?.email}
                phone={item?.phone}
                duration={item?.duration}
                start={item?.start}
              />
            </Grid>
          ))}
        </Grid>
        {error?.length > 0 && <div>{error}</div>}
      </div>
    </>
  )
}
export default ViewPasses
