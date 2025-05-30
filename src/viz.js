// Declare the chart dimensions and margins.
const width = 960;
const height = 500;
const marginTop = 20;
const bottomMargin = 30;
const rightMargin = 20;
const leftMargin = 40;

const x = d3.scaleLinear().domain([0, 100]).range([leftMargin, width - rightMargin]);
const y = d3.scaleLinear().domain([0, 100]).range([height - bottomMargin, marginTop]);

const svg = d3.select('#viz').append("svg").attr("width", width).attr("height", height);
svg.append("g").attr("transform", `translate(0,${height - bottomMargin})`).call(d3.axisBottom(x));
svg.append("g").attr("transform", `translate(${leftMargin},0)`).call(d3.axisLeft(y));
viz.append(svg.node());

d3.csv("./labeled.csv").then(function(data) {
    console.log(data)
});

