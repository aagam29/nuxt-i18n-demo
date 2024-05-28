<script setup>
const { loadLocaleMessages, t } = useI18n();

await loadLocaleMessages("es");
const welcome = computed(() => t("playgroundPage.welcome"));
const welcomeES = computed(() =>
  t("playgroundPage.welcome", 1, { locale: "es" })
);
</script>

<template>
  <div>
    <v-card color="cardBackground">
      <v-card-title class="text-overline">
        {{ $t("playgroundPage.titleText") }}
      </v-card-title>

      <v-card-title class="text-overline">
        {{ $t("playgroundPage.translationTitle") }}
      </v-card-title>
      <v-card-text>
        <p>{{ welcome }}</p>
        <p>{{ welcomeES }}</p>
      </v-card-text>

      <v-card-title class="text-overline">
        {{ $t("playgroundPage.pluralizationTitle") }}
      </v-card-title>
      <v-card-text>
        <p>{{ $t("playgroundPage.apple", 0) }}</p>
        <p>{{ $t("playgroundPage.apple", 1) }}</p>
        <p>{{ $t("playgroundPage.apple", { count: 10 }) }}</p>
      </v-card-text>

      <v-card-title class="text-overline">
        {{ $t("playgroundPage.interpolationTitle") }}
      </v-card-title>
      <v-card-text>
        <p>
          {{
            $t("playgroundPage.interpolation.helloWithCustomMsg", {
              msg: "How's it going for you?",
            })
          }}
        </p>
        <p>
          {{
            $t("playgroundPage.interpolation.hobby", ["Football", "Cricket"])
          }}
        </p>
        <p>
          {{
            $t("playgroundPage.interpolation.email", {
              account: "johndoe",
              domain: "hygraph",
            })
          }}
        </p>
      </v-card-text>

      <v-card-title class="text-overline">
        {{ $t("playgroundPage.dateTimeTranslationTitle") }}
      </v-card-title>
      <v-card-text>
        <p>Short: {{ (new Date(), $d(new Date(), "short")) }}</p>
        <p>Long: {{ (new Date(), $d(new Date(), "long")) }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>
