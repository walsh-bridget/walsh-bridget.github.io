
// Data about book genre
const data = [
    { name: "Literary", value: 6 },
    { name: "Thriller", value: 5 },
    { name: "Classics", value: 2 },
    { name: "Horror", value: 4 }
];

// Set up chart dimensions
const width = 500;
const height = 350;
const margin = 50;

// Create the SVG chart
const svg = d3.select("#myChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Create the x scale
const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin, width - margin])
    .padding(0.2);

// Create the y scale
const y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin, margin]);

// Draw the bars
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - margin - y(d.value))
    .attr("fill", "steelblue");

// Add x axis
svg.append("g")
    .attr("transform", `translate(0, ${height - margin})`)
    .call(d3.axisBottom(x));

// Add y axis
svg.append("g")
    .attr("transform", `translate(${margin}, 0)`)
    .call(d3.axisLeft(y));
