class Hiremern extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <div id="hire-btn">
            <h1>Let's Work Together!</h1>
            <p style="text-align: center;">Text me, I'll reply asap!</p>
            <br>
        <div class="hire-btn-2-social-main">
            <div class="hire-btn-2-social-instagram">
                <p>Instagram</p>
                <a href="https://instagram.com/chandraguptaroy/"  target="_blank" ><i class="fab fa-instagram"></i></a>
            </div>
            <div class="hire-btn-2-social-facebook">
                <p>Facebook</p>
                <a href="https://facebook.com/thechandraguptaroy"  target="_blank" ><i class="fab fa-facebook"></i></a>
            </div>
            <div class="hire-btn-2-social-twitter">
                <p>Twitter</p>
                <a href="https://twitter.com/chandraguptaroy"  target="_blank" ><i class="fab fa-twitter"></i></a>
            </div>
        </div>
        <br>
        <hr class="hr-divider">
        <p>Email<i class="fa-solid fa-mailbox"></i>: cgr@thecgr.com</p><br>
        <p>(Check spam/promotional for replies or mail thecgroy@gmail.com ...)</p>
        <a id="hire-btn-cross" onclick="hiremepopupToggle();"><i class="fas fa-times"></i></a>
    </div>
    `
    }
}
customElements.define('hire-me',Hiremern);