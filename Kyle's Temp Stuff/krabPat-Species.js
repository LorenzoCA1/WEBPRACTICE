


function addData(data) {
    console.log(data.burger_by_species['Krabby Pattie'])
    
    let bObj = data.burger_by_species['Krabby Pattie']
    
    //console.log(bObj)
    console.log(bObj.coral)
    console.log(bObj['giant clam'])
    console.log(bObj['gray whale'])
    console.log(bObj['leatherback turtle'])
    console.log(bObj.salmon)
    console.log(bObj['sea lion'])
    console.log(bObj.seahorse)
    
    var ctx = document.getElementById('myChart')      
    
    var num1 = bObj.coral
    var num2 = bObj['giant clam']
    var num3 =bObj['gray whale']
    var num4 =bObj['leatherback turtle']
    var num5 =bObj.salmon
    var num6 =bObj['sea lion']
    var num7 =bObj.seahorse
    
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Coral', 'Giant Clam', 'Gray Whale', 'Leatherback Turtle',
                    'Salmon', 'Sea Lion', 'Seahorse'],
            datasets: [{
                backgroundColor: ['coral', 'rgb(30, 157, 147)', '#645353', 'rgb(77, 77, 39)', 'salmon', 'aqua', 'purple'],
                data: [num1, num2, num3, num4, num5, num6, num7],
                borderColor: ['black', 'black','black','black','black','black',
                             'black'],
                borderWidth: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
            }]
        },
        options: {
            title: {
                display: true, 
                text: 'Krabby Pattie Sales per Species'
            }
        }
    })
}


$(document).ready(function() {
    $.getJSON("krustykrab.json", addData)
})
        
            