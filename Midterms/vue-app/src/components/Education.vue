<template>
    <section class="education card">
      <h2>Education</h2>
      <ul>
        <li v-for="(education, index) in educationList" :key="index" class="education-item">
          <h3>{{ education.level }}</h3>
          <p>{{ education.institution }} - {{ education.year }}</p>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const educationList = ref([
    { level: 'Elementary', institution: 'San Fernando Elementary School', year: 'S.Y. 2007-2013' },
    { level: 'JHS/SHS', institution: 'Pampanga High School', year: 'S.Y. 2014-2020' },
    { level: 'College', institution: 'Currently at Holy Angel University', year: 'S.Y. 2023-2024' }
  ])
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Poppins:wght@300;400;600&display=swap');
  
  .education {
    background: #141414;
    color: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    transform: perspective(1000px) rotateX(5deg);
    font-family: 'Poppins', sans-serif;
  }
  
  .education-item {
    background: #333;
    border-radius: 10px;
    margin: 0.5rem 0;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: perspective(1000px) rotateX(0deg);
    transition: transform 0.3s;
    font-family: 'Oswald', sans-serif;
  }
  
  .education-item:hover {
    transform: perspective(1000px) rotateX(-5deg);
  }
  
  h2 {
    color: #e50914;
    font-family: 'Oswald', sans-serif;
  }
  </style>
  