//dashboard js
var home = document.getElementById("icon");
var graphcontainer = document.getElementById("graph_container");
var logout = document.getElementById("logout");
var expand = 0; //0 = small, 1 = large
var table

home.onclick = function(){
    $("html, body").animate({scrollTop: 0}, 250);
}
graphcontainer.onclick=function(){
    if(expand == 0){
        $("#graph_container").css('height', '480px');
        expand = 1;
        $("html, body").animate({scrollTop: 0}, 250);
    }
    else{
        $("#graph_container").css('height', '260px');
        expand = 0;
        $("html, body").animate({scrollTop: 0}, 250);
    }
}
logout.onclick = function(){
    window.location.href="logout.html";
}

//graph js


let burger_sales
let KrabbyPattie
let myArray
function addData(data){
    console.log(data.burger_sales)
    console.log(data.burger_sales["Krabby Pattie"])
    console.log(data.burger_sales["Krusty Combo"])
    console.log(data.burger_sales["Krusty Deluxe"])
    
    burger_sales = data
                
    console.log(burger_sales)
                
    KrabbyPattie = burger_sales.burger_sales['Krabby Pattie']
    
    myArray = [burger_sales.burger_sales['Krabby Pattie'], burger_sales.burger_sales['Krusty Combo'] , burger_sales.burger_sales['Krusty Deluxe']]
                
    console.log(myArray[0])
                
    var num1 = myArray[0]
    var num2 = myArray[1]
    var num3 = myArray[2]
                
    console.log(num1)
                
    var ctx = document.getElementById("myChart1");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels:['Krabby Pattie', 'Krusty Combo', 'Krusty Deluxe'], 
        datasets: [{
        label: 'Burger Sales',
        data: [num1, num2, num3], // get actual data from JSON
        backgroundColor: [
            'rgba(217, 19, 61, 0.51)',
            'rgba(54, 162, 235, 0.51)',
            'rgba(255, 206, 86, 0.51)'
        ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        }]
    }
    });
                
                
                
                
                
    
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

    var ctx = document.getElementById('myChart2')

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
    
    //donut deluxe
    console.log(data.burger_by_species['Krusty Deluxe'])
    
    let bObj = data.burger_by_species['Krusty Deluxe']
    
    //console.log(bObj)
    console.log(bObj.coral)
    console.log(bObj['giant clam'])
    console.log(bObj['gray whale'])
    console.log(bObj['leatherback turtle'])
    console.log(bObj.salmon)
    console.log(bObj['sea lion'])
    console.log(bObj.seahorse)
    
    var ctx = document.getElementById('myChart3')      
    
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
            responsive: true, 
            title: {
                display: true, 
                text: 'Krusty Deluxe Sales per Species'
            }
            
        }
    })
    
    //donut combo
    console.log(data.burger_by_species['Krusty Combo'])
    
    let bObj2 = data.burger_by_species['Krusty Combo']
    
    console.log(bObj2)
    console.log(bObj2.coral)
    console.log(bObj2['giant clam'])
    console.log(bObj2['gray whale'])
    console.log(bObj2['leatherback turtle'])
    console.log(bObj2.salmon)
    console.log(bObj2['sea lion'])
    console.log(bObj2.seahorse)
    
    var ctx = document.getElementById('myChart4')      
    
    var num1 = bObj2.coral
    var num2 = bObj2['giant clam']
    var num3 =bObj2['gray whale']
    var num4 =bObj2['leatherback turtle']
    var num5 =bObj2.salmon
    var num6 =bObj2['sea lion']
    var num7 =bObj2.seahorse
    
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
            responsive: true, 
            title: {
                display: true, 
                text: 'Krusty Combo Sales per Species'
            }
        }
    })
    
    
    //pattie
    console.log(data.burger_by_species['Krabby Pattie'])
    
    let bObj3 = data.burger_by_species['Krabby Pattie']
    
    console.log(bObj3)
    console.log(bObj3.coral)
    console.log(bObj3['giant clam'])
    console.log(bObj3['gray whale'])
    console.log(bObj3['leatherback turtle'])
    console.log(bObj3.salmon)
    console.log(bObj3['sea lion'])
    console.log(bObj3.seahorse)
    
    var ctx = document.getElementById('myChart5')      
    
    var num1 = bObj3.coral
    var num2 = bObj3['giant clam']
    var num3 =bObj3['gray whale']
    var num4 =bObj3['leatherback turtle']
    var num5 =bObj3.salmon
    var num6 =bObj3['sea lion']
    var num7 =bObj3.seahorse
    
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
            responsive: true, 
            title: {
                display: true, 
                text: 'Krabby Pattie Sales per Species'
            }
        }
    })
    
    //table
    let bObj4 = data.sales
    
    console.log(bObj4)
    
    var arr = $.map(bObj4, function(el) {
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
        
        
            
$(document).ready(function() {
    $.getJSON("krustykrab.json", addData)
    
    table = $("#table").DataTable()
})
        