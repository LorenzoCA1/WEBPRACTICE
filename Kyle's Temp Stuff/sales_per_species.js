
function addData(data) {
    //console.log(data['burger_by_species'])
    
    var kDeluxe = data.burger_by_species['Krusty Deluxe']
    var kPatty = data.burger_by_species['Krabby Pattie']
    var kCombo = data.burger_by_species['Krusty Combo']
    
    console.log(kDeluxe)
    console.log(kPatty)
    console.log(kCombo)
    
    var kd1 = kDeluxe.coral
    var kd2 = kDeluxe['giant clam']
    var kd3 = kDeluxe['gray whale']
    var kd4 = kDeluxe['leatherback turtle']
    var kd5 = kDeluxe.salmon
    var kd6 = kDeluxe['sea lion']
    var kd7 = kDeluxe.seahorse
    
    var kp1 = kPatty.coral
    var kp2 = kPatty['giant clam']
    var kp3 = kPatty['gray whale']
    var kp4 = kPatty['leatherback turtle']
    var kp5 = kPatty.salmon
    var kp6 = kPatty['sea lion']
    var kp7 = kPatty.seahorse
    
    var kc1 = kCombo.coral
    var kc2 = kCombo['giant clam']
    var kc3 = kCombo['gray whale']
    var kc4 = kCombo['leatherback turtle']
    var kc5 = kCombo.salmon
    var kc6 = kCombo['sea lion']
    var kc7 = kCombo.seahorse
    
    var ctx = document.getElementById('myChart')
    
    var myChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: ['Coral', 'Giant Clam', 'Gray Whale', 'Leatherback Turtle', 
                    'Salmon', 'Sea Lion', 'Seahorse'],
            datasets: [
                {
                    label: 'Krusty Deluxe',
                    data: [kd1, kd2, kd3, kd4, kd5, kd6, kd7],
                    borderWidth: 0.5,
                    backgroundColor: 'rgba(226, 22, 22, 0.5)'
                },
                {
                    label: 'Krabby Pattie',
                    data: [kp1, kp2, kp3, kp4, kp5, kp6, kp7],
                    borderWidth: 0.5, 
                    backgroundColor: 'rgba(48, 212, 234, 0.5)'
                }, 
                {
                    label: 'Krusty Combo',
                    data: [kc1, kc2, kc3, kc4, kc5, kc6, kc7],
                    borderWidth: 0.5,
                    backgroundColor: 'rgba(13, 235, 39, 1)'
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Burger Sales Per Species'
            }
        }
    })
}


$(document).ready(function() {
    $.getJSON("krustykrab.json", addData)
})