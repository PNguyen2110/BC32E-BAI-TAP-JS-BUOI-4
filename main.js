/**
 * BÀI I: SẮP XẾP CÁC SỐ THEO THỨ TỰ TĂNG DẦN
 * 
 * BƯỚC 1: LẤY GIÁ TRỊ TỪ Ô INPUT
 * 
 * BƯỚC 2: SO SÁNH GIÁ TRỊ LẤY ĐƯỢC 
 * TH1:
 *  + NẾU SỐ 3 < SỐ 2 < SỐ 1  => SỐ 3 < SỐ 2 < SỐ 1
 *  + NẾU SỐ 2 < SỐ 3 < SỐ 1  => SỐ 2 < SỐ 3 < SỐ 1
 * TH2:
 * + NẾU SỐ 1 < SỐ 3 < SỐ 2  => SỐ 1 < SỐ 3 < SỐ 2
 * + NẾU SỐ 3 < SỐ 1 < SỐ 2  => SỐ 3 < SỐ 1 < SỐ 2
 * TH3:
 * + NẾU SỐ 1 < SỐ 2 < SỐ 3  => SỐ 1 < SỐ 2 < SỐ 3
 * + NẾU SỐ 2 < SỐ 1 < SỐ 3  => SỐ 2 < SỐ 1 < SỐ 3
 * 
 * BƯỚC 3: KẾT QUẢ = ?
 
 */

var btnSapXep = document.getElementById("btnSapXep");
btnSapXep.onclick = function (e) {
  e.preventDefault();
  var soThu1 = +document.getElementById("soThu1").value;
  var soThu2 = +document.getElementById("soThu2").value;
  var soThu3 = +document.getElementById("soThu3").value;
  var pSapXep = document.getElementById("pSapXep");

  //số thứ 1 lớn nhất
  if (soThu3 < soThu2 && soThu2 < soThu1) {
    pSapXep.innerHTML = `${soThu3} < ${soThu2} < ${soThu1}`;
  } else if (soThu2 < soThu3 && soThu3 < soThu1) {
    pSapXep.innerHTML = `${soThu2} < ${soThu3} < ${soThu1}`;
  }

  // số thứ 2 lớn nhất
  else if (soThu3 < soThu1 && soThu1 < soThu2) {
    pSapXep.innerHTML = `${soThu3} < ${soThu1} < ${soThu2}`;
  } else if (soThu1 < soThu3 && soThu3 < soThu2) {
    pSapXep.innerHTML = `${soThu1} < ${soThu3} < ${soThu2}`;
  }

  // số thứ 3 lớn nhất
  else if (soThu1 < soThu2 && soThu2 < soThu3) {
    pSapXep.innerHTML = `${soThu1} < ${soThu2} < ${soThu3}`;
  } else if (soThu2 < soThu1 && soThu1 < soThu3) {
    pSapXep.innerHTML = `${soThu2} < ${soThu1} < ${soThu3}`;
  } else {
    pSapXep.innerHTML = 'Không nhập số giống nhau'
  }
};

// BÀI 2: VIẾT CHƯƠNG TRÌNH CHÀO HỎI
/*
BƯỚC 1: LẤY VALUE TỪ INPUT

BƯỚC 2: 
+NẾU BỐ => XIN CHÀO BỐ!
+NẾU MẸ => XIN CHÀO MẸ!
+NẾU ANH TRAI => XIN CHÀO ANH TRAI!
+NẾU EM GÁI => XIN CHÀO EM GÁI!

BƯỚC 3: KẾT QUẢ = ?
*/

var btnXacNhan = document.getElementById("btnXacNhan");
btnXacNhan.onclick = function (e) {
  e.preventDefault();
  var xinChao = document.getElementById("xinChao").value;

  var pXacNhan = document.getElementById("pXacNhan");
  
  if (xinChao === "B") {
    pXacNhan.innerHTML = "XIN CHÀO BỐ";
  } else if (xinChao === "M") {
    pXacNhan.innerHTML = "XIN CHÀO MẸ";
  } else if (xinChao === "A") {
    pXacNhan.innerHTML = "XIN CHÀO ANH";
  } else if (xinChao === "E") {
    pXacNhan.innerHTML = "XIN CHÀO EM GÁI";
  }
};

/**
 * BÀI 3: TÍNH SỐ CHẴN, LẺ
 *
 * BƯỚC 1: LẤY VALUE TỪ INPUT CH
 *
 * BƯỚC 2: DÙNG % ĐỂ XÁC ĐỊNH CÓ BAO NHIÊU SỐ CHẴN, SỐ LẺ
 *
 * BƯỚC 3: KẾT QUẢ = ?
 */

var btnChanLe = document.getElementById("btnChanLe");
btnChanLe.onclick = function (e) {
  e.preventDefault();
  // số 1
  var so1 = +document.getElementById("so1").value;
  var so1Chia = so1 % 2;
  // số2
  var so2 = +document.getElementById("so2").value;
  var so2Chia = so2 % 2;
  // số 3
  var so3 = +document.getElementById("so3").value;
  var so3Chia = so3 % 2;

  var pChanLe = document.getElementById("pChanLe");
  
  var total1 = 0;
  var total2 = 0;
  var total3 = 0;

  
  // số 1
  if (so1Chia === 0) {
    total1 += 1;
  } else if((so1Chia !== 0)) {
    total1 ;
  }else{
    pChanLe.innerHTML = 'không xác định'
  }
  // số 2
  if (so2Chia === 0) {
    total2 += 1;
  } else if(so2Chia !== 0){
    total2 ;
  }
  // số 3
  if (so3Chia === 0) {
    total3 += 1;
  } else if(so3Chia !== 0){
    total3 ;
  }
  
  

  pChanLe.innerHTML = `${total1 + total2 + total3} số chẵn, ${3 - (total1 + total2 + total3)} số lẻ`;
};

/* BÀI 4: XÁC ĐỊNH TAM GIÁC

BƯỚC 1: LẤY VALUE TỪ INPUT

BƯỚC 2: 
+NẾU CẠNH1 = CẠNH2 = CẠNH3 => TAM GIÁC ĐỀU

+NẾU 
    CẠNH1 = CẠNH2  OR
    CẠNH1 = CẠNH3  OR
    CẠNH2 = CẠNH3 
  => TAM GIÁC ĐỀU

+NẾU 
    CẠNH1*CANH1 = CẠNH2 * CANH2 + CẠNH3 * CANH3
    CẠNH2*CANH2 = CẠNH1 * CANH1 + CẠNH3 * CANH3
    CẠNH3*CANH3 = CẠNH1 * CANH1 + CẠNH2 * CANH2

=> TAM GIÁC VUÔNG

*/

var btnDuDoan = document.getElementById("btnDuDoan");
btnDuDoan.onclick = function (e) {
  e.preventDefault();
  var canh1 = +document.getElementById("canh1").value;
  var canh2 = +document.getElementById("canh2").value;
  var canh3 = +document.getElementById("canh3").value;

  var pDuDoan = document.getElementById("pDuDoan");
  // tam giác đều
  if (canh1 === canh2 && canh1 === canh3 && canh2 === canh3) {
    pDuDoan.innerHTML = "Đây là tam giác đều";
  }

  // tam giác cân
  else if (canh1 === canh2 && canh1 !== canh3 && canh2 !== canh3) {
    pDuDoan.innerHTML = "Đây là tam giác cân";
  } else if (canh1 === canh3 && canh1 !== canh2 && canh3 !== canh2) {
    pDuDoan.innerHTML = "Đây là tam giác cân";
  } else if (canh2 === canh3 && canh2 !== canh1 && canh3 !== canh1) {
    pDuDoan.innerHTML = "Đây là tam giác cân";
  }

  // tam giác vuông
  else if (canh1 * canh1 === canh2 * canh2 + canh3 * canh3) {
    pDuDoan.innerHTML = "Đây là tam giác vuông";
  } else if (canh2 * canh2 === canh1 * canh1 + canh3 * canh3) {
    pDuDoan.innerHTML = "Đây là tam giác vuông";
  } else if (canh3 * canh3 === canh1 * canh1 + canh2 * canh2) {
    pDuDoan.innerHTML = "Đây là tam giác vuông";
  }
  // tam giác khác
   else {
    pDuDoan.innerHTML = "Đây là tam giác khác";
  }
};
