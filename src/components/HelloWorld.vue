<template>
  <div>
    <h1>Sign up</h1>
    <div class="companyName">
        <label for="name">Company Name</label>
        <input type="text" id="companyName" placeholder="Enter your name">
    </div>
    <div class="name">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name">
    </div>
    <div class="email">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email">
    </div>
    <div class="number">
        <label for="number">Phone number</label>
        <input type="tel" id="number" placeholder="Enter your phone number">
    </div>
    <div class="password">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password">
    </div>
    <div class="confirm password">
        <label for="confirm password">Confirm Password</label>
        <input type="password" id="confirm password" placeholder="Confirm your password">
    </div>
    <div class="submit">
        <button type="submit" @click="signup">Sign up</button>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
</style>
