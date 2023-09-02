<template>
  <div id="map">
    <canvas id="mapChart"></canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    (async () => {
      const topology = await fetch(
        "https://code.highcharts.com/mapdata/countries/tr/tr-all.topo.json"
      ).then((response) => response.json());

      // Prepare demo data. The data is joined to map using value of 'hc-key'
      // property by default. See API docs for 'joinBy' for more info on linking
      // data and map../
      const data = [
        ["tr-or", 30],
        ["tr-ss", 30],
        ["tr-ga", 30],
        ["tr-4409", 30],
        ["tr-kc", 30],
        ["tr-bk", 30],
        ["tr-ck", 30],
        ["tr-tt", 30],
        ["tr-gi", 30],
        ["tr-en", 30],
        ["tr-bg", 30],
        ["tr-ht", 30],
        ["tr-aa", 30],
        ["tr-cm", 30],
        ["tr-kk", 30],
        ["tr-ng", 30],
        ["tr-ak", 30],
        ["tr-kh", 30],
        ["tr-yz", 30],
        ["tr-am", 30],
        ["tr-ms", 30],
        ["tr-bm", 30],
        ["tr-ka", 30],
        ["tr-ig", 30],
        ["tr-du", 30],
        ["tr-zo", 30],
        ["tr-kb", 30],
        ["tr-yl", 30],
        ["tr-sk", 30],
        ["tr-ci", 30],
        ["tr-bl", 30],
        ["tr-ed", 30],
        ["tr-es", 30],
        ["tr-ko", 30],
        ["tr-bu", 30],
        ["tr-kl", 30],
        ["tr-ib", 30],
        ["tr-kr", 30],
        ["tr-al", 30],
        ["tr-af", 30],
        ["tr-bd", 30],
        ["tr-ip", 30],
        ["tr-ay", 30],
        ["tr-mn", 30],
        ["tr-dy", 30],
        ["tr-ad", 30],
        ["tr-km", 30],
        ["tr-ky", 30],
        ["tr-eg", 30],
        ["tr-ic", 30],
        ["tr-sp", 30],
        ["tr-av", 30],
        ["tr-ri", 30],
        ["tr-tb", 30],
        ["tr-an", 30],
        ["tr-su", 30],
        ["tr-bb", 30],
        ["tr-em", 30],
        ["tr-mr", 30],
        ["tr-sr", 30],
        ["tr-si", 30],
        ["tr-hk", 30],
        ["tr-va", 30],
        ["tr-ar", 30],
        ["tr-ki", 30],
        ["tr-br", 30],
        ["tr-tg", 30],
        ["tr-iz", 30],
        ["tr-ks", 30],
        ["tr-mg", 30],
        ["tr-ku", 30],
        ["tr-nv", 30],
        ["tr-sv", 30],
        ["tr-tc", 30],
        ["tr-ml", 30],
        ["tr-ag", 30],
        ["tr-bt", 30],
        ["tr-gu", 30],
        ["tr-os", 30],
        ["tr-bc", 30],
        ["tr-dn", 30],
        ["tr-us", 30],
      ];

      // Create the chart
      Highcharts.mapChart("map", {
        chart: {
          map: topology,
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },

        color: "#aed7ff",

        series: [
          {
            data: data,
            name: "",
            states: {
              hover: {
                color: "#EAF6F6",
              },
            },
          },
        ],
      });
    })();
  },
};
</script>
