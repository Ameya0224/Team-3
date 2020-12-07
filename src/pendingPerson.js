import React from 'react'
import styles from './App.css'

function Person({person}) {

    return (
        <div>
        <div>
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
                            <td width="15%" >{person.submission_date}</td>
                            <td width="15%">{person.type_of_loan}</td>
                            <td width="5%"><div class="pending-div"><span class="badge pending-badge badge-pill badge-info">{person.status}</span></div></td>
                            <td width=""><button type="button" class="btn edit-conti-btn btn-outline-primary">{person.edit_continue}</button></td>

                          </tr>
 
                        </tbody>

                      </table>
                      {/* </div> */}
                    </div>
                  </td>


                </tr>





              </tbody>

            </table>
          </div>
        </div>       
    
    )

}

export default Person