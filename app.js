document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
    .hidden {
            display: none;
        }
        .transition-height {
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
            overflow: hidden;
            max-height: 0;
            opacity: 0;
        }
        .expanded {
            max-height: 500px; /* Adjust as needed */
            opacity: 1;
        }
  `;
  document.head.appendChild(style);

  function toggleStage(stage) {
    const stages = [1, 2, 3, 4];
    stages.forEach((s) => {
      const element = document.getElementById(`stage-${s}`);
      if (s === stage) {
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          setTimeout(() => {
            element.classList.add("expanded");
          }, 10);
        } else {
          element.classList.remove("expanded");
          setTimeout(() => {
            element.classList.add("hidden");
          }, 500);
        }
      } else {
        element.classList.remove("expanded");
        setTimeout(() => {
          element.classList.add("hidden");
        }, 500);
      }
    });
  }

  window.toggleStage = toggleStage;

  const content = `
    <div class="p-8">
      <ul class="space-y-8">
        <li>
          <div class="flex items-start space-x-2 cursor-pointer" onclick="toggleStage(1)">
            <span class="text-green-500 mt-1">•</span>
            <h2 class="text-xl font-bold">Giai đoạn 1: Chuẩn bị thi công</h2>
          </div>
          <div id="stage-1" class="mt-2 transition-height">
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>Bảng xác nhận vật liệu</li>
              <li>Vật liệu mẫu thực tế</li>
              <li>Sản phẩm mẫu</li>
              <li>Bảng dự toán chi tiết</li>
              <li>Bảng tiến độ chi tiết</li>
            </ul>
            <div class="mt-4 flex items-center space-x-2">
              <span class="text-white">Xem thêm mẫu</span>
              <i class="fas fa-arrow-right text-orange-500"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="flex items-start space-x-2 cursor-pointer" onclick="toggleStage(2)">
            <span class="text-green-500 mt-1">•</span>
            <h2 class="text-xl font-bold">Giai đoạn 2: Thi Công Phần Thô</h2>
          </div>
          <div id="stage-2" class="mt-2 hidden transition-height">
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>Thành phần 1</li>
              <li>Thành phần 2</li>
              <li>Thành phần 3</li>
            </ul>
          </div>
        </li>
        <li>
          <div class="flex items-start space-x-2 cursor-pointer" onclick="toggleStage(3)">
            <span class="text-green-500 mt-1">•</span>
            <h2 class="text-xl font-bold">Giai đoạn 3: Thi công hoàn thiện</h2>
          </div>
          <div id="stage-3" class="mt-2 hidden transition-height">
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>Thành phần 1</li>
              <li>Thành phần 2</li>
              <li>Thành phần 3</li>
            </ul>
          </div>
        </li>
        <li>
          <div class="flex items-start space-x-2 cursor-pointer" onclick="toggleStage(4)">
            <span class="text-green-500 mt-1">•</span>
            <h2 class="text-xl font-bold">Giai đoạn 4: Thi công nội thất</h2>
          </div>
          <div id="stage-4" class="mt-2 hidden transition-height">
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>Thành phần 1</li>
              <li>Thành phần 2</li>
              <li>Thành phần 3</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  `;

  const target = document.getElementById("toc-content");
  if (target) {
    target.innerHTML = content;
  }
});
