
      var compcart = [];
      var html =
          "<table><tr><td>Company</td><td>Model</td><td>Memory</td><td>Price</td></tr>";
        var html1 = "</table>";
      function Add() {
        var componame = document.getElementById("compname").value;
        var compmodel = document.getElementById("model").value;
        var compmemory = parseInt(document.getElementById("memory").value);
        var compprice = parseInt(document.getElementById("price").value);

        var cart = {};
        cart.itemname = document.getElementById("compname").value;
        cart.itemmodel = document.getElementById("model").value;
        cart.itemmemory = document.getElementById("memory").value;
        cart.itemprice = document.getElementById("price").value;
        compcart.push(cart);
        console.log(compcart);
        var row="";

       
        compcart.forEach((element) => {
          row +=
            "<tr><td>" +
            element.itemname +
            "</td><td >" +
            element.itemmodel +
            "</td><td>" +
            element.itemmemory +
            "</td><td>" +
            element.itemprice +
            "</td></tr>";
        });
        document.getElementById("output").innerHTML = html +row+ html1;
      };
function display() {
    
  var row = "";
        compcart.forEach(element => {
          row += `  <tr>
                <td>${element.itemname}</td>
                <td>${element.itemmodel}</td>
                <td>${element.itemmemory}</td>
                <td>${element.itemprice}</td>
            </tr>`;
        });
    document.getElementById("output").innerHTML = html+row+html1;
};

      function search() {
        var choose = document.getElementById("category").value;
        console.log(choose)
        var product = document.getElementById("ip-box").value;
       
        
        var row = "";
        compcart.forEach(element => {
          console.log(element);
          if (element[`${choose}`] == product) {
            row += `<tr>
                    <td>${element.itemname}</td>
                    <td>${element.itemmodel}</td>
                    <td>${element.itemmemory}</td>
                    <td>${element.itemprice}</td>
                </tr>`;
          } else {
            display();
          }
        });
      
        document.getElementById("output").innerHTML = html+row+html1;
      }

      function sorting(){
          var choose1 = document.getElementById("sort").value;
          var product1=document.getElementById("sortby").value;
          if(product1=="itemname"){
              if(choose1=="asc"){
                  compcart.sort((a,b)=>{   /*arr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);*/
                      var c=a.itemname.toLowerCase();
                      var d=b.itemname.toLowerCase();
                      if(c<d){
                          return -1;
                      }
                      if(c>d){
                          return 1
                      }
                          return 0;
                      
                       


                  });                     
              }
              
              
              
              
              else if(choose1=="dsc"){
                  compcart.sort((a,b)=>{
                      var c=a.itemname.toLowerCase();
                      var d=b.itemname.toLowerCase();
                      if(d>c){
                          return -1;
                      }
                      if(d<c){
                          return 1;
                      }
                      
                          return 0;
                    
                  })
              }
              else{
                console.log("PLEASE SELECT SOMETHING TO SORT");
            }
              
          }

    




          else if(product1=="itemmodel"){
            if(choose1=="asc"){
                compcart.sort((a,b)=>{   /*arr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);*/
                    var c=a.itemname.toLowerCase();
                    var d=b.itemname.toLowerCase();
                    if(c<d){
                        return -1;
                    }
                    if(c>d){
                        return 1
                    }
                        return 0;
                    
                     


                });                     
            }
            
            
            
            
            else if(choose1=="dsc"){
                compcart.sort((a,b)=>{
                    var c=a.itemname.toLowerCase();
                    var d=b.itemname.toLowerCase();
                    if(d>c){
                        return -1;
                    }
                    if(d<c){
                        return 1;
                    }
                    
                        return 0;
                  
                })
            }else{
                console.log("PLEASE SELECT SOMETHING TO SORT");
            }
            
        }
        else if(product1 == "itemmemory"){
            if(choose1 == "asc"){
                compcart.sort((a, b) => a.itemmemory - b.itemmemory);
            }
            else if(choose1 == "dsc"){
                compcart.sort((a, b) => b.itemmemory - a.itemmemory);
            } 
            else{
                console.log("PLEASE SELECT SOMETHING TO SORT");
            }
            
        }
        else if(product1 == "itemprice"){
            if(choose1 == "asc"){
                compcart.sort((a, b) => a.itemprice - b.itemprice);
            }
            else if(choose1 == "dsc"){
                compcart.sort((a, b) => b.itemprice - a.itemprice);
            }
            else{
                console.log("PLEASE SELECT SOMETHING TO SORT");
            } 
            
        }else{
            console.log("PLEASE SELECT FIELD TO SORT");
        }


        display();
        

        
        
       


         
          
      
    }
