<template>
  <section id="contact-container">
    <section class="content-container">
      <h2>Contact Me</h2>
      <p>Have some questions or just want to just chat? Shoot me a message</p>
      <form v-on:submit="handleSubmit">
        <section class="first-section">
          <label for="name" class="hidden-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            v-model="name"
            placeholder="Name"
          >
          <label for="email" class="hidden-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            v-model="email"
            placeholder="Email"
          >
        </section>
        <section class="second-section">
          <label for="subject" class="hidden-label">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            v-model="subject"
            placeholder="Subject"
          >
          <label for="message" class="hidden-label">
            Message
          </label>
          <textarea
            id="message"
            required
            v-model="message"
            placeholder="Message"
          />
        </section>
        <input type="submit" value="Submit" />
      </form>
      <Toaster
        v-if="toaster.alert"
        :icon="toaster.icon"
        :type="toaster.type"
        :message="toaster.message"
      />
    </section>
  </section>
</template>

<script>
import axios from 'axios';

import Toaster from '~/components/Toaster.vue'

export default {
  components: {
    Toaster
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      toaster: {
        alert: null,
        icon: '',
        type: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit: function(event) {
      event.preventDefault();
      this.alert('inbox', 'normal', 'Please wait while we send the message');
      axios
        .post(
          'https://us-central1-lalvarez-portfolio.cloudfunctions.net/contactUsEmail',
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        )
        .then(res => {
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
          this.alert('check-circle', 'success', 'Your message was sent succesfully');
        })
        .catch(err => {
          console.error('[ContactForm] There was an error sending the message' + err);
          this.alert('bug', 'danger', 'There was an error sending the message. Please try again later');
        })
    },
    alert: function(icon, type, message) {
      this.toaster = {
        alert: true,
        icon,
        type,
        message
      }

      setTimeout(this.clearAlert, 5000)
    },
    clearAlert: function() {
      this.toaster = {
        alert: null,
        icon: '',
        type: '',
        message: ''
      }
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/scss/variables.scss';

#contact-container {
  .hidden-label {
    display: none;
  }

  form {
    .first-section {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      input {
        width: 40%;
        border-radius: 0.5rem;
        border: 3px solid $input-border-color;
        font-size: 1rem;
        padding: 0.5rem;
        &:focus {
          border: 3px solid $input-border-color-focus;
        }
        @media (max-width: $tablet-lg) {
          width: 100%;
          margin: 1rem 0;
        }
      }
    }
    .second-section {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      input, textarea {
        font-size: 1rem;
        border-radius: 0.5rem;
        border: 3px solid $input-border-color;
        font-size: 1rem;
        padding: 0.5rem;
        &:focus {
          border: 3px solid $input-border-color-focus;
        }
      }
      textarea {
        margin: 1rem 0;
        height: 10rem;
        resize: none;
      }
    }
    input[type=submit] {
      font-size: 1rem;
      padding: 1rem 3rem;
      text-align: center;
      cursor: pointer;
      border-radius: 0.5rem;
      color: white;
      text-decoration: none;
      background-color: $main-accent-color;
      border: 3px solid $main-accent-color-lighter;
      &:focus, &:hover {
        background-color: $main-accent-color-darker;
      }
    }
}
}
</style>
