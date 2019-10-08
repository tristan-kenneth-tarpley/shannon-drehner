const area = class {
    constructor(type){
        this.type = type
        this.copy = area_of_practice_copy
        switch (this.type) {
            case 'test':
                this.copy = this.copy.assault
        }
    }

    build(){
        $(".service_copy").html(this.copy)
    }
}  