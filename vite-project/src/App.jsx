import React from 'react'

function App() {
  return (
    <>
    <form class="row g-3">

  <div class="col-md-6">
    <label class="form-label">Username</label>
    <input type="text" class="form-control"/>
    <div class="form-text">Enter your username</div>
  </div>

  <div class="col-md-6">
    <label class="form-label">Email</label>
    <input type="email" class="form-control is-invalid"/>
    <div class="invalid-feedback">Invalid email</div>
  </div>

  <div class="col-md-12">
    <label class="form-label">Select Country</label>
    <select class="form-select">
      <option>India</option>
      <option>USA</option>
    </select>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="agree"/>
    <label class="form-check-label" for="agree">Accept terms</label>
  </div>

  <button class="btnk btn-primary">Submit</button>

</form>
</>

  )
}

export default App
