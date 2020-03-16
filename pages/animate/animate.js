// pages/animate/animate.js

const animateData = {
    'Attention Seekers': ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'],
    'Bouncing Entrances': ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
    'Bouncing Exits': ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp'],
    'Fading Entrances': ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig'],
    'Fading Exits': ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig'],
    'Flippers': ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
    'Lightspeed': ['lightSpeedIn', 'lightSpeedOut'],
    'Rotating Entrances': ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight'],
    'Rotating Exits': ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight'],
    'Sliding Entrances': ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'],
    'Sliding Exits': ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight'],
    'Zoom Entrances': ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'],
    'Zoom Exits': ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'],
    'Specials': ['hinge', 'jackInTheBox', 'rollIn', 'rollOut']
};
Page({
    /**
     * 页面的初始数据
     */
    data: {
        animateType: '',

        columns: [{
            values: Object.keys(animateData),
                className: 'column1'
            },
            {
                values: animateData['Attention Seekers'],
                className: 'column2',
                defaultIndex: 0
            }
        ],

        show:false

    },
    popChange(){
        this.setData({
            show:!this.data.show
        })
    },

    onChange(event) {
        const { picker, value, index } = event.detail;
        picker.setColumnValues(1, animateData[value[0]]);
    },

    selectAnimate(e){
        this.setData({
            animateType: e.detail.value[1],
            animateTypeBtnText:e.detail.value[1]
        })
        this.popChange()
    },

    animateStart(){
        this.setData({
            animateType: this.data.animateTypeBtnText
        })
    },

    animateEnd(){
        this.setData({
            animateType:''
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})