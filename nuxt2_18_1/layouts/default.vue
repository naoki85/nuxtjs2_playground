<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About Page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/rivers">Rivers</NuxtLink>
        </li>
        <li> <NuxtLink to="/">Home</NuxtLink> </li>
        <li> <NuxtLink to="/fade">Fade</NuxtLink> </li>
        <li> <NuxtLink to="/bounce">Bounce</NuxtLink> </li>
        <li> <NuxtLink to="/slide">Slide</NuxtLink> </li>
      </ul>
    </nav>
    <main>
      <img src="~/assets/logo.svg" />
      <Nuxt />
    </main>
  </div>
</template>

<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 100px;
  max-width: 1280px;
  text-align: center;
}
img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #00c58e;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>
