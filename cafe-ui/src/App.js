import React from "react"
import Home from "./components/Home"
import {Card} from "antd"


const App = (props) => {

  return(
    <div>
      <h1>Cafe Order Management</h1>
      <Card
        bordered={false}
        style={{
          width: 600,
        }}
        center={true}
      >
        < Home />
      </Card>   
    </div>
  )
}

export default App
