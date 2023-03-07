const dsnv = new DanhSachNhanVien();

function getELE(id) {
    // trả về thẻ có id cần tìm
    return document.getElementById(id);
}
function setLocalStorage(mang) {
    localStorage.setItem("DSNV", JSON.stringify(mang));
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        showTable(dsnv.mangNV);
    }
}
getLocalStorage();

// thêm
function addNV() {
    var taiKhoan = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLamTrongThang = Number(getELE("gioLam").value);
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luongCoBan), chucVu, Number(gioLamTrongThang))

    nv.tinhTongLuong();
    nv.xepLoaiNhanVien();

    // console.log(tinhTongLuong());
    dsnv.themNV(nv);
    showTable(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV)
}
getELE("btnThemNV").onclick = addNV;

// xem chi tiết
function seeDetails(id) {
    var index = dsnv.findIndexNV(id);
    if (index != -1) {
        console.log(dsnv.mangNV[index]);
        getELE("tknv").value = dsnv.mangNV[index].taiKhoan;
        getELE("tknv").disabled = true;
        getELE("name").value = dsnv.mangNV[index].hoTen;
        getELE("email").value = dsnv.mangNV[index].email;
        getELE("password").value = dsnv.mangNV[index].matKhau;
        getELE("datepicker").value = dsnv.mangNV[index].ngayLam;
        getELE("luongCB").value = dsnv.mangNV[index].luongCoBan;
        getELE("chucvu").value = dsnv.mangNV[index].chucVu;
        getELE("gioLam").value = dsnv.mangNV[index].gioLamTrongThang;
    }

}
// cập nhật
function updateNV() {
    var taiKhoan = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLamTrongThang = Number(getELE("gioLam").value);
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luongCoBan), chucVu, Number(gioLamTrongThang))
    nv.tinhTongLuong();
    nv.xepLoaiNhanVien();

    dsnv.updateNV(nv);
    setLocalStorage(dsnv.mangNV);
    getLocalStorage();
}
getELE("btnCapNhat").onclick = updateNV;
// xóa
function deleteNV(id) {
    dsnv.deleteNV(id);
    setLocalStorage(dsnv.mangNV);
    getLocalStorage();
}
// hiển thị danh sách
function showTable(mang) {
    var content = "";
    mang.map(function (nv, index) {
        var trELE = `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td>
            <button onclick="seeDetails('${nv.taiKhoan}')" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Xem</button>
            <button onclick="deleteNV('${nv.taiKhoan}')"  class="btn btn-danger">Xóa</button>
        </td>
        </tr>
        `;
        content += trELE;
    })
    getELE("tableDanhSach").innerHTML = content;
}
