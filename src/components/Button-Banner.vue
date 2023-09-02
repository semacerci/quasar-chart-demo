<template>
  <q-card class="q-pt-md" style="border-radius: 10px">
    <div class="row">
      <div class="q-mb-auto" style="max-width: 300px">
        <q-input
          rounded
          outlined
          v-model="date"
          mask="date"
          :rules="['date']"
          label="Başlangıç Tarihi"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="accent">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-mb-auto" style="max-width: 300px; margin-left: 10px">
        <q-input
          rounded
          outlined
          v-model="date"
          mask="date"
          :rules="['date']"
          label="Bitiş Tarihi"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="accent">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <q-btn-dropdown
        class="q-mb-auto"
        label="Pilot Seçimi"
        dropdown-icon="change_history"
        rounded
        style="width: 180px; height: 55px; margin-left: 10px; color: #0f4c68"
      >
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      date: ref("2019/02/01"),
    };
  },
};
</script>
