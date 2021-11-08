function addToCard(productName="Elma",quantity){


    console.log("sepete eklendi: Ürün :"+ productName+ " adet:  " +quantity)
}

addToCard()
addToCard("Karpuz",10)
addToCard("ananas")

let sayHello = ()=>{

    console.log( "hello world!")
}

sayHello()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
 addToCart2("Armut",2,20)
 let product1={productName:"Elma",unitPrice:10,quantity:5}

 function addToCart3(product) {

    console.log("Ürün: "+product.productName)
    console.log(" Adet " +product.quantity)
    console.log("Fiyat: "+product.unitPrice)
     
 }
 
 addToCart3(product1)

 let product2={productName:"Elma",unitPrice:10,quantity:5}
 let product3={productName:"Elma",unitPrice:10,quantity:5}
 product2=product3
 product2.productName="KARPUZ"
 console.log(product3.productName)



 function addToCart4(products) {
     console.log(products)
 }

 let products=[
     {productName:"Elma",unitPrice:10,quantity:5},
     {productName:"Armut",unitPrice:10,quantity:5},
     {productName:"KArpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(...numbers) {//rest operatörü
    let total=0

    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]

        
    }
    console.log(total)
}



add(20,30)
add(20,30,50,100)
let numbers=[30,60,500,600,120]

console.log(Math.max(...numbers))//seperate

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
   {name:"İç Anadolu", population:"20M"},
   {name:"İç MArmara", population:"30M"},  
   {name:"Karadeniz", population:"10M"},
   [
       ["Ankara","Konya"],
       ["İsanbul","Bursa"],
       ["sinop ","Trabzon"],
   ]
]
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
let newProductName,newUnitPrice,newQuantity

({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)

