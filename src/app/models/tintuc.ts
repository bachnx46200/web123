export class Tintuc {
    id:string;
    tieude:string;
    loaitintuc:string;
    noidung:string;
    createdBy:string;
    createdDate:string;
    modifiedBy:string;
    modifiedDate:string;
    trangthai:string;

    constructor(tieude: string, noidung: string,createdBy:string,loaitintuc:string) {
        this.tieude = tieude;
        this.noidung = noidung;
        this.createdBy = createdBy;
        this.loaitintuc = loaitintuc;
    }
    
}
