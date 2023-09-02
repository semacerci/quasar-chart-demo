<template>
  <div class="col text-left text-bold">Hava Aracı Türlerine Göre</div>
  <small>Uçuş Süreleri</small>
  <div class="frm">
    <canvas id="myChartPie" width="100" height="100"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    const chr = document.getElementById("myChartPie");

    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(39, 64, 139)",
            "rgb(0, 139, 0)",
            "rgb(0, 205 ,205)",
          ],
          hoverOffset: 3,
        },
      ],
    };
    const myChartPie = new Chart(chr, {
      type: "pie",
      data: data,
    });
    myChartPie;
  },
};
</script>
<style>
.frm {
  height: 280px;
  width: 280px;
}
</style>
