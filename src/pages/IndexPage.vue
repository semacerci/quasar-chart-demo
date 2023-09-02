<template>
  <q-page style="margin: 20px; padding: 10px">
    <button-banner style="margin-top: 10px; padding-left: 10px" />

    <img src="~assets\b.svg" class="responsive" alt="avatar" />

    <q-card
      class="q-pt-md"
      style="border-radius: 10px; margin-top: 30px; height: auto; padding: 10px"
    >
      <div>
        <div class="row">
          <div class="col-md-3">
            <my-chart />
          </div>
          <div class="col-md-3">
            <my-chart-pie />
          </div>

          <div class="col-md-3">
            <grid-chart />
          </div>

          <div class="col-md-3">
            <grid-chart1></grid-chart1>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <map-chart />
          </div>

          <div class="col-md-6">
            <flights-table />
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MyChart from "src/components/MyChart";
import MyChartPie from "src/components/MyChartPie";
import MapChart from "src/components/MapChart";
import FlightsTable from "src/components/FlightsTable";
import GridChart from "src/components/GridChart";
import GridChart1 from "src/components/GridChart-1";
import ButtonBanner from "src/components/Button-Banner";

// import Highcharts from 'highcharts-vue'
// import {Chart} from 'highcharts-vue'

export default defineComponent({
  name: "IndexPage",
  components: {
    MyChart,
    MyChartPie,
    MapChart,
    FlightsTable,
    GridChart,
    GridChart1,
    ButtonBanner,
  },
});
</script>
