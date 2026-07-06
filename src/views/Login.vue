<template>
<div class="bg-gray-100 h-180 p-20 ">
        <div class="  bg-white rounded-xl shadow-2xl w-110 pt-1  h-96  items-center justify-center ml-95">
            <h1 class="font-bold text-2xl text-center mt-20">Login</h1>
        <input type="email" placeholder="Enter your email" class="item-center border border-red-800 px-24 ml-9 py-2 rounded-md mt-8"><br>
        <input type="password" placeholder="Enter your password" class="item-center border border-red-800 ml-9 mt-5 rounded-md px-24 py-2">
        <button class="bg-red-600 px-47 py-6 rounded-md text-white ml-9 mt-7 text-xl text-center hover:bg-red-700"><p class="text-xs"></p></button>
        <div class="text-sm"><p class="mt-4 ml-35">Don't have an account?  <RouterLink to="/sigup" class="text-red-800">Sign UP</RouterLink></p></div>
    </div>
</div>
</template>