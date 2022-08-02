var btn_pls = document.querySelectorAll(".plus")
var btn_mns = document.querySelectorAll('.minus')
var likes = document.querySelectorAll(".like")
var prices = document.querySelectorAll(".price")
var delete_bnts = document.querySelectorAll(".delete")
var totale = document.getElementById("total")


function sum() {
    var somme=0
    for (let i = 0; i < prices.length; i++) {
      somme+= Number(prices[i].innerHTML);
      totale.innerHTML =somme 
        
    }
}





function inc (e) {
   var cible = e.target
   var div= cible.parentElement
   var p = div.querySelector("p")
   var value = Number(p.innerHTML)
   value++
   p.innerHTML=value;
   var tr = div.parentElement.parentElement;
   var unit_price = tr.querySelector(".unitPrice")
   var up = Number(unit_price.innerHTML);
   var price = tr.querySelector(".price")
   price.innerHTML = up*value;
   sum()
    }



    function déc (e) {
        var cible = e.target
        var div = cible.parentElement
        var p = div.querySelector("p")
        var value = Number(p.innerHTML)
        if(value>0) {value--}
        p.innerHTML=value;
        var tr = div.parentElement.parentElement;
        var unit_price = tr.querySelector(".unitPrice")
        var up = Number(unit_price.innerHTML);
        var price = tr.querySelector(".price")
        price.innerHTML = up*value;
        sum()
    }




    function changeColor(e){
        var cible = e.target
        if (cible.style.color=='red') {cible.style.color='gray'}
        else {cible.style.color='red'}
    }

    function deleteRow(e) {
        var cible = e.target;
        var tr = cible.parentElement.parentElement.parentElement.parentElement;
        var price = tr.querySelector(".price")
        price.innerHTML='0'
        tr.remove();
        sum();
    }
   

    for (var i = 0; i < btn_pls.length; i++) {
        btn_pls[i].addEventListener("click",inc)
        
    }
    for (let i = 0; i < btn_mns.length; i++) {
        btn_mns[i].addEventListener("click",déc)
        
    }
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener("click",changeColor)}
        for (let i = 0; i < delete_bnts.length; i++) {
            delete_bnts[i].addEventListener('click',deleteRow)
            
        }

        
    
    