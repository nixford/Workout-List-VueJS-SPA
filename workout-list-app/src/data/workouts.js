const workouts = [
    {
        id: 1,
        workoutType: 'Flexibility',
        exercises: [
            {   
                excersiceName: 'Warm-up',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            },
            {   
                excersiceName: 'Pull-ups',
                repeats: 10,
                sets: 3,
                isCompleted: true,
            },
            {   
                excersiceName: 'Wide push-ups',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            }
            
        ]        
    },
    {
        id: 2,
        workoutType: 'Aerobic',
        exercises: [
            {   
                excersiceName: 'Shrugs',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            },
            {   
                excersiceName: 'Shoulder Press',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            }
            
        ] 
    },
    {
        id: 3,
        workoutType: 'Strength',
        exercises: [
            {   
                excersiceName: 'Weighted Dips',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            },          
        ] 
    },

]

export default workouts