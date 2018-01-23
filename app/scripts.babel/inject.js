(function() {
  function del(mid) {
    return fetch("https://weibo.com/aj/fav/mblog/del?ajwvr=6", {
      credentials: "include",
      method: "POST",
      headers: {
        origin: "https://weibo.com",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "x-requested-with": "XMLHttpRequest",
        connection: "keep-alive",
        "save-data": "on",
        pragma: "no-cache",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.59 Safari/537.36",
        "content-type": "application/x-www-form-urlencoded",
        accept: "*/*",
        "cache-control": "no-cache",
        referer: "https://weibo.com/fav?page=109",
        dnt: "1"
      },
      body: `mid=${mid}&location=v6_fav`
    }).then(resp => {
      console.log(resp);
    });
  }

  function findAll() {
    var elements = document.querySelectorAll(".delfav");
    for (const el of elements) {
      let mid = el.closest(".WB_empty").getAttribute("mid");
      console.log(mid);
      del(mid);
    }
    return elements;
  }

  findAll();
})();
