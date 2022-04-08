class MyNav extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <nav>
        <div class="logo"><a href="/"><img src="/images/main/cgrlogoword_black.webp" alt="CGR LOGO"></a></div>
        <input type="checkbox" id="click">
        <label for="click" class="menubtn">
            <i class="fas fa-bars"></i>
        </label>
        <ul>
            <li><a class="nav-blog" href="/blog/">BLOG</a></li>
            <li>
                <div class="dropdown">
                    <div class="dropbtn">
                        <input type="checkbox" id="drop-click">
                        <label for="drop-click" class="dropclickbtn">
                            SERVICES<i class="fa fa-caret-down"></i>
                        </label>
                        <div class="dropdown-content">
                            <a href="/services/graphic-designing/">GRAPHIC DESIGN</a>
                            <!--<a href="/services/video-editing/">VIDEO EDITING</a>-->
                        </div>
                    </div>
                    
                </div>
            </li>
            <li><a class="nav-about" href="/about/">ABOUT</a></li>
        </ul>
    </nav>
        `
    }
}
customElements.define('my-nav',MyNav);

class MyMFoot extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <footer>
        <div class="foot-container">
            <div class="nav-footer">
                <div class="foot-sections-1">
                    <div class="cgr">
                        <div class="foot-image">
                            <img src="/images/main/chandu.webp" alt="Chandra Gupta Roy Profile Picture">
                        </div>
                        <h4>Chandra Gupta Roy</h4>
                        <p>Multi-Passionate Gentleman</p>
                    </div>
                </div>
                <div class="foot-sections-2">
                    <div class="about">
                        <h5>About</h5>
                        <ul>
                            <li><a href="">Who am I?:</a></li>
                            <li><a href="/blog/">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div class="foot-sections-3">
                    <div class="my-brands">
                        <h5>Brands</h5>
                        <ul>
                            <li><a href="">Education Valley</a></li>
                            <li><a href="/whyit-updates/">Why it</a></li>
                            <li><a href="">CGR Music</a></li>
                        </ul>
                    </div>
                </div>
                <div class="foot-sections-4">
                    <div class="blogs">
                        <h5>Recommended</h5>
                        <ul>
                            <li><a href="">CGR's -Personal</a></li>
                            <li><a href="/blog/cgr-favourite-quotes/">Favourite Quotes</a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>
                </div>
                <div class="foot-sections-5">
                    <div class="services">
                        <h5>Services</h5>
                        <ul>
                            <li><a href="/services/graphic-designing/">Graphic Designing</a></li>
                            <!--<li><a href="">Video Editing</a></li>-->
                            <li><a href="/services/graphic-designing/youtube-thumbnail/">YouTube Thumbnail</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="footer-divider">
            <div class="foot-bottom">
                <div class="social-buttons">
                    <ul >
                        <li><a href="https://facebook.com/thechandraguptaroy" target="_blank"><i class="fab fa-facebook-f"></i> </a> </li>
                        <li><a href="https://twitter.com/chandraguptaroy" target="_blank"><i class="fab fa-twitter"></i> </a> </li>
                        <li><a href="https://instagram.com/chandraguptaroy/" target="_blank"><i class="fab fa-instagram"></i> </a> </li>
                        <li><a href="https://youtube.com/c/chandraguptaroy" target="_blank"><i class="fab fa-youtube"></i> </a> </li>
                        <li><a href="https://linkedin.com/in/chandraguptaroy" target="_blank"><i class="fab fa-linkedin-in"></i> </a> </li>
                    </ul>
                    <hr class="footer-divider hr-last">
                </div>
                <div class="copyright center-text">© 2022 Chandra Gupta Roy</div>
            </div>
        </div>
    </footer>
        `
    }
}
customElements.define('my-m-footer',MyMFoot);