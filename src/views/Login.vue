<template>
<div class="bg-gray-100 h-400 p-20 ">
        <div class="  bg-white rounded-xl shadow-2xl w-140   h-110 items-center justify-center ml-95 mt-20">
            <h1 class="font-bold text-4xl text-center mt-20">Login</h1>
        <input type="email" placeholder="Enter your email" class="item-center border border-red-800 px-30 ml-18 py-3 rounded-md mt-20"><br>
        <input type="password" placeholder="Enter your password" class="item-center border border-red-800 ml-18 mt-5 rounded-md px-30 py-3">
        <button class="bg-red-600 px-47 py-3 rounded-md text-white ml-18 mt-7 text-xl hover:bg-red-700">Login</button>
        <p class="mt-8 ml-45">Don't have an account?  <RouterLink to="/sigup" class="text-red-800">Sign UP</RouterLink></p>
    </div>
</div>
</template>