import React from 'react'
import {Table, Icon} from 'semantic-ui-react'

export default class Stock extends React.Component {
  render(){
    let stock = this.props.stock
    return(
      <Table.Row>
        {Object.values(stock).map(x=><Table.Cell>{x}</Table.Cell>)}
      </Table.Row>
    )
  }
}
