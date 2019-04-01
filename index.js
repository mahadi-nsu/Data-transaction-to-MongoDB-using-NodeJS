//import
const mongoose = require('mongoose');


// Connection SetUP
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to mongoDB"))
    .catch((err) => console.error("Not Connected", err));


// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Models
//here course is a class
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    //Example course
    //Should come from frontend 
    //for example here i am giving the values
    const course = new Course({
        name: 'Live Training on Node',
        author: 'Mahadi',
        tags: ['Node', 'Express', 'Backend'],
        isPublished: true
    });

    //Save to the Database
    //This is a asynchrous work

    const result = await course.save();
    console.log(result);
}


async function getCourses() {
    const courses = await Course
        .find({
            //passing filter here
            author: 'Mahadi',
            isPublished: true
        });
    console.log(courses);
}

//Calling the function 
// createCourse();
getCourses();

