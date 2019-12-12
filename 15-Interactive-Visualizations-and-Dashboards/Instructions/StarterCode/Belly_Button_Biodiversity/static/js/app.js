function buildMetadata(sample) {
  d3.json(`/metadata/${sample}`).then((data) => {
    // Use d3 to select the panel with id of `#sample-metadata`
    var metaDiv = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    metaDiv.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(data).forEach(([key, value]) => {
      metaDiv.append("span").text(`${key}: ${value}`);
    });

    // BONUS: Build the Gauge Chart

  });
}

function buildCharts(sample) {
  d3.json(`/samples/${sample}`).then((sampledata) => {

    // Build a Bubble Chart
    var layout = {
      xaxis: { title: "OTU ID" }
    };
    var data = [
      {
        x: sampledata.otu_ids,
        y: sampledata.sample_values,
        text: sampledata.otu_labels,
        mode: "markers",
        marker: {
          size: sampledata.sample_values,
          color: sampledata.otu_ids,
          colorscale: "Blackbody"
        }
      }
    ];

    Plotly.plot("bubble", data, layout);

    // Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
    var data = [
      {
        values: sampledata.sample_values.slice(0, 10),
        labels: sampledata.otu_ids.slice(0, 10),
        hovertext: sampledata.otu_labels.slice(0, 10),
        hoverinfo: "hovertext",
        type: "pie"
      }
    ];

    var layout = {
      margin: { t: 0, l: 0 }
    };

    Plotly.plot("pie", data, layout);
  });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
