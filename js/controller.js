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
        $('#header_imports').html(head.build())
        $("#top_nav").html(nav.build())
        $("#footer_imports").html(footer.build())
        $("#contact_section").html(contact.build())
    }
}

$(document).ready(()=>{
    const VC = new ViewController('test', 'test', 'test')
    VC.build()
})