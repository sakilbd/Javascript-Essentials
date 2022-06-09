function gradingStudents(grades) {
    // Write your code here
    // return grades;
    if (grades < 38) {
        return grades;
    } else if (grades >= 38) {
        let i = grades.toString()[0];

        let multiplier = parseInt(i) * 10;

        multiplier - grades < 0 & multiplier - grades > -5 ? multiplier = multiplier + 5 : multiplier;
        let grace = multiplier - grades;
        // console.log(grace);

        grace < -5 ? multiplier = multiplier + 10 : grace;
        // console.log(multiplier);
        let finalGrace = multiplier - grades;
        // console.log(finalGrace);
        return finalGrace < 3 ? multiplier : grades;


    }

}



console.log(gradingStudents(4));