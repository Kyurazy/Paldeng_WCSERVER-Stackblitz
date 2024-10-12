<template>
  <div class="blog container">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>

    <div class="d-flex container blog-container mt-5">
      <img :src="images[0]" alt="Game Editing">
      <h3 class="text-justify">{{ contentCaption[0] }}</h3>
    </div>
    
    <div class="d-flex container blog-container mt-5">
      <h3 class="text-justify">{{ contentCaption[1] }}</h3>
      <img :src="images[1]" alt="Texture Editing">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      title: 'Yapping with Paldeng',
      content: 'Blog where I share insights on editing online games and creating stunning textures.',
      images: [
        'https://logos-world.net/wp-content/uploads/2021/03/FiveM-Symbol.png', 
        'https://cdn-icons-png.flaticon.com/512/61/61431.png' 
      ],
      contentCaption: [
        'Editing online games is a thrilling process that allows you to enhance gameplay and visuals. With tools like modding software, you can create custom maps, modify characters, and even adjust gameplay mechanics. The satisfaction of seeing your changes come to life in a game played by others is unparalleled, and it opens up endless possibilities for creativity.',
        'Texture editing involves the art of creating and modifying the surfaces of 3D models in games. By adjusting textures, you can dramatically change how a character or environment looks. This skill requires an understanding of color theory and artistic design, enabling you to make immersive worlds that players can truly lose themselves in. Whether its making a dragon look more fearsome or adding intricate details to a medieval castle, texture editing is key to elevating game aesthetics.'
      ]
    };
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
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
img {
  width: 300px;
  border-radius: 8px; /* Rounded corners for a modern look */
}
.text-justify {
  text-align: justify;
  margin: 0 3%;
}
.blog-container {
  justify-content: space-between;
  width: 70%;
  align-items: center; /* Center items vertically */
}
</style>
