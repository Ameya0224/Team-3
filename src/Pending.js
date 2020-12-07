import React from 'react'
import Person from './pendingPerson'

function Pending(){
const persons = [
    {
        id: 'A201204009',
        loan : 123456,
        submission_date : '05 Dec 21',
        type_of_loan : 'College Loan',
        status : 'Documents Pending',
        edit_continue : 'Edit',
        name : 'Aman Banerjee',
        inst_name : 'Miles Education Private Ltd',
        course_amt : 109800,
    },
    {
        id: 'A201122044',
        loan : 100000,
        submission_date : '05 Dec 20',
        type_of_loan : 'College Loan',
        status : 'Under Assessmment',
        edit_continue : 'Continue',
        name : 'Ravi Ashwin',
        inst_name : 'XLRI',
        course_amt : 109800,
    },
    {
        id: 'A201122082',
        loan : 50000,
        submission_date : '25 Nov 20',
        type_of_loan : 'Certification Loan',
        status : 'Documents Pending',
        edit_continue : 'Edit',
        name : 'Joel Fernandes',
        inst_name : 'Great Lakes',
        course_amt : 50000,
    },
    {
        id: 'A201122102',
        loan : 230000,
        submission_date : '29 Oct 20',
        type_of_loan : 'Certification Loan',
        status : 'Application Incomplete',
        edit_continue : 'Edit',
        name : 'Harshad Mehta',
        inst_name : 'Coursera',
        course_amt : 300000,
    },
    {
        id: 'A201122992',
        loan : 120000,
        submission_date : '05 Dec 20',
        type_of_loan : 'College Loan',
        status : 'Under Assessment',
        edit_continue : 'Complete',
        name : 'Vithhal Kumar',
        inst_name : 'Arena Animation',
        course_amt : 109800,
    },
]
const personList = persons.map(person =><Person key={person.id} person={person} />)
return <div>{personList}</div>
}
export default Pending