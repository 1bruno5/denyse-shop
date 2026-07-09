<template>
  <footer class="bg-gray-900 text-white">

    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h1 class="text-3xl font-bold mb-4">
            D Shop
          </h1>
          <p class="text-gray-300 text-sm leading-7">
            D Shop is your trusted destination for premium kitchen
            equipment, cookware, and appliances. We provide quality
            products that make cooking easier, smarter, and more
            enjoyable.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">
            Contact Info
          </h2>

          <ul class="space-y-3 text-sm text-gray-300">
            <li>+250 782 169 036</li>
            <li>+250 788 839 489</li>
            <li>info@dshop.com</li>
            <li>Kigali, Rwanda</li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul class="space-y-3 text-sm text-gray-300">
            <li>
                <RouterLink to="/" class="hover:text-red-800">Home</RouterLink>
            </li>

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
            Follow Us
          </h2>

          <ul class="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#" class="hover:text-red-600 transition">
                Facebook
              </a>
            </li>

            <li>
              <a href="#" class="hover:text-red-600 transition">
                Instagram
              </a>
            </li>

            <li>
              <a href="#" class="hover:text-red-800 transition">
                X (Twitter)
              </a>
            </li>

            <li>
              <a href="#" class="hover:text-red-600 transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2026 D Shop. All Rights Reserved.
      </div>

    </div>

  </footer>
</template>