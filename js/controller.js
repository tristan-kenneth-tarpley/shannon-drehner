const ViewController = class {
    controller(title, keywords, description){
        this.title = title
        this.keywords = keywords
        this.description = description
    }

    build(){
        const head = new Header(this.title, this.keywords, this.description)
        const nav = new Nav()
        const footer = new Footer()
        const contact = new Contact()
        const services = new Services()
        contact.build()
        $('#header_imports').html(head.build())
        $("#top_nav").html(nav.build())
        $("#footer_imports").html(footer.build())
        $("#contact_section").html(contact.build())
        services.build()
    }
}

$(document).ready(()=>{
    const VC = new ViewController('test', 'test', 'test')
    VC.build()

    const pathname = window.location.pathname
    const sub_nav = new Nav()
    if (pathname.includes('shannon.html')){
        $("#sub_header").html(sub_nav.sub_header())
    }


    const destinations = [
        'assault.html', 'drug_charges.html',
        'expunctions.html', 'family_violence.html',
        'juvenile.html', 'sexual_assault.html',
        'victims.html', 'white_collar.html'
    ]
    let sub_length = destinations.length;

    while(sub_length--) {
        if (window.location.pathname.indexOf(destinations[sub_length])!=-1) {
            const service_controller = new Services()
            service_controller.render_page(destinations[sub_length])
            $("#area_sidebar").html(sub_nav.area_sidebar())
            $("#sub_header").html(sub_nav.sub_header())
            
        }
    }
})
