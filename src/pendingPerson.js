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

                            <td width="17%" align="center">{person.name}</td>
                            <td width="17%" align="left">{person.inst_name}</td>
                            <td width="17%" align="left">Rs.{person.course_amt}</td>

                          </tr>

                          <tr class="">

                            <td width="17%" align="center">Name of borrower</td>
                            <td width="17%" align="left">Name of Institute</td>
                            <td width="17%" align="left">Course Amount (Rs.)</td>
                            

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