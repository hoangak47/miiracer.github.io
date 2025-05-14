// accordion-full.js
{
  /* <script type="text/javascript" src="https://hoangak47.github.io/miiracer.github.io/app.js"></script> */
}
// Inject CSS
const style = document.createElement("style");
style.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
.custom-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  border-radius: 10px;
  width: 100%;
}

.custom-accordion-button {
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
}

button.custom-accordion-button {
    color: #ff6633;
}

span.custom-accordion-title {
    font-weight: 600;
}

.custom-accordion-button:hover {
  background-color: #eee;
}

.custom-accordion-content {
  color: #000;
  overflow: hidden;
  padding: 0 15px;
  height: 0;
  opacity: 0;
  transition: height 0.5s ease, padding 0.5s ease, opacity 0.5s ease;
}

.custom-accordion-content p {
  margin: 15px 0;
}

.custom-accordion-button[aria-expanded="true"] + .custom-accordion-content {
  height: auto;
  opacity: 1;
  padding: 15px;
}
`;
document.head.appendChild(style);

// Create HTML structure with random content
const path = window.location.pathname;

if (!path.includes("/du-an-d-homme-q6")) {
  console.log("Not on the correct page. Exiting script.");
}

let html_content;
const path_demo = window.location.origin;

const path_name = path_demo.includes("http://demo80.ninavietnam.org")
  ? "http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725"
  : path_demo;

const container = document.createElement("div");
container.className = "custom-container";
if (path.includes("/du-an-d-homme-q6")) {
  html_content = `<div class="custom-accordion">
   <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
      <span style="text-align:center; flex:1"><span style="font-size:24px;"><span style="color:#11a617;"><strong>MẶT BẰNG TẦNG</strong></span></span></span>
      <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-6.jpg" width="920" />
               <figcaption><strong>Mặt bằng tầng 1,2</strong></figcaption>
            </figure>
         </div>
         <p> </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-7.jpg" width="920" />
               <figcaption><strong>Mặt bằng tầng 3,4</strong></figcaption>
            </figure>
         </div>
         <p> </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-8.jpg" width="920" />
               <figcaption><strong>Mặt bầng tầng  5, 6-12</strong></figcaption>
            </figure>
         </div>
         <p> </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-9.jpg" width="920" />
               <figcaption><strong>Mặt bằng tầng 12A, 12B-16,20-22,25-28</strong></figcaption>
            </figure>
         </div>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-10.jpg" width="920" />
               <figcaption><strong>Mặt bằng tầng 17, 18</strong></figcaption>
            </figure>
         </div>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-11.jpg" width="920" />
               <figcaption><strong>Mặt bằng tầng 19, 23</strong></figcaption>
            </figure>
         </div>
         <p> </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-12.jpg" width="920" />
               <figcaption><strong>Mặt bằng tầng23A, 29</strong></figcaption>
            </figure>
         </div>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-13.jpg" width="920" />
               <figcaption><strong>Mặt bằng tầng 30, tầng mái</strong></figcaption>
            </figure>
         </div>
      </div>
   </div>
   <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
      <span style="text-align:center; flex:1"><span style="font-size:24px;"><span style="color:#11a617;"><strong>MẶT BẰNG CĂN HỘ</strong></span></span></span>
      <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
         <p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-15.jpg" width="920" /></p>
         <p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-16.jpg" width="920" /></p>
         <p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-17.jpg" width="920" /></p>
         <p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-18.jpg" width="920" /></p>
      </div>
   </div>
</div>`;
} else if (path.includes("/xi-grand-court-q10")) {
  html_content = `<div class="custom-accordion">
   <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
      <span style="text-align:center; flex:1">
         <span style="font-size:24px;">
            <span style="color:#11a617;"><strong>MẶT BẰNG DỰ ÁN XI GRAND COURT</strong></span>
         </span>
      </span>
      <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
         <p><span style="font-size:16px;">Đặc biệt, với lợi thế diện tích lớn 17.940,5 m2, cùng 4 mặt tiền thông thoáng, căn hộ<strong> Xi Grand Court</strong> được đầu tư xây dựng thành 4 Block: 3 Block căn hộ chung cư (528 căn hộ) và 1 Block căn hộ dịch vụ thương mại. Mỗi block cao từ 27 đến 29 tầng.</span></p>
         <p><span style="font-size:16px;">Chính vì được chia thành 4 Block riêng biệt, nên mỗi Block đều có nhiều mặt thông thoáng, nhận đầy đủ ánh sáng. Hơn nữa, các Block này bố trí xây dựng lệch nhau nên càng thoáng mát hơn cho các căn hộ không bị che cản tầm nhìn.</span></p>
         <p><span style="font-size:16px;">Đối tượng các căn hộ sau đây đa dạng từ các gia đình trẻ đến gia đình đông người. Bởi diện tích chung cư <em><strong>Xi Grand Court</strong></em> dao động từ 70 đến 109m2 cho căn 2 và 3 phòng ngủ, phù hợp với nhiều đối tượng sử dụng. Các căn hộ đều được thiết kế sang trọng, tận dụng tối đa các góc nhìn, hướng sáng, hướng gió đầy đủ.</span></p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="991" src="${path_name}/upload/filemanager/images/XI-GRAND/mat-bang-tong-xi-grand-court.png" width="920" />
               <figcaption><strong>Mặt bằng tổng thế dự án XI GRAND COURT</strong></figcaption>
            </figure>
         </div>
         <p> </p>
         <p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block C</strong></span></span><span style="font-size:16px;"><span style="color:#ff6633;"> </span>là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block C có vị trí phía ngay góc mặt tiền Lý Thường Kiệt, mặt tiền của dự án, đối diện là SVĐ Phú Thọ.</span></p>
         <p><span style="font-size:18px;"><strong>❖ Tên tòa</strong>:</span><span style="font-size:16px;"> Block C</span><br />
            <span style="font-size:18px;"><strong>❖ Số tầng</strong>:</span><span style="font-size:16px;"> 28 tầng</span><br />
            <span style="font-size:18px;"><strong>❖ Mật độ</strong>: </span><span style="font-size:16px;">10 – 11 căn/sàn</span><br />
            <span style="font-size:18px;"><strong>❖ Loại hình căn hộ:</strong> </span><span style="font-size:16px;">Căn hộ từ 1 – 3 PN</span><br />
            <span style="font-size:18px;"><strong>❖ Số thang</strong>:</span><span style="font-size:16px;"> 03 thang máy, 01 thang bộ</span>
         </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="640" src="${path_name}/upload/filemanager/images/XI-GRAND/Xi-Block-C-MB-tang-19-26.jpg" width="920" />
               <figcaption><strong>Mặt bằng Block C</strong></figcaption>
            </figure>
         </div>
         <p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block B</strong></span></span><span style="font-size:16px;"> là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block B ở vị trí trung tâm của dự án, nhìn ra mặt tiền Lý Thường Kiệt, Đại học Bách Khoa và Hồ bơi tầng 7. Tòa nhà cũng sở hữu nhiều tiện ích như sảnh đón, khu sân Bóng rổ, hồ bơi, sân chơi trẻ em, cafe tầng trệt…</span></p>
         <p><span style="font-size:18px;"><strong>❖ Tên tòa:</strong> </span><span style="font-size:16px;">Block B</span><br />
            <span style="font-size:18px;"><strong>❖ Số tầng:</strong> </span><span style="font-size:16px;">29 tầng</span><br />
            <span style="font-size:18px;"><strong>❖ Mật độ:</strong></span><span style="font-size:16px;"><strong> </strong>10 căn/sàn</span><br />
            <span style="font-size:18px;"><strong>❖ Loại hình căn hộ</strong>:</span><span style="font-size:16px;"> Căn hộ từ 2 – 3 PN</span><br />
            <span style="font-size:18px;"><strong>❖ Số thang:</strong></span><span style="font-size:16px;"><strong> </strong>03 thang máy, 01 thang bộ</span>
         </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="650" src="${path_name}/upload/filemanager/images/XI-GRAND/B-T9-10-hinh-scaled.jpg" width="920" />
               <figcaption><strong>Mặt bằng block B</strong></figcaption>
            </figure>
         </div>
         <p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block A2</strong></span></span><span style="font-size:16px;"> là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block A2 ở vị trí phía sau của dự án, nhìn về phía Bitexco quận 1, quận 5 và Hồ bơi tầng 7. Tòa nhà sở hữu nhiều tiện ích như sảnh đón, khu BBQ, hồ bơi, Spa, sân chơi trẻ em,…</span></p>
         <p><span style="font-size:18px;"><strong>❖ Tên tòa: </strong></span><span style="font-size:16px;">Block A2</span><br />
            <span style="font-size:18px;"><strong>❖ Số tầng:</strong></span><span style="font-size:16px;"> 29 tầng</span><br />
            <span style="font-size:18px;"><strong>❖ Mật độ: </strong></span><span style="font-size:16px;">8 căn/sàn</span><br />
            <span style="font-size:18px;"><strong>❖ Loại hình căn hộ:</strong></span><span style="font-size:16px;"> Căn hộ từ 2 – 3 PN</span><br />
            <span style="font-size:18px;"><strong>❖ Số thang: </strong></span><span style="font-size:16px;">03 thang máy, 01 thang bộ</span>
         </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="650" src="${path_name}/upload/filemanager/images/XI-GRAND/A2-T9-10-hinh-scaled.jpg" width="920" />
               <figcaption><strong>Mặt bằng Block A2</strong></figcaption>
            </figure>
         </div>
         <p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block A1 </strong></span></span><span style="font-size:16px;">là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block A1 ở vị trí phía sau của dự án, nhìn ra mặt tiền Lý Thường Kiệt, Đại học Bách Khoa và Hồ bơi tầng 7. Tòa nhà cũng sở hữu nhiều tiện ích như sảnh đón, hồ bơi, sân chơi trẻ em, cafe tầng trệt…</span></p>
         <p><span style="font-size:18px;"><strong>❖ Tên tòa:</strong></span><span style="font-size:16px;"> Block A1</span><br />
            <span style="font-size:18px;"><strong>❖ Số tầng:</strong></span><span style="font-size:16px;"> 29 tầng</span><br />
            <span style="font-size:18px;"><strong>❖ Mật độ: </strong></span><span style="font-size:16px;">8 căn/sàn</span><br />
            <span style="font-size:18px;"><strong>❖ Loại hình căn hộ:</strong></span><span style="font-size:16px;"> Căn hộ từ 2 – 3 PN</span><br />
            <span style="font-size:18px;"><strong>❖ Số thang: </strong></span><span style="font-size:16px;">03 thang máy, 01 thang bộ</span>
         </p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="650" src="${path_name}/upload/filemanager/images/XI-GRAND/A1-T9-10-can-ho-xi-grand-court.jpg" width="920" />
               <figcaption><strong>Mặt bằng Block A1</strong></figcaption>
            </figure>
         </div>
      </div>
   </div>
</div>
`;
} else if (path.includes("/q7-saigon-riverside")) {
  html_content = `

<div class="custom-accordion">
   <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
      <span style="text-align:center; flex:1">
         <span style="font-size:24px;">
            <span style="color:#11a617;"><strong>MẶT BẰNG CĂN HỘ Q7 SAIGON RIVERSIDE COMPLEX</strong></span>
         </span>
      </span>
      <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
         <p><span style="font-size:16px;">Mặt bằng căn hộ được thiết kế rất thông minh và hợp lý. Tất cả căn hộ tại Q7 Riverside đều được thiết kế không gian mở.</span></p>
         <p><span style="font-size:16px;">Từng căn hộ đều được chú trọng thiết kế, các căn đều có nhiều hướng nhìn rộng bao quát thành phốnhư trung tâm quận 1, Phú Mỹ Hưng, cầu Phú Mỹ, Sông Sài Gòn,…</span></p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="679" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/mat-bang-dien-hinh-q7-saigon-riv.png" width="920" />
               <figcaption><strong>Mặt bằng tổng thể</strong></figcaption>
            </figure>
         </div>
         <p> </p>
         <p><span style="font-size:16px;">Nội thất căn hộ Q7 Saigon Riverside lựa chọn màu trắng làm chủ đạo, kết hợp nhẹ nhàng gam xám trắng hiện đại. Sử dụng sàn gỗ sáng kết hợp phân bổ hợp lý hệ đèn trần. Do vậy, mang đến không gian sống ấm cúng, ngập tràn ánh sáng.</span></p>
         <p><span style="font-size:16px;">Thiết kế các căn hộ tận dụng được tất cả các góc làm cho các phòng có đầy đủ các tiện ích mà vẫn rộng rãi, đơn giản tạo nên không gian hài hòa</span>.</p>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="679" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/mbo1.png" width="920" />
               <figcaption><strong>Mặt bằng tầng 1</strong></figcaption>
            </figure>
         </div>
         <div style="text-align:center">
            <figure class="image" style="display:inline-block">
               <img alt="" height="679" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/mb1.png" width="920" />
               <figcaption><strong>Mặt bằng tầng 5</strong></figcaption>
            </figure>
         </div>
         <p style="text-align:center"><img alt="" height="845" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block1.png" width="920" /></p>
         <p style="text-align:center"><img alt="" height="846" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block3.jpg" width="920" /></p>
         <p style="text-align:center"><img alt="" height="774" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block4.jpg" width="920" /></p>
         <p style="text-align:center"><img alt="" height="1049" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block2.jpg" width="1200" /></p>
         <p style="text-align: center;"> </p>
      </div>
   </div>
</div>`;
} else if (path.includes("/q7-boulevard")) {
  html_content = `
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">VỊ TRÍ ĐẮT GIÁ TẠI TÂM ĐIỂM QUẬN 7</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;"><em><strong>Q7 Boulevard</strong></em> vươn mình kiêu hãnh ngay đại lộ Nguyễn Lương Bằng – một trong những trục thương mại, tài chính sầm uất nhất khu Nam và liền kề đô thị kiểu mẫu Phú Mỹ Hưng hiện đại.<em><strong> Q7 Boulevard</strong></em> kiến tạo nên chốn an cư lý tưởng và ngập tràn hơi thở thiên nhiên giữa nhịp sống sôi động của Nam Sài Gòn.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="712" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/vitri.png" width="920" />
<figcaption><strong>Vị trí dự án Q7 BOULEVARD</strong></figcaption>
</figure>
</div>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">HƯỚNG NHÌN THỰC TẾ TỪ Q7 BOULEVARD</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="437" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/nm1.png" width="920" />
<figcaption><strong>TẦM NHÌN VỀ SÔNG SÀI GÒN</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="437" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/nm2.png" width="920" />
<figcaption><strong>TẦM NHÌN VỀ PHÚ MỸ HƯNG</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="437" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/nm3.png" width="920" />
<figcaption><strong>TẦM NHÌN VỀ NHÀ BÈ</strong></figcaption>
</figure>
</div>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">THIẾT KẾ HIỆN ĐẠI GẦN GŨI THIÊN NHIÊN</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Tại<em><strong> Q7 Boulevard</strong></em>, cuộc sống sẽ trở nên thú vị hơn khi mỗi căn hộ đều được thiết kế và chăm chút đến từng chi tiết, cư dân sẽ có những trải nghiệm hoàn toàn mới trong một không gian sống đầy tiện nghi. Các căn hộ được thiết kế theo phong cách trang nhã phù hợp với lối sống hiện đại, tối đa hóa không gian để đón nhận trọn vẹn ánh sáng tự nhiên và làn gió trời tươi mát.</span></p>

<p style="text-align:center"><img alt="" height="568" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/hn1.png" width="920" /></p>

<p> </p>

      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">ĐẦY ĐỦ TIỆN ÍCH TRỌN VẸN TRẢI NGHIỆM</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;"><em><strong>Q7 Boulevard </strong></em>sở hữu nhiều tiện ích nội khu hoàn chỉnh, hiện đại - nơi bạn và gia đình sẽ đư</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/ban-can-ho-chung-cu-quan-7-tp-ho-chi-minh-1653643147-nhadat_cafeland_vn.jpg" width="920" />
<figcaption><strong>Hồ bơi dự án</strong></figcaption>
</figure>
</div>

<table border="1" cellpadding="1" cellspacing="1" style="width:920px;">
	<tbody>
		<tr>
		</tr>
	</tbody>
</table>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">THỪA HƯỞNG CHUỖI TIỆN ÍCH ĐẲNG CẤP TỪ PHÚ MỸ HƯNG</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Chỉ cách khu đô thị Phú Mỹ Hưng vài bước chân, <em><strong>Q7 Boulevard</strong></em> thừa hưởng trọn vẹn những tiện ích đạt tiêu chuẩn quốc tế trong khu vực như các tổ hợp trung tâm thương mại – siêu thị - dịch vụ giải trí, hệ thống y tế, giáo dục hàng đầu…</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/crescent-mall-quan-7-1712070085.jpg" width="920" />
<figcaption><strong>TRUNG TÂM THƯƠNG MẠI CRESCENT</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="593" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/1-cam-nang-mua-sam-vui-choi-tai-vivo-city-quan-7.jpg" width="920" />
<figcaption><strong>TRUNG TÂM THƯƠNG MẠI SC VIVO</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/pv3.jpg" width="920" />
<figcaption><strong>BỆNH VIỆN FV</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="519" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/Thi%E1%BA%BFt-k%E1%BA%BF-ch%C6%B0a-c%C3%B3-t%C3%AAn-93.png" width="920" />
<figcaption><strong>TRUNG TÂM HỘI CHỢ VÀ TRIỄN LÃM SÀI GÒN (SECC)</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="607" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/truong-quoc-te-canada-quan-7.jpg" width="920" />
<figcaption><strong>TRƯỜNG QUỐC TẾ CANADA</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="575" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/cau-anh-sao-di-duong-nao.jpg" width="920" />
<figcaption><strong>HỒ BÁN NGUYỆT_ CẦU ÁNH SAO</strong></figcaption>
</figure>
</div>

<p style="text-align: center;"><span style="color:#ff6633;"><span style="font-size:22px;"><strong>Chân thành cảm ơn Quý khách hàng quan tâm Dự án  Q7 BOULEVAR</strong></span></span></p>
      </div>
    </div>
  </div>
  `;
}

container.innerHTML = html_content;

// Chèn vào phần tử có id 'toc-content'
const tocContent = document.getElementById("matbangtang");
if (tocContent) {
  tocContent.appendChild(container);
}

// Add JS behavior to toggle accordion
const items = container.querySelectorAll(".custom-accordion-button");

function toggleAccordion() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  // Open this one
  if (!isExpanded) {
    this.setAttribute("aria-expanded", "true");
  } else {
    this.setAttribute("aria-expanded", "false");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

const isHomePage = window.location.pathname === "/";

// Tìm phần tử form_title
const form_title = document.querySelector(".dknt-title-main strong");

// Nếu không phải trang chủ và form_title tồn tại, thay đổi fontSize
if (!isHomePage && form_title) {
  form_title.style.fontSize = "x-large";
}

// Mảng chứa các href cần xử lý
const hrefArray = ["#dknbg", "#dkxnm", "#hoithem"];

// Duyệt qua toàn bộ thẻ <a> trong trang
document.querySelectorAll("a").forEach((a) => {
  // Kiểm tra nếu href của thẻ a nằm trong mảng
  if (hrefArray.includes(a.getAttribute("href"))) {
    // Thêm sự kiện hover (mouseenter và mouseleave)
    a.addEventListener("mouseenter", () => {
      a.style.color = "#FF6633";
    });
    a.addEventListener("mouseleave", () => {
      a.style.color = ""; // Trả lại màu ban đầu
    });
  }
});

// Tìm thẻ <a> có class jj-bg-secondary
const anchorTag = document.querySelector("a.jj-bg-secondary");

// Kiểm tra xem thẻ có tồn tại và chứa text "Đăng ký nhận bảng giá"
if (anchorTag && anchorTag.textContent.trim() === "Đăng ký nhận bảng giá") {
  // Thêm các class mới
  anchorTag.classList.add("lazy", "fa-bounce", "entered", "loaded");
  anchorTag.style.borderRadius = "8px";

  // Xóa các class start-0 và w-100
  anchorTag.classList.remove("start-0", "w-100");

  // Tạo container cha để căn giữa với Flexbox
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.display = "flex";
  container.style.justifyContent = "center";

  // Chuyển thẻ <a> vào container
  anchorTag.parentNode.insertBefore(container, anchorTag);
  container.appendChild(anchorTag);

  // Đặt width cho thẻ <a>
  anchorTag.style.width = "70%";
}
