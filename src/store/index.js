import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2' 
const portfolioURL = 'https://mbalentlediko.github.io/eompTask/data/'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education:null,
    skills: null,
    experiences: null,
    testimonials: null,
    projects: null,
    contactInfo: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) { 
      state.jobTitle = value
    },
    setAbout(state, value) { 
      state.about = value
    },
    setEducation(state, value) { 
      state.education = value
    },
    setExperiences(state, value) { 
      state.experiences = value
    },
    setSkills(state, value) { 
      state.skills = value
    },
    setTestimonials(state, value) { 
      state.testimonials = value
    },
    setProjects(state, value) { 
      state.projects = value
    },
    setContact(state, value){
      state.contactInfo = value
    }
  },
  actions: {
    async fetchJobTitle(context) {
      try {
        let { jobtitle } = await (await axios.get(portfolioURL)).data
        context.commit("setJobTitle", jobtitle)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the job title",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchAbout(context) {
      try {
        let { about } = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchEducation(context) {
      try {
        let { education } = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", education)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - education",
          icon: "error",
          timer: 2000
        })
      }
    },    async fetchExperiences(context) {
      try {
        let { experiences } = await (await axios.get(portfolioURL)).data
        context.commit("setExperiences", experiences)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - experiences",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSkills(context) {
      try {
        let { skills } = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - skills",
          icon: "error",
          timer: 2000
        })
      }
    },
 
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - Testimonials",
          icon: "error",
          timer: 2000
      })
      }
    },
    async fetchProjects(context) {
      try {
        let { projects } = await (await axios.get(portfolioURL)).data
        context.commit("setProjects", projects)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - projects",
          icon: "error",
          timer: 2000
        })
      }
    },async fetchContactInfo(context) {
      try {
        let { contactInfo } = await (await axios.get(portfolioURL)).data
        context.commit("setContact", contactInfo)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - contact",
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})
 