<template>
      <nav class="bg-white p-4">
   <div class="flex items-center">
    <div class="flex">
      <h1 class="text-black text-2xl font-bold ml-15">LOGO</h1>
    </div>
    <div class="text-black flex flex-3 justify-center font-semibold text-md gap-15">
           <ul class="flex gap-8">
            <li class="hover:text-red-700 ml-35 "><RouterLink to="/">Home</RouterLink></li>
            <div class="flex gap-1">
              <li class="hover:text-red-700 ml-8 "><RouterLink to="/products">Products </RouterLink></li>
            </div>
            <li class="hover:text-red-700 ml-8 "><RouterLink to="/categories">About</RouterLink></li>
            <li class="hover:text-red-700 ml-8"><RouterLink to="/contacts">Contact</RouterLink></li>
           </ul>
    </div>
    <div class=" flex mr-20">
      <button><img src="../assets/photos/icons/search.png" alt="search" class="w-5 gap-8 mr-10"></button>
      <button><img src="../assets/photos/icons/cart.png" alt="cart" class="w-5 ml-5 mr-10"></button>
      <button class="bg-gray-400 text-white rounded-md px-5 py-2 ml-6 flex gap-3"><img src="../assets/photos/icons/user.png" alt="user" class="w-5"><div class="text-2md">Account</div></button>
    </div>
    
   </div>
  </nav>
</template>