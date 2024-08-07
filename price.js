document.addEventListener('DOMContentLoaded', function(){
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    const selection = document.querySelector('.selection');
    const price = document.getElementById('price');
    const priceA = document.getElementById('priceA');
    const priceTraitement = document.getElementById('priceTraitement');
    const nombreAdulte = document.getElementById('nbrA');
    const nombreEnfant = document.getElementById('nbrE');
    let down = document.querySelector('.down');
    let down1 = document.querySelector('.down1');
    let up = document.querySelector('.up');
    let up1 = document.querySelector('.up1');
    let amount = document.querySelector('.amount');
    let amountActivies = document.querySelector('.amount1');
    let adulteAmount = document.querySelector('.adulteAmount');
    let adultePrice= document.getElementById('priceAdulte');
    let enfantAmount = document.querySelector('.enfantAmount');
    let enfantPrice = document.getElementById('priceEnfant');
    let nuitAmount = document.querySelector('.amountNuit')
    const form = document.getElementById('form');
    let Total = document.querySelector('.amount2');
    let TotalAE = document.querySelector('.amountAE');
    let inputTotalAE = document.querySelector('#totalAdulteEnfant');
    let amountPrice = 0;
    let amountPriceA = 0;
    let halthPrice = 0;
    const check = document.querySelectorAll('.plongé');
    const date = document.querySelectorAll('#date')
    let date1 =  document.querySelector('.dateA');
    let date2 =  document.querySelector('.dateD');
    let nombreDeNuits = document.getElementById('passNight')
    let nightToPhp = document.getElementById('dure')
    const NowDate = new Date();
    let NowYear = NowDate.getFullYear();
    let NowMonth = NowDate.getMonth() + 1;
    let NowDay = NowDate.getDate();
    let NombrePersonnesActivité = document.getElementById('nbrAA');
    let amountActivité = document.querySelector('.amountActivité');
    let down2 = document.querySelector('.down2');
    let up2 = document.querySelector('.up2');
    const lisSup = document.querySelector('#suplement');
    let familialeCount = document.querySelector('.familialeCount');

    NombrePersonnesActivité.disabled = true ;
    nombreAdulte.disabled = true;
    nombreEnfant.disabled = true;
    
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
        priceTraitement.value = amountPrice;
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
    priceTraitement.value = amountPrice;
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
                    if(familialeCount.value != 3){
                        if (i < 4) {
                            i++;
                        } else {
                            i = 4;
                        }
                    }else{
                        if (i < 3) {
                            i++;
                        } else {
                            i = 3;
                        }
                    }
                    nombreEnfant.value = i;
                    price1 = halthPrice * i;
                    enfantAmount.innerHTML = price1;
                    enfantPrice.value = price1;
                    inputTotalAE.value = price1 + parseFloat(adulteAmount.textContent);
                    TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);
                    nuitAmount.innerHTML = parseFloat(TotalAE.textContent) * parseFloat(nombreDeNuits.textContent)
                    Total.innerHTML =  parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
                    price.value = nuitAmount.textContent;
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
            enfantPrice.value = price1;
            inputTotalAE.value = price1 + parseFloat(adulteAmount.textContent);
            TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);
            nuitAmount.innerHTML = parseFloat(TotalAE.textContent) * parseFloat(nombreDeNuits.textContent);
            Total.innerHTML =  parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
            price.value = nuitAmount.textContent;

        })
    }
    function btnUD1(Sn1){
                let i = 0 ;
                let price2 = 0;
                    up1.addEventListener('click', function () {
                        if(familialeCount.value != 3){
                            if (i < 4) {
                                i++;
                            } else {
                                i = 4;
                            }
                        }else{
                            if (i < 3) {
                                i++;
                            } else {
                                i = 3;
                            }
                        }
                        nombreAdulte.value = i;
                        price2 = amountPrice * i;
                        adulteAmount.innerHTML = price2;
                        console.log(`nombre d'adulte` + nombreAdulte.value);
                        console.log(`prix adulte` +  price2);
                        adultePrice.value = parseFloat(adulteAmount.textContent);
                        enfantPrice.value = parseFloat(enfantAmount.textContent);
                        inputTotalAE.value = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);    
                        TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + parseFloat(adulteAmount.textContent);
                        nuitAmount.innerHTML = parseFloat(TotalAE.textContent) * parseFloat(nombreDeNuits.textContent);
                        Total.innerHTML =  parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
                        price.value = nuitAmount.textContent;
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
            adultePrice.value = price2;
            inputTotalAE.value = parseFloat(enfantAmount.textContent) + price2;
            TotalAE.innerHTML = parseFloat(enfantAmount.textContent) + price2; 
            nuitAmount.innerHTML = parseFloat(TotalAE.textContent) * parseFloat(nombreDeNuits.textContent);
            Total.innerHTML =  parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
            price.value = nuitAmount.textContent;
            })
    }

    if(date1.value == ""){
        date2.disabled = true;
    }else{
        date2.disabled = false;
    }
    if(date1.value !== "" && date2.value !==""){
        setTimeout(() => {
            lisSup.disabled = false;
            $('#label').css('color','black')
        }, 100);
    }else{
        lisSup.disabled = true;
        $('#label').css('color','gray')
    }
    let activitéArray = [];
    let iForA = 0;
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
                activitéArray.push(check.value)
                amountActivies.innerHTML = amountPriceA;
                priceA.value = amountActivité.textContent;               
                amountActivité.innerHTML = amountPriceA* NombrePersonnesActivité.value;
            }
            else{
                console.log('not checked')
                switch(check.value){
                    case "excursion avec plongée sous marine":
                        console.log('15€');
                        amountPriceA -= 15;
                        activitéArray = activitéArray.filter(index => index !== 'excursion avec plongée sous marine')
                        break
                    case "baptême de plongée":
                        console.log('20€');
                        amountPriceA -= 20;
                        activitéArray = activitéArray.filter(index => index !== 'baptême de plongée')
                        break
                    case "brevet de plongée":
                        console.log('18€');
                        amountPriceA -= 18;                 
                        activitéArray = activitéArray.filter(index => index !== 'brevet de plongée')   
                        break
                    case "excursion des baleines (juillet-septembre)":
                        console.log('16€');
                        amountPriceA -= 16;                      
                        activitéArray = activitéArray.filter(index => index !== 'excursion des baleines (juillet-septembre)')
                        break
                    case "excursions en quad ou moto":
                        console.log('11€');
                        amountPriceA -= 11;              
                        activitéArray = activitéArray.filter(index => index !== 'excursions en quad ou moto')      
                        break
                }
                amountActivité.innerHTML = amountPriceA* NombrePersonnesActivité.value;
                console.log(amountPriceA)
                amountActivies.innerHTML = amountPriceA;
                priceA.value = amountActivité.textContent;
            }
            NombrePersonnesActivité.value = 1;
            iForA = 1;
            Total.innerHTML = parseFloat(TotalAE.textContent) + parseFloat(amountActivité.textContent);
        })
    })
    form.addEventListener('change', function(){
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
                let LogementNight = parseFloat(TotalAE.textContent) * diffDays;
                let c = LogementNight + parseFloat(amountActivité.textContent) + parseFloat($('.prixLits').text()) ;
                price.value = LogementNight;
                console.log(nightToPhp.value)
                nuitAmount.innerHTML = LogementNight + parseFloat($('.prixLits').text());
                Total.innerHTML = c;
                lisSup.disabled = false;
                $('#label').css('color','black')
            }, 100);
        }
    })  

    let activitiesPrice = amountActivies.textContent;
    setInterval( function (){
        activitiesPrice = amountActivies.textContent;
   }, 1000);

    up2.addEventListener('click', function(){
        iForA = iForA+=1
        NombrePersonnesActivité.value = iForA;
        amountActivité.innerHTML = parseFloat(activitiesPrice)* iForA;
        Total.innerHTML = parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
        Total.value = parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
        priceA.value = parseFloat(activitiesPrice)* iForA;
    })
    down2.addEventListener('click', function(){
        if(iForA <= 1){
            iForA =1;
        }else{
            iForA-=1
        }
        NombrePersonnesActivité.value = iForA;      
        amountActivité.innerHTML = parseFloat(activitiesPrice)* iForA;
        Total.innerHTML = parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
        Total.value = parseFloat(nuitAmount.textContent) + parseFloat(amountActivité.textContent);
        priceA.value = parseFloat(activitiesPrice)* iForA;
    })

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

let pay = Total.textContent;
let firstName = nom.textContent;
let activitéPrix = $('.amountActivité').text();
let lastName = prenom.textContent;
setInterval( function allocation(){
     pay = Total.textContent;
     firstName = nom.value;
     lastName = prenom.textContent;
     activitéPrix = $('.amountActivité').text();
}, 1000);
paypal.Buttons({
    style: {
    layout: 'vertical',
    color:  'blue',
    shape:  'rect',
    label:  'paypal'
    },
    createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: pay
        },
        payer: {
            name: {
                given_name: firstName,
                surname: lastName
            }
        },
      }]
    });
    },
    onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
   //   alert('Transaction completed by ' + details.payer.name.given_name);
      $(document).ready(function(){
        $('.payment-status').show('slow')
        $('#cardPay').hide('slow');
        $('.approved').show('slow');
        $('.rejected').hide();
        $('.approve-message').hide()
        $('.approve-message').css('opacity','0')
        $('.animation-a').html('<lottie-player class="approve-anim" src="./assets/Animate status/approved.json" background="transparent" speed="1" style="width: 300px; height: 300px;"  autoplay></lottie-player>')
        setTimeout(function(){
            $('.approve-message').show('slow')
            $('.approve-message').animate({
                opacity : '1'
            },'slow')
        },1500)
        setTimeout(function(){
            $('.approve-anim').hide('slow')
        },1200)
        $(".retour").click(function(){
            $('.rejected').hide('slow')
            $('.approved').hide('slow')
            $('.payment-status').hide()
        })
        $.ajax({
            url:'app.php',
            type:'POST',
            data: {
                price : pay,
                priceActivities: activitéPrix,
                priceTraitement: priceTraitement.value,
                priceAdulte: adultePrice.value,
                priceEnfant: enfantPrice.value,
                totalAE: inputTotalAE.value,
                nom: firstName.toUpperCase(),
                prenom: $('#prenom').val(),
                mail: $('#mail').val(),
                selection: selection.value,
                dateArrive: date1.value,
                dateDepart: date2.value,
                dure: nightToPhp.value,
                nbrA: nombreAdulte.value,
                nbrE: nombreEnfant.value,
                nbrPIAA: $('.nbrAA').val(),
                activité:  activitéArray,
                prixSup : $('.prixLits').text(),
                litSup : $('#lit').text()
            },
            success: function(){
            }
          })
      })
    });
    },
    onError: function(err) {
        $('.payment-status').show('slow')
        $('.approved').hide()
        $('.rejected').show('slow');
        $('.reject-message').hide()
        $('.animation-r').html('<lottie-player class="reject-anim" src="./assets/Animate status/rejected.json" background="transparent" speed="1" style="width: 300px; height: 300px;"  autoplay></lottie-player>')
        $('.reject-message').css('opacity','0')
        $('#cardPay').hide('slow');
        setTimeout(function(){
            $('.reject-message').show('slow')
            $('.reject-message').animate({
                opacity : '1'
            },'slow')
        },1500)
        setTimeout(function(){
                $('.reject-anim').hide('slow')
        },1200)
        $(".retour").click(function(){
            $('.rejected').hide('slow');
            $('.approved').hide('slow');
            $('.payment-status').hide();
            $('#cardPay').show('slow');
        })
        console.log('blem an')
    }
    }).render('#cardPay');
 })

    
    
    
    