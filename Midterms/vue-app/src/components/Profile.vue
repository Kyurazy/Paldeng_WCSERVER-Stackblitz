<template>
    <section class="profile card">
      <h2>Personal Information</h2>
      <div class="profile-info">
        <img :src="profilePicture" alt="Profile Picture" class="profile-pic" />
        <div class="profile-details">
          <h3>{{ name }}</h3>
          <p><strong>Objective:</strong> {{ objective }}</p>
          <p><strong>Course:</strong> {{ course }}</p>
          <p><strong>Specialization:</strong> {{ specialization }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import profilePicture from '@/assets/profile.jpg'
  
  const name = ref('Carl Lester P. Paldeng')
  const objective = ref('To become a full-stack Developer.')
  const course = ref('Information Technology')
  const specialization = ref('Web Development')
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  .profile {
    background: #141414; /* Dark background similar to Netflix */
    color: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    font-family: 'Roboto', sans-serif;
    transform: perspective(1000px) rotateX(5deg);
  }
  
  .profile-info {
    display: flex;
    align-items: center;
  }
  
  .profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    margin-right: 2rem;
  }
  
  .profile-details {
    max-width: 600px;
  }
  
  .profile-details h3 {
    margin: 0;
    color: #e50914; /* Highlight color similar to Netflix's red */
  }
  
  .profile-details p {
    margin: 0.5rem 0;
  }
  
  @media (max-width: 768px) {
    .profile-info {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .profile-pic {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  
    .profile-details {
      max-width: 100%;
    }
  }
  </style>
  