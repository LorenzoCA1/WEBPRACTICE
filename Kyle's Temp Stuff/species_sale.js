



function addData(data) {
    console.log(data['species_sales'])
    
    
    var bObj = data['species_sales']
    
    
    
    var ctx = document.getElementById('myChart')
    
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Coral', 'Giant Clam', 'Gray Whale', 'Leatherback Turtle', 'Salmon', 'Sea Lion', 'Seahorse'],
            datasets: [{
                label: 'Species Sales',
                data: [bObj.coral, bObj['giant clam'], bObj['gray whale'],bObj['leatherback turtle'], bObj.salmon, bObj['sea lion'], bObj.seahorse],
                backgroundColor: ['red', 'blue', 'green', 'purple', 'orange', 'indigo', 'yellow']
            }]
        }
    })
}



$(document).ready(function() {
    $.getJSON("krustykrab.json", addData)
})