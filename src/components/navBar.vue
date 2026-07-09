<template>
      <nav class="bg-white p-3  ">
   <div class="flex items-center">
    <div class="flex">
      <h1 class="text-black text-xl font-bold ml-2 md:ml-15"><img src="../assets/photos/logo.jpg" alt="logo" class="w-8"></h1>
    </div>

    <div class="text-black hidden md:flex flex-3 justify-center font-semibold text-xs gap-15">
           <ul class="flex gap-8">
            <li class="hover:text-red-700 ml-35 "><RouterLink to="/">Home</RouterLink></li>
            <div class="flex gap-1">
              <li class="hover:text-red-700 ml-8 "><RouterLink to="/products">Products </RouterLink></li>
            </div>
            <li class="hover:text-red-700 ml-8 "><RouterLink to="/categories">About</RouterLink></li>
            <li class="hover:text-red-700 ml-8"><RouterLink to="/contacts">Contact</RouterLink></li>
           </ul>
    </div>
    <div class=" hidden md:flex mr-10">
      <button><img src="../assets/photos/icons/search.png" alt="search" class="w-4 gap-8 mr-6"></button>
      <button><img src="../assets/photos/icons/cart.png" alt="cart" class="w-4 ml-5 mr-8"></button>
      <button class="bg-gray-400 text-white rounded-md px-4 py-1 ml-6 flex gap-3"><img src="../assets/photos/icons/user.png" alt="user" class="w-4 h-5"><div class="text-2md"><RouterLink to="/login" class="text-xs mb-4"><div class="justify-center">Account</div></RouterLink></div></button>
    </div>

        <div class=" flex justify-end  md:hidden ml-26">
      <button><img src="../assets/photos/icons/search.png" alt="search" class="w-4 gap-2 "></button>
      <button><img src="../assets/photos/icons/cart.png" alt="cart" class="w-4 ml-2  mr-2"></button>
      <button class="bg-gray-400 text-white rounded-md px-4 py-1 ml-6 flex"><img src="../assets/photos/icons/user.png" alt="user" class="w-4 h-5"><div class="text-2md"><RouterLink to="/login" class="text-xs mb-4"><div class="justify-center">Account</div></RouterLink></div></button>
    </div>
    
    <nav class="fixed bottom-0 left-0 right-0 bg-gray-100 text-white border-t flex justify-around items-center py-2 md:hidden z-50">
             <ul class="flex gap-8">
            <li class="hover:text-red-700 ml-35 "><RouterLink to="/">Home</RouterLink></li>
            <div class="flex gap-1">
              <li class="hover:text-red-700 ml-4 "><RouterLink to="/products">Products </RouterLink></li>
            </div>
            <li class="hover:text-red-700 ml-4 "><RouterLink to="/categories">About</RouterLink></li>
            <li class="hover:text-red-700 ml-4"><RouterLink to="/contacts">Contact</RouterLink></li>
           </ul>
</nav>
   </div>
  </nav>
</template>