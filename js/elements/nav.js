const Nav = class {
   constructor(){

   } 
   build(){
       const el = `
       <header id="header" class="header fixed-header sticky-header">
             <!-- searchform -->
             <div class="searchform-wrap">
               <div class="vc-child h-inherit">
                 <form>
                   <button type="submit" class="search-button"></button>
                   <div class="wrapper">
                     <input type="text" name="search" placeholder="Start typing...">
                   </div>
                 </form>
                 <button class="close-search-form"></button>
               </div>
             </div>
       
             <div class="flex-row flex-center flex-justify">
               <div class="top-header flex-row flex-center">
                 <!-- logo -->
                 <div class="logo-wrap">
                   <a href="index.html" class="logo"><img class="logo" src="images/logo.jpg" alt=""></a>
                 </div>
                
                 <!-- - - - - - - - - - - - / Mobile Menu - - - - - - - - - - - - - -->
                 
                 <!--main menu-->
                 
                 <div class="menu-holder flex-row flex-justify">
                   
                   <div class="menu-wrap">
                 
                     <div class="nav-item flex-row flex-justify flex-center">
                       
                       <!-- - - - - - - - - - - - - - Navigation - - - - - - - - - - - - - - - - -->
               
                       <!-- <nav id="main-navigation" class="main-navigation">
                         <ul id="menu" class="clearfix">
                           <li class="current dropdown"><a class="white-link" href="index.html">Home</a>
                      
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li class="current"><a href="index.html">Homepage Layout 1</a></li>
                                 <li><a href="home_2.html">Homepage Layout 2</a></li>
                                 <li><a href="home_3.html">Homepage Layout 3</a></li>
                               </ul>
                             </div>
                           </li>
                           <li class="dropdown has-megamenu"><a class="white-link" href="#">Practice Areas</a>
          
                             <div class="sub-menu-wrap mega-menu flex-row">
                               <ul>
                                 <li><a href="practice_area_v1.html">Practice Areas Overview v1</a></li>
                                 <li><a href="practice_area_v2.html">Practice Areas Overview v2</a></li>
                                 <li><a href="practice_area_v3.html">Practice Areas Overview v3</a></li>
                                 <li><a href="practice_single.html">Single Service Page</a></li>
                               </ul>
                               <ul>
                                 <li><a href="practice_area_v1.html">Personal Injury</a></li>
                                 <li><a href="practice_area_v2.html">Estate Planning</a></li>
                                 <li><a href="practice_area_v3.html">Maritime & Offshore Injury</a></li>
                                 <li><a href="practice_single.html">Insurance Claims</a></li>
                               </ul>
                               <ul>
                                 <li><a href="practice_area_v1.html">Business & Real Estate</a></li>
                                 <li><a href="practice_area_v2.html">Medical/Pharmaceutical Injury</a></li>
                                 <li><a href="practice_area_v3.html">Elder Law</a></li>
                                 <li><a href="practice_single.html">Criminal Defense</a></li>
                               </ul>
                             </div>
                           </li>
                           <li class="dropdown"><a class="white-link" href="#">Blog</a>
                
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li><a href="blog_classic.html">Classic</a></li>
                                 <li><a href="blog_masonry.html">Masonry</a></li>
                                 <li><a href="blog_single.html">Single Blog Post</a></li>
                               </ul>
                             </div>
                           </li>
                           <li class="dropdown"><a class="white-link" href="#">Contact Us</a>
                    
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li><a href="contact_v1.html">Contact Us v1</a></li>
                                 <li><a href="contact_v2.html">Contact Us v2</a></li>
                               </ul>
                             </div>
                           </li>
                         </ul>
                       </nav> -->
               
                       <!-- - - - - - - - - - - - - end Navigation - - - - - - - - - - - - - - - -->
               
      
               
                     </div>
                 
                   </div>
       
                 </div>
       
               </div>
       
               <!-- Contact info -->
       
               <ul class="contact-info">
                 <li class="info-item">
                   <i class="licon-telephone"></i>
                   <div class="item-info">
                     <span class="phone" content="telephone=no">987.654.3210</span>
                   </div>
                 </li>
               </ul>
       
             </div>
             
           </header>`
        return el
   }
   sub_header(){
     const el = `
     <div class="loader"></div>
   
     <!--cookie-->
     <!-- <div class="cookie">
             <div class="container">
               <div class="clearfix">
                 <span>Please note this website requires cookies in order to function correctly, they do not store any specific information about you personally.</span>
                 <div class="f-right"><a href="#" class="button button-type-3 button-orange">Accept Cookies</a><a href="#" class="button button-type-3 button-grey-light">Read More</a></div>
               </div>
             </div>
           </div>-->
   
     <!-- - - - - - - - - - - - - - Wrapper - - - - - - - - - - - - - - - - -->
   
     <div id="wrapper" class="wrapper-container">
   
       <!-- Chat button -->
   <!-- 
       <a href="#" class="chat-btn"><i class="licon-bubbles"></i>Live Chat</a> -->
   
       <!-- - - - - - - - - - - - - Mobile Menu - - - - - - - - - - - - - - -->
   
       <nav id="mobile-advanced" class="mobile-advanced"></nav>
   
       <!-- - - - - - - - - - - - - - Header - - - - - - - - - - - - - - - - -->
   
       <header id="header" class="header style-2 sticky-header">
   
         <!-- - - - - - - - - - - - / Mobile Menu - - - - - - - - - - - - - -->
             
         <!--div menu-->
         
         <div class="menu-holder">
           
           <div class="container">
             
             <div class="menu-wrap">
         
               <div class="nav-item">
                 <a style="color: white;" href="index.html">Home | </a>
                 &nbsp;<a style="color: white;" href="shannon.html">About Shannon</a>
   
   
                 
                 <!-- - - - - - - - - - - - - - Navigation - - - - - - - - - - - - - - - - -->
         
       
         
                 <!-- - - - - - - - - - - - - end Navigation - - - - - - - - - - - - - - - -->
         
               </div>
           
             </div>
   
           </div>
   
         </div>
         
         <div class="top-header">
             
           <div class="container">
             
             <div class="flex-row flex-center flex-justify">
   
               <div class="col">
                 <!-- Contact info -->
                 <ul class="contact-info style-2">
                   <li class="info-item">
                     <div class="pre">call Us Today</div>
                     <div class="item-info">
                       <span class="phone" style="color: #003b6d;">${biz_info.phone}</span>
                     </div>
                   </li>
                 </ul>
               </div>
               
               <div class="col">
                 <!-- logo -->
                 <div class="logo-wrap">
                 
                   <a href="index.html" class="logo"><img src="images/logo.jpg" alt=""></a>
                 
                 </div>
               </div>
               
               <div class="col">
                 <a href="index.html#contact" class="btn btn-big btn-style-5">Free Consultation</a>
               </div>
   
             </div>
   
           </div>
           
         </div>
   
       </header>`
       return el
   }

   area_sidebar(){
      const el = `<aside id="sidebar" class="sidebar col-md-4 col-sm-12">
            
      <!-- Widget -->
      <div class="widget with-bg">
        
        <h5 class="widget-title">Practice Areas</h5>

        <ul class="toggle-list">
          <li><a class="dark_link" href="assault.html">Violent Crimes & Assault</a></li>
          <li><a class="dark_link" href="drug_charges.html">Drug Charges</a></li>
          <li><a class="dark_link" href="expunctions.html">Expunctions & Petitions for Non-Disclosure</a></li>
          <li><a class="dark_link" href="family_violence.html">Family Violence</a></li>
          <li><a class="dark_link" href="juvenile.html">Juvenile Crimes</a></li>
          <li><a class="dark_link" href="sexual_assault.html">Sexual Assault</a></li>
          <li><a class="dark_link" href="victims.html">Victims of Crime</a></li>
          <li><a class="dark_link" href="white_collar.html">White Collar</a></li>
        </ul>

      </div>
      <a class="btn btn-big btn-style-5" href="index.html#contact">Contact Us</a>
      
      <!-- Widget -->
      <!-- <div class="widget with-bg2">
        
        <h5 class="widget-title">Contact Us Today</h5>
        <p class="text-size-small">Get your free case review within 24 hours.
        All Fields Required.</p>

        <form id="contact-form" class="contact-form">
          
          <div class="flex-row">
            
            <div class="col-sm-12">
              
              <input type="text" name="cf-name" placeholder="Name *" required>

            </div>
            <div class="col-sm-12">
              
              <input type="tel" name="cf-phone" placeholder="Phone *" required>

            </div>
            <div class="col-sm-12">
              
              <input type="email" name="cf-email" placeholder="Email *" required>

            </div>
            <div class="col-sm-12">
              
              <textarea rows="3" name="cf-message" placeholder="Message *" required></textarea>

            </div>

            <div class="col-sm-12">
              
              <button type="submit" class="btn btn-style-2" data-type="submit">Submit</button>

            </div>

          </div>

        </form>-->

      </div>

    </aside>`
    return el
   }
}