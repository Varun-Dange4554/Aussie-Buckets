export const NavCom = (logo1,logo2) => {
  return `
       <section class="header">
        <div class="nav1">
        <div class="topbar">
            <div class="left">
                <div>Head Office:607 Bourke Street, Melbourne VIC 3000</div>
                <div>  | </div>
                <div>Warehouse:4/181 Proximity Drive, Sunshine West, VIC 3020</div>
            </div>
            <div class="right">
                <div>Phone:(03) 9917 8598</div>
                <div>|</div>
                <div>Hours:Mon-Fri, 7:30am-6pm</div>
            </div>
        </div>
        </div>
        <hr>

        <!-- main navbar -->
            <div class="nav2">
        <div class="navbar">
            <div class="nav_img1">
            <img src="${logo1}"  alt="Aussie Buckets logo">
            </div>
            <div class="anchor">
            <a href="#" class="Attachments" >Attachments </a>
            <a href="#">Wear Parts</a>
            <a href="#">Our Company</a>
            <a href="#">Mining</a>
            <a href="#">Finance</a>
            <a href="#">Contact</a>
            </div>
            <div class="Quick_box">
                <button>Quick Quote </button>
            <div class="nav_img2">
                <img src="${logo2}" alt="">
            </div>
            </div>
        </div>
        </div>
        
        <hr>
    </section>

  `}