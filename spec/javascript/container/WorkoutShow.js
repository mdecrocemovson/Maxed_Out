import WorkoutShow from '../../../app/javascript/react/containers/WorkoutShow'
import SetCollectionForm from '../../../app/javascript/react/containers/SetCollectionForm'
import SetCollectionShow from '../../../app/javascript/react/components/SetCollectionShow'
import WorkoutDescription from
'../../../app/javascript/react/components/WorkoutDescription'
import fetchMock from 'fetch-mock'

describe('WorkoutShow', () => {
  beforeEach(() => {
    workoutData = {
      workout: {
        id: 1,
        performed_on: '2018-10-17T18:48:14.235Z',
        location: "289 D Street",
        goal: "Get huge",
        review: "Felt great.",
        user: {
          id: 1,
          email: "jakemovson@gmail.com",
          password:
          "wow",
          created_at: "2018-10-17T18:33:23.105Z",
         updated_at: "2018-10-17T18:33:23.105Z",
        }
      }
    }
    setCollectionData = {
      id: 1,
      sets: 2,
      reps: 3,
      weight: 285,
      exercise: {
        name: "Bench Press",
        description: "Lay down on your back on the bench. Use a medium width grip and lift the bar off the rack. Bring the bar down to your chest until it touches your body. Breathe out as you push the bar back into the air. Repeat."
      }
    }

    userData = {
      id: 1,
      email: "jakemovson@gmail.com",
      created_at: "2018-10-17T18:33:23.105Z",
      updated_at: "2018-10-17T18:33:23.105Z",
    }
  })

  fetchMock.get('/api/v1/workouts/1'), {
    status: 200,
    body: workoutData
  }

  fetchMock.get('/api/v1/set_collections/1', {
    status: 200,
    body: setCollectionData
  })
})
