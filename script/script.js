const header = document.getElementById("header")

header.innerHTML = `
    <div class="bg-white shadow-md">
      <div
        class="container mx-auto px-4 py-3 flex items-center justify-between"
      >
        <div class="flex items-center space-x-2">
          <span class="text-xl font-bold text-gray-800"
            ><a href="/">Python GUI Framework</a></span
          >
        </div>
        <div class="flex items-center space-x-4">
          <button
            class="px-4 py-2 border border-black-600 text-black-600 rounded-md hover:bg-black-50 transition-colors"
          >
            Submit Framework
          </button>
          <button
            class="px-4 py-2 border border-black-600 text-black-600 rounded-md hover:bg-black-50 transition-colors"
          >
            Advertise
          </button>
        </div>
      </div>
    </div>
`
