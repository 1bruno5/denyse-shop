<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
<div class="font-sans">
<section class="overflow-hidden">
  <div class=" relative h-[700px]">  
    <img src="../assets/photos/kitchen.jpg" alt="image" class="w-full h-full object-cover opacity-80 ">
    <div class="absolute inset-0 flex bg-black/40 ">
      <div class=" ml-15 mt-35">
      <p class="font-bold text-5xl text-white">Your perfect kitchen starts here with<br></p>
        <p class="mt-7 font-bold text-5xl text-white"> quality equipment for every<br></p>
         <p class="mt-7 font-bold text-5xl text-white"> home and business.</p>
         <button class="bg-red-700 rounded-md px-12 py-3 text-white text-xl mt-30"><RouterLink to="/products">Shop Now</RouterLink></button>
      </div>
    </div>
  </div>
  
</section>
  <section>
    <h1 class="flex justify-center text-gray-700 font-bold text-4xl mt-20  w-full ">Explore our best selling <br> </h1><h1 class="flex justify-center text-gray-700 font-bold text-4xl mt-2  w-full ">collection</h1>
<div class="grid grid-cols-4 gap-2 mt-10">
  <div class="bg-white rounded-xl shadow-xl w-72 mb-10 overflow-hidden ml-30">
  <img
   src="../assets/photos/cookingPots/cookingWare.jpg" 
   alt="image"
   class="w-full h-80 object-cover object-[30%_10%]"
   >

   <div class="p-4 mt-4">
    <h3 class="font-bold text-xl">Cooking Ware</h3>
    <p>70 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-red-800">Buy Now</button>
   </div>
</div>
  <div class="bg-white rounded-xl shadow-xl w-72 mb-10 ml-20 relative overflow-hidden">
  <img
   src="../assets/photos/dinnerSet.jpg" 
   alt="image"
   class="w-full h-80 object-cover"
   >

   <div class="p-4 mt-4">
    <h3 class="font-bold text-xl">Dinner Set</h3>
    <p>50 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-red-800">Buy Now</button>
   </div>
</div>

<div class="bg-white shadow-xl rounded-xl w-72 ml-10 overflow-hidden mb-10">
  <img src="../assets/photos/greenGrater.jpg" 
  alt="cutting-board"
  class="w-full h-80 object-cover object-top"
  >

   <div class="p-4 mt-4">
    <h3 class="font-bold text-xl">Multi-function  chopper</h3>
    <p>30 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-red-800">Buy Now</button>
   </div>
</div>

<div class="bg-white w-72 shadow-xl rounded-xl  mb-10 px-5  overflow-hidden">
<img src="../assets/photos/electronics/chapatiMaker.jpg"
 alt="cutting Board"
 class="w-full h-80 object-cover"
 >
   <div class="p-4 mt-4 mb-4">
    <h3 class="font-bold text-xl">Hand Blender</h3>
    <p>20 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-red-800">Buy Now</button>
   </div>
</div>

</div>

<div>
  
    <h1 class="flex justify-center text-4xl font-bold text-gray-700 mb-10 mt-30">Why to choose D Shop ?</h1>
  
  <div class="grid grid-cols-3 gap-2 mb-15">
    <div class="bg-white rounded-xl shadow-2xl mt-10 ml-30 h-70 w-100 mb-10 py-15 ">
        <h3 class="mt-0 font-bold text-xl text-center">Premium Quality</h3>
           <p class=" mt-7 justify-center text-center">Find everything from cookware and bakeware</p>
           <p class="text-center"> to appliances and kitchen accessories </p> 
            <p class="text-center"> in one place.</p>
    </div>
    <div class="bg-white rounded-xl shadow-2xl w-100 py-15 h-70 mb-10 mt-10 ml-15">
      <h3 class="mt-0 font-bold text-xl text-center">Secure Shopping</h3>
      <p class="text-center mt-7">Shop with confidence using safe payment</p>
      <p class="text-center">  methods and protected checkout.</p>
    </div>
        <div class="bg-white rounded-xl shadow-2xl w-100 h-70 py-15 mb-10 mt-10">
      <h3 class="mt-0 font-bold text-xl text-center">Fast Delivery</h3>
      <p class="text-center mt-7">Receive your kitchen essentials quickly with</p>
      <p class="text-center"> reliable shipping and secure packaging</p>
      <p class="text-center">packaging that keeps every item safe  </p>
      <p class="text-center">during transit.</p>
    </div>
  </div>
</div>
<div class="bg-gray-100 h-[1300px] pt-20">
  <div class="">
    <h1 class="text-center text-4xl text-gray-800 font-bold ">Our best selling products</h1>
  </div>
  <div class="grid grid-cols-4 gap-4">
       <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/electronics/microwave.jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Microwave</h3>
                <p>70 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>
             <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/electronics/sandwichMaker.jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Sandwich Maker</h3>
                <p>80 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>

              <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/blenders/a (1).jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Blender</h3>
                <p>45 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>

              <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/cookingPots/h.jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Cooking Pot</h3>
                <p>90 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>
       
                     <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/electronics/kettle.jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Kettle</h3>
                <p>25 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>

                            <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/waterDispenser.jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Water Dispenser</h3>
                <p>100 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>

                            <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/cups.jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Cups</h3>
                <p>20 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>

                            <div class="bg-white shadow-2xl rounded-xl  w-72 overflow-hidden ml-10 mt-20 ">
           <img src="../assets/photos/range.jpg"
            alt="microwave"
            class="h-80 w-72"
            >
            <div class="p-4 ml-2">
                <h3 class="font-bold text-xl">Range</h3>
                <p>180 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2">Buy Now</button>
            </div>
       </div>
  </div>
</div>

<div class="bg-white justify-between h-[700px]">
<div class="flex justify-between">
    <img src="../assets/photos/about.jpg" alt="about image"
  class="mb-70 h-130 ml-12 mt-18 w-100"
  >
<div>
    <h3 class="mt-15 text-4xl font-bold mr-140 text-gray-700">Cook Smarter. Live Better.</h3>
  <div class="mt-10 text-xl">
    <p>At KitchenHub, we believe every home deserves quality kitchen equipment that makes </p> <p class="mt-2"> cooking enjoyable and effortless. From premium cookware and modern appliances to everyday</p><p class="mt-2">utensils, we carefully  select products that combine durability, style, and performance.</p>
    <p class="mt-14">Whether you're a beginner or a professional chef, we're here to help you</p><p> create delicious meals with confidence.</p>

    <button class="bg-red-800 text-white py-4 px-8 rounded-md mt-30 hover:bg-red-600">Learn More About Us</button>
  </div>
</div>
</div>
</div>
  </section>
</div>
</template>