// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tel:"15613699215",
    is_show:false,
    names:['大伟','小波','大剑'],
    imgUrl:''
  },
  events(){
    
    wx.request({
      url: 'https://api.github.com/search/repositories?q=vue',
      data:{
        x:'ab',
        y:'aa'
      },
      header:{
        'content-type':'application/json'
      },
      success(res){
        console.log(res)
      }
    })
  },
  changeImage(){
    var that=this
    wx.chooseImage({
      count: 1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      
      success(res){
        console.log(res)
        const tempFilePaths=res.tempFilePaths
        that.setData({
          imgUrl:tempFilePaths[0]
        })
        var fileName=res.tempFiles[0].path
        console.log(fileName)
        wx.uploadFile({
          url: 'http://localhost/test/index.php',
          filePath:res.tempFiles[0].path,
          name: 'file',   // 文件域
          formData:{name:'大哥电脑好了'},
          success(res){
            console.log(res)
          }
        })
      }
    })
  },
  // 事件处理函数
  bindViewTap() {
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        tel:'18801111635',
        is_show:true
      })
    }, 2000);
  },
  onReady(){
    console.log('页面渲染完成')
  },
  onShow(){
    console.log('页面显示')
  },
  onHide(){
    console.log('页面隐藏')
  },
  onPullDownRefresh(){
    console.log('页面隐藏')
  },
})
