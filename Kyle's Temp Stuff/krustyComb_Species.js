


function addData(data) {
    console.log(data.burger_by_species['Krusty Combo'])
    
    var ctx = document.getElementById('myChart')                                                                                  
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Coral', 'Giant Clam', 'Gray Whale', 'Leatherback Turtle',
                    'Salmon', 'Sea Lion', 'Seahorse'],
            datasets: [{
                backgroundColor: ['coral', 'rgb(30, 157, 147)', '#645353', 'rgb(77, 77, 39)', 'salmon', 'aqua', 'purple'],
                data: [10, 45, 67, 13, 5, 18, 9],
                borderColor: ['black', 'black','black','black','black','black',
                             'black'],
                borderWidth: [1, 1, 1, 1, 1, 1, 1, 1]
            }]
        },
        options: {
            title: {
                display: true, 
                text: 'Krusty Combo Sales per Species'
            }
        }
    })
}


$(document).ready(function() {
    $.getJSON("krustykrab.json", addData)
})
        
            