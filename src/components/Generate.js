import React from "react";
import Certificate from './Certificate';


class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      org: "",
      cert: "",
      email:"",
      idate:"",
      vdate:""

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <body class="bg-dark bg-graient">
        <div class="container text-white">
          <main>
            <div class="py-5 text-center">
              <img
                class="d-block mx-auto mb-4"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/copy-2801175-2321585.png"
                alt=""
                width="72"
                height="57"
              />
              <h2>Certification form</h2>
              <br />
              <p class="lead">Fill all the details mentioned below precisely</p>
            </div>

            <div class="row g-5 ">
              <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Student/Applicant Details :</h4>
                <form class="needs-validation" novalidate="">
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label for="firstName" class="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="First Name"
                        required=""
                        fdprocessedid="2djlz"
                      />
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder="last Name"
                        required=""
                        fdprocessedid="hvpjko"
                      />
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="org" class="form-label">
                        Certifying Organization
                      </label>
                      <div class="input-group has-validation">
                        {/* <span class="input-group-text">@</span> */}
                        <input
                          type="text"
                          class="form-control"
                          id="org"
                          name="org"
                          placeholder="Org. Name"
                          required=""
                          onChange={this.handleChange}
                          fdprocessedid="5t1jeq"
                        />
                        <div class="invalid-feedback">
                          Your Organization Name is required.
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="email" class="form-label">
                        Applicant's Email{" "}
                        <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="you@example.com"
                        fdprocessedid="2f8cgm"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="cert" class="form-label">
                        Certified for
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cert"
                        name="cert"
                        onChange={this.handleChange}
                        placeholder="exam/competition name"
                        required=""
                        fdprocessedid="55rzg6"
                      />
                      <div class="invalid-feedback">Please enter.</div>
                    </div>

                    <div class="col-12">
                      <label for="idate" class="form-label">
                        Issue Date<span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="idate"
                        name="idate"
                        onChange={this.handleChange}
                        placeholder="Issued on"
                        fdprocessedid="olf1w5"
                      />
                    </div>

                    <div class="col-12">
                      <label for="vdate" class="form-label">
                        Valid Till<span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="vdate"
                        name="vdate"
                        onChange={this.handleChange}
                        placeholder="Expires on"
                        fdprocessedid="olf1w5"
                      />
                    </div>
                  </div>

                  <hr class="my-4" />

                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="same-address"
                      required=""
                    />
                    <label class="form-check-label" for="same-address">
                      All the details are CORRECT
                    </label>
                  </div>

                  <hr class="my-4" />

                  <div class="col-12">
                    <label for="fname" class="form-label">
                      Name on Certificate
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="fname"
                      placeholder="Name to be displayed"
                      required=""
                      name="fname"
                      onChange={this.handleChange}
                      fdprocessedid="55rzg6"
                    />
                    <div class="invalid-feedback">
                      Name Confirmation is required.
                    </div>
                  </div>

                  <hr class="my-4" />

                  <button
                    class="w-100 btn btn-primary btn-lg"
                    type="submit"
                    fdprocessedid="euovw"
                  >
                    Submit and Generate{" "}
                  </button>
                  <Certificate fname={this.state.fname}
                  org={this.state.org}
                  cert={this.state.cert}
                  email={this.state.email} 
                  idate={this.state.idate}
                  vdate={this.state.vdate}
                   />
                </form>
              </div>
            </div>
          </main>

          <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">© 2017–2022 Company Name</p>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Privacy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Support</a>
              </li>
            </ul>
          </footer>
        </div>

        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"
        ></script>

        <script src="checkout.js"></script>
      </body>
    );
  }
}

export default View;
