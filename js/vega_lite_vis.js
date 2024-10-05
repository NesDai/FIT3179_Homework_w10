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
// vegaEmbed("#chart_4", spec5)
//   .then(function (result) {
//     // Access the Vega view instance
//     const view = result.view;

//     // Set up the button click event listener
//     document
//       .getElementById("printSelectionButton")
//       .addEventListener("click", function () {
//         // Get the current selection from the view's data
//         const selectedStates = view.signal("stateSelection"); // Change here

//         // Print the selected states to the console
//         console.log(selectedStates);
//       });
//   })
//   .catch(console.error);

vegaEmbed("#chart_4", spec5)
  .then(function (result) {
    const view = result.view;

    // Event listener for the dropdown
    document
      .getElementById("stateSelector")
      .addEventListener("click", function () {
        const selectedState = this.value;
        console.log(view.signal("stateSelection"))

        // Update the selection in Vega-Lite
        view.signal("stateSelection", { state: [selectedState] });
        view.run();
      });
  })
  .catch(console.error);