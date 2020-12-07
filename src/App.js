
import './App.css';
import styles from './App.css';

import React, {Component} from 'react';

import Disbursed from './Disbursed';
import Pending from './Pending';


class App extends Component {
  render() {
    return (
      
      <div>
          <div className={styles.navigation}>
        <nav className="navbar navbar-expand-md  mb-5">
          <span className={styles.list}>
            <a href="#" className="navbar-brand">Dashboard</a>
          </span>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">


            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className={styles.list}>

                  <a href="#" className="nav-link">LOAN DASHBOARD</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}><a href="#" className="nav-link">INSURANCE DASHBOARD</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}>
                  <a href="#" className="nav-link">MY REWARDS</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}>
                  <a href="#" className="nav-link">CONTACT US</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}>
                  <a href="#" className="nav-link">LOGOUT</a>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-md-8 mb-4">
          <div className={styles.cardy}>

            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Start a new application</h5>
                <p class="card-text text-muted">Apply for a new loan application!</p>
                <span className={styles.btn}>
                  <a class="btn btn-sm active" href="#"> START NEW APPLICATION </a>
                </span>
              </div>
            </div>

          </div>

          <div className={styles.cardy}>

            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Get COVID-19 Cover</h5>
                <p class="card-text text-muted">Apply for a new COVID-19 cover for you and your family members</p>
                <span className={styles.btn}>
                  <a class="btn btn-sm active" href="#"> START NEW APPLICATION </a>
                </span>
              </div>
            </div>

          </div>
          <div>
            <h6>DISBURSED APPLICATIONS</h6>
          </div>
          <table class="table">
          <thead>
                <tr class={styles.tableheader}>
                  <th >APPLICATION ID</th>
                  <th >LOAN AMOUNT</th>
                  <th >EMI DUE DATE</th>
                  <th>NEXT PAYMENT AMT</th>
                  <th >STATUS</th>
                  <th >REPAY</th>

                </tr>

          </thead>
          </table>
          <Disbursed />
          <div>
            <h6>PENDING APPLICATIONS</h6>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr class={styles.tableheader}>
                  <th >APPLICATION ID</th>
                  <th >LOAN AMOUNT</th>
                  <th >SUBMISSION DATE</th>
                  <th width="15%">TYPE OF LOAN</th>
                  <th >STATUS</th>
                  <th>EDIT/CONTINUE</th>

                </tr>

              </thead>
              
            </table>
            <Pending />
          </div>
        </div>


      </div>



    </div>
    )
  }
}



export default App;
