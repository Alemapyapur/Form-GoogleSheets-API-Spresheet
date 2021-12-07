import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'

const color = [ 'teal' ]

const panel = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

class NavBar extends Component {

  render() {

    return (
      <div>

        <Divider hidden />

        <Tab
          menu={{ color, inverted: true, attached: false, tabular: false }}
          panel={panel}
        />
      </div>
    )
  }
}

export default NavBar;
