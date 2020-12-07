import React from 'react'
import Person from './disbursedPerson'

function Disbursed(){
const persons = [
    {
        id: 'A201122052',
        loan : 100000,
        status : 'Closed',
        emi_due_date : '05 Dec 21',
        next_pay_amt : 9200,
        repay : 'Repayment',
        name : 'Sharad Argade',
        inst_name : 'Miles Education Private Ltd',
        course_amt : 109800,
        outstanding : 55200,
        paid_emi : 7,
        total_emi: 12,


    },
    {
        id: 'A201122053',
        loan : 27000,
        status : 'EMI running',
        emi_due_date : '07 Nov 20',
        next_pay_amt : 9000,
        repay : 'Repayment',
        name : 'Vineet Kumar',
        inst_name : 'Unacademy',
        course_amt : 27000,
        outstanding : 18000,
        paid_emi : 2,
        total_emi: 3,

    },
    {
        id: 'A201122089',
        loan : 85500,
        status : 'EMI running',
        emi_due_date : '05 Dec 21',
        next_pay_amt : 9000,
        repay : 'Repayment',
        name : 'Sharad Patil',
        inst_name : 'Imparticus Learning',
        course_amt : 120000,
        outstanding : 55200,
        paid_emi : 7,
        total_emi: 9,

    },
    {
        id: 'A201122065',
        loan : 500000,
        status : 'EMI Running',
        emi_due_date : '05 Feb 21',
        next_pay_amt : 9000,
        repay : 'Repayment',
        name : 'Monu Argade',
        inst_name : 'Miles Education Private Ltd',
        course_amt : 500000,
        outstanding : 50000,
        paid_emi : 9,
        total_emi: 10,

    },
    {
        id: 'A201122045',
        loan : 95000,
        status : 'EMI running',
        emi_due_date : '07 Nov 21',
        next_pay_amt : 9500,
        repay : 'Repayment',
        name : 'Sharad Argade',
        inst_name : 'Great Lakes Institute of Management',
        course_amt : 109800,
        outstanding : 85500,
        paid_emi : 1,
        total_emi: 12,

    },
]
const personList = persons.map(person =><Person key={person.id} person={person} />)
return <div>{personList}</div>
}
export default Disbursed