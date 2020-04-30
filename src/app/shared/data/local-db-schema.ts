export const localDBSchema: {[key: string]: string} = {
    programme: '++id, name',
    workout: '++id, name, exercises',
    exercise: '++id, name, restTime, nbSerie, ndRepetition, muscles',
    muscle: '++id, name',
    programme_workout: '[programmeId+workoutId], programmeId, workoutId'
  }