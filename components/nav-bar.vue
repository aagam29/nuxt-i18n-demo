<template>
  <v-app-bar app :elevation="2">
    <div>
      <v-btn color="button" to="/">
        {{ $t("navbar.homeButtonText") }}
      </v-btn>
      <v-btn color="button" to="/about">
        {{ $t("navbar.aboutButtonText") }}
      </v-btn>
      <v-btn color="button" to="/playground">
        {{ $t("navbar.playgroundButtonText") }}
      </v-btn>
    </div>
    <v-spacer />
    <div class="mr-4 mt-6">
      <SelectLocale />
    </div>
  </v-app-bar>
</template>
