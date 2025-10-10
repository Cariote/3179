var vg_1 = "data/daily_cost_bar_chart.vg.json";
var vg_2 = "data/worldwide_gdp_per_capita.vg.json";

vegaEmbed("#map_chart", vg_1).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

vegaEmbed("#gdppc_chart", vg_2).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);