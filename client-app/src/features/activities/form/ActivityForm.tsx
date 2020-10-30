import React, { ChangeEvent } from 'react'
import { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/actvity'
import { v4 as uuid } from 'uuid'; 

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  submitting: boolean;
}

export const ActivityForm: React.FC<IProps> = ({ setEditMode, activity : initializeFormState, createActivity, submitting, editActivity }) => {
  
  const initializeForm = () => {
    if (initializeFormState) {
      return initializeFormState
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
      };
    }
  }

  const [activity, setActivity] = useState<IActivity>(initializeForm);



  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = event.target;
    setActivity({...activity, [name]: value})
  }

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity, 
        id: uuid()
      }
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
      
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Input onChange={handleInputChange} name='title' placeholder='title' value={activity.title}/>
        <Form.TextArea rows={2} onChange={handleInputChange} name='description' placeholder='description' value={activity.description}/>
        <Form.Input onChange={handleInputChange} name='category' placeholder='category' value={activity.category} />
        <Form.Input onChange={handleInputChange} name='date' type='datetime-local' placeholder='date' value={activity.date}/>
        <Form.Input onChange={handleInputChange} name='city' placeholder='city' value={activity.city}/>
        <Form.Input onChange={handleInputChange} name='venue' placeholder='venue' value={activity.venue} />
        <Button.Group widths={2}>
          <Button loading={submitting} color='green' type='submit' name='saveForm' content='Save' />
          <Button onClick={() => setEditMode(false)} color='grey' basic  name='cancelForm' content='Cancel' />
        </Button.Group>
      </Form>
    </Segment>
  )
}
