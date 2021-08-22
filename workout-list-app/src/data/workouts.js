// Set example data

const workouts = [
    {
        id: 123456789,
        workoutType: 'Flexibility',
        exercises: [
            {   
                id: 1,
                excersiceName: 'Warm-up',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            },
            {   
                id: 2,
                excersiceName: 'Pull-ups',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            },
            { 
                id: 3,  
                excersiceName: 'Wide push-ups',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            }
            
        ]        
    },
    {
        id: 123456789123456,
        workoutType: 'Aerobic',
        exercises: [
            {   
                id: 1,
                excersiceName: 'Shrugs',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            },
            {   
                id: 2,
                excersiceName: 'Shoulder Press',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            }
            
        ] 
    },
    {
        id: 987654321,
        workoutType: 'Strength',
        exercises: [
            {   
                id: 1,
                excersiceName: 'Weighted Dips',
                repeats: 10,
                sets: 3,
                isCompleted: false,
            },          
        ] 
    },

]

export default workouts