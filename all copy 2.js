let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

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
