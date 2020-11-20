import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent } from 'react'
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
  deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
};

export const ActivityDashboard: React.FC<IProps> = ({activities, selectActivity, selectedActivity, editMode, setEditMode, submitting,target, setSelectedActivity, createActivity, editActivity, deleteActivity}) => {
  return (
    <Grid columns={2}>
      <Grid.Column width={10}>
        <ActivityList target={target} submitting={submitting} deleteActivity={deleteActivity} activities={activities} selectActivity={selectActivity} ></ActivityList>
      </Grid.Column>
      <Grid.Column fixed width={6}>
        {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} setSelectedActivity={setSelectedActivity}
           setEditMode={setEditMode}></ActivityDetails>} 
        {editMode && <ActivityForm submitting={submitting} setEditMode={setEditMode} activity={selectedActivity} createActivity={createActivity} editActivity={editActivity}></ActivityForm>}
      </Grid.Column>
    </Grid>
  )
}

export default ActivityDashboard;
