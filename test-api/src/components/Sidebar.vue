<template>
    <div class="relative flex min-h-screen">
        <!--Sidebar-->
        <div class="bg-white-400 shadow w-50 space-y-6" v-show="showSide">
            <div class="p-4 text-4xl font-extrabold">heylink.</div>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <router-link class="nav-item flex items-center space-x-2 py-2 px-4 hover:bg-blue-500" aria-current="pages"
                    to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Dashboard
                </router-link>
                <router-link class="flex items-center space-x-2 py-3 px-4 hover:bg-blue-500" aria-current="pages"
                    to="/Overview">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                    Overview
                </router-link>
            </ul>
        </div>
        <!--Main content-->
        <div class="flex-1">
            <!--Header-->
            <div class="bg-white shadow flex items-center px-2 py-4 font-bold" @click="toggleSideBar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <h1 class="p-6">Conversion</h1>
            </div>
            <div class="border border-gray-300 rounded-md p-[20px] h-full">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
  
<script>
export default{
    data() {
        return{
            showSide: true
        }
    },
    methods: {
        toggleSideBar(){
            this.showSide = !this.showSide
        }
    }
}
</script>
  
<style scoped>.nav-link.active {
    color: blue;
}</style>
  