import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface IProps {
  handleOpenCreateActivity: () => void;
}

export const NavBar: React.FC<IProps> = ({ handleOpenCreateActivity }) => {
  return (
    <Menu fixed="top" inverted >
      <Container>
        <Menu.Item Header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}} /> Reactivities
        </Menu.Item>
        <Menu.Item>
          <Button onClick={() => handleOpenCreateActivity()} positive content="Create Activity"></Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}
