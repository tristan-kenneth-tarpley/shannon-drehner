const Services = class {
    constructor(){}

    shell(shade, img, title, width){
        // shade = dark, grey, rose, or green
        // width = item-col-2 or item-col

        const el = `<div class="${width}">
            <a href="#" class="service-item ${shade}">
            <figure>
                <img src="images/${img}" alt="">
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
                img: 'sexual-assault.jpg',
                title: 'Sexual Assault',
                width: 'item-col-2'
            },
            {
                shade: 'dark',
                img: 'family_violence.jpg',
                title: 'Family Violence',
                width: 'item-col-2'
            },
            {
                shade: 'grey',
                img: 'white_collar.jpg',
                title: 'White Collar',
                width: 'item-col'
            },
            {
                shade: 'dark',
                img: 'drugs.jpg',
                title: 'Drug Charges',
                width: 'item-col'
            },
            {
                shade: 'rose',
                img: 'violent_crime.jpg',
                title: 'Assault & Violent Crimes',
                width: 'item-col-2'
            },
            {
                shade: 'dark',
                img: 'juvenile.jpg',
                title: 'Juvenile Crimes',
                width: 'item-col'
            },
            {
                shade: 'rose',
                img: 'disclosure.jpg',
                title: 'Expunctions/petitions for Non-Disclosure',
                width: 'item-col-2'
            }, // 640x308 // 2560x1232 // 3840x1848 // 4480x2156
            {
                shade: 'grey',
                img: 'victim.jpg',
                title: 'Victim of crime',
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