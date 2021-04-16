const cleanClasses = (classTables) => {
    return {
        courseName: classTables.courseName,
        schedule: classTables.schedule,
    }
}


const cleanAssignments = (assignments) => {
    return {
        assignmentName: assignments.assignmentName,
        assignmentType: assignments.assignmentType,
        dueDate: assignments.dueDate,
        description: assignments.description
    }
}

module.exports = {
    cleanClasses,
    cleanAssignments
}
