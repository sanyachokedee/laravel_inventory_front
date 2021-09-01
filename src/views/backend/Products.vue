<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    Product list
  </h2>
  <!-- ตารางแสดงสินค้า -->
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Product</th>
            <th class="px-4 py-3">Price</th>
            <th class="px-4 py-3">By</th>
            <th class="px-4 py-3">Updated</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr
            v-for="product in products.data"
            :key="product.id"
            class="text-gray-700 dark:text-gray-400 hover:bg-blue-100"
          >
            <td class="px-4 py-3 texd-sm">{{ product.id }}</td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                  <img
                    class="object-cover w-full h-full rounded-full"
                    :src="product.image"
                    alt=""
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  ></div>
                </div>
                <div>
                  <p class="font-semibold">{{ product.name }}</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ product.created_at }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">{{ product.price }}</td>
            <td class="px-4 py-3 text-sm">{{ product.user_id }}</td>
            <!-- <td class="px-4 py-3 text-sm">{{ product.updated_at }}</td>            -->
            <td class="px-4 py-3 text-sm">
              <router-link :to="{ name: 'Login', params: { id: product.id } }">
                <button
                  class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Edit
                </button>
              </router-link>
              <button
                @click.prevent="deleteProduct(product.id)"
                class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
      <div>
        <a href="{{ products.data.first_page_url }}">1</a>
        <a href="{{ products.data.next_page_url }}"> Next </a>
        <!-- paginate {{ products.first_page_url}} -->
      </div>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import http from "@/services/BackendService";

export default {
  data() {
    return {
      products: [], // กำหนด Product เป็น array
      currentPage: 0, //โหลดหน้าที่ศูนย์ก่อน
      paginate: [],
    };
  },

  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    // let response = http.get(`products?page=${this.currentPage}`) // not work

    // .then เป็นแบบ asynchonize ถ้าทำเสร็จทำการกำหนดข้อมูล
    http.get(`products?page=${this.currentPage}`).then((response) => {
      let responseProduct = response.data;
      this.products = responseProduct;
      console.log("products =" + responseProduct);
      console.log("str 10 =" + responseProduct.first_page_url);
    });

    http.get(`products?page=${this.currentPage}`).then((response2) => {
      // ทดสอบดูตรวจแปรใน data.current_page
      console.log("str 2 =" + response2.data.links);
      console.log("str 3 =" + response2.data);
    });
  },
  methods: {
    deleteProduct(id) {
      console.log("method = " + id);
    },
  },
};
</script>
