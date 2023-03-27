axios
  .get(
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json"
  )
  .then(function (response) {
    // handle success
    console.log(response.data);
    let data = response.data;
    let obj = {};
    //抓取data資料，組好HTML結構跟字串，然後初始化
    function init() {
      const card = document.querySelector(".ticketCard-area");
      let str = "";
      data.forEach(function (item, index) {
        let content = `
  <li class="ticketCard">
  <div class="ticketCard-img">
            <a href="#">
              <img
                src="${item.imgUrl}"
                alt=""
              />
            </a>
            <div class="ticketCard-region">${item.area}</div>
            <div class="ticketCard-rank">${item.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${item.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${item.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <div class="ticketCard-num">
                <p>
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
                </p>
              </div>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${item.price}</span>
              </p>
            </div>
          </div>
        </li>
    </li>`;
        str += content;
      });
      card.innerHTML = str;
    }

    init();

    //新增旅遊套票
    const travelName = document.querySelector("#ticketName");
    const travelImg = document.querySelector("#ticketImgUrl");
    const travelArea = document.querySelector("#ticketRegion");
    const travelPrice = document.querySelector("#ticketPrice");
    const travelGroup = document.querySelector("#ticketNum");
    const travelStar = document.querySelector("#ticketRate");
    const travelDescription = document.querySelector("#ticketDescription");
    const btn = document.querySelector(".addTicket-btn");

    btn.addEventListener("click", function (e) {
      obj.name = travelName.value;
      obj.imgUrl = travelImg.value;
      obj.area = travelArea.value;
      obj.price = travelPrice.value;
      obj.group = travelGroup.value;
      obj.rate = travelStar.value;
      obj.description = travelDescription.value;
      data.push(obj);

      init();

      //清空輸入資料
      //方法一
      //   travelName.value = "";
      //   travelImg.value = "";
      //   travelArea.value = "";
      //   travelPrice.value = "";
      //   travelGroup.value = "";
      //   travelStar.value = "";
      //   travelDescription.value = "";
      //方法二
      const addTicket_form = document.querySelector(".addTicket-form");
      addTicket_form.reset();
    });

    //地區篩選
    const regionSearch = document.querySelector(".regionSearch");
    const searchResult_text = document.querySelector("#searchResult-text");
    regionSearch.addEventListener("change", function (e) {
      let newData = []; // 在事件處理程序開始時先宣告一個空陣列
      let str = "";

      if (e.target.value === undefined) {
        return;
      }

      data.forEach(function (item, index) {
        let content = `<li class="ticketCard">
  <div class="ticketCard-img">
            <a href="#">
              <img
                src="${item.imgUrl}"
                alt=""
              />
            </a>
            <div class="ticketCard-region">${item.area}</div>
            <div class="ticketCard-rank">${item.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${item.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${item.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <div class="ticketCard-num">
                <p>
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
                </p>
              </div>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${item.price}</span>
              </p>
            </div>
          </div>
        </li>
    </li>`;
        if (e.target.value == "") {
          str += content;
          console.log(newData); // 在 if 語句中訪問 newData，此時 newData 為空陣列
          newData.push(item); // 將符合條件的元素添加到 newData 中
        }
        if (e.target.value == item.area) {
          str += content;
          console.log(newData); // 在 if 語句中訪問 newData，此時 newData 為空陣列
          newData.push(item); // 將符合條件的元素添加到 newData 中
        }
      });
      const card = document.querySelector(".ticketCard-area");
      card.innerHTML = str;
      searchResult_text.textContent = `本次搜尋共 ${newData.length} 筆資料`;
    });

    //新增功能 預設地區搜尋的時候，表單新增本次搜尋共 ?? 筆資料 會跟著變動
    btn.addEventListener("click", function (e) {
      if (regionSearch.value === "地區搜尋") {
        searchResult_text.textContent = `本次搜尋共 ${data.length} 筆資料`;
        console.log(data);
      }
    });
  });
