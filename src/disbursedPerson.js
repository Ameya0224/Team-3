import React from 'react'
import styles from './App.css'
import { Card, Button, Accordion } from "react-bootstrap";




function Person({ person }) {

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
                        <td></td>


                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          <img border="0" src="https://cdn4.iconfinder.com/data/icons/podcast-collection/100/caret-512.png" width="25" height="25"></img>
                        </Accordion.Toggle>
                      </tr>

                    </tbody>

                  </table>
                  {/* </div> */}
                  <Accordion.Collapse eventKey="0">
                    <div class="card">
                      <div class="card-body">
                        <div >
                          <h5 class="card-title loan-details">LOAN DETAILS</h5>
                        </div>
                        <div class="row more-details">
                          <div class="col-2">{person.name}<p class="more-details-static">Name of borrower</p></div>
                          <div class="col-3">{person.inst_name}<p class="more-details-static">Name of Institute</p></div>
                          <div class="col-2">Rs.{person.course_amt}<p class="more-details-static">Course Amount(Rs.)</p></div>
                          <div class="col-3">Rs.{person.outstanding}/Rs.{person.loan}<p class="more-details-static">Outstanding Amount/Total Amount</p></div>
                          <div class="col-2">{person.paid_emi}/{person.total_emi}<p class="more-details-static">Paid/Total EMIs</p></div>
                          
                        </div>
                        

                      </div>
                      <div class="card-footer text-muted">
                      <div class="row">
                          <div class="col-3"><a class="more-details-footer" href="#">PREVIEW APPLICATION</a></div>
                          <div class="col-3"><a class="more-details-footer" href="#">DOWNLOAD AGREEMENT</a></div>
                          <div class="col-2"><p class="nach-status">NACH Status<p class="under-process">Under Process</p></p></div>
                          <div class="col-2"><button type="button" class="btn activate-nach btn-outline-primary">ACTIVATE NACH</button></div>
                          <div class="col-2"><a class="more-details-footer" href="#">WHAT IS NACH?</a></div>
                          
                        </div>
                        </div>
                    </div>
                  </Accordion.Collapse>

                </div>
              </td>
            </tr>
          </tbody>

        </table>





      </Accordion>

      {/* <table class="table">
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
            <td width="27%">Outstanding Amount / Total Amount</td>
            <td width="10%">Paid / Total EMIs</td>

          </tr>

        </tbody>

      </table> */}


    </div>

  )

}

export default Person