function DanhSachNhanVien() {
    this.mangNV = [];

    this.themNV = function (nv) {
            this.mangNV.push(nv);
    }
    this.findIndexNV = function (id) {
        var indexFind = -1; 
        indexFind = this.mangNV.findIndex(function (nv) {

            return nv.taiKhoan == id;
        })
        // console.log(indexFind);
        return indexFind;
    }
    
    this.updateNV = function (nv) {
        var index = this.findIndexNV(nv.taiKhoan);
        if (index != -1) {
            this.mangNV[index] = nv;
        }
    }
    this.deleteNV = function (id) {
        var index = this.findIndexNV(id);

        if (index != -1) {
            this.mangNV.splice(index,1);
            
        }
    }
}