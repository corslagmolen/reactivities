import React, { SyntheticEvent } from 'react'
import { Item, Segment, Button, Label } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/actvity'

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}

export const ActivityList: React.FC<IProps> = ({activities, target, submitting, selectActivity, deleteActivity}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map(activity => (
          <Item>
          <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
            <Item.Meta>{activity.date}</Item.Meta>
            <Item.Description>
              <div>{activity.description}</div>
              <div>{activity.city}, {activity.venue}</div>
            </Item.Description>
              <Item.Extra>
                <Button onClick={() => selectActivity(activity.id)} floated='right' content='view' color='blue'></Button>
                <Button name={activity.id} loading={target === activity.id  &&submitting} onClick={(event) => deleteActivity(event, activity.id)} floated='right' content='delete' color='red'></Button>
                <Label basic content={activity.category}></Label>
              </Item.Extra>
          </Item.Content>
        </Item>
        ))}
      </Item.Group>
    </Segment>
  )
}
