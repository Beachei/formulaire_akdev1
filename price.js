document.addEventListener('DOMContentLoaded', function(){
    const selection = document.querySelector('.selection');
    const price = document.getElementById('price');
    const priceA = document.getElementById('priceA');
    const nombreAdulte = document.getElementById('nbrA')
    const nombreEnfant = document.getElementById('nbrE')
    let down = document.querySelector('.down');
    let down1 = document.querySelector('.down1');
    let up = document.querySelector('.up');
    let up1 = document.querySelector('.up1');
    let amount = document.querySelector('.amount');
    let amountActivies = document.querySelector('.amount1');
    let adulteAmount = document.querySelector('.adulteAmount');
    let enfantAmount = document.querySelector('.enfantAmount');
    const form = document.getElementById('form');
    let Total = document.querySelector('.amount2');
    let TotalAE = document.querySelector('.amountAE');
    let amountPrice = 0;
    let amountPriceA = 0;
    let halthPrice = 0;
    const check = document.querySelectorAll('#plongé');
    const date = document.querySelectorAll('#date')
    let date1 =  document.querySelector('.dateA');
    let date2 =  document.querySelector('.dateD');
    let nombreDeNuits = document.getElementById('passNight')
    let nightToPhp = document.getElementById('dure')
    const NowDate = new Date();
    let NowYear = NowDate.getFullYear();
    let NowMonth = NowDate.getMonth() + 1;
    let NowDay = NowDate.getDate();
    
    selection.addEventListener('change', function(){
        console.log(selection)
        if(selection.value == 1){
            amount.innerHTML = 50;
            amountPrice = 50;
        }else if(selection.value == 2){
            amount.innerHTML = 100;
            amountPrice = 100;
        }else if(selection.value == 3){
            amount.innerHTML = 150;
            amountPrice = 150;
        }
        console.log(amountPrice);
        halthPrice = (amountPrice * 50)/100;
         price.value = amountPrice;
         btnUD(amountPrice)
         btnUD1(amountPrice)
         switch(amountPrice){
            case 50:
                nombreEnfant.value = 0
                nombreAdulte.value = 0
                adulteAmount.innerHTML = 0
                enfantAmount.innerHTML = 0
                TotalAE.innerHTML = 0
                break
            case 100:
                nombreEnfant.value = 0
                nombreAdulte.value = 0
                adulteAmount.innerHTML = 0
                enfantAmount.innerHTML = 0
                TotalAE.innerHTML = 0
                break
            case 150:
                nombreEnfant.value = 0
                nombreAdulte.value = 0
                adulteAmount.innerHTML = 0
                enfantAmount.innerHTML = 0
                TotalAE.innerHTML = 0
                break
         }
    })
    if(selection.value == 1){
        amount.innerHTML = 50;
        amountPrice = 50;
    }
    if(selection.value == 2){
        amount.innerHTML = 100;
        amountPrice = 100;
    }
    if(selection.value == 3){
        amount.innerHTML = 150;
        amountPrice = 150;
    }
    price.value = amountPrice;
    console.log(amountPrice)
    halthPrice = (amountPrice * 50)/100;
    switch(amountPrice){
        case 50:
            nombreEnfant.value = 0
            nombreAdulte.value = 0
            break
        case 100:
            nombreEnfant.value = 0
            nombreAdulte.value = 0
            break
        case 150:
            nombreEnfant.value = 0
            nombreAdulte.value = 0
            break
    }
    btnUD(amountPrice)
    btnUD1(amountPrice)
    function btnUD(Sn){
                let i = 0 ; 
                let price1 =0;
                up.addEventListener('click',function (){
                    console.log(nombreEnfant.value)
                    switch(Sn){
                        case 50:
                                if (i < 2) {
                                    i++;
                                } else {
                                    i = 2;
                                }
                                break;
                            case 100:
                                if (i < 3) {
                                    i++;
                                } else {
                                    i = 3;
                                }
                                break;
                            case 150:
                                if (i < 4) {
                                    i++;
                                } else {
                                    i = 4;
                                }
                                break;
                    }
                    nombreEnfant.value = i;
                    price1 = halthPrice * i;
                    enfantAmount.innerHTML = price1;
                    TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);
                    Total.innerHTML = parseFloat(TotalAE.textContent) + amountPriceA;
                        console.log(`nombre d'enfant : ${i}`);
                        console.log(`prix enfant` +  price1);
                    })

        down.addEventListener('click',function(){
            if (i > 0) {
                i--;
            } else {
                i = 0;
            }            
            price1 = halthPrice * i
            enfantAmount.innerHTML = price1;
            nombreEnfant.value = i;
            TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);
            Total.innerHTML = parseFloat(TotalAE.textContent) + amountPriceA;
        })
    }
    function btnUD1(Sn1){
                let i = 0 ;
                let price2 = 0;
                    up1.addEventListener('click', function () {
                        switch (Sn1) {
                            case 50:
                                if (i < 2) {
                                    i++;
                                } else {
                                    i = 2;
                                }
                                break;
                            case 100:
                                if (i < 3) {
                                    i++;
                                } else {
                                    i = 3;
                                }
                                break;
                            case 150:
                                if (i < 4) {
                                    i++;
                                } else {
                                    i = 4;
                                }
                                break;
                        }
                        nombreAdulte.value = i;
                        price2 = amountPrice * i;
                        adulteAmount.innerHTML = price2;
                        console.log(`nombre d'adulte : ${i}`);
                        console.log(`prix adulte` +  price2);
                        TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);
                        Total.innerHTML = parseFloat(TotalAE.textContent) + amountPriceA;
                    })

        down1.addEventListener('click',function(){
            if (i > 0) {
                i--;
            } else {
                i = 0;
            }
            nombreAdulte.value = i;
            price2 = amountPrice * i;
            adulteAmount.innerHTML = price2;
            console.log('affiche le i de i-- :' + i)
            TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);
            Total.innerHTML = parseFloat(TotalAE.textContent) + amountPriceA;
        })
    }
    


    if(date1.value == ""){
        date2.disabled = true;
    }else{
        date2.disabled = false;
    }
    form.addEventListener('change', function(){
        let a = amountPriceA ;
        let b = parseFloat(TotalAE.textContent);
        let c = a+b;
        Total.innerHTML = c;
        if(date1.value == ""){
            date2.disabled = true;
        }else{
            date2.disabled = false;
        }
        if(date1.value !== "" && date2.value !==""){
            setTimeout(() => {
            let arrivé = new Date(date1.value)
            let départ = new Date(date2.value)
            let night = départ.getTime()  - arrivé.getTime() ;
            const diffDays = Math.floor(night / (1000 * 60 * 60 * 24))
                console.log("nuit" + " " + diffDays)   
                console.log("départ" + " " + départ.getTime())   
                console.log("arrivé" + " " + arrivé.getTime())   
                nombreDeNuits.innerHTML = diffDays;
                nightToPhp.value = nombreDeNuits.textContent;
                amount.innerHTML = amountPrice * diffDays;
                let LogementNight = amountPrice * diffDays;
                let c = LogementNight + amountPriceA ;
                price.value = LogementNight;
                console.log(nightToPhp.value)
                Total.innerHTML = c;
            }, 100);
        }
    })  
    check.forEach(function(check){
        check.addEventListener('input', function(){
            if(check.checked){
                console.log(check.value)
                switch(check.value){
                    case "excursion avec plongée sous marine":
                        console.log('15€');
                        amountPriceA += 15;
                        break
                    case "baptême de plongée":
                        console.log('20€');
                        amountPriceA += 20;
                        break
                    case "brevet de plongée":
                        console.log('18€');
                        amountPriceA += 18;                    
                        break
                    case "excursion des baleines (juillet-septembre)":
                        console.log('16€');
                        amountPriceA += 16;                      
                        break
                    case "excursions en quad ou moto":
                        console.log('11€');
                        amountPriceA += 11;                    
                        break
                }
                console.log(amountPriceA)
                amountActivies.innerHTML = amountPriceA;
                priceA.value = amountPriceA;
            }
            else{
                console.log('not checked')
                switch(check.value){
                    case "excursion avec plongée sous marine":
                        console.log('15€');
                        amountPriceA -= 15;
                        break
                    case "baptême de plongée":
                        console.log('20€');
                        amountPriceA -= 20;
                        break
                    case "brevet de plongée":
                        console.log('18€');
                        amountPriceA -= 18;                    
                        break
                    case "excursion des baleines (juillet-septembre)":
                        console.log('16€');
                        amountPriceA -= 16;                      
                        break
                    case "excursions en quad ou moto":
                        console.log('11€');
                        amountPriceA -= 11;                    
                        break
                }
                console.log(amountPriceA)
                amountActivies.innerHTML = amountPriceA;
                priceA.value = amountPriceA;
            }
            
        
        })
    })
console.log()
date.forEach(function(date){   
    date.addEventListener('change', function(){
        setTimeout(function(){console.log(date1.value)},100)
        switch(date.name){
            case "dateArrive":
                let dateA = new Date(date.value)
                console.log(dateA.toDateString())
                if(dateA < NowDate){
                    date.value = NowYear.toString() + "-" + NowMonth.toString().padStart('2',0) + "-" + NowDay.toString().padStart('2',0);
                    console.log(dateA.toDateString())
                }
                break
            case "dateDepart":
                let dateD = new Date(date.value);
                let dateDmonth = dateD.getMonth() +1;
                let dateDday = dateD.getMonth();
                let dateForm = dateD.getFullYear().toString() + "-" + dateDmonth.toString().padStart('2',0) + "-" + dateDday.toString().padStart('2',0) ;
                setTimeout(function(){console.log(date.value)},100)
                console.log("date Form" + dateForm)
                if(date.value <= date1.value || dateD <= NowDate){
                    date.value = date1.value;
                    setTimeout(function(){
                        let dateChange = new Date(date.value) 
                        dateChange.setDate(dateChange.getDate() + 1)
                        date.value = dateChange.toISOString().substr(0,10);
                    },100)
                }
                break
        }
    })
})

    })

    
    
    
    