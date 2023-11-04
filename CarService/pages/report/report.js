// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0,
    array: ['PDF'],
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  getReport: function() {
    wx.showLoading({
      title: '努力获取中',
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
           title: '获取成功', //提示的内容
           duration: 2000, //持续的时间
           icon: 'success', //图标有success、error、loading、none四种
           mask: true //显示透明蒙层 防止触摸穿透
        })
    }, 2000)
  },
  getAbnormal: function() {
    wx.showLoading({
      title: '努力获取中',
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
           title: '暂无异常', //提示的内容
           duration: 2000, //持续的时间
           icon: 'success', //图标有success、error、loading、none四种
           mask: true //显示透明蒙层 防止触摸穿透
        })
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})