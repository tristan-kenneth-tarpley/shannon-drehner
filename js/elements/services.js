const Services = class {
    constructor(){}

    service_shell(shade, img, title, width, url){
        // shade = dark, grey, rose, or green
        // width = item-col-2 or item-col

        const el = `
        <div class="${width}">
            <a href="${url}" class="service-item ${shade}">
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
                shade: 'dark',
                img: 'family_violence.jpg',
                title: 'Family Violence',
                width: 'item-col-2',
                url: 'family_violence.html'
            },
            {
                shade: 'grey',
                img: 'white_collar.jpg',
                title: 'White Collar',
                width: 'item-col',
                url: 'white_collar.html'
            },
            {
                shade: 'dark',
                img: 'drugs.jpg',
                title: 'Drug Charges',
                width: 'item-col',
                url: 'drug_charges.html'
            },
            {
                shade: 'rose',
                img: 'violent_crime.jpg',
                title: 'Assault & Violent Crimes',
                width: 'item-col-2',
                url: 'assault.html'
            },
            {
                shade: 'grey',
                img: 'sexual-assault.jpg',
                title: 'Sexual Assault',
                width: 'item-col-2',
                url: 'sexual_assault.html'
            },
            {
                shade: 'dark',
                img: 'juvenile.jpg',
                title: 'Juvenile Crimes',
                width: 'item-col',
                url: 'juvenile.html'
            },
            {
                shade: 'rose',
                img: 'disclosure.jpg',
                title: 'Expunctions/petitions for Non-Disclosure',
                width: 'item-col-2',
                url: 'expunctions.html'
            }, // 640x308 // 2560x1232 // 3840x1848 // 4480x2156
            {
                shade: 'grey',
                img: 'victim.jpg',
                title: 'Victim of crime',
                width: 'item-col',
                url: 'victims.html'
            }

        ]
        return struct
    }

    build(){
        const struct = this.services()
        struct.forEach(item=>{
            const el = this.service_shell(item.shade, item.img, item.title, item.width, item.url)
            $('#service_list').append(el)
        })
    }

    render_page(page_name){
        $("#body_copy").html(this.shell())
        $(".area_title").text(area_of_practice_copy[page_name].title)
        $('#area_copy').html(area_of_practice_copy[page_name].copy)
    }
    
    shell(){
        const el = `
        <div id="content" class="page-content-wrap2">
      
        <div class="container">
          
          <div class="row">
            
            <main id="main" class="col-md-8 col-sm-12">
              
              <div class="content-element2">
                
                <div class="content-element3">
                
                  <img src="images/750x420_img1.jpg" alt="">
  
                </div>
  
                <h5 class="area_title sub-title" style="font-weight:bold;"></h5>
                <div id="area_copy"></div>
              </div>
  
              
            </main>
            <div id="area_sidebar"></div>
  
          </div>
  
        </div>
  
      </div>
        `
        return el
    }
}