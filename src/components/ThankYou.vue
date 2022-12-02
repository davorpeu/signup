<template>
  <div>
    <div>You did it</div>
    <div class="success-image image is-96x96"></div>
    <div>
      <div>Your Info is:</div>
      <ol class="content">
        <li type="I">
          <div>Name:</div>
          <div>
            {{ firstName }}
          </div>
        </li>
        <li type="I">
          <div>Company Name:</div>
          <div>
            {{ companyName }}
          </div>
        </li>
        <li type="I">
          <div>Email:</div>
          <div>
            {{ email }}
          </div>
        </li>
        <li type="I">
          <div>Phone Number:</div>
          <div>
            {{ phoneNumber }}
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
.success-image{

  background: url("../assets/success.jpg") center / cover;
}

</style>