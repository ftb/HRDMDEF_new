<template>
  <div class="flex items-center justify-center p-1">
    <div class="relative inline-block text-left">
      <Menu>
        <MenuButton class="inline-flex align-middle items-center">
          <span class=" block h-8 w-8 overflow-hidden rounded-full border-2">
            <img
              class="h-full w-full object-cover"
              src="/storage/photo-profile.jpg"
              alt=""
            />
          </span>
        </MenuButton>
        <MenuItems
          class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-300 rounded-md shadow-lg outline-none"
        >
          <div class="px-4 py-3">
            <p class="text-sm leading-5">Signed in as</p>
            <p class="text-sm font-medium leading-5 text-gray-900 truncate">
              tom@example.com
            </p>
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <router-link
                :class="{ 'bg-blue-500': active }"
                class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                to="/AccountSettings"
                >Account settings</router-link
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                :class="{ 'bg-blue-500': active }"
                class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                href="/account-settings"
              >
                Sign out
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
export default defineComponent({
  name: "UserMenu",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  }
});
</script>
