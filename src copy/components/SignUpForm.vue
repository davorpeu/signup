<template>
  <div>
    <h1>Sign up</h1>
    <h4 class="text-center mt-4">Ensure your email for registration</h4>
    <form @submit.prevent="submit">
      <input
        v-model="values.companyName"
        placeholder="Company Name"
        type="text"
        required="required"
      />
      <input
        v-model="values.firstName"
        placeholder="Name"
        type="text"
        required="required"
      />

      <input
        v-model="values.email"
        placeholder="E-mail"
        type="email"
        required="required"
      />

      <input
        v-model="values.phoneNumber"
        placeholder="Phone Number"
        type="tel"
        required="required"
      />
      <input
        v-model="values.password"
        placeholder="Password"
        type="password"
        required="required"
      />

      <button type="submit" @click="hasSubmitted = hasSubmitted">Submit</button>

    </form>
    {{ values }}

  </div>
</template>

<script>
import { sendGoogleSpreadsheetRequest } from "../lib/SendRequest.js";
import { defineStore } from 'pinia'

export default {
  props: {
    msg: String,
  },
  
  data() {
    return {
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
    submit() {
      const { companyName, phoneNumber, firstName, email, password } =
        this.values;
      //if you want to send any data into server before redirection then you can do it here
      sendGoogleSpreadsheetRequest([
        companyName,
        firstName,
        email,
        phoneNumber,
        password,
      ]);
      this.$router.push("/success");

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

v-form {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 5px;
  align-content: center;
  align-items: center;
}
</style>
