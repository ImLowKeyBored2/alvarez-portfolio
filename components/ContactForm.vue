<template>
  <section id="contact-container">
    <section class="content-container">
      <h2>Contact Me</h2>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="name"
          :rules="requiredRules"
          required
          label="Name"
        />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          required
          label="Email"
        />
        <v-text-field
          v-model="subject"
          :rules="requiredRules"
          required
          label="Subject"
        />
        <v-textarea
          v-model="message"
          :rules="requiredRules"
          required
          label="Message"
        />
        <v-btn large color="primary" class="mt-4" @click="handleSubmit">
          Submit
        </v-btn>
      </v-form>
      <Snackbar
        v-if="snackbar.alert"
        :icon="snackbar.icon"
        :type="snackbar.type"
        :message="snackbar.message"
      />
    </section>
  </section>
</template>

<script>
import axios from "axios";

import Snackbar from "~/components/Snackbar.vue";

export default {
  components: {
    Snackbar,
  },
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      subject: "",
      message: "",
      snackbar: {
        alert: false,
        icon: "",
        type: "",
        message: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      requiredRules: [(v) => !!v || "Required"],
    };
  },
  methods: {
    handleSubmit: function (event) {
      event.preventDefault();
      this.$refs.form.validate();
      if (this.valid) {
        this.alert("inbox", "primary", "Please wait while we send the message");
        axios
          .post(
            "https://us-central1-lalvarez-portfolio.cloudfunctions.net/contactUsEmail",
            {
              name: this.name,
              email: this.email,
              subject: this.subject,
              message: this.message,
            }
          )
          .then(() => {
            this.name = "";
            this.email = "";
            this.subject = "";
            this.message = "";
            this.alert(
              "check-circle",
              "success",
              "Your message was sent succesfully"
            );
          })
          .catch((err) => {
            console.error(
              "[ContactForm] There was an error sending the message" + err
            );
            this.alert(
              "bug",
              "error",
              "There was an error sending the message. Please try again later"
            );
          });
      }
    },
    alert: function (icon, type, message) {
      this.snackbar = {
        alert: true,
        icon,
        type,
        message,
      };

      setTimeout(this.clearAlert, 5000);
    },
    clearAlert: function () {
      this.snackbar = {
        alert: false,
        icon: "",
        type: "",
        message: "",
      };
    },
  },
};
</script>
