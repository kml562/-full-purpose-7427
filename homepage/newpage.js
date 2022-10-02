let offersdata= [
    
    {
    img:"https://www.netmeds.com/images/product-v1/150x150/1026299/eartho_essentials_skin_brightening_face_pack_vitamin_c_50_gm_0_0.jpg",
    head:"Eartho Essentails Skins Brigthing face pacik -Vitamin C 50 gram",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 319.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, {
    img:"https://www.netmeds.com/images/product-v1/150x150/1054325/cgg_cosmetics_glow_boost_vitamin_c_serum_pack_of_2_x_10_ml_1s_448645_0_0.jpg",
    head:"Cgg Cosmetics Glow Boost Vitamin C Serum(Pack of 2 x 10 ML",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 299.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, {
    img:"https://www.netmeds.com/images/product-v1/150x150/363656/pankajakasthuri_breathe_easy_granules_400_gm_0.jpg",
    head:"Pankjajkndarust breath East Garnules 400 gm",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 319.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, {
    img:"https://www.netmeds.com/images/product-v1/150x150/363656/pankajakasthuri_breathe_easy_granules_400_gm_0.jpg",
    head:"Eartho Essentails Elaichi Flavour 200gm",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 319.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, {
    img:"https://www.netmeds.com/images/product-v1/150x150/15921/dabur_shilajit_gold_capsule_10s_0_1.jpg",
    head:"Dabur Shilajite Gold Capsule 10's",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 319.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, {
    img:"https://www.netmeds.com/images/product-v1/150x150/359873/septilin_tablet_60_s_0.jpg",
    head:"Eartho Essentails Skins Brigthing face pacik -Vitamin C 50 gram",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 319.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, {
    img:"https://www.netmeds.com/images/product-v1/150x150/1026299/eartho_essentials_skin_brightening_face_pack_vitamin_c_50_gm_0_0.jpg",
    head:"Eartho Essentails Skins Brigthing face pacik -Vitamin C 50 gram",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 319.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, {
    img:"https://www.netmeds.com/images/product-v1/150x150/1026299/eartho_essentials_skin_brightening_face_pack_vitamin_c_50_gm_0_0.jpg",
    head:"Eartho Essentails Skins Brigthing face pacik -Vitamin C 50 gram",
    udertag:"Skin Care Face Skin Care",
    Price: "Best Price*",
    span:"₹ 319.20",
    p0:"MRP ₹ 399.00",
    span0:"end in 9h,05m,10sec",
    p:"Mkt Natueexpert Ayurvidec Pvt. Ltd",
    button:"ADD TO CART"
}, 
]
showdata(offersdata)

function showdata(xyz){
xyz.forEach(function (el){
let first = document.querySelector("#first")
let div= document.createElement("div")
first.append(div)
let img= document.createElement("img")
img.src=el.img
let div2=document.createElement("div")
let head= document.createElement("h3")
head.innerText= el.head
let udertag= document.createElement("h5")
  udertag.innerText=el.udertag
let price = document.createElement("h4")

price.innerText=el.Price
span= document.createElement("span")
span.innerText= el.span
price.append(span)
let p = document.createElement("p")
p.innerText=el.p
let  p0 = document.createElement("p")
p0.innerText= el.p0

let  span0= document.createElement("span")
span0.innerText= el.span0
p0.append(span0)
let button = document.createElement("button")
button.innerText= el.button

div.append(img,div2)
div2.append(head,udertag,price,p,p0,button)

})
}

let secondData=[
{
    h5:"Don't have time?",
    h3:"Quick Order",
p:"Upload doctor's prescription and we will add the medicines for you!",
img:"https://media.istockphoto.com/vectors/medical-clipboard-with-stethoscope-vector-id836468620?k=20&m=836468620&s=612x612&w=0&h=xSwe6E6yxYO5WeYma4Ak5EgeTldnK9r3hZUia0QRe88=",
last:"order within 2 minutes",
button:"UPLOAD"
},
]
secfunction(secondData)
function secfunction(xyz){
xyz.forEach(function(el){
    let second = document.querySelector("#second")
    let div= document.createElement("div")
    let div1=document.createElement("div")
    let h5=document.createElement("h5")
    h5.innerText=el.h5;
    let h3=document.createElement("h3")
    h3.innerText=el.h3
    let p=document.createElement("p")
    p.innerText=el.p
    let img= document.createElement("img")
    img.src= el.img
    let hi= document.createElement("h4")
    hi.innerText= el.last
    let button= document.createElement("button")
    button.innerText= el.button
    let div2=document.createElement("div")  
let div3=document.createElement("div")
    div2.append(img)
    div1.append(h5,h3,p)
    div.append(div1,div2)
    div3.append(hi,button)
second.append(div,div3)
    
})

}

console.log(secondData)