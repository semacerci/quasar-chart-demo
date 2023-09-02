<template>
  <div class="col text-left text-bold">Uçuş Türlerine Göre</div>
  <small>Uçuş Süreleri</small>
  <div class="cer">
    <canvas id="myChart" width="100" height="100"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    const ctx = document.getElementById("myChart");

    const data = {
      labels: ["İki Boyutlu Haritalama", "Üç Boyutlu Haritalama", "Spreyleme"],
      datasets: [
        {
          label: "My First Dataset",
          data: [20, 50, 100],
          backgroundColor: [
            "rgb(39, 64, 139)",
            "rgb(0, 139, 0)",
            "rgb(0, 205 ,205)",
          ],
          hoverOffset: 6,
        },
      ],
    };

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
    });
    myChart;
  },
};
</script>

<style>
.cer {
  height: 300px;
  width: 300px;
}
</style>
