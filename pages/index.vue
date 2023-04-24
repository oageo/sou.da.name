<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <Soudana />
        <Soudane />
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        
      </nav>
    </div>
  </div>
</template>

<script setup>
useHead({
    title: 'そうだな',
    meta: [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'そうだな' },
      { property: 'og:description', content: 'そうだね' },
      { name: 'og:image', content: '/soudana.png' }
    ],
    link: [
      { rel: "icon", href: "/soudana.png", type: "image/png"}
    ]
})
</script>
