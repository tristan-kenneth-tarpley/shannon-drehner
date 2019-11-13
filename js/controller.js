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

        const width = $(window).width();
        if (width < 800){
            $(".slider_mobile.bg-3").attr('src', 'images/bg-3-mobile.png')
            $('.slider_mobile.bg-1').attr('src', 'images/bg-1-mobile.png')
        }
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
        'violent_crimes_assault.html', 'drug_charges.html',
        'expunctions.html', 'family_violence.html',
        'juvenile.html', 'sexual_assault.html',
        'victims.html', 'white_collar.html',
        'title9.html', 'dwi.html'
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

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(()=>{
        var lazyloadImages;    
        
        if ("IntersectionObserver" in window) {
            lazyloadImages = document.querySelectorAll(".lazy");
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                    }
                });
            });
        
            lazyloadImages.forEach(function(image) {
                imageObserver.observe(image);
            });
        } else {  
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll(".lazy");
            
            function lazyload () {
            if(lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }    
        
            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if(lazyloadImages.length == 0) { 
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
            }
        
            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
        }
    }, 500)
})