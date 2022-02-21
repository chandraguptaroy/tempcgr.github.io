class Subs2Blog extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <div id="sub-blog">
        <form>
            <h1>Let's Connect!</h1>
            <p style="text-align: center;">Join my mail-list<br>or connect on Social<br>(I'll keep you posted...)</p>
            <br>
            <div class="sub-blog-2-email">
                <div class="div name">
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Enter Name" name="name" >
                </div>
                <br>
                <div class="div email">
                    <label for="email">Email:</label>
                    <input type="email" placeholder="Enter Email" name="email" >
                </div>
            </div>
        </form>
        <br>
        <hr class="hr-divider">
        <div class="sub-blog-2-social-main">
            <div class="sub-blog-2-social-instagram">
                <p>Instagram</p>
                <a href="https://instagram.com/chandraguptaroy/"  target="_blank" ><i class="fab fa-instagram"></i></a>
            </div>
            <div class="sub-blog-2-social-facebook">
                <p>Facebook</p>
                <a href="https://facebook.com/thechandraguptaroy"  target="_blank" ><i class="fab fa-facebook"></i></a>
            </div>
            <div class="sub-blog-2-social-twitter">
                <p>Twitter</p>
                <a href="https://twitter.com/chandraguptaroy"  target="_blank" ><i class="fab fa-twitter"></i></a>
            </div>
        </div>
        <a id="sub-blog-cross" onclick="subblogpopupToggle();"><i class="fas fa-times"></i></a>
    </div>
    `
    }
}
customElements.define('sub2-blog',Subs2Blog);