// pages/home/certification/certificationInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  checkCer(envent) {
     var type = envent["target"]["dataset"]["type"]
     console.log(type);
     var filePath = ''
     
     switch (type) {
       case '1':
        filePath = '../pdf/cer1.pdf'
         break;
        case '2':
          filePath = '../pdf/cer2.pdf'
          break;
        case '3':
          filePath = '../pdf/cer3.pdf'
            break;
       default:
         break;
     }
     console.log(filePath);
     wx.openDocument({
       filePath: filePath,
       fileType: 'pdf'
     })
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