var form =document.createElement("form")
//form.className="text-center"
var lable=document.createElement("label");

    lable.innerHTML="Enter the country name";
    lable.setAttribute("for","text");
    var br=document.createElement("br");
    var input=document.createElement("br");

    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","country")
    input.setAttribute("id","text");
    input.setAttribute('required', '');
    

    var br1=document.createElement("br");
    
    var button=document.createElement("button");
    button.setAttribute("type","button")
    button.addEventListener("click",foo);
    button.className="btn btn-primary"
    button.innerHTML="search";
   
    async function foo(){
            try{  
                var ele1=document.getElementById("text").value
                let res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${ele1}`);
                let ele=await res.json();
                done(ele,ele1);
              
             
            } catch(error)  {
            var cat = document.createElement("div")
            cat.innerHTML= error.message
            document.body.append(cat)
            }
            }
        
          function done(ele,ele1) { 
              if(ele1!="")
              {
                  var divhead=document.createElement("div")
                  var h3=document.createElement("h3")
                  h3.innerHTML=`${ele1} brewery details :`
                  divhead.append(h3)
                  document.body.append(divhead)
                
                for(let i=0;i<ele.length;i++){
                          
                   var main=document.createElement("div")
                   main.className="main"
                   var div=document.createElement("div");
                   div.innerHTML=`Name : ${ele[i].name}  type : ${ele[i].brewery_type}`
                   var div1=document.createElement("div")
                   div1.innerHTML=`Address : ${ele[i].address_2}`
                   
                   var web =document.createElement("div")
                  web.className="aaa"
                         if(ele[i].website_url==undefined){
                            web.innerHTML="url is not upload"
                            
                         }else{  web.innerHTML=`website_url: ${ele[i].website_url}`
                         
                        }
                         var phone =document.createElement("div");
                         phone.innerHTML=`Phone number :  ${ele[i].phone}`
                           
                    main.append(div,div1,web,phone)
                    document.body.append(main)
            }
            
            }}
            form.append(lable,br,input,button)
            document.body.append(form);