import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    //watch : can be used for form validation
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    //below, the mobile number is validated using "reqired and error" functions. this can be done with all form components
  return (
    <body class="bg-dark bg-graient">
      <div class="container text-white">
        <main>
          <div class="py-5 text-left">
            <form class="form-signin needs-validation" novalidate="">
              <div class="text-center mb-4">
                <img
                  class="mb-4"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/sign-up-2289091-1908691.png"
                  alt=""
                  width="72"
                  height="72"
                />
                <h1 class="h3 mb-3 font-weight-normal">Register/Sign-up</h1>
              </div>

              <div class="row g-3 form-label-group">
                <div class="col-sm-6 mb-3">
                  <label for="inputEmail">Email address</label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required=""
                    autofocus=""
                    fdprocessedid="ndedl"
                  />
                  <div class="invalid-feedback">
                    Valid Email-id is required.
                  </div>
                </div>
              </div>

              <div class="row g-3 form-label-group">
                <div class="col-sm-6 mb-3">
                  <label for="inputEmail">Wallet address</label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required=""
                    autofocus=""
                    fdprocessedid="ndedl"
                  />
                  <div class="invalid-feedback">
                    Valid Email-id is required.
                  </div>
                </div>
              </div>

              
              

              <div class="row g-3 form-label-group">
                <div class="col-sm-6 mb-3">
                  <label for="inputEmail">Password</label>
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required=""
                    fdprocessedid="orvl2x"
                  />
                  <div class="invalid-feedback">Invalid Password</div>
                </div>
              </div>

              <div class="row g-3 form-label-group">
                <div class="col-sm-6 mb-3">
                  <label for="inputEmail">Confirm Password</label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Confirm Password"
                    required=""
                    autofocus=""
                    fdprocessedid="ndedl"
                  />
                  <div class="invalid-feedback">
                    Type again
                  </div>
                </div>
              </div>

              <div class="checkbox mt-3 mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
            </form>
            
            <div class=" text-center mb-3">
              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                fdprocessedid="uatjem"
              >
                Connect Wallet
              </button>
            </div>

            <div class=" text-center mb-3">
              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                fdprocessedid="uatjem"
              >
                Sign up
              </button>
            </div>


            <p class="text-secondary mt-5 mb-3 text-center">© 2022-2023</p>
          </div>
        </main>
      </div>
    </body>
  );
}
