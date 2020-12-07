import React from 'react'
import styles from './App.css'

function Person({person}) {

    return (
        <div>
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

    )

}

export default Person