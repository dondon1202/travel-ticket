const regionSearch = document.querySelector(".regionSearch");

const searchResult_text = document.querySelector("#searchResult-text");

regionSearch.addEventListener("change", function (event) {
  let newData = []; // 在事件處理程序開始時先宣告一個空陣列
  let str = "";

  data.forEach(function (item, index, arr) {
    let content = `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src=${item.imgUrl} alt="">
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
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${item.price}</span>
            </p>
          </div>
        </div>
      </li>`;

    if (item.area == event.target.value) {
      str += content;
      console.log(newData); // 在 if 語句中訪問 newData，此時 newData 為空陣列
      newData.push(item); // 將符合條件的元素添加到 newData 中
    } else if (event.target.value == "") {
      str += content;
      console.log(newData); // 在 if 語句中訪問 newData，此時 newData 為空陣列
      newData.push(item); // 將所有元素添加到 newData 中
    }
  });

  console.log(newData); // 在事件處理程序結束時訪問 newData，此時 newData 中為符合條件的元素
  ul.innerHTML = str;
  searchResult_text.textContent = `本次搜尋共 ${newData.length} 筆資料`;
});
