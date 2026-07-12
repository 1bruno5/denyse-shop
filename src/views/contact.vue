<template>
<div class="font-sans bg-gray-50">
        <div class="bg-teal-800 h-[220px] md:h-[260px]">
         <h1 class="text-white font-bold text-2xl md:text-3xl lg:text-5xl ml-4 md:ml-8 lg:ml-12 pt-8 md:pt-8 lg:pt-12">Contact Us</h1>
         <p class="text-white text-sm md:text-base lg:text-xl ml-4 md:ml-8 lg:ml-12 pt-2 md:pt-6">Have questions about our D Shop? We're here to help you find the perfect <br> tools for your culinary needs.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-1 px-2 md:px-30 ml-6 md:ml-8">
      <div class="bg-white shadow-xl w-full max-w-[300px] mt-10 md:mt-18 mb-8 md:mb-12 rounded-lg h-[200px] flex flex-col items-center space-y-6 pt-4 md:pt-8">
        <img src="../assets/photos/icons/map.png" alt="map" class="w-8">
            <div class="text-center">
              <h1 class="font-bold  ">Visit Us</h1>
              <p class="text-gray-600"> KN 4 Ave, Nyarungenge</p>
              <p class="text-gray-600">Kigali, Rwanda</p>
            </div>
      </div>
            <div class="bg-white shadow-xl w-full max-w-[300px] mt-10 md:mt-18 mb-8 md:mb-12 rounded-lg h-[200px] flex flex-col items-center space-y-6 pt-4 md:pt-8">
        <img src="../assets/photos/icons/phone.png" alt="map" class="w-8">
                <div class="text-center">
                  <h1 class="font-bold ">Call Us</h1>
                  <p class="text-gray-600">+250 782 169 036</p>
                  <p class="text-gray-600">+250 788 839 489</p>
                </div>
      </div>
            <div class="bg-white shadow-xl w-full max-w-[300px] mt-10 md:mt-18 mb-8 md:mb-12 rounded-lg h-[200px] flex flex-col items-center space-y-6 pt-4 md:pt-8">
        <img src="../assets/photos/icons/mail.png" alt="map" class="w-8">
              <div class="text-center ">
                <h1 class="font-bold">Email Us</h1>
                <p class="text-gray-600"> KN 4 Ave, Nyarungenge</p>
                <p class="text-gray-600">Kigali, Rwanda</p>
              </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
            <div class="w-full max-w-[580px] md:max-w-[600px] mb-4">
              <form class="bg-white rounded-2xl shadow-xl mx-3 pt-6 md:pt-12 ">
                <div class="px-4 md:px-10 mb-4 md:mb-8 space-y-2">
                 <h1 class="font-bold text-lg md:text-3xl">Send Us a Message</h1>
                 <p class="text-gray-600">Fill out the form and we'll get back to you within 24 hours.</p>
                </div>
                <div class="flex flex-col items-center space-y-2 w-full">
                   <div class="flex flex-col sm:flex-row gap-0 sm:gap-3">
                   <input type="text" placeholder="Enter your first name" class="border-2 border-gray-200 rounded-xl w-full max-w-[280px] md:max-w-[500px] h-[50px] focus:border-teal-500 focus:outline-none  px-1 md:px-6 "><br>
                   <input type="text" placeholder="Enter your last name" class="border-2 border-gray-200 rounded-xl w-full max-w-[280px] md:max-w-[500px] h-[50px] focus:border-teal-500 focus:outline-none  px-1 md:px-6">
                   </div>
                   <br>
                 <input type="text" placeholder="Enter your email" class="border-2 border-gray-200 rounded-xl w-full max-w-[280px] md:max-w-[500px] h-[50px]  p-4 focus:border-teal-500 focus:outline-none" required><br>
                 <input type="text" placeholder="Enter your phone number" class="border-2 border-gray-200 rounded-xl w-full max-w-[280px] md:max-w-[500px] h-[50px]  p-4 focus:border-teal-500 focus:outline-none"><br>
                 <textarea name="text area" id="" placeholder="Tell us how can we help you" class="border-2 border-gray-200 w-full max-w-[280px] md:max-w-[500px] rounded-xl w-full p-8 resize-none focus:border-teal-500 focus:outline-none"></textarea><br>
                 <button class="bg-teal-700 rounded-xl w-full max-w-[280px] md:max-w-[500px] h-[50px] text-white text-sm md:text-base font-bold mb-12 md:mb-20">Send  Message</button>
                </div>
              </form>
            </div>
    </div>
</div>
</template>