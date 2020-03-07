export default {
    template: `
    <body>
  <main id="app">

        <header class="col-sm-12 fixed-top">
          <img src="../images/logo.svg" class="logo" alt="Roku logo" width="100">
          <nav class="nav">
            <ul>
              <li><a href="#">MOVIES</a></li>
              <li><a href="#">TV SHOWS</a></li>
              <li><a href="#">AUDIO</a></li>
            </ul>
          </nav>
          <img src="../images/plus-sign.svg" class="plus" alt="plus sign" width="20">
        </header>

        <div id="section1">
          <h2>CONTINUE WATCHING</h2>
          <div id="section1boxs">
            <div class="box">
              <img src="../images/2.jpg" class="im" alt="">
            </div>
            <div class="box">
              <img src="../images/3.jpg" class="im" alt="">
            </div>
            <div class="box">
              <img src="../images/1.jpg" class="im" alt="">
            </div>
          </div>
        </div>

        <div id="section2">
          <h2>BROWSE BY CATEGORY</h2>
          <div id="section2boxs">
            <div class="box2 b1"><p>50</p></div>
            <div class="box2 b2"><p>60</p></div>
            <div class="box2 b3"><p>70</p></div>
            <div class="box2 b4"><p>80</p></div>
            <div class="boxDesktop b5"><p>90</p></div>
            <div class="boxMobile b5"><p>90</p></div>
          </div>
        </div>

  </main>

  <footer>
    <div id="footerNav">
      <img src="../images/home-run.svg" class="footerSvg" alt="">
      <img src="../images/search.svg" class="footerSvg" alt="">
      <img src="../images/male.svg" class="footerSvg" alt="">
      <img src="../images/settings.svg" class="footerSvg" alt="">
    </div>
    <p class="copy">
      &copy; 2020 Adam & Lucas
    </p>
  </footer>

  <script type="module" src="js/main.js"></script>
</body>
    `,


created: function() {
  console.log("Home Page Rendered");
  }

}