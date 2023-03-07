function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLamTrongThang, loaiNhanVien) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email= email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLamTrongThang;
    this.tongLuong = 0;
    this.loaiNhanVien = loaiNhanVien

    this.tinhTongLuong = function (){
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.luongCoBan * 3;
        }else if(this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCoBan * 2;
        }else if(this.chucVu == "Nhân Viên"){
            this.tongLuong = this.luongCoBan * 1;
        }
    } 
    this.xepLoaiNhanVien = function() {
        if(this.gioLamTrongThang.value >= 192){
            return this.loaiNhanVien = "Xuất sắc";
        }else if (this.gioLamTrongThang >= 176){
            return this.loaiNhanVien = "Giỏi";
        }else if (this.gioLamTrongThang >= 160) {
            return this.loaiNhanVien = "Khá";
        }else{
            return this.loaiNhanVien = "trung bình";
        }
    }
}