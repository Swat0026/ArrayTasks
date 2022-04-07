var compcart = [];
var html =
  "<table><tr><td>Company</td><td>Model</td><td>Memory</td><td>Price</td><td>Quantity</td><td>Action</td></tr>";
var html1 = "</table>";
function Add() {
  var componame = document.getElementById("compname").value;
  var compmodel = document.getElementById("model").value;
  var compmemory = parseInt(document.getElementById("memory").value);
  var compprice = parseInt(document.getElementById("price").value);
  var compquant = document.getElementById("quantity").value;
  if (
    componame == "" ||
    compmodel == "" ||
    compmemory == "" ||
    compprice == "" ||
    compquant == ""
  ) {
    document.getElementById("Validation").innerHTML =
      "***PLEASE FILL THE REQUIRED FIELDS***";
  } else {
    document.getElementById("Validation").innerHTML = "";
    var cart = {};
    cart.itemname = document.getElementById("compname").value;
    cart.itemmodel = document.getElementById("model").value;
    cart.itemmemory = document.getElementById("memory").value;
    cart.itemprice = document.getElementById("price").value;
    cart.itemquant = document.getElementById("quantity").value;
    compcart.push(cart);
    display();
    var fields = "<option>-Select Field-</option>"
    var row = "";

    compcart.forEach((element,i) => {
        fields += `<option value="${i}"> ${element.itemname} ${element.itemmodel}</option>`
      row +=
        "<tr><td>" +
        element.itemname +
        "</td><td >" +
        element.itemmodel +
        "</td><td>" +
        element.itemmemory +
        "</td><td>" +
        element.itemprice +
        "</td><td>" +
        element.itemquant +
        '</td><td><input type="checkbox" class="cbox" value="" onchange="check(${i})"></td></tr>';
        
    });document.getElementById("goods").innerHTML = fields;
    document.getElementById("goods1").innerHTML = fields;
    document.getElementById("rategoods").innerHTML=fields;
    document.getElementById("output").innerHTML = html + row + html1;
  }
}

function display() {
  var row = "";
  compcart.forEach((element,i) => {
    row += `  <tr>
                <td>${element.itemname}</td>
                <td>${element.itemmodel}</td>
                <td>${element.itemmemory}</td>
                <td>${element.itemprice}</td>
                <td>${element.itemquant}</td>
                <td><input type="checkbox" class="cbox"value="${i}"></td>
            </tr>`;
  });
  document.getElementById("output").innerHTML = html + row + html1;
}

function search() {
  var choose = document.getElementById("category").value;
  var product = document.getElementById("ip-box").value;

  var row = "";
  compcart.forEach((element) => {
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

  document.getElementById("output").innerHTML = html + row + html1;
}

function sorting() {
  var choose1 = document.getElementById("sort").value;
  var product1 = document.getElementById("sortby").value;
  if (product1 == "itemname") {
    if (choose1 == "asc") {
      compcart.sort((a, b) => {
        /*arr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);*/
        var c = a.itemname.toLowerCase();
        var d = b.itemname.toLowerCase();
        if (c < d) {
          return -1;
        }
        if (c > d) {
          return 1;
        }
        return 0;
      });
    } else if (choose1 == "dsc") {
      compcart.sort((a, b) => {
        var c = a.itemname.toLowerCase();
        var d = b.itemname.toLowerCase();
        if (d > c) {
          return -1;
        }
        if (d < c) {
          return 1;
        }

        return 0;
      });
    } else {
      console.log("PLEASE SELECT SOMETHING TO SORT");
    }
  } else if (product1 == "itemmodel") {
    if (choose1 == "asc") {
      compcart.sort((a, b) => {
        /*arr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);*/
        var c = a.itemname.toLowerCase();
        var d = b.itemname.toLowerCase();
        if (c < d) {
          return -1;
        }
        if (c > d) {
          return 1;
        }
        return 0;
      });
    } else if (choose1 == "dsc") {
      compcart.sort((a, b) => {
        var c = a.itemname.toLowerCase();
        var d = b.itemname.toLowerCase();
        if (d > c) {
          return -1;
        }
        if (d < c) {
          return 1;
        }

        return 0;
      });
    } else {
      console.log("PLEASE SELECT SOMETHING TO SORT");
    }
  } else if (product1 == "itemmemory") {
    if (choose1 == "asc") {
      compcart.sort((a, b) => a.itemmemory - b.itemmemory);
    } else if (choose1 == "dsc") {
      compcart.sort((a, b) => b.itemmemory - a.itemmemory);
    } else {
      console.log("PLEASE SELECT SOMETHING TO SORT");
    }
  } else if (product1 == "itemprice") {
    if (choose1 == "asc") {
      compcart.sort((a, b) => a.itemprice - b.itemprice);
    } else if (choose1 == "dsc") {
      compcart.sort((a, b) => b.itemprice - a.itemprice);
    } else {
      console.log("PLEASE SELECT SOMETHING TO SORT");
    }
  } else {
    console.log("PLEASE SELECT FIELD TO SORT");
  }

  display();
}
var goods = [];
var totprice = 0;
function addgoods() {
  var i = document.getElementById("goods").value;
  
  var quantity = document.getElementById("goodsquantity").value;
  var cart = compcart[i];
  var sum = (Number(cart.itemprice)) * quantity;
  var cart = {
    "Description": `${cart.itemname} ${cart.itemmodel}`,
    "quantity": `${quantity}`,
    "price": `${cart.itemprice}`,
  };
  totprice += sum;
  goods.push(cart);
}
var billtab = `<table>
    <tr> <th>Description</th>
         <th>Quantity</th>
         <th>Amount</th>
        </tr>`

function genbill() {
  var row = "";
  goods.forEach(element => {
    row += `<tr>
                <td>${element.Description}</td>
                <td>${element.quantity}</td>
                <td>${element.price}</td>
                </tr>`
  })
  document.getElementById("Bill").innerHTML =billtab +row +`<tr>
            <td>Total Amount</td>
            <td></td>
            <td>${totprice}</td>
            </tr></table>`;
}

function updateitems(){
    var i = document.getElementById("goods1").value;
    var quantity1 = document.getElementById("goodsquantity1").value;
    var cart = compcart[i];
    cart.itemquant = quantity1;
    display()

}
var rateprod=[];
var ratetable=`<table>
<tr><th>Company</th>
    <th>Model</th>
    <th>Memory</th>
    <th>Price</th>
    <th>Rating</th>
</tr>`
function ratingitems (){
  var r =document.getElementById("rategoods").value;
  var rate1=document.getElementById("rateinnum").value;
  var rate2=compcart[r];
  var r={
    "compname": `${rate2.itemname}`,
    "model": `${rate2.itemmodel}`,
    "memory": `${rate2.itemmemory}`,
    "price":`${rate2.itemprice}`,
    "Rating":`${rate1}`,
  }
  rateprod.push(r);
  var row="";
  rateprod.forEach(element=>{
    row+= `<tr>
    <td>${element.compname}</td>
    <td>${element.model}</td>
    <td>${element.memory}</td>
    <td>${element.price}</td>
    <td>${element.Rating}</td>
    <tr>`
  });  document.getElementById("ratetab").innerHTML=ratetable+row+"</table>";





}
