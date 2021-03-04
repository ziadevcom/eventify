import React from "react"
import { CssBaseline, Grid } from "@material-ui/core"
import { css, jsx } from "@emotion/react"
import "./index.css"
import Header from "./Header.js"
import Input from "./Input.js"
import Status from "./Status.js"
import History from "./History.js"
import GlobalState from "./GlobalState.js"

const App = () => {
  return (
    <GlobalState>
      <CssBaseline />
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={7}>
          <Header />
        </Grid>
        <Grid item xs={7}>
          <Input />
        </Grid>
        <Grid item xs={7}>
          <Status />
        </Grid>
        <Grid item xs={7}>
          <History />
        </Grid>
      </Grid>
    </GlobalState>
  )
}

export default App
