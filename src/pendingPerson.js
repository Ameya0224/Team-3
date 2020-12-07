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
                    <div className={styles.cardy} class="card">
                      {/* <div class="card"> */}
                      <table class="table" >
                        <tbody>
                          <tr class="">

                            <td align="left">{person.id}</td>
                            <td align="center">Rs.{person.loan}</td>
                            <td align="center">{person.submission_date}</td>
                            <td width="15%">{person.type_of_loan}</td>
                            <td width="10%"><span class="badge badge-pill badge-info">{person.status}</span></td>
                            <td width="10%"><button type="button" class="btn btn-sm btn-outline-primary">{person.edit_continue}</button></td>

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