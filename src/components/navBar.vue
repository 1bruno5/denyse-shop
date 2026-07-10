<template>
      <nav class="bg-white p-3 shadow-xl sticky top-0 z-50 ">
   <div class="flex items-center">
    <div class="hidden md:flex">
      <h1 class="text-black text-xl font-bold ml-2 md:ml-15"><img src="../assets/photos/logo.jpg" alt="logo" class="w-8"></h1>
    </div>

    <div class="text-black hidden md:flex flex-3 justify-center font-semibold text-xs md:text-sm gap-15">
           <ul class="flex gap-8">
            <li class="hover:text-red-700  "><RouterLink to="/">Home</RouterLink></li>
            <div class="flex gap-1">
              <li class="hover:text-red-700 ml-8 "><RouterLink to="/products">Products </RouterLink></li>
            </div>
             <li class="hover:text-red-700 ml-8 "><RouterLink to="/categories">Categories</RouterLink></li>
            <li class="hover:text-red-700 ml-8 "><RouterLink to="/about">About</RouterLink></li>
            <li class="hover:text-red-700 ml-8"><RouterLink to="/contact">Contact</RouterLink></li>
           </ul>
    </div>
    <div class=" hidden md:flex mr-10">
      <button><img src="../assets/photos/icons/search.png" alt="search" class="w-4 md:w-6 gap-8 mr-6"></button>
      <button><img src="../assets/photos/icons/cart.png" alt="cart" class="w-6 ml-5 mr-8"></button>
      
    </div>

    <div class=" flex md:hidden">
    <div class="flex ">
      <h1 class="text-black text-xl font-bold ml-2"><img src="../assets/photos/logo.jpg" alt="logo" class="w-8"></h1>
    </div>
      <button><img src="../assets/photos/icons/search.png" alt="search" class="w-4 gap-4 ml-60 mr-4"></button>
      <button><img src="../assets/photos/icons/cart.png" alt="cart" class="w-4 ml-2  mr-2"></button>
      
    </div>
    
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-3 md:hidden z-50">
             <ul class="flex gap-8">
            <li class="hover:text-red-700  "><RouterLink to="/">Home</RouterLink></li>
            <div class="flex gap-1">
              <li class="hover:text-red-700 "><RouterLink to="/products">Products </RouterLink></li>
            </div>
            <li class="hover:text-red-700  "><RouterLink to="/about">About</RouterLink></li>
            <li class="hover:text-red-700 "><RouterLink to="/contacts">Contact</RouterLink></li>
           </ul>
</nav>
   </div>
  </nav>
</template>