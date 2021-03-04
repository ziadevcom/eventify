import React from "react"
import { css } from "@emotion/react"
import Hello from "./Hello.js"

const App = () => {
  return (
    <div
      css={css`
        background-color: pink;
      `}
    >
      <h1>I'm yellow</h1>
      <Hello />
    </div>
  )
}
