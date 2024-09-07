<template>
    <section class="skills card">
      <h2>Skills</h2>
      <swiper-container
        slides-per-view="3"
        space-between="30"
        loop="true"
        pagination="{ clickable: true }"
        navigation
      >
        <swiper-slide class="skill-slide">
          <div class="skill-content">
            <img :src="image1" alt="Skill 1" class="skill-img" />
            <div class="skill-message">
              <h3>Clothing Editor in GTA</h3>
              <p>
                As a clothing editor in GTA, you are responsible for designing and customizing in-game outfits. This role involves:
                <br />
                Front-End: Creating and adjusting textures, colors, and designs for clothing items to ensure they fit the game's aesthetic and look appealing to players.
                <br />
                Back-End: Integrating these clothing designs into the game’s systems, managing data files, and ensuring compatibility with various game mechanics and updates.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="skill-slide">
          <div class="skill-content">
            <img :src="image2" alt="Skill 2" class="skill-img" />
            <div class="skill-message">
              <h3>Front-end/Back-end Developer</h3>
              <p>
                A front-end developer focuses on the user interface and experience of a website or application. This role involves:
                <br />
                Designing and implementing visual elements that users interact with, using languages like HTML, CSS, and JavaScript.
                <br />
                Ensuring the website or application is responsive, visually appealing, and user-friendly.
                <br />
                Back-End Developer: A back-end developer handles the server-side of web development, focusing on the functionality that users don’t see. This role involves:
                <br />
                Creating and managing databases, server logic, and application programming interfaces (APIs).
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="skill-slide">
          <div class="skill-content">
            <img :src="image3" alt="Skill 3" class="skill-img" />
            <div class="skill-message">
              <h3>Video Editor</h3>
              <p>
                A video editor is responsible for creating and refining video content. This role involves:
                <br />
                Editing: Cutting, splicing, and arranging footage to tell a compelling story or convey a message.
                <br />
                Enhancement: Adding effects, transitions, and audio to improve the visual and auditory quality of the video.
                <br />
                Finalizing: Ensuring the final product is polished and meets the intended purpose, whether for promotional content, tutorials, or entertainment.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
  
      <div class="countdown">
        <p>Time left: {{ timeLeft }}</p>
      </div>
  
      <input v-model="searchQuery" placeholder="Search skills..." />
  
      <ul>
        <li v-for="skill in filteredSkills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  import image1 from '@/assets/image1.jpg'
  import image2 from '@/assets/image2.jpg'
  import image3 from '@/assets/image3.jpg'
  
  const endDate = new Date('2024-12-31T00:00:00')
  const timeLeft = ref('')
  
  const searchQuery = ref('')
  const skills = ref(['JavaScript', 'Python', 'C++', 'Video Editing'])
  
  const filteredSkills = computed(() => {
    return skills.value.filter(skill => skill.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })
  
  function updateCountdown() {
    const now = new Date()
    const diff = endDate - now
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    timeLeft.value = `${days}d ${hours}h ${minutes}m ${seconds}s`
  }
  
  onMounted(() => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
  })
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  .skills {
    background: #141414;
    color: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    font-family: 'Roboto', sans-serif;
  }
  
  .swiper-container {
    margin-bottom: 2rem;
  }
  
  .skill-slide {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .skill-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    background: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    text-align: center;
  }
  
  .skill-img {
    width: 100%;
    height: auto;
    max-width: 318px;
    border-radius: 10px;
    object-fit: cover;
  }
  
  .skill-message {
    padding: 1rem;
    color: #fff;
    max-width: 100%;
  }
  
  .countdown {
    font-size: 1.5rem;
    margin: 1rem 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #333;
    border-radius: 5px;
    background: #222;
    color: #fff;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Roboto', sans-serif;
  }
  
  input:focus {
    border-color: #e50914;
    outline: none;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    background: #333;
    border-radius: 5px;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    .swiper-container {
      margin-bottom: 1rem;
    }
  
    .skill-slide {
      flex-direction: column;
    }
  
    .skill-content {
      text-align: center;
    }
  
    .skill-img {
      max-width: 100%;
    }
  
    .skill-message {
      max-width: 100%;
      padding: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .skills {
      padding: 1rem;
    }
  
    .countdown {
      font-size: 1rem;
    }
  
    input {
      padding: 0.4rem;
    }
  
    li {
      padding: 0.4rem 0.8rem;
    }
  }
  </style>
  