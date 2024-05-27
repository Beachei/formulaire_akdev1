document.addEventListener('DOMContentLoaded', function(){
    const selection = document.querySelector('.selection');
    const price = document.getElementById('price');
    const priceA = document.getElementById('priceA');
    let amount = document.querySelector('.amount');
    let amountActivies = document.querySelector('.amount1');
    const form = document.getElementById('form');
    let Total = document.querySelector('.amount2');
    let amountPrice = 0;
    let amountPriceA = 0;
    const check = document.querySelectorAll('#plongé');
    const date = document.querySelectorAll('#date')
    const NowDate = new Date();
    let NowYear = NowDate.getFullYear();
    let NowMonth = NowDate.getMonth() + 1;
    let NowDay = NowDate.getDate();
    let NowDayD = NowDate.getDate() + 1;

    /* let prix = document.createElement('input');
    prix.setAttribute('type', "hidden")
    prix.setAttribute('name', "amount")
    prix.setAttribute('value', amou) */
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
        console.log(amountPrice)
         price.value = amountPrice;
    
 
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
        let date1 =  document.querySelector('.dateA');
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

                /* if(dateD <= NowDate){
                    date.value = NowYear.toString() + "-" + NowMonth.toString().padStart('2',0) + "-" + NowDayD.toString().padStart('2',0);
                    console.log(date1.value)
                }else  */if(date.value <= date1.value || dateD <= NowDate){
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
form.addEventListener('change', function(){
    let a = amountPrice ;
    let b = amountPriceA;
    let c = a+b;
    Total.innerHTML = c;
})
let a = amountPrice ;
    let b = amountPriceA;
    let c = a+b;
    Total.innerHTML = c;

    })
    
    
    
    