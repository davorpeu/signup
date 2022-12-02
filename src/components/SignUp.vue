<template>
  <div class="signup">
    
    <SignUpForm @sendValues="submitForm" v-if="!hasSubmited"> </SignUpForm>
    <ThankYou v-bind="values" v-if="hasSubmited"> </ThankYou>
  </div>
</template>

<script>
import SignUpForm from "./SignUpForm";
import ThankYou from "./ThankYou";
import { sendGoogleSpreadsheetRequest } from "../lib/SendRequest.js";
export default {
  components: {
    SignUpForm,
    ThankYou,
  },
  data() {
    return {
      hasSubmited: false,

      values: {
        firstName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm(formValues) {
      const { companyName, phoneNumber, firstName, email, password } =
        formValues;
        this.values = formValues;
      //if you want to send any data into server before redirection then you can do it here
      sendGoogleSpreadsheetRequest([
        companyName,
        firstName,
        email,
        phoneNumber,
        password,
      ]);
      //   this.$router.push("/success");
    this.hasSubmited = true;
    },
  },
};
</script>

<style>
input{
  width: 90%!;
}
.signup{
  background: whitesmoke;
}
@media (max-width: 412px) {
  .signup {
    min-height: 100vh;

  }
}
</style>