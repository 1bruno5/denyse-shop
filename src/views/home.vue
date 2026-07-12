<template>
<div class="font-sans">
<section class="overflow-hidden">
  <div class=" relative h-[380px] sm:h-[460px] lg:h-[560px]">  
    <img src="../assets/photos/kitchen.jpg" alt="image" class="w-full h-full object-cover opacity-80 ">
    <div class="absolute inset-0 flex bg-black/40 ">
      <div class=" px-4 sm:px-8 lg:px-16 pt-20 sm:pt-20 lg:pt-32">
      <p class="font-bold  text-white text-xl sm:text-3xl lg:text-4xl">Your perfect kitchen starts here with<br></p>
        <p class="mt-2 lg:mt-6 font-bold  text-xl sm:text-3xl lg:text-4xl text-white"> quality equipment for every<br></p>
         <p class=" mt-2 lg:mt-6 font-bold text-xl sm:text-3xl lg:text-4xl text-white"> home and business.</p>
         <button class="bg-red-700  -md px-8 py-2 text-white text-xl mt-20 "><RouterLink to="/products" class="text-base justify-center ml-2 mb-3">Shop Now</RouterLink></button>
      </div>
    </div>
  </div>
  
</section>
  <section>
    <h1 class="flex justify-center text-gray-700 font-bold text-3xl mt-10  w-full ">Explore our best selling <br> </h1><h1 class="flex justify-center text-gray-700 font-bold text-3xl mt-2  w-full ">collection</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10  justify-items-center px-10">
  <div class="bg-white  -xl shadow-xl w-full  mb-10 overflow-hidden  h-[380px] ">
  <img
   src="../assets/photos/cookingPots/cookingWare.jpg" 
   alt="image"
   class="w-full  h-[250px] object-cover object-[30%_10%]"
   >

   <div class="p-2 mt-2 ml-2">
    <h3 class="font-bold text-base">Cooking Ware</h3>
    <p class="text-sm">70 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6  -md mt-4 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>

  <div class="bg-white  -xl shadow-xl w-full mb-10 overflow-hidden  h-[380px] ">
  <img
   src="../assets/photos/dinnerSet.jpg" 
   alt="image"
   class="w-full  h-[250px] object-cover object-[30%_10%]"
   >

   <div class="p-2 mt-2 ml-2">
    <h3 class="font-bold text-base">Dinner Set</h3>
    <p class="text-sm">60 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6  -md mt-4 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>

  <div class="bg-white  -xl shadow-xl w-full  mb-10 overflow-hidden  h-[380px] ">
  <img
   src="../assets/photos/greenGrater.jpg" 
   alt="image"
   class="w-full h-[250px] object-cover object-[30%_10%]"
   >

   <div class="p-2 mt-2 ml-2">
    <h3 class="font-bold text-base">Multi-fuction Grater</h3>
    <p class="text-sm">25 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6  -md mt-4 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>

  <div class="bg-white  -xl shadow-xl w-full  mb-10 overflow-hidden  h-[380px] ">
  <img
   src="../assets/photos/electronics/chapatiMaker.jpg" 
   alt="image"
   class="w-full h-[250px] object-cover object-[30%_10%]"
   >

   <div class="p-2 mt-2 ml-2">
    <h3 class="font-bold text-base">Chapati Maker</h3>
    <p class="text-sm">50 000 RW</p>
<button class="bg-teal-600 text-white py-2 px-6  -md mt-4 hover:bg-red-800"><p class="text-xs">Buy Now</p></button>
   </div>
</div>

</div>

<div>
  
    <h1 class="flex justify-center text-2xl lg:text-3xl font-bold text-gray-700 mb-10 mt-16">Why to choose D Shop ?</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-8 justify-items-center px-4 sm:px-8 md:px-16 lg:px-20">
    <div class="bg-white  -xl shadow-2xl   w-full max-w-[330px] mb-4 md:mb-10 py-15 ">
        <h3 class="mt-0 font-bold text-base text-center">Premium Quality</h3>
           <p class=" mt-7 justify-center text-center text-xs">Find everything from cookware and bakeware</p>
           <p class="text-center text-xs"> to appliances and kitchen accessories </p> 
            <p class="text-center text-xs"> in one place.</p>
    </div>
    <div class="bg-white  -xl shadow-2xl w-full max-w-[330px] py-15 mb-4  md:mb-10  ">
      <h3 class="mt-0 font-bold text-base text-center ">Secure Shopping</h3>
      <p class="text-center mt-7 text-xs">Shop with confidence using safe payment</p>
      <p class="text-center text-xs">  methods and protected checkout.</p>
    </div>
        <div class="bg-white  -xl shadow-2xl w-full max-w-[330px] py-15 mb-4 md:mb-10">
      <h3 class="mt-0 font-bold text-base text-center">Fast Delivery</h3>
      <p class="text-center mt-7 text-xs">Receive your kitchen essentials quickly with</p>
      <p class="text-center text-xs"> reliable shipping and secure packaging</p>
      <p class="text-center text-xs">packaging that keeps every item safe  </p>
      <p class="text-center text-xs">during transit.</p>
    </div>
  </div>
</div>
<div class="bg-gray-100 h-auto pt-13 pb-8">
  <div class="">
    <h1 class="text-center text-2xl lg:text-3xl text-gray-800 font-bold  ">Our best selling products</h1>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 justify-items-center px-4 md:px-8 lg:px-20 mt-10">
       <div class="bg-white shadow-2xl  -xl   w-full  max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/electronics/deepFryer.jpg"
            alt="microwave"
            class="h-[180px] sm:h-[220px] w-full object-cover"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">Deep Fryer</h3>
                <p class="text-sm">65 00 000 RWF</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl  -xl   w-full max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/spoonForksSet.jpg"
            alt="microwave"
            class="h-[180px] sm:h-[220px] w-full object-cover"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">Spoon & Forks Set</h3>
                <p class="text-sm">40 000 RWF</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl  -xl   w-full max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/blenders/a.jpg"
            alt="microwave"
            class="h-[180px] sm:h-[220px] w-full object-cover"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">4 in 1 Blender</h3>
                <p class="text-sm">75 000 RWF</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl  -xl   w-full max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/cookingPots/cooksetWare.jpg"
            alt="microwave"
            class="h-[180px] sm:h-[220px] w-full object-cover object-top"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">Cooking Pot</h3>
                <p class="text-sm">60 RWF</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl  -xl   w-full max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/glasses/wine.jpg"
            alt="microwave"
            class="h-[180px] sm:h-[220px] w-full object-cover"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">Wine Glasses</h3>
                <p class="text-sm">55 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl  -xl   w-full max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/jar.jpg"
            alt="microwave"
            class="h-[180px] sm:h-[220px] w-full object-cover"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">Jars</h3>
                <p class="text-sm">30 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl  -xl   w-full max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/plastics/MOP.jpg"
            alt="microwave"
            class="h-[180px] sm:h-[220px] w-full object-cover"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">Spin Mop</h3>
                <p class="text-sm">40 000 RWF</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

              <div class="bg-white shadow-2xl  -xl   w-full max-w-[220px] overflow-hidden ">
           <img src="../assets/photos/roomWare/r (10).jpg"
            alt="closet"
            class="h-[180px] sm:h-[220px] w-full object-cover"
            >
            <div class="p-3">
                <h3 class="font-bold text-base">closet</h3>
                <p class="text-sm">350 000 RW</p>
                <button class="bg-teal-600 text-white hover:bg-red-800 py-2 px-6  -md mt-2"><p class="text-xs">Buy Now</p></button>
            </div>
       </div>

  </div>
</div>

<div class="bg-white mb-10 px-4 sm:px-8 lg:px-16 pt-10 sm:pt-16 lg:pt-16">
<div class="flex flex-col lg:flex-row gap-16 lg:gap-16 ">
    <img src="../assets/photos/about.jpg" alt="about image"
  class="  w-full max-w-[300px] sm:max-w-[280px] lg:max-w-[340px]    lg: -none mx-auto lg:mx-0 object-cover h-[200px] sm:h-[200px] lg:h-[460px]"
  >
<div class="">
    <h3 class=" text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 text-center md:text-left">Cook Smarter. Live Better.</h3>
  <div class="mt-10 text-sm lg:text-lg text-center md:text-left">
    <p >At D Shop, we believe every home deserves quality kitchen equipment that makes </p> <p class="mt-2"> cooking enjoyable and effortless. From premium cookware and modern appliances to everyday</p><p class="mt-2">utensils, we carefully  select products that combine durability, style, and performance.</p>
    <p class="mt-8 lg:mt-14">Whether you're a beginner or a professional chef, we're here to help you</p><p> create delicious meals with confidence.</p>

    <button class="bg-red-800 text-white py-3 px-8  -md mt-16 hover:bg-red-700 "><RouterLink to="/about" class="text-sm">Learn More About Us</RouterLink></button>
  </div>
</div>
</div>
</div>
  </section>
</div>
</template>