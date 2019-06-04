Page({
  data: {
    "bnrUrl": [{
      "url": "images/banner/banner1.jpg"
    }, {
      "url": "images/banner/banner2.jpg"
    }]
  },
  index: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  }
});