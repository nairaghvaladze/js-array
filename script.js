document.getElementById("h1").style.textAlign="center"; 
var title=["Personal", "Agency", "unlimited"];
var description=["Just started using awesome Module. Great way to boost the hard designing or prototyping process.", "Also a perfect tool for creative studios and freelancers", "Living in today’s metropolitan world of cellular phones, mobile computers" ];
var price= ["Free", 123, 232];
var pdescription=["Per month billed annualy or $250 from month to month", "Per month billed annualy or €250 from month to month", "Per month billed annualy or €250 from month to month"];

for(var i=0; i<title.length; i++){
    if(title[i]=="Personal"){
        document.getElementById("h11").innerHTML=title[0];
        document.getElementById("h11").style.fontWeight="300";
        document.getElementById("h11").style.fontSize="36px";
        document.getElementById("h11").style.color="#43484D";


    }else if(title[i]=="Agency"){
        document.getElementById("h12").innerHTML=title[1];
        document.getElementById("h12").style.fontWeight="300";
        document.getElementById("h12").style.fontSize="36px";
        document.getElementById("h12").style.color="#43484D";
    }else if(title[i]=="unlimited"){
        document.getElementById("h13").innerHTML=title[2];
        document.getElementById("h13").style.fontWeight="300";
        document.getElementById("h13").style.fontSize="36px";
        document.getElementById("h13").style.color="#43484D";
    }
}
for(var j=0; j<description.length; j++){
    if(description[j]=="Just started using awesome Module. Great way to boost the hard designing or prototyping process."){
        document.getElementById("p11").innerHTML=description[0];
        document.getElementById("p11").style.width="247px";
        document.getElementById("p11").style.textAlign="center";
        document.getElementById("p11").style.fontWeight="400";
        document.getElementById("p11").style.fontSize="13px";
        document.getElementById("p11").style.marginBottom="40px";
        document.getElementById("p11").style.color="#86939E";
    } else if (description[j]=="Also a perfect tool for creative studios and freelancers"){
        document.getElementById("p12").innerHTML=description[1];
        document.getElementById("p12").style.width="247px";
        document.getElementById("p12").style.textAlign="center";
        document.getElementById("p12").style.marginBottom="55px";
        document.getElementById("p12").style.fontWeight="400";
        document.getElementById("p12").style.fontSize="14px";
        document.getElementById("p12").style.color="#86939E";
    }else if (description[j]=="Living in today’s metropolitan world of cellular phones, mobile computers"){
        document.getElementById("p13").innerHTML=description[2];
        document.getElementById("p13").style.width="247px";
        document.getElementById("p13").style.textAlign="center";
        document.getElementById("p13").style.marginBottom="55px";
        document.getElementById("p13").style.fontWeight="400";
        document.getElementById("p13").style.fontSize="14px";
        document.getElementById("p13").style.color="#86939E";
    }

}
for(var a=0; a<price.length; a++){
    if(price[a]=="Free"){
        document.getElementById("pr11").innerHTML=price[0];
        document.getElementById("pr11").style.fontWeight="300";
        document.getElementById("pr11").style.fontSize="43px";
        document.getElementById("pr11").style.color="#7DC855";
    }else if(price[a]=="123"){
        document.getElementById("pr12").innerHTML=price[1];
        document.getElementById("pr12").style.fontWeight="300";
        document.getElementById("pr12").style.fontSize="43px";
        document.getElementById("pr12").style.color="#43484D";
    }
else if(price[a]=="232"){
    document.getElementById("pr13").innerHTML=price[2];
    document.getElementById("pr13").style.fontWeight="300";
    document.getElementById("pr13").style.fontSize="43px";
    document.getElementById("pr13").style.color="#43484D";
}
}
for(var b=0; b<pdescription.length; b++){
    if(pdescription[b]=="Per month billed annualy or $250 from month to month"){
        document.getElementById("pd11").innerHTML=pdescription[0];
        document.getElementById("pd11").style.fontWeight="400";
        document.getElementById("pd11").style.width="130px";
        document.getElementById("pd11").style.fontSize="11px";
        document.getElementById("pd11").style.color="#86939E";
        document.getElementById("pd11").style.marginLeft="30px";
        document.getElementById("pd11").style.textAlign="left";
    }else if(pdescription[b]=="Per month billed annualy or €250 from month to month")
    {
        document.getElementById("pd12").innerHTML=pdescription[1];
        document.getElementById("pd12").style.fontWeight="400";
        document.getElementById("pd12").style.width="130px";
        document.getElementById("pd12").style.fontSize="11px";
        document.getElementById("pd12").style.color="#86939E";
        document.getElementById("pd12").style.marginLeft="30px";
        document.getElementById("pd12").style.textAlign="left"
    }  if(pdescription[b]=="Per month billed annualy or €250 from month to month")
    {
        document.getElementById("pd13").innerHTML=pdescription[2];
        document.getElementById("pd13").style.fontWeight="400";
        document.getElementById("pd13").style.width="130px";
        document.getElementById("pd13").style.fontSize="11px";
        document.getElementById("pd13").style.color="#86939E";
        document.getElementById("pd13").style.marginLeft="30px";
        document.getElementById("pd13").style.textAlign="left"
    }
}
function buy(){
    window.alert("ნამდვილად გსურთ იყიდოთ აღნიშნული პაკეტი?");
}
function buy1(){
    window.alert("ნამდვილად გსურთ იყიდოთ აღნიშნული პაკეტი?");
}
function buy2(){
    window.alert("ნამდვილად გსურთ იყიდოთ აღნიშნული პაკეტი?");
}