<template>
<div class="font-sans">
<section class="overflow-hidden">
  <div class=" relative h-[560px]">  
    <img src="../assets/photos/kitchen.jpg" alt="image" class="w-full h-full object-cover opacity-80 ">
    <div class="absolute inset-0 flex bg-black/40 ">
      <div class=" ml-13 mt-28">
      <p class="font-bold text-4xl text-white">Your perfect kitchen starts here with<br></p>
        <p class="mt-6 font-bold text-4xl text-white"> quality equipment for every<br></p>
         <p class="mt-6 font-bold text-4xl text-white"> home and business.</p>
         <button class="bg-red-700 rounded-md px-8 py-2 text-white text-xl mt-23"><RouterLink to="/products" class="text-base justify-center ml-2 mb-3">Shop Now</RouterLink></button>
      </div>
    </div>
  </div>
  
</section>
  <section>
    <h1 class="flex justify-center text-gray-700 font-bold text-3xl mt-10  w-full ">Explore our best selling <br> </h1><h1 class="flex justify-center text-gray-700 font-bold text-3xl mt-2  w-full ">collection</h1>
<div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 mt-10  justify-items-center">
  <div class="bg-white rounded-xl shadow-xl w-60 mb-10 overflow-hidden  h-95 ml-50">
  <img
   src="../assets/photos/cookingPots/cookingWare.jpg" 
   alt="image"
   class="w-full h-[250px] object-cover object-[30%_10%]"
   >

   <div class="p-2 mt-2 ml-2">
    <h3 class="font-bold text-base">Cooking Ware</h3>
    <p class="text-sm">70 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>
  <div class="bg-white rounded-xl shadow-xl w-60 mb-10 ml-17  relative overflow-hidden h-95">
  <img
   src="../assets/photos/dinnerSet.jpg" 
   alt="image"
   class="w-full h-[250px] object-cover"
   >

   <div class="p-2 mt-2">
    <h3 class="font-bold text-base">Dinner Set</h3>
    <p class="text-sm">50 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-2 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>

<div class="bg-white shadow-xl rounded-xl w-60 h-95 mr-17  overflow-hidden mb-10">
  <img src="../assets/photos/greenGrater.jpg" 
  alt="cutting-board"
  class="w-full h-[250px] object-cover object-top"
  >

   <div class="p-2 mt-4 ml-2">
    <h3 class="font-bold text-base">Multi-function  chopper</h3>
    <p class="text-sm">25 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-2 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>

<div class="bg-white w-60 h-95 shadow-xl rounded-xl mr-50  mb-10 px-5  overflow-hidden">
<img src="../assets/photos/electronics/chapatiMaker.jpg"
 alt="cutting Board"
 class="w-full h-[250px] object-cover"
 >
   <div class="p-2 mt-4 mb-4">
    <h3 class="font-bold text-sm">Chapati Maker</h3>
    <p class="text-xs">30 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>

</div>

<div>
  
    <h1 class="flex justify-center text-3xl font-bold text-gray-700 mb-10 mt-20">Why to choose D Shop ?</h1>
  
  <div class="grid grid-cols-3 gap-2 mb-8 justify-items-center">
    <div class="bg-white rounded-xl shadow-2xl mt-10 ml-60 h-60 w-70 mb-10 py-15 ">
        <h3 class="mt-0 font-bold text-base text-center">Premium Quality</h3>
           <p class=" mt-7 justify-center text-center text-xs">Find everything from cookware and bakeware</p>
           <p class="text-center text-xs"> to appliances and kitchen accessories </p> 
            <p class="text-center text-xs"> in one place.</p>
    </div>
    <div class="bg-white rounded-xl shadow-2xl w-70 py-15 h-60 mb-10 mt-10 ">
      <h3 class="mt-0 font-bold text-base text-center ">Secure Shopping</h3>
      <p class="text-center mt-7 text-xs">Shop with confidence using safe payment</p>
      <p class="text-center text-xs">  methods and protected checkout.</p>
    </div>
        <div class="bg-white rounded-xl shadow-2xl w-70 h-60 py-15 mb-10 mt-10 mr-60">
      <h3 class="mt-0 font-bold text-base text-center">Fast Delivery</h3>
      <p class="text-center mt-7 text-xs">Receive your kitchen essentials quickly with</p>
      <p class="text-center text-xs"> reliable shipping and secure packaging</p>
      <p class="text-center text-xs">packaging that keeps every item safe  </p>
      <p class="text-center text-xs">during transit.</p>
    </div>
  </div>
</div>
<div class="bg-gray-100 h-[1000px] pt-13">
  <div class="">
    <h1 class="text-center text-3xl text-gray-800 font-bold  ">Our best selling products</h1>
  </div>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
       <div class="bg-white shadow-2xl rounded-xl h-96  w-55 overflow-hidden ml-50 mt-15 ">
           <img src="../assets/photos/electronics/microwave.jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Microwave</h3>
                <p class="text-sm">70 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>
             <div class="bg-white shadow-2xl rounded-xl  w-55 h-96 overflow-hidden ml-17 mt-15 ">
           <img src="../assets/photos/electronics/sandwichMaker.jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Sandwich Maker</h3>
                <p class="text-sm">80 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl rounded-xl h-96  w-55 overflow-hidden mr-15 mt-15 ">
           <img src="../assets/photos/blenders/a (1).jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Blender</h3>
                <p class="text-sm">45 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl rounded-xl  w-55 h-96 overflow-hidden mr-50 mt-15 ">
           <img src="../assets/photos/cookingPots/h.jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Cooking Pot</h3>
                <p class="text-sm">90 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>
       
                     <div class="bg-white shadow-2xl rounded-xl  w-55 h-96 overflow-hidden ml-50 mt-2 ">
           <img src="../assets/photos/electronics/kettle.jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Kettle</h3>
                <p class="text-sm">25 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

       <div class="bg-white shadow-2xl rounded-xl  w-55 h-96 overflow-hidden ml-17 mt-2 ">
           <img src="../assets/photos/waterDispenser.jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Water Dispenser</h3>
                <p class="text-sm">100 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-sm">Buy Now</p></button>
            </div>
       </div>

            <div class="bg-white shadow-2xl rounded-xl  w-55 h-96 overflow-hidden mr-15 mt-2 ">
           <img src="../assets/photos/cups.jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Cups</h3>
                <p class="text-sm">20 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

        <div class="bg-white shadow-2xl rounded-xl  w-55 h-96 overflow-hidden mr-50 mt-2 ">
           <img src="../assets/photos/range.jpg"
            alt="microwave"
            class="h-[260px] w-72"
            >
            <div class="p-2 ml-2">
                <h3 class="font-bold text-base">Range</h3>
                <p class="text-sm">180 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6 rounded-md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>
  </div>
</div>

<div class="bg-white justify-between mb-20">
<div class="flex justify-between">
    <img src="../assets/photos/about.jpg" alt="about image"
  class=" h-110  ml-15 mt-15 w-80"
  >
<div class="ml-15">
    <h3 class="mt-13 text-3xl font-bold mr-100 text-gray-700">Cook Smarter. Live Better.</h3>
  <div class="mt-10 text-lg">
    <p >At KitchenHub, we believe every home deserves quality kitchen equipment that makes </p> <p class="mt-2"> cooking enjoyable and effortless. From premium cookware and modern appliances to everyday</p><p class="mt-2">utensils, we carefully  select products that combine durability, style, and performance.</p>
    <p class="mt-14">Whether you're a beginner or a professional chef, we're here to help you</p><p> create delicious meals with confidence.</p>

    <button class="bg-red-800 text-white py-3 px-8 rounded-md mt-17 hover:bg-red-700"><RouterLink to="/about" class="text-sm">Learn More About Us</RouterLink></button>
  </div>
</div>
</div>
</div>
  </section>
</div>
</template>