<template>
  <footer class="bg-gray-200 text-gray-500">

    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h1 class="text-3xl font-bold mb-4">
            D Shop
          </h1>
          <p class="text-gray-500 text-sm">
            D Shop is your trusted destination for premium kitchen
            equipment, cookware, and appliances. We provide quality
            products that make cooking easier, smarter, and more
            enjoyable.
          </p>
        </div>



        <div>
          <h2 class="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul class="space-y-3 text-sm text-gray-500">
            <li>
                   <RouterLink to="/products" class="hover:text-red-800">Products</RouterLink>
            </li>

            <li>
               <RouterLink to="/about" class="hover:text-red-800">About</RouterLink>
            </li>

            <li>
                     <RouterLink to="/contact" class="hover:text-red-800">Contact</RouterLink>
            </li>
          </ul>
        </div>

                <div>
          <h2 class="text-xl font-semibold mb-4">
            Contact Info
          </h2>

          <ul class="space-y-3 text-sm text-gray-500">
            <div class="flex">
              <img src="../assets/photos/icons/telephone1.png" alt="phone" class="w-5">
              <li class="ml-1">+250 782 169 036</li>
            </div>
            <div class="flex">
              <img src="../assets/photos/icons/telephone1.png" alt="phone" class="w-5">
              <li class="ml-1">+250 788 839 489</li>
            </div>
            <div class="flex">
              <img src="../assets/photos/icons/envelope.png" alt="email" class="w-4">
              <a href="https://mail.google.com/mail/u/0/#search/umuhiredeny%40gmail.com" target="_blank"><li class="ml-2">umuhiredeny@gmail.com</li></a>
            </div>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">
            Follow Us
          </h2>

          <ul class="space-y-3 text-sm text-gray-500">
            <li class="flex gap-1">
              <img src="../assets/photos/icons/youtube1.png" alt="youtube" class="w-5">
              <a href="https://www.youtube.com/@clezotv-d4f" target="_blank" class="hover:text-red-600 transition">
                Youtube
              </a>
            </li>

            <li class="flex gap-1">
              <img src="../assets/photos/icons/instagram1.png" alt="instagram" class="w-4">
              <a href="https://www.instagram.com/denyse_shop_makuzaload" target="_blank" class="hover:text-red-600 transition">
                Instagram
              </a>
            </li>

            <li class="flex gap-1">
              <img src="../assets/photos/icons/video.png" alt="tik tok" class="w-5">
              <a href="https://www.tiktok.com/@denyse.shop" target="_blank" class="hover:text-red-800 transition">
                Tik Tok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-600">
        © 2026 D Shop. All Rights Reserved.
      </div>

    </div>

  </footer>
</template>