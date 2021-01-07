    
    const alertBanner = document.getElementById("alert");
//    const trafficCanves = document.getElementById('traffic-chart');
const dailyChart = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
   
   
   
   // Alert
   alertBanner.innerHTML = `
<div class="alert-banner">
    <p><strong>Alert:</strong> You Have <strong>6</strong> Overdue Tasks to Complete</p>
    <p class="alert-banner-close">X</p>
</div>`;

alertBanner.addEventListener("click", e =>{
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none";

    }

});


// traffic Data



// Daily Traffic Chart



var myChart = new Chart(dailyChart, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [230, 120, 140, 180, 140, 210, 105],
            backgroundColor: 'rgba(147, 112, 219, 1)',
            borderWidth: 1,
           
           
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    
                }
            }]
        },
        legend: {
            display: false
        } 

    }
});

// Pie Chart

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

    const mobileOptions = {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }
        let mobileChart = new Chart(mobileCanvas, {
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
            });

