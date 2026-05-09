/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
    fetch('https://api.open-meteo.com/v1/forecast?latitude=60.1699&longitude=24.9384&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Europe%2FHelsinki')
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    naytaSaa(data);
                })
                .catch(function(error) {
                    document.getElementById("weather-data").innerHTML = 
                        "<p class='text-danger'>Säätietoja ei saatu ladattua</p>";
                });
            
            function naytaSaa(data) {
                const current = data.current;
                const lampotila = current.temperature_2m;
                const kosteus = current.relative_humidity_2m;
                const tuuli = current.wind_speed_10m;
                const sääkoodi = current.weather_code;
                
                let saateksti = "Selkeää";
                if (sääkoodi > 0 && sääkoodi <= 3) saateksti = "Pilvistä";
                else if (sääkoodi >= 45 && sääkoodi <= 48) saateksti = "Sumuista";
                else if (sääkoodi >= 51 && sääkoodi <= 67) saateksti = "Sateista";
                else if (sääkoodi >= 71 && sääkoodi <= 77) saateksti = "Lumisadetta";
                
                let pyorailysaa = "Erinomainen";
                let vari = "text-success";
                if (lampotila < 5 || lampotila > 25 || tuuli > 15) {
                    pyorailysaa = "Haastava";
                    vari = "text-warning";
                }
                if (lampotila < 0 || tuuli > 20) {
                    pyorailysaa = "Vaikea";
                    vari = "text-danger";
                }
                
                let html = "";
                html += "<div class='card-body'>";
                html += "<h3 class='card-title'><i class='fas fa-cloud-sun'></i>Sää Helsingissä</h3>";
                html += "<p class='card-text'>";
                html += "<strong>Lämpötila:</strong> " + lampotila + "°C<br>";
                html += "<strong>Ilmankosteus:</strong> " + kosteus + "%<br>";
                html += "<strong>Tuuli:</strong> " + tuuli + " m/s<br>";
                html += "<strong>Säätila:</strong> " + saateksti + "</p>";
                html += "<h4 class='" + vari + "'><i class='fas fa-bicycle'></i> Pyöräilysää: " + pyorailysaa + "</h4>";
                html += "</div></div>";
                
                document.getElementById("weather-data").innerHTML = html;
            }