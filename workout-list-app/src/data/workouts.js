// Set example data

const workouts = [
    {
        id: 1,
        workoutType: 'Flexibility12345678901234567890',
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
                isCompleted: true,
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
        id: 2,
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
        id: 3,
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