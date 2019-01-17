var SideAd = (function() {
    var d = document;
    var banner;
    var bannerSideImg;
    var bannerExOverlay;
    var bannerExContainer;
    var bannerExImg;
    var bannerCloseImg;
    var bannerCloseImg2;
    
    var createBanner = function() {
        //Elements creation
        banner = d.createElement("div");
        banner.className = "side-banner";
        bannerSideImg = d.createElement("img");
        bannerSideImg.className = "sb-side-img";
        bannerSideImg.setAttribute('src', './src/assets/img/side-banner.jpg');
        banner.appendChild(bannerSideImg);
        bannerExOverlay = d.createElement("div");
        bannerExOverlay.className = "side-banner-ex-overlay";
        bannerExContainer = d.createElement("div");
        bannerExContainer.className = "sb-ex-img-container";
        banner.appendChild(bannerExContainer);
        bannerCloseImg2 = d.createElement("img");
        bannerCloseImg2.className = "sb-ex-close2";
        bannerExContainer.appendChild(bannerCloseImg2);
        bannerCloseImg2.setAttribute('src', './src/assets/img/close2.png');
        bannerExImg = d.createElement("img");
        bannerExImg.className = "sb-ex-img";
        bannerExImg.setAttribute('src', './src/assets/img/pop.gif');
        bannerExContainer.appendChild(bannerExImg);
        bannerCloseImg = d.createElement("img");
        bannerCloseImg.className = "sb-ex-close";
        bannerExContainer.appendChild(bannerCloseImg);
        bannerCloseImg.setAttribute('src', './src/assets/img/close.png');
        //events
        bannerSideImg.onmouseover = expandAd;
        bannerExImg.onclick = openAdPage;
        bannerCloseImg.onclick = hideAd;
        bannerCloseImg2.onclick = hideAd;
        //add component and style
        var css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("href", "./src/assets/css/style.css");
        d.getElementsByTagName("head")[0].appendChild(css);
    };

    var expandAd = function(e){
        banner.classList.add("sb-expanded");
        banner.classList.remove("sb-hidden");
        bannerExOverlay.classList.add("sb-expanded");
        banner.classList.remove("sb-hidden");
    };

    var hideAd = function(e){
        banner.classList.remove("sb-expanded");
        banner.classList.add("sb-hidden");
        bannerExOverlay.classList.remove("sb-expanded");
        banner.classList.add("sb-hidden");
    };

    var openAdPage = function(e){
        window.open("https://www.google.com/", "_blank");
        hideAd();
    };

    window.onload = createBanner();

    return {
      init: function(){
        var b = document.querySelector('body');
        b.appendChild(banner);
        b.appendChild(bannerExOverlay);
      }
    };
})();