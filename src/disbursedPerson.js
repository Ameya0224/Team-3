import React from 'react'
import styles from './App.css'
import {Card, Button, Accordion} from "react-bootstrap";




function Person({person}) {

    return (
        <div>
            
                            
<Accordion defaultActiveKey="1">
<table class="table">
              <tbody>

                <tr>
                  <td colspan="7" class="brd-none pd0">
                    <div className={styles.cardy} class="card dis-cards">
                      {/* <div class="card"> */}
                      <table class="table" >
                        <tbody>
                          <tr>

                            <td width="17%">{person.id}</td>
                            <td width="17%">Rs.{person.loan}</td>
                            <td width="17%">{person.emi_due_date}</td>
                            <td width="15%">Rs.{person.next_pay_amt}</td>
                            <td width="5%"><span class="badge dis-badge badge-pill badge-info">{person.status}</span></td>
                            <td width="10%"><button type="button" class="btn repay-btn btn-outline-primary">{person.repay}</button></td>
                            <td width></td>
                            
  
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <img border="0"  src="https://cdn4.iconfinder.com/data/icons/podcast-collection/100/caret-512.png"  width="25" height="25"></img>
      </Accordion.Toggle>
      </tr>

</tbody>

</table>
{/* </div> */}
</div>
</td>
</tr>
</tbody>

</table>
    <Accordion.Collapse eventKey="0">
    <div className={styles.cardy} class="card">
                      {/* <div class="card"> */}
                      <table class="table">
                        <tbody>
                          <div><p>Loan Details</p></div>
                          <tr class="">

                            <td align="center">{person.name}</td>
                            <td align="left">{person.inst_name}</td>
                            <td align="left">Rs.{person.course_amt}</td>
                            <td width="20%">Rs. {person.outstanding}/Rs. {person.loan}</td>
                            <td width="10%">{person.paid_emi}/{person.total_emi}</td>

                          </tr>

                          <tr class="">

                            <td align="center">Name of borrower</td>
                            <td align="left">Name of Institute</td>
                            <td align="left">Course Amount (Rs.)</td>
                            <td width="30%">Outstanding Amount / Total Amount</td>
                            <td width="10%">Paid / Total EMIs</td>

                          </tr>
 
                        </tbody>

                      </table>
                      {/* </div> */}
                    </div>
    </Accordion.Collapse>
    

  
</Accordion>

                            

                  
          </div>

    )

}

export default Person