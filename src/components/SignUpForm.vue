<template>
  <div>
    <h1 class="content is-large">Sign up</h1>
    <h2 class="content is-large">Ensure your email for registration</h2>
    <form @submit.prevent="submit">
      <input class="input input-form"
        v-model="values.companyName"
        placeholder="Company Name"
        type="text"
        required="required"
      />
      <input class="input input-form"
        v-model="values.firstName"
        placeholder="Name"
        type="text"
        required="required"
      />

      <input class="input input-form"
        v-model="values.email"
        placeholder="E-mail"
        type="email"
        required="required"
      />

      <input class="input input-form"
        v-model="values.phoneNumber"
        placeholder="Phone Number"
        type="tel"
        required="required"
      />
      <input class="input input-form"
        v-model="values.password"
        placeholder="Password"
        type="password"
        required="required"
      />

      <button class="button is-dark" type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
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
      this.$emit("sendValues", this.values);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
.input-form{
  width: 90%;
  margin-bottom: 16px;
}

</style>
