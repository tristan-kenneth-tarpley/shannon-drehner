const Contact = class {
    constructor(){
        this.address = biz_info.address
        this.phone = biz_info.phone
    }
    build(){
        const el = `      
        <div class="page-section-bg2">
            <div class="container extra">
                <div class="row">
                    <div class="col-md-7 col-sm-12">
                    <div class="content-element5">
                        <h2 class="section-title">Request a Free Consultation<span class="item-divider-3 style-3"></span></h2>
                        <p>Get your free case review within 24 hours. All Fields Required.</p>
                    </div>
                    <form id="contact-form" class="contact-form">
                        <div class="flex-row">
                        <div class="col-sm-4">
                            <input type="text" name="cf-name" placeholder="Name *" required>
                        </div>
                        <div class="col-sm-4">
                            <input type="tel" name="cf-phone" placeholder="Phone *" required>
                        </div>
                        <div class="col-sm-4">
                            <input type="email" name="cf-email" placeholder="Email *" required>
                        </div>
                        <div class="col-sm-12">
                            <textarea rows="3" name="cf-message" placeholder="Message *" required></textarea>
                        </div>
                        <div class="col-sm-12">
                            <button type="submit" class="btn btn-style-2" data-type="submit">Submit</button>
                        </div>
                        </div>
                    </form>
                    </div>
                    <div class="col-md-5 col-sm-12">
                    
                    <div class="push-left-30">
                        <h2 class="section-title">Contact Us<span class="item-divider-3 style-3"></span></h2>
                        
                        <div class="content-element5">
                        <div class="our-info">
                            <p><i class="licon-map-marker"></i>${this.address}</p>
                            <p content="telephone=no"><i class="licon-telephone"></i>${this.phone}</p>
                        </div>                  
                        
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>`
        return el
    }
}