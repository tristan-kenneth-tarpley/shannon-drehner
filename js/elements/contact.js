const Contact = class {
    constructor(){
        this.address = biz_info.address
        this.phone = biz_info.phone
    }
    build(){
        $(".phone").text(this.phone)
        $(".address").text(this.address)

    }
}