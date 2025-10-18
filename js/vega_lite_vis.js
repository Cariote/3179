var vg_1 = "charts/household_computer_chart.vg.json";
var vg_2 = "charts/worldwide_gdp_per_capita.vg.json";
var vg_3 = "charts/gdp_per_capita_computing.vg.json";
var vg_4 = "charts/computer_education.vg.json";
var vg_5 = "charts/tech_investment_gdp_chart.vg.json";
var vg_6 = "charts/hdi_productivity.vg.json";
var vg_7 = "charts/computer_patent.vg.json";
var vg_8 = "charts/internet_map.vg.json";

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

vegaEmbed("#techgdp_chart", vg_5).then(function(result){}).catch(console.error);

vegaEmbed('#hdiprod_chart', vg_6).then(function(result){}).catch(console.error);

vegaEmbed("#comppat_chart", vg_7).then(function(result){}).catch(console.error);

vegaEmbed("#intmap", vg_8).then(function(result){}).catch(console.error);