// Declare the chart dimensions and margins.
const width = 960;
const height = 500;
const marginTop = 20;
const bottomMargin = 30;
const rightMargin = 20;
const leftMargin = 40;

// await crashed the page ???!!
const data = d3.csv("./labeled.csv", (d) => {
  return {
    country: d.country,
    medoids: +d.medoids,
  };
});

const svg = d3.create("svg").attr("width", width).attr("height", height);

// Declare the x (horizontal position) scale.
const x = d3
  .scaleLinear()
  .domain([0, 100])
  .range([leftMargin, width - rightMargin]);

// Declare the y (vertical position) scale.
const y = d3
  .scaleLinear()
  .domain([0, 100])
  .range([height - bottomMargin, marginTop]);

svg
  .append("g")
  .attr("transform", `translate(0,${height - bottomMargin})`)
  .call(d3.axisBottom(x));

svg
  .append("g")
  .attr("transform", `translate(${leftMargin},0)`)
  .call(d3.axisLeft(y));

viz.append(svg.node());
