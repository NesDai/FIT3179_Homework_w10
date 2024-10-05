var spec2 = "js/map.json";
vegaEmbed("#chart_1", spec2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

// var spec3 = "js/bar_chart.json";
// vegaEmbed("#chart_2", spec3)
//   .then(function (result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
//   })
//   .catch(console.error);

// var spec4 = "js/bar_chart_2.json";
// vegaEmbed("#chart_3", spec4)
//   .then(function (result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
//   })
//   .catch(console.error);

var spec5 = "js/combined_chart.json";
vegaEmbed("#chart_4", spec5)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
