import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/actvity'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'
import { ActivityList } from './ActivityList'

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
};

export const ActivityDashboard: React.FC<IProps> = ({activities, selectActivity, selectedActivity, editMode, setEditMode, setSelectedActivity, createActivity, editActivity, deleteActivity}) => {
  return (
    <Grid columns={2}>
      <Grid.Column width={10}>
        <ActivityList deleteActivity={deleteActivity} activities={activities} selectActivity={selectActivity} ></ActivityList>
      </Grid.Column>
      <Grid.Column fixed width={6}>
        {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} setSelectedActivity={setSelectedActivity}
          setEditMode={setEditMode}></ActivityDetails>} 
        {editMode && <ActivityForm setEditMode={setEditMode} activity={selectedActivity} createActivity={createActivity} editActivity={editActivity}></ActivityForm>}
      </Grid.Column>
    </Grid>
  )
}
