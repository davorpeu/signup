<template>
  <div>
    You did it
  {{ values }}

  </div>
</template>

<script>

export default {
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
}
</script>

<style>

</style>