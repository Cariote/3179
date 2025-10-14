var vg_1 = "charts/daily_cost_bar_chart.vg.json";
var vg_2 = "charts/worldwide_gdp_per_capita.vg.json";
var vg_3 = "charts/gdp_per_capita_computing.vg.json";
var vg_4 = "charts/computer_education.vg.json";

vegaEmbed("#map_chart", vg_1).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

vegaEmbed("#gdppc_chart", vg_2).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

vegaEmbed("#gdpcomp_chart", vg_3).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

vegaEmbed("#compedu_chart", vg_4).then(function(result){}).catch(console.error);