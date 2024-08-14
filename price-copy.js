document.addEventListener('DOMContentLoaded', function(){
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    const selection = document.querySelectorAll('.selection');
    const price = document.getElementById('price');
    const priceA = document.querySelectorAll('priceA');
    const priceTraitement = document.getElementById('priceTraitement');
    const nombreAdulte = document.querySelectorAll('#nbrA');
    const nombreEnfant = document.querySelectorAll('#nbrE');
    let down = document.querySelector('.down');
    let down1 = document.querySelector('.down1');
    let up = document.querySelector('.up');
    let up1 = document.querySelector('.up1');
    let amount = document.querySelectorAll('.amount');
    let amountActivies = document.querySelectorAll('.amount1');
    let adulteAmount = document.querySelectorAll('.adulteAmount');
    let adultePrice= document.getElementById('priceAdulte');
    let enfantAmount = document.querySelectorAll('.enfantAmount');
    let enfantPrice = document.getElementById('priceEnfant');
    let nuitAmount = document.querySelectorAll('.amountNuit')
    const form = document.querySelectorAll('form');
    let Total = document.querySelectorAll('.amount2');
    let TotalAE = document.querySelectorAll('.amountAE');
    let inputTotalAE = document.querySelector('#totalAdulteEnfant');
    let amountPrice = 0;
    let amountPriceA = 0;
    let halthPrice = 0;
    const check = document.querySelectorAll('.plongé');
    const date = document.querySelectorAll('#date')
    let date1 =  document.querySelectorAll('.dateA');
    let date2 =  document.querySelectorAll('.dateD');
    let nombreDeNuits = document.querySelectorAll('#passNight')
    let nightToPhp = document.querySelectorAll('#dure')
    const NowDate = new Date();
    let NowYear = NowDate.getFullYear();
    let NowMonth = NowDate.getMonth() + 1;
    let NowDay = NowDate.getDate();
    let NombrePersonnesActivité = document.querySelectorAll('#nbrAA');
    let amountActivité = document.querySelectorAll('.amountActivité');
    let down2 = document.querySelector('.down2');
    let up2 = document.querySelector('.up2');
    const lisSup = document.querySelectorAll('#suplement')
    let familialeCount = document.querySelectorAll('.familialeCount');
    let nombreAE = document.querySelectorAll('.nombre')
    lisSup.forEach(function(ls){
        ls.disabled = true;
        $('.label').css('color','gray')
    })
    selection.forEach(function(select){
    amount.forEach(function(amount){
        select.addEventListener('change', function(){
            console.log(selection)
            if(select.value == 1){
                amount.innerHTML = 50;
                amountPrice = 50;
            }else if(select.value == 2){
                amount.innerHTML = 100;
                amountPrice = 100;
            }else if(select.value == 3){
                amount.innerHTML = 150;
                amountPrice = 150;
            }
            nombreEnfant.forEach(function(nE){
                nE.value = 0
            })
            nombreAdulte.forEach(function(nA){
                nA.value = 0
            })
            enfantAmount.forEach(function(Eamount){
                Eamount.innerHTML = 0;
            })
            adulteAmount.forEach(function(Aamout){
                Aamout.innerHTML = 0;
            })
            TotalAE.forEach(function(TotalAE){
                TotalAE.innerHTML = 0
            })
            console.log(amountPrice);
            priceTraitement.value = amountPrice;
            halthPrice = (amountPrice * 50)/100;
             price.value = amountPrice;
        })

            if(select.value == 1){
                amount.innerHTML = 50;
                amountPrice = 50;
            }
            if(select.value == 2){
                amount.innerHTML = 100;
                amountPrice = 100;
            }
            if(select.value == 3){
                amount.innerHTML = 150;
                amountPrice = 150;
            }
        }) 
    })


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
    let prixEnfant = 0
    nombreEnfant.forEach(function(nbrE){
        nbrE.addEventListener('input',function(){
            prixEnfant = nbrE.value * halthPrice;
            enfantAmount.forEach(function(Eamount){
                Eamount.innerHTML = prixEnfant;
            })
        })
    })
    let prixAdulte = 0;
    nombreAdulte.forEach(function(nbrA){
        nbrA.addEventListener('input',function(){
            prixAdulte = nbrA.value * amountPrice;
            adulteAmount.forEach(function(Aamout){
                Aamout.innerHTML = prixAdulte;
            })
        })
    })
    let nombreAEV ;
    nombreAE.forEach(function(NAE){
        NAE.addEventListener('input',function(){
            TotalAE.forEach(function(TotalAE){
                TotalAE.innerHTML = prixEnfant + prixAdulte
                nombreAEV = prixEnfant + prixAdulte
            })
        })
    })
    date2.forEach(function(dated){
        dated.disabled = true;
    })
    let dateArrive ="";
    date1.forEach(function(date1){    
        date1.setAttribute('min', NowDate.toISOString().split('T')[0]) 
        date1.addEventListener('input',function(){
                dateArrive = date1.value
                let dateCHange = new Date(dateArrive);
                dateCHange.setDate(dateCHange.getDate()+1)
                if(dateArrive != ""){
                    date2.forEach(function(dated){
                        dated.disabled = false;
                        dated.setAttribute('min', dateCHange.toISOString().substr(0,10)) 
                    })
                }
        })
    })
    let dateDepart ="";
    date2.forEach(function(dated){
        dated.addEventListener('input',function(){
            dateDepart = dated.value
        })
    })

/*     if(dateArrive !== "" && dateDepart !==""){
        setTimeout(() => {
            lisSup.forEach(function(supl){
                supl.disabled = false;
            })
            $('.label').css('color','black')
        }, 100);
    }else{
        lisSup.forEach(function(supl){
            supl.disabled = true;
        })
        $('.label').css('color','gray')
    } */
    let activitéArray = [];
    let iForA = 0;
    let Aactivité;
    let Aactivities;
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
                amountActivies.forEach(function(aa){
                    aa.innerHTML = amountPriceA
                    Aactivities = amountPriceA
                })
                amountActivité.forEach(function(aa){
                    amountActivité.innerHTML = amountPriceA* NombrePersonnesActivité.value;
                })
                priceA.forEach(function(pa){
                    pa.value = amountActivité.textContent; 
                })
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


   NombrePersonnesActivité.forEach(function(NPA){
    NPA.addEventListener('input',function(){
        iForA = NPA.value;
        Aactivité = Aactivities *iForA;
        amountActivité.forEach(function(AA){
            AA.innerHTML = Aactivité
        })
        priceA.forEach(function(PA){
            PA.value = Aactivité;
        })
    })
   })


date.forEach(function(date){   
    date.addEventListener('input', function(){
        if(dateArrive != "" && dateDepart != ""){
            setTimeout(() => {
            let arrivé = new Date(dateArrive)
            let départ = new Date(dateDepart)
            let night = départ.getTime()  - arrivé.getTime() ;
            const diffDays = Math.floor(night / (1000 * 60 * 60 * 24))
                console.log("nuit" + " " + diffDays)   
                console.log("départ" + " " + départ.getTime())   
                console.log("arrivé" + " " + arrivé.getTime())   
                nombreDeNuits.forEach(function(NDN){
                    NDN.innerHTML = diffDays;
                })
                nightToPhp.forEach(function(NTP){
                    NTP.value = diffDays
                })
                let LogementNight = nombreAEV * diffDays;
                let c = LogementNight + Aactivité + parseFloat($('.prixLits').text()) ;
                price.value = LogementNight;
                console.log(nightToPhp.value)
                nuitAmount.forEach(function(NA){
                    NA.innerHTML = LogementNight + parseFloat($('.prixLits').text())
                })
                Total.forEach(function(T){
                 T.innerHTML = c;
                })
                $('#label').css('color','black')
                lisSup.forEach(function(ls){
                    ls.disabled = false;
                    $('.label').css('color','black')
                })
            }, 50);
        }
    })
})
// FORM TAB
form.forEach(function(Allform){
    Allform.addEventListener('change', function(){
       
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
 });


    
    
    
    