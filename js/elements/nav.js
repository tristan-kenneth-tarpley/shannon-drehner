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
                   <a href="index.html" class="logo"><img src="images/logo.jpg" alt=""></a>
                 </div>
                
                 <!-- - - - - - - - - - - - / Mobile Menu - - - - - - - - - - - - - -->
                 
                 <!--main menu-->
                 
                 <div class="menu-holder flex-row flex-justify">
                   
                   <div class="menu-wrap">
                 
                     <div class="nav-item flex-row flex-justify flex-center">
                       
                       <!-- - - - - - - - - - - - - - Navigation - - - - - - - - - - - - - - - - -->
               
                       <nav id="main-navigation" class="main-navigation">
                         <ul id="menu" class="clearfix">
                           <li class="current dropdown"><a href="#">Home</a>
                           <!--sub menu-->
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li class="current"><a href="index.html">Homepage Layout 1</a></li>
                                 <li><a href="home_2.html">Homepage Layout 2</a></li>
                                 <li><a href="home_3.html">Homepage Layout 3</a></li>
                               </ul>
                             </div>
                           </li>
                           <li class="dropdown has-megamenu"><a href="#">Practice Areas</a>
                             <!--sub menu-->
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
                           <li class="dropdown"><a href="#">Attorneys</a>
                             <!--sub menu-->
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li><a href="attorneys_list_v1.html">Attorneys List v1</a></li>
                                 <li><a href="attorneys_list_v2.html">Attorneys List v2</a></li>
                                 <li><a href="attorney_profile_v1.html">Attorney Profile Page v1</a></li>
                                 <li><a href="attorney_profile_v2.html">Attorney Profile Page v2</a></li>
                               </ul>
                             </div>
                           </li>
                           <li class="dropdown"><a href="#">Pages</a>
                             <!--sub menu-->
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li><a href="about.html">About Us</a></li>
                                 <li><a href="testimonials.html">Testimonials</a></li>
                                 <li><a href="case_v1.html">Case Result v1</a></li>
                                 <li><a href="case_v2.html">Case Result v2</a></li>
                                 <li><a href="shortcodes.html">Shortcodes</a></li>
                                 <li><a href="typography.html">Typography</a></li>
                                 <li><a href="404_page.html">404 Page</a></li>
                                 <li><a href="coming_soon.html">Coming Soon Page</a></li>
                               </ul>
                             </div>
                           </li>
                           <li class="dropdown"><a href="#">Blog</a>
                             <!--sub menu-->
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li><a href="blog_classic.html">Classic</a></li>
                                 <li><a href="blog_masonry.html">Masonry</a></li>
                                 <li><a href="blog_single.html">Single Blog Post</a></li>
                               </ul>
                             </div>
                           </li>
                           <li class="dropdown"><a href="#">Contact Us</a>
                             <!--sub menu-->
                             <div class="sub-menu-wrap">
                               <ul>
                                 <li><a href="contact_v1.html">Contact Us v1</a></li>
                                 <li><a href="contact_v2.html">Contact Us v2</a></li>
                               </ul>
                             </div>
                           </li>
                         </ul>
                       </nav>
               
                       <!-- - - - - - - - - - - - - end Navigation - - - - - - - - - - - - - - - -->
               
                       <div class="search-holder">
                       
                         <button type="button" class="search-button"></button>
               
                       </div>
               
                     </div>
                 
                   </div>
       
                 </div>
       
               </div>
       
               <!-- Contact info -->
       
               <ul class="contact-info">
                 <li class="info-item">
                   <i class="licon-telephone"></i>
                   <div class="item-info">
                     <span content="telephone=no">987.654.3210</span>
                   </div>
                 </li>
               </ul>
       
             </div>
             
           </header>`
        return el
   }
}