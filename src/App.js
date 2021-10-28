import React, { useState } from "react"
import styled from "styled-components"
import sample from "./sample.png"
import "./App.css"

const Tooltip = styled.div((props) => {
  const { top, left } = props
  return `
    position: absolute;
    z-index: 10;
    top: ${top}px;
    left: ${left}px;

    background-color: black;
    color: white;
    border-radius: 8px;
    padding: 8px;

    &:after {
      
    }
  `
})

const App = () => {
  const [tooltipData, setTooltipData] = useState(null)

  const handleTooltip = (e) => {
    e.preventDefault()
    const title = e.target.title
    const coords = e.target.coords
    const alt = e.target.alt

    const top = coords.split(",").pop()
    const left = coords.split(",").slice(2, 3)[0]

    if (title && coords && alt) {
      const data = {
        title,
        left,
        top,
        children: <p>{alt}</p>,
      }

      setTooltipData(data)
    }
  }

  return (
    <div className="App">
      {tooltipData && <Tooltip {...tooltipData} />}

      <img src={sample} usemap="#image-map" />

      <map
        name="image-map"
        onMouseOver={handleTooltip}
        onMouseOut={() => setTooltipData(null)}
      >
        <area
          alt="here are the books"
          title="books"
          href=""
          coords="858,337,299,120"
          shape="rect"
        />
        <area
          alt="they use their head"
          title="head"
          href=""
          coords="1172,187,147"
          shape="circle"
        />
        <area
          alt="this is a PC"
          title="computer"
          href=""
          coords="740,380,803,585,991,646,1121,561,1003,502,960,341"
          shape="poly"
        />
      </map>
    </div>
  )
}

export default App
