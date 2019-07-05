
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
                
                var ctx = document.getElementById("myChart");
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
            }
            
            
            
            $(document).ready(function() {
                $.getJSON("krustykrab.json", addData)
            })
        
            