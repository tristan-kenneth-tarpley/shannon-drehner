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
                        <a href="https://www.google.com/maps/dir//2032+S+Elliott+Ave,+Aurora,+MO+65605/@36.9487043,-93.7878472,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x87cf4b1a194c90e1:0xba30bfe0c0a857c!2m2!1d-93.7178072!2d36.9487249" class="info-btn">Get Directions</a>
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