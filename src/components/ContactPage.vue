<template>
  <h1 class="display-1">Reach me</h1>
  <div class="contact row">
    <div class="col-md-6">
      <h1 class="contact-title">Contact Me</h1>
      <p data-aos="zoom-in-up">
        <a class="contact-icon"
          ><i class="bi bi-telephone-fill mx-2"></i> 083 564 5479
        </a>
      </p>
      <p data-aos="zoom-in-up">
        <a class="contact-icon"
          ><i class="bi bi-envelope mx-2"></i>dikombalentle9@gmail.com
        </a>
      </p>
      <p data-aos="zoom-in-up">
        <a
          class="contact-icon"
          target="_blank"
          href="https://github.com/Mbalentlediko"
          ><i class="bi bi-github mx-2"></i> GitHub</a
        >
      </p>
    </div>

    <form @submit.prevent="submitForm" class="col-md-6">
      <h2 class="message">You can leave me a message</h2>
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" v-model="form.fullName" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      if (!this.form.fullName || !this.form.email || !this.form.message) {
        await Swal.fire({
          icon: "error",
          title: "Form Incomplete",
          text: "Please fill out all fields.",
          background: "#FFCCCC",
          color: "#333",
        });
        return;
      }
      await Swal.fire({
        icon: "success",
        title: "Message successfully sent",
        text: "Thank you for the message",
        background: "#CCFFCC",
        color: "#333",
      });
      this.resetForm();
    },
    resetForm() {
      this.form.fullName = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container-fluid {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.message {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
}

button {
  padding: 10px 20px;
  background-color: grey; /* Changed to grey */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: darkgrey; /* Darker grey on hover */
}
</style>
