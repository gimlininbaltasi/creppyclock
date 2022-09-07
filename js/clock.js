let Name = prompt("İsminiz Nedir?")

if (Name != null) {
    document.getElementById("myName").innerHTML =
    `Merhaba ${Name} hoşgeldin!`}

    let daysList = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma' ,'Cumartesi']
    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var d = daysList[date.getDay()]; // 0 - 7
        
        
        

        

        
        var time = h + ":" + m + ":" + s + " "+d;
        document.getElementById("myClock").innerText = time;
        document.getElementById("myClock").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
    showTime();

    window.onload = function() {
        document.getElementById("myAudio").play();
        }