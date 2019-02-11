<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm10
      md8
    >
      <Logo />
      <v-layout row wrap>
        <v-flex>
          <v-card v-for="i in 6" :key="i" to="/inspire">
            <v-layout>
              <v-flex xs12>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Supermodel</div>
                    <div>Foster the People</div>
                    <div>(2014)</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
