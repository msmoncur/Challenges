function createExerciseLogger(){
    return function(exercise){
        return `Today's exercise: ${exercise}`; 
    }; 
}


const exercise = createExerciseLogger(); 
console.log(exercise("Running")); 
console.log(exercise("Swimming")); 
console.log(exercise("Dancing")); 
console.log(exercise("Fencing"));
