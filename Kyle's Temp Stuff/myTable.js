
var table
$(document).ready(()=> {
    
    table = $("#myTable").DataTable()
    $.getJSON("krustykrab.json", addData)
    
    /*var i
    for(i = 0; i < 20; i++) {
        table.row.add([
        'test',
        'testing',
        'tested'
    ]).draw(true)
        
    }*/
    
})

function addData(data) {
    let bObj = data.sales
    
    console.log(bObj)
    
    var arr = $.map(bObj, function(el) {
        return el
    })
    
    console.log(arr[0].datetime)
    console.log(arr[0].burger)
    console.log(arr[0].species)
    
    var i 
    var length = arr.length
    console.log(length)
    for(i = 0; i < length; i++) {
        let time
        let burger
        let species
        
        time = arr[i].datetime
        burger = arr[i].burger
        species = arr[i].species
        table.row.add([
            time,
            burger,
            species
        ]).draw(true)
    }
    
}