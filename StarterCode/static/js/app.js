var tableData = data;

var table = d3.select("tbody")

function PopTable(x){
    table.text("")
    x.forEach(function(sighting){
       newrecord = table.append("tr")
       Object.entries(sighting).forEach(function([key, value]){
           newrow = newrecord.append("td").text(value)
       }) 
    })};

PopTable(tableData)

function FilterClick(){
    d3.event.preventDefault()
    let inputDate = d3.select("#datetime").property("value");
    let filtererdtable = tableData;

    if(inputDate){
        filtererdtable = filtererdtable.filter((row)=> row.datetime === inputDate)
    }

    PopTable(filtererdtable)
}

d3.selectAll("#filter-btn").on("click", FilterClick);
PopTable(tableData)
