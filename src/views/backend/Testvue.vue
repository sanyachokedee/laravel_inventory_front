<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    Test vue
  </h2>
  <div>
    <!-- เรียกธรรมดา  -->
    <ul>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/backend/testvue/start">start</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/backend/testvue/start' }" append
          >Router Link3</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Testvue', params: { userId: 123 } }"
          >params</router-link
        >
      </li>
      <li>
        <!-- with query, resulting in `/register?plan=private` -->
        <router-link :to="{ path: 'Testvue', query: { plan: 'private' } }"
          >Register</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
