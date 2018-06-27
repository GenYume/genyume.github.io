/* eslint-env browser */

d3.text("../sets/portfolio.csv").then(function(data) {
    var parsedCSV = d3.csvParseRows(data);
console.log(parsedCSV[0]);
    var container = d3.select(".abba")
        .append("table")

        container.append("thead").append("tr")
                .selectAll("th")
                .data(parsedCSV[0])
                .enter().append("th")
                .text(function(d) {
                    return d;
                });

        container.append("tbody")
                .selectAll("tr").data(parsedCSV.slice(1))
                .enter().append("tr")

        .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; });
});//v5
