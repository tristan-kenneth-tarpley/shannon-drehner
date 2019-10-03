const Services = class {
    constructor(){}

    shell(shade, img, title, width){
        // shade = dark, grey, rose, or green
        // width = item-col-2 or item-col

        const el = `<div class="${width}">
            <a href="#" class="service-item ${shade}">
            <figure>
                <img src="${img}" alt="">
            </figure>
            <span class="service-title">${title}</span>
            </a>
        </div>
        `
        return el
    }

    services(){
        const struct = [
            {
                shade: 'grey',
                img: 'https://via.placeholder.com/640x308.png',
                title: 'Sexual Assault',
                width: 'item-col-2'
            },
            {
                shade: 'dark',
                img: 'https://via.placeholder.com/640x308.png',
                title: 'Family Violence',
                width: 'item-col-2'
            },
            {
                shade: 'grey',
                img: 'https://via.placeholder.com/320x308.png',
                title: 'White Color',
                width: 'item-col'
            },
            {
                shade: 'dark',
                img: 'https://via.placeholder.com/320x308.png',
                title: 'Drug Charges',
                width: 'item-col'
            },
            {
                shade: 'rose',
                img: 'https://via.placeholder.com/640x308.png',
                title: 'Assault & Violent Crimes',
                width: 'item-col-2'
            },
            {
                shade: 'dark',
                img: 'https://via.placeholder.com/320x308.png',
                title: 'Juvenile Crimes',
                width: 'item-col'
            },
            {
                shade: 'rose',
                img: 'https://via.placeholder.com/640x308.png',
                title: 'Expunctions/petitions for Non-Disclosure',
                width: 'item-col-2'
            },
            {
                shade: 'grey',
                img: 'https://via.placeholder.com/320x308.png',
                title: 'Victim of crime/investigations',
                width: 'item-col'
            }

        ]
        return struct
    }

    build(){
        const struct = this.services()
        struct.forEach(item=>{
            const el = this.shell(item.shade, item.img, item.title, item.width)
            $('#service_list').append(el)
        })
    }
}