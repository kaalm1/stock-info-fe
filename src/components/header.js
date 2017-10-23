import React from 'react'
import {Table, Icon} from 'semantic-ui-react'

export default class Stock extends React.Component {
  render(){
    let headers = this.props.headers
    return(
      <Table.Row>
        {headers.map(x=><Table.HeaderCell>{x}</Table.HeaderCell>)}
      </Table.Row>
    )
  }
}
