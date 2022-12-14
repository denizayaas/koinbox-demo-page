// progress start

var progressPath = document.querySelector('.progress path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition =
    'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
    'stroke-dashoffset 50ms linear';

var updateProgress = function () {
    const content = $("#infiniteContent>div:last-child")
    var scroll = $(document).scrollTop();
    var height = $(content).height();
    var percent = Math.round(scroll * 100 / height);
    let progress = pathLength - (scroll * pathLength / height);
    const res = progress > 0 ? progress : 306 + (progress % 306);
    console.log(res);
    progressPath.style.strokeDashoffset = res;

}

$(window).scroll(updateProgress);
updateProgress();

// infinite scroll

function initScroll() {
    var t = $("#infiniteContent").offset().top;
    var h = $("#infiniteContent").height();
    var ws = $(window).scrollTop();
    var dh = $(document).height();
    var wh = $(window).height();

    if (dh - (wh + ws) < dh - (h + t)) {
        $(window).off('scroll');
        var p = $("#infiniteContent").attr("data-page");
        if (p) {
            appendTemplate(jsonre);
        }
    }
}

var t = $("#infiniteContent").offset().top;
var h = $("#infiniteContent").height();
var ws = $(window).scrollTop();
var dh = $(document).height();
var wh = $(window).height();


const jsonre = ["deneme1", "deneme2", "deneme3"]

if (dh - (wh + ws) < dh - (h + t)) {
}

$(document).ready(function () {
    appendTemplate(jsonre);
});

function appendTemplate(jsonre, pageNumber) {
    for (var i = 1; i < 2; i++) {
        $("#infiniteContent").append(`<div class="page-content px-1">
      <div class="mt-3 breadcrumb unread-zone">
          <a href="" target="_blank" rel="noopener">
              <i class="fa-solid fa-house house-icon">
              </i>
              <span class="pl-2">Anasayfa</span>
          </a>
          <a href="" class="pl-4" target="_blank" rel="noopener">Analiz</a>
          <span class="pl-4 bread-text breadcrumbSubstr">Ethereum ??vme Kaybediyor: Yeni Bir D???????? Yak??n
              m???</span>
      </div>
      <div class="row gx-4 gy-4">
          <div class="col-xl-8 infinity news-zone">
              <div class="news-detail" data-section="news">
                  <h1 class="news-title">Ethereum ??vme Kaybediyor: Yeni Bir D???????? Yak??n m???</h1>
                  <span class="news-category">Analiz</span>
                  <p class="news-main">Ethereum (ETH) fiyat??n??n ivme kaybetti??i g??r??l??yor. S??z konusu
                      altcoinin fiyat??nda yeni bir d???????? yak??n m???</p>
                  <div class="news-more-info">
                      <div class="row gx-3 gy-3 justify-content-between align-items-center">
                          <div class="col-md-4">
                              <a href=""
                                  style="text-decoration:none" target="_blank" rel="noopener">
                                  <div class="author justify-content-center justify-content-md-start">
                                      <div class="author-detail">
                                          <span class="author-name">Aysel Ba??aran</span>
                                          <span class="news-date">26 A??ustos 2022 09:33</span>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                      <div class="col-md-auto custom-actions">
                          <div class="actions-wrapper justify-content-center justify-content-md-start">
                              <div class="news-statistic">
                                  <span class="read-minute">
                                      <i class="fas fa-stopwatch"></i>
                                      3DK
                                  </span>
                                  <span class="comments-count">
                                      <i class="fas fa-comments"></i>
                                      0
                                  </span>
                                  <span class="badge">
                                      <i class="fas fa-eye"></i>
                                      163
                                  </span>
                              </div>
                              <div class="d-flex">
                                  <div class="news-action google-news ms-0">
                                      <a href=""
                                          target="_blank" rel="noopener nofollow">
                                          <img class="sub-image"
                                              src="https://www.koinbox.net/assets/frontend/resources/images/google-news.svg">
                                          <span style="padding: 0.4rem 0;" class="no-mobile">|</span>
                                          <span class="google-news-text no-mobile"> Abone Ol</span>
                                      </a>
                                  </div>
                                  <div class="flipboard" style="margin-left: 0.6rem;">
                                      <a data-flip-widget="ico"
                                          href=""
                                          target="_blank" rel="noopener nofollow">
                                          <img src="https://cdn.flipboard.com/badges/flipboard_srrw.png"
                                              alt="Flipboard">
                                      </a>
                                  </div>
                                  <div class="news-action">
                                      <i class="font-up fas fa-search-plus"></i>
                                      <i class="font-down fas fa-search-minus"></i>
                                      <i class="favorite far fa-bookmark"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="figure-container big-figure">
                  <figure>
                      <img class="media-image" alt="Ethereum ??vme Kaybediyor: Yeni Bir D???????? Yak??n m???"
                          loading="lazy"
                          srcset="https://www.koinbox.net/storage/58858/responsive-images/ethereum-fiyat-analizi-29-mart-2022___webp_1280_720.webp 1280w, https://www.koinbox.net/storage/58858/responsive-images/ethereum-fiyat-analizi-29-mart-2022___webp_1070_601.webp 1070w, https://www.koinbox.net/storage/58858/responsive-images/ethereum-fiyat-analizi-29-mart-2022___webp_895_503.webp 895w, https://www.koinbox.net/storage/58858/responsive-images/ethereum-fiyat-analizi-29-mart-2022___webp_749_421.webp 749w, https://www.koinbox.net/storage/58858/responsive-images/ethereum-fiyat-analizi-29-mart-2022___webp_627_352.webp 627w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTI4MCA3MjAiPgoJPGltYWdlIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJOaklwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErUnZEdmhhYlc3dFZDa1JEbG03QVY2ZFdvcWNibmhZZWhLdk5SUjFsbmZXTmhyMXRwRmlvZVptQ2wvZXZtOFJXazRPYjJQdHNOUnBZZVNpdHowdjRwL3M5dEI0SUd1dE1ESnMzbGE4dkxNeTU2M0pZMHpqQzgxTG5Qa3E0WHlwblQrNmNWOTZ0VDg4YTFQcHJ4RGF3ZkQvNGZCbGpDM2s0eHVJNXJ3Y1JOMUo4cDlyZ3FNYU5MbnRxZU0rQ05QdjdyeEdtclpZSkUrOHVhNTYvTDdQa1p2UWhLcFU1ejFING4vdERYK3RhQU5FaWsvZEt1d2tIclhMbDJXeHAxUGFEemJHS1ZQa2lmT3M3bVNSbVBVbk5mWkxRK0ZhUHF2OEFhT0FHZ1dBQXdQU3ZsdjhBbDR6NzFmd1VjWDRmUlU4QXpNb0N0dDZnYzF5ei9pSTdxWDhGbmk5K1NibVhKenlhK2p3Mng4ZGpmaU0rVHJYb25rcy8vOWs9Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w"
                          sizes="48vw"
                          src="https://www.koinbox.net/storage/58858/conversions/ethereum-fiyat-analizi-29-mart-2022-webp.webp"
                          width="1280" height="720">
                  </figure>
              </div>
              <div class="toc collapseable">
                  <div class="toc-title collapse-action">
                      <i class="fas fa-list-ol"></i>
                      H??zl?? ????erik
                      <i class="fas fa-chevron-right"></i>
                  </div>
                  <div class="collapse-area collapsed" style="display: none;">
                      <ol>
                          <li class="first last">
                              <a
                                  href="">Ethereum
                                  Fiyat?? 1,550 Dolara D????ebilir
                              </a>
                          </li>
                      </ol>
                  </div>
              </div>
              <div class="text-content">
                  <p>
                      <strong>Ethereum (ETH)</strong>
                      fiyat?? 1,700 dolarl??k diren?? seviyesini k??rmay?? ba??ard??. ETH fiyat?? 1,700 dolar
                      seviyesinin ??st??nde kalamad?? ve ??imdi y??kseli??i s??rd??rebilmek i??in m??cadele ediyor.
                  </p>
                  <ul>
                      <li>Ethereum fiyat?? 1,650 dolar ve 1,700 dolar seviyelerinin ??st??ne yava?? yava??
                          ????kt??.</li>
                      <li>ETH fiyat?? ??imdi 1,655 dolar seviyesinin ve 100 saatlik basit hareketli
                          ortalaman??n ??st??nde i??lem g??r??yor.</li>
                      <li>ETH/USD paritesinin saatlik grafi??inde 1,670 dolar seviyesinin yak??nlar??ndaki
                          destekle birlikte ??nemli bir y??kselen kanal olu??uyor.</li>
                      <li>S??z konusu parite 1,655 dolarl??k destek b??lgesinin ??st??nde kalmas?? halinde
                          y??kselmeye devam edebilir.</li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                      <strong>Ethereum</strong>
                      fiyat?? 1,650 dolarl??k diren?? b??lgesinin ??st??nde yukar?? y??nl?? bir d??zeltme ba??latt??.
                      ETH fiyat?? k??sa vadeli bir pozitif b??lgeye ge??mek i??in 1,660 dolar ve 1,675 dolar
                      seviyelerinin ??zerine ????kt??.
                  </p>
                  <p>
                      fiyat?? 1,650 dolarl??k diren?? b??lgesinin ??st??nde yukar?? y??nl?? bir d??zeltme ba??latt??.
                      ETH fiyat?? k??sa vadeli bir pozitif b??lgeye ge??mek i??in 1,660 dolar ve 1,675 dolar
                      seviyelerinin ??zerine ????kt??.
                  </p>
                  <p>
                      Fakat bo??alar 1,700 dolarl??k diren?? b??lgesinin ??st??nde kalmay?? ba??aramad??.
                      <strong>ETH</strong>
                      fiyat?? ??u anda 1,680 dolar seviyesinin alt??na d??????yor. Di??er yandan, ETH/USD
                      paritesinin saatlik grafi??inde 1,670 dolar seviyesinin yak??nlar??ndaki destekle
                      birlikte ??nemli bir y??kselen kanal olu??uyor.
                  </p>
                  <p>
                      <a class="link-block" href="" target="_blank" rel="noopener">
                      </a>
                  </p>
                  <article class="card md wide-figure left-indicator w-100">
                      <a class="link-block" href="" target="_blank" rel="noopener">
                          <div class="row gx-4 card-content align-items-center">
                              <div class="col-md-8 mb-4">
                                  <span class="card-title">
                                      Ethereum Birle??me Tarihi ve Dakikas?? A????kland??
                                  </span>
                                  <div class="card-info">
                                      <span class="cat">Altcoin</span>
                                      <span class="date">6 g??n ??nce</span>
                                      <span class="author">Osman Kolat</span>
                                  </div>
                                  <p>
                                      Y??llarca s??ren s??k?? ??al????man??n ard??ndan, Ethereum'un hisse kan??t??
                                      (PoS) y??kseltmesi sonunda geldi. Ethereum a????ndaki t??m genel
                                      test
                                      a??lar??n??n ba??ar??l?? bir ??ekilde g??ncellenmesi tamamland??. Bundan
                                      dolay?? 24 A...
                                  </p>
                              </div>
                              <div class="col-md-4">
                                  <div class="figure-container">
                                      <figure>
                                          <img alt="Ethereum Birle??me Tarihi ve Dakikas?? A????kland??"
                                              srcset="https://www.koinbox.net/storage/58829/responsive-images/ethereum2___webp_1280_720.webp 1280w, https://www.koinbox.net/storage/58829/responsive-images/ethereum2___webp_1070_601.webp 1070w, https://www.koinbox.net/storage/58829/responsive-images/ethereum2___webp_895_503.webp 895w, https://www.koinbox.net/storage/58829/responsive-images/ethereum2___webp_749_421.webp 749w, https://www.koinbox.net/storage/58829/responsive-images/ethereum2___webp_627_352.webp 627w, https://www.koinbox.net/storage/58829/responsive-images/ethereum2___webp_524_294.webp 524w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTI4MCA3MjAiPgoJPGltYWdlIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJOaklwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE2TDRVYVdrWGlYem9uRHFEMUZmdDFlYmRLelB4M0NxUHRYSkgwRDRpMXkxOFA2VDlydTVBaUZjWkpyNXptdEt4N002Ym5xajgrUDJ2cjJQVkdrdVlXRFJ2eUNLKy9qSlBCSGxaZkZ4eFRUUGlIVUQrOWI2MStWNDkrOHo5UXBiSDZrZkF1L2Q1RmtEa2tubkpyNy9FcE5INC9ncngxUHBMeG44T2o4US9CYVFlWXlNdk9RYStIcno1YTFqN1REcTlPNThIZnRaK0ZvL0MybExaQnk3UmpCSnI3eWczOVQxUE53eVR4T2g4SzMvK3ViNjErYzQ3NDJmZjB0a2ZwMSt6OTkxZjk2djBIRTdINUZnOWo3ajhMZjhBSXVuL0FISytDeFA4ZEgyV0gvaE0vT2I5dWMvNmJQOEFVMStpMC84QWNrZVRoUDhBZVdmbjVmZjY1dnJYNXJqdmpaK2hVdGtmLzlrPSI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w"
                                              style="border-radius: 20px;" sizes="15vw"
                                              src="https://www.koinbox.net/storage/58829/conversions/ethereum2-webp.webp">
                                      </figure>
                                      <div class="tags">
                                          <span class="tag"
                                              data-url="https://www.koinbox.net/etiket/ethereum">Ethereum
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </article>
                  <a class="link-block" href="" target="_blank" rel="noopener">
                  </a>
                  <p></p>
                  <p>
                      Yukar?? y??nde ilk diren?? seviyesi 1,700 dolar yak??nlar??nda ortaya ????k??yor. ??lk b??y??k
                      diren?? seviyesi 1,720 dolar yak??nlar??nda olu??uyor. Bir sonraki b??y??k diren?? seviyesi
                      ise 1,745 dolar yak??nlar??nda ??ekilleniyor.
                  </p>
                  <p>
                      <img alt="Ethereum ??vme Kaybediyor: Yeni Bir D???????? Yak??n m???" loading="lazy"
                          srcset="https://www.koinbox.net/storage/58857/responsive-images/ethereum10___webp_1280_720.webp 1280w, https://www.koinbox.net/storage/58857/responsive-images/ethereum10___webp_1070_601.webp 1070w, https://www.koinbox.net/storage/58857/responsive-images/ethereum10___webp_895_503.webp 895w, https://www.koinbox.net/storage/58857/responsive-images/ethereum10___webp_749_421.webp 749w, https://www.koinbox.net/storage/58857/responsive-images/ethereum10___webp_627_352.webp 627w, https://www.koinbox.net/storage/58857/responsive-images/ethereum10___webp_524_294.webp 524w, https://www.koinbox.net/storage/58857/responsive-images/ethereum10___webp_439_246.webp 439w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTI4MCA3MjAiPgoJPGltYWdlIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJOaklwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEvUzlHaVRrWW8zQzFocyt0eFFEQTVQcFZxTFkwUVE2cmNUT0NJeUVOS1NzVm95eHFWeE5IYTdrR1c5S3hrMmthVTFGdlVxZVF6bGp6elhUeXJ1UU1oMDBSdVdaZHg5NnNWaS9HV1FBQkFLaHhYY1ZoYmdTeXg0QXFYRkV0ZGlXMUhGUUJZeFFBcWptZ0J4cGdmLy9aIj4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w"
                          sizes="47vw"
                          src="https://www.koinbox.net/storage/58857/conversions/ethereum10-webp.webp">
                  </p>
                  <h2 id="ethereum-fiyati-1-550-dolara-duesebilir">Ethereum Fiyat?? 1,550 Dolara D????ebilir
                  </h2>
                  <p>
                      <strong>Ethereum (ETH)</strong>
                      fiyat?? 1,720 dolarl??k diren?? seviyesinin ??st??ne ????kamamas?? halinde yeni bir d????????
                      ba??latabilir. A??a???? y??nde ilk destek seviyesi 1,670 dolar yak??nlar??nda ortaya
                      ????k??yor.
                  </p>
                  <p>
                      Bir sonraki b??y??k destek seviyesi 1,655 dolar ve 100 saatlik basit hareketli
                      ortalama yak??nlar??nda olu??uyor. ETH fiyat?? buradan a??a???? y??nl?? bir ivme kazanabilir.
                      Bu durumda ETH fiyat?? 1,600 dolar seviyesine do??ru hareket edebilir. Daha fazla
                      kay??p ise ETH fiyat??n??n ilerleyen s??re??te 1,550 dolar seviyesine kadar d????mesine yol
                      a??abilir.&nbsp;
                  </p>
              </div>
              <div class="tags">
                  <a class="tag" href="" target="_blank"
                      rel="noopener">Ethereum
                  </a>
              </div>
              <div class="content-spacer sm"></div>
              <article class="card both-indicator new-worker">
                  Ethereum ??vme Kaybediyor: Yeni Bir D???????? Yak??n m??? i??eri??imizle alakal?? t??m SORULARINIZI
                  a??a????da yer alan yorum alan??ndan bizlere iletebilirsiniz. Alan??nda uzman analistlerimiz
                  ve edit??rlerimiz, sizlerin sorular??n?? cevaplayacakt??r.
              </article>
              <div class="content-spacer sm"></div>
              <div class="comment-box mb-5">
                  <div class="right-menu-border emoji-menu">
                      <span class="title">Haber Hakk??nda Bir ??fade B??rak</span>
                      <ul class="more-menu pt-3">
                          <li data-value="0">
                              <a href="javascript:;">
                                  <img
                                      src="https://www.koinbox.net/assets/frontend/resources/images/icons/bull-market.png">
                              </a>
                              <span>0</span>
                          </li>
                          <li data-value="1">
                              <a href="javascript:;">
                                  <img
                                      src="https://www.koinbox.net/assets/frontend/resources/images/icons/bear-market.png">
                              </a>
                              <span>0</span>
                          </li>
                          <li data-value="2">
                              <a href="javascript:;">
                                  <img
                                      src="https://www.koinbox.net/assets/frontend/resources/images/icons/rocket-launch.png">
                              </a>
                              <span>0</span>
                          </li>
                          <li data-value="3">
                              <a href="javascript:;">
                                  <img
                                      src="https://www.koinbox.net/assets/frontend/resources/images/icons/positive-vote.png">
                              </a>
                              <span>0</span>
                          </li>
                          <li data-value="4">
                              <a href="javascript:;">
                                  <img
                                      src="https://www.koinbox.net/assets/frontend/resources/images/icons/negative-vote.png">
                              </a>
                              <span>0</span>
                          </li>
                          <li data-value="5">
                              <a href="javascript:;">
                                  <img
                                      src="https://www.koinbox.net/assets/frontend/resources/images/icons/hell.png">
                              </a>
                              <span>0</span>
                          </li>
                      </ul>
                  </div>
                  <div class="comments">
                      <span>Yorumlar
                          <span class="count">(0)</span>
                      </span>
                      <form method="post"
                          action="https://www.koinbox.net/ethereum-ivme-kaybediyor-yeni-bir-dusus-yakin-mi/post/comment"
                          class="g-form">
                          <div class="mb-3">
                              <input type="text" class="form-control comment-input" placeholder="Ad??n??z"
                                  required>
                          </div>
                          <div class="mb-3">
                              <input type="email" class="form-control comment-input"
                                  placeholder="E-Posta Adresiniz" required>
                          </div>
                          <div class="writer">
                              <textarea class="editor-textarea" contenteditable="true" name="comment"
                                  cols="30" rows="10" required=""></textarea>
                          </div>
                          <div class="comments-footer">
                              <div class="right">
                                  <button type="reset" class="btn ghost">
                                      <span>??ptal</span>
                                  </button>
                                  <button type="submit" class="btn btn-primary"
                                      style="border-radius: 50px;">
                                      <span>G??nder</span>
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div class="col-xl-4 unread-mobile-zone hide-on-mobile">
              <div class="with-open-menu mt-4 toc-hidden-switch" style="display: block;">
                  <div class="right-menu-border toc-inner">
                      <ul>
                          <li class data-target="table-of-content">
                              <a href="javascript:;">
                                  <i class="fas fa-list-ol"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="list-posts">
                  <span class="aside-title-sec like-h3">Analiz Haberleri</span>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Shiba Inu (SHIB), ??ubat Ay??ndan ??nce O <br>
                          Seviyeye Y??kselebilir</span>
                      <div class="card-info">
                          <span class="cat">Analiz</span>
                          <span class="author">Aysel Ba??aran</span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Stellar (XLM) Fiyat?? Bask?? Alt??nda! O <br>
                          Seviyeye ????kabilecek mi?</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">Aysel Ba??aran </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Shiba Inu (SHIB) Fiyat Analizi: Grafik <br>
                          Patlamaya Yak??n!</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">Hakan ??ks??z </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">ApeCoin Neden Y??kseliyor? ????te APE <br>
                          ????lg??nl??????n??n Perde Arkas??..</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">H??seyin ??zlan </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">22 Ocak Bitcoin Fiyat Tahmini: Dikkat! <br>
                          Fiyat Daha Fazla D????ebilir</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">Osman Kolat </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Bitcoin'in ????k??????: Ay??lar Bu Seviyeyi <br>
                          ??stiyor!</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">H??seyin ??zlan </span>
                      </div>
                  </a>
              </div>
              <div class="content-spacer xs"></div>
              <div class="list-posts">
                  <span class="aside-title-sec like-h3">Son Dakika Haberleri</span>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Ethereum ??vme Kazand??: ETH Fiyat??nda <br>
                          Hedef Ne?</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">Aysel Ba??aran </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Bitcoin Madencilik Zorlu??u Bu Hafta Yeni <br>
                          Bir Zirveye Ula??abilir</span>
                      <div class="card-info">
                          <span class="cat">Bitcoin </span>
                          <span class="author">Aysel Ba??aran </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Bitcoin 20.000 Dolar??n Alt??na D????t??, Daha <br>
                          Fazla Kay??p Olur mu?</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">Osman Kolat </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">2022 Bitcoin ????k??????n?? Bilen Analist <br>
                          Bitcoin'den Bunu Bekliyor</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">Osman Kolat </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Bitcoin Fiyat??nda Bu Durum Yeni Bir <br>
                          D?????????? Tetikleyebilir</span>
                      <div class="card-info">
                          <span class="cat">Analiz </span>
                          <span class="author">Aysel Ba??aran </span>
                      </div>
                  </a>
                  <a class="list-post"
                      href=""
                      target="_blank" rel="noopener">
                      <span class="list-post-title like-h2">Ethereum Birle??me Tarihi ve Dakikas?? <br>
                          A????kland??</span>
                      <div class="card-info">
                          <span class="cat">Altcoin </span>
                          <span class="author">Osman Kolat </span>
                      </div>
                  </a>
              </div>
              <div class="content-spacer xs"></div>
              <div class="content-spacer xs"></div>
              <div class="ps-md-3">
                  <p>
                  <div class="twitter-timeline twitter-timeline-rendered"
                      style="display: flex; max-width: 100%; margin-top: 0px; margin-bottom: 0px;"><iframe
                          id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true"
                          allowfullscreen="true" class=""
                          style="position: static; visibility: visible; width: 317px; height: 510px; display: block; flex-grow: 1;"
                          src="https://syndication.twitter.com/srv/timeline-profile/screen-name/koinboxnet?creatorScreenName=koinboxnet&amp;dnt=true&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=tr&amp;maxHeight=510px&amp;origin=https%3A%2F%2Fwww.koinbox.net%2Fethereum-ivme-kaybediyor-yeni-bir-dusus-yakin-mi&amp;sessionId=d3b3b6ffa2ee172819b4ecc82d9b8353738e9468&amp;showHeader=true&amp;showReplies=false&amp;siteScreenName=koinboxnet&amp;theme=light&amp;transparent=false&amp;widgetsVersion=1bfeb5c3714e8%3A1661975971032"></iframe>
                  </div>
                  &nbsp;
                  <script charset="utf-8" src="https://platform.twitter.com/widgets.js" async=""></script>
                  </p>
              </div>
              <a href="" target="_blank" rel="noopener">
                  <img src="https://www.koinbox.net/storage/47815/conversions/anasayfa-sidebar-banner-2-webp.webp"
                      alt="Koinbox Lounge" class="ad-img img-responsive ps-md-3">
              </a>
              <div class="fixed-area-wrapper toc-fixed">
                  <div id="side-toc" style="display: none;">
                      <div class="toc-collapseable fixed">
                          <div class="toc-title collapse-action">
                              <i class="fas fa-list-ol"></i>
                              H??zl?? ????erik
                              <i class="fas fa-chevron-down collapse-icon"></i>
                          </div>
                          <div class="collapse-area">
                              <ol>
                                  <li class="first last current">
                                      <a href="#ethereum-fiyati-1-550-dolara-duesebilir">Ethereum Fiyat??
                                          1,550 Dolara D????ebilir</a>
                                  </li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
   `);
    }


    if (jsonre.length) {
        $("#infiniteContent").attr("data-page", parseInt(pageNumber) + 1);
        $(window).on("scroll", initScroll);
        var dh = $(document).height(), wh = $(window).height();
        if (wh >= dh) {
            initScroll();
        }
    }
    else {
        $("#infiniteContent").attr("data-page", "");
    }
}

// infitine scroll end

// hamburger icon start

$("#hamburger-opener").click(function () {
    if ($("#menu").hasClass("active")) {
        $("#menu").removeClass("active")
        $("body").removeClass("no-scroll")
    } else {
        $("#menu").addClass("active")
        $("body").addClass("no-scroll")
    }
})

$.fn.swap = function (elem) {
    elem = elem.jquery ? elem : $(elem);
    return this.each(function () {
        $(document.createTextNode('')).insertBefore(this).before(elem.before(this)).remove();
    });
};