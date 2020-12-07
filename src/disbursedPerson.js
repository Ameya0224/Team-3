import React from 'react'
import styles from './App.css'

function Person({person}) {

    return (
        <div>
            <table class="table">
              <tbody>

                <tr>
                  <td colspan="6" class="brd-none pd0">
                    <div className={styles.cardy} class="card">
                      {/* <div class="card"> */}
                      <table class="table" >
                        <tbody>
                          <tr>

                            <td align="left">{person.id}</td>
                            <td align="center">Rs.{person.loan}</td>
                            <td align="center">{person.emi_due_date}</td>
                            <td align="right">Rs.{person.next_pay_amt}</td>
                            <td align="right"><span class="badge badge-pill badge-info">{person.status}</span></td>
                            <td width="10%"><button type="button" class="btn btn-sm btn-outline-primary">{person.repay}</button></td>

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