function gradeStudent(marks) {
    if (marks > 90) {
      return 'A Grade';
    } else if (marks >= 70 && marks <= 90) {
      return 'B Grade';
    } else if (marks >= 50 && marks < 70) {
      return 'C Grade';
    } else {
      return 'F Grade';
    }
  }
  
  // Example usage:
  const marks = 85;
  console.log(`The grade for ${marks} marks is: ${gradeStudent(marks)}`);
  