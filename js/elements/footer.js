const Footer = class {
    constructor(){

    }
    build(){
        const el = `<footer id="footer" class="footer style-1">
        <div class="container">
          <div class="flex-row flex-center flex-justify">
            <p class="copyright">Copyright Hicks & Hynson © 2018. All Rights Reserved.</p>
            <ul class="info-links h-type">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Practice Areas</a></li>
              <li><a href="#">Attorneys</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>`
      return el
    }
}