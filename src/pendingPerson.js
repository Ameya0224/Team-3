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
              <td colspan="6" class="brd-none pd0">
                <div className={styles.cardy} class="card pending-cards">
                  {/* <div class="card"> */}
                  <table class="table" >
                    <tbody>
                      <tr class="">

                        <td width="17%">{person.id}</td>
                        <td width="17%">Rs.{person.loan}</td>
                        <td width="18%" >{person.submission_date}</td>
                        <td width="15%">{person.type_of_loan}</td>
                        <td width="5%"><div class="pending-div"><span class="badge pending-badge badge-pill badge-info">{person.status}</span></div></td>
                        <td width=""><button type="button" class="btn edit-conti-btn btn-outline-primary">{person.edit_continue}</button></td>
                        <td width></td>


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
                          <div class="col-3">{person.name}<p class="more-details-static">Name of borrower</p></div>
                          <div class="col-3">{person.inst_name}<p class="more-details-static">Name of Institute</p></div>
                          <div class="col-3">Rs.{person.course_amt}<p class="more-details-static">Course Amount(Rs.)</p></div>
                          
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

    </div>


  )

}

export default Person