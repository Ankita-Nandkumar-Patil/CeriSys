import React from 'react'

export default function Generate() {
  return (
    <body class="bg-dark bg-graient">
    
<div class="container text-white">
  <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/copy-2801175-2321585.png" alt="" width="72" height="57"/>
      <h2>Certification form</h2> 
      <br/>
      <p class="lead">Fill all the details mentioned below precisely</p>
    </div>

    <div class="row g-5 ">
      {/* <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Product name</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$12</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Second product</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Third item</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">−$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code" fdprocessedid="oicah7"/>
            <button type="submit" class="btn btn-secondary" fdprocessedid="9g9kvk">Redeem</button>
          </div>
        </form>
      </div> */}

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Student/Applicant Details :</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" fdprocessedid="2djlz"/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" fdprocessedid="hvpjko"/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Certifying Organization</label>
              <div class="input-group has-validation">
                {/* <span class="input-group-text">@</span> */}
                <input type="text" class="form-control" id="username" placeholder="Org. Name" required="" fdprocessedid="5t1jeq"/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Applicant's Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" fdprocessedid="2f8cgm"/>
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Certified for</label>
              <input type="text" class="form-control" id="address" placeholder="exam/competition name" required="" fdprocessedid="55rzg6"/>
              <div class="invalid-feedback">
                Please enter.
              </div>
            </div>

            <div class="col-12">
              <label for="issue-date" class="form-label">Issue Date<span class="text-muted">(Optional)</span></label>
              <input type="date" class="form-control" id="address2" placeholder="Issued on" fdprocessedid="olf1w5"/>
            </div>

            <div class="col-12">
              <label for="issue-date" class="form-label">Valid Till<span class="text-muted">(Optional)</span></label>
              <input type="date" class="form-control" id="address2" placeholder="Expires on" fdprocessedid="olf1w5"/>
            </div>

            {/* <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required="" fdprocessedid="z1m9dl">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required="" fdprocessedid="1pdhl2">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="" fdprocessedid="7q1vc4"/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div> */}
          </div>

          <hr class="my-4"/>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address" required=""/>
            <label class="form-check-label" for="same-address">All the details are CORRECT</label>
          </div>

          {/* <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div> */}

          <hr class="my-4"/>

          {/* <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""/>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div> */}

            <div class="col-12">
              <label for="address" class="form-label">Name on Certificate</label>
              <input type="text" class="form-control" id="address" placeholder="Name to be displayed" required="" fdprocessedid="55rzg6"/>
              <div class="invalid-feedback">
                Name Confirmation is required.
              </div>
            </div>

          {/* <div class="col-12">
            
              <label for="cc-name" class="form-label">Name on Certificate</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="" fdprocessedid="cczds6"/>
              <small class="text-muted">Full name as to be displayed on Certificate</small>
              <div class="invalid-feedback">
                Name Confirmation is required
          </div> */}
            

            {/* <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="" fdprocessedid="8ig7m"/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div> */}

            {/* <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" fdprocessedid="ut8t2r"/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" fdprocessedid="fw09ou"/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div> */}
          

          <hr class="my-4"/>

          <button class="w-100 btn btn-primary btn-lg" type="submit" fdprocessedid="euovw">Submit and Generate </button>
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">© 2017–2022 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>


    <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

      <script src="checkout.js"></script>
  

</body>
  )
}
