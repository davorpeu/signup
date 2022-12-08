<template>
  <div class="success-info content box">
    <div>
      <h2>Your login information is:</h2>
      <ol class="content has-text-left">
        <li type="none">
          <div class="has-text-weight-semibold">Name:</div>
          <p>
            {{ firstName }}
          </p>
        </li>
        <li type="none">
          <div class="has-text-weight-semibold">Company Name:</div>
          <div>
            {{ companyName }}
          </div>
        </li>
        <li type="none">
          <div class="has-text-weight-semibold">Email:</div>
          <div>
            {{ email }}
          </div>
        </li>
        <li type="none">
          <div  class="has-text-weight-semibold">Phone Number:</div>
          <div>
            {{ phoneNumber }}
          </div>
        </li>
        <li type="none" style="
        margin: inherit;">
          <div>
            <button class="button is-primary" type="button" href="https://script.google.com/macros/s/AKfycbzX0Tf1S1fgGzdbwqrxRlse9NZpUQrsmBFVO3z9RNqPsXDuBbU9H_AKM9m30H_KwkJ6">Your Google Sheet</button>
          </div>
        </li>
      </ol>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasSubmited: false,
    };
  },
  props: {
    firstName: String,
    companyName: String,
    email: String,
    phoneNumber: Number,
    password: String,
  },
};
</script>

<style>
.success-info{
  margin: auto;
  width: fit-content;
  margin-top: 10vh;
  text-align: center;
}
.success-image{
  margin: auto;
  background: url("../assets/success.png") center / cover;
}

</style>