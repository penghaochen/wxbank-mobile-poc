export default [
  // user login
  {
    url: '/wx/home/index',
    type: 'get',
    response: () => {
      return {
        'errno': 0,
        'data': {
          'newGoodsList': [{
            'id': 1181058,
            'name': '33213',
            'brief': '32323',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/qndo2rb44mnr04esubxb.png',
            'isNew': true,
            'isHot': false,
            'counterPrice': 3123.00,
            'retailPrice': 0.00
          }, {
            'id': 1181050,
            'name': '大米',
            'brief': '123',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/v6sj54vlmu01o9fu7akr.jpeg',
            'isNew': true,
            'isHot': true,
            'counterPrice': 12.35,
            'retailPrice': 0.00
          }, {
            'id': 1181050,
            'name': '大米',
            'brief': '123',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/v6sj54vlmu01o9fu7akr.jpeg',
            'isNew': true,
            'isHot': true,
            'counterPrice': 12.35,
            'retailPrice': 0.00
          }],
          'couponList': [{
            'id': 1181050,
            'discount': 100,
            'desc': '活期理财优惠券',
            'tag': '理财',
            'name': '优惠券',
            'days': '1'

          }],
          'channel': [{
            'id': 1036049,
            'name': '账户管理',
            'iconUrl': ''
          }, {
            'id': 1036050,
            'name': '我的理财',
            'iconUrl': ''
          }, {
            'id': 1036050,
            'name': '我的理财',
            'iconUrl': ''
          }, {
            'id': 1036050,
            'name': '我的理财',
            'iconUrl': ''
          }, {
            'id': 1036050,
            'name': '我的理财',
            'iconUrl': ''
          }, {
            'id': 1036050,
            'name': '我的理财',
            'iconUrl': ''
          }, {
            'id': 1036054,
            'name': '我的基金',
            'iconUrl': ''
          }],
          'grouponList': [],
          'banner': [{
            'id': 13,
            'name': '测试',
            'link': '',
            'url': 'user_head_bg.png',
            'position': 1,
            'content': '测试',
            'enabled': true,
            'addTime': '2020-03-20 12:59:32',
            'updateTime': '2020-03-20 12:59:32',
            'deleted': false
          }, {
            'id': 15,
            'name': '哈哈哈',
            'link': '',
            'url': 'http://122.51.199.160:8080/wx/storage/fetch/0514l6796zrdmjpd9jt8.png',
            'position': 1,
            'content': '哈哈哈哈',
            'enabled': true,
            'addTime': '2020-03-22 10:39:13',
            'updateTime': '2020-03-23 03:35:13',
            'deleted': false
          }],
          'brandList': [{
            'id': 1046014,
            'name': '派迪威',
            'desc': '派迪威',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/pzrpbz6jc5p68ezu3er5.jpg',
            'floorPrice': 1.00
          }, {
            'id': 1046014,
            'name': '派迪威',
            'desc': '派迪威',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/pzrpbz6jc5p68ezu3er5.jpg',
            'floorPrice': 1.00
          }, {
            'id': 1046014,
            'name': '派迪威',
            'desc': '派迪威',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/pzrpbz6jc5p68ezu3er5.jpg',
            'floorPrice': 1.00
          }, {
            'id': 1046014,
            'name': '派迪威',
            'desc': '派迪威',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/pzrpbz6jc5p68ezu3er5.jpg',
            'floorPrice': 1.00
          }],
          'hotGoodsList': [{
            'id': 1181050,
            'name': '理财1',
            'brief': '华夏银行旗下的XXXX理财',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/v6sj54vlmu01o9fu7akr.jpeg',
            'isNew': true,
            'isHot': true,
            'counterPrice': '3.25%',
            'retailPrice': '3.75%'
          }, {
            'id': 1181050,
            'name': '理财2',
            'brief': '华夏银行旗下的XXXX理财',
            'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/v6sj54vlmu01o9fu7akr.jpeg',
            'isNew': true,
            'isHot': true,
            'counterPrice': '3.00%',
            'retailPrice': '3.25%'
          }],
          'topicList': [{
            'id': 268,
            'title': '2020年最佳理财产品',
            'subtitle': 'XXXXXX荣获此奖',
            'price': 0.00,
            'readCount': '33.3k',
            'picUrl': 'https://yanxuan.nosdn.127.net/14920623353130483.jpg'
          }, {
            'id': 271,
            'title': '2020年最佳理财产品',
            'subtitle': 'XXXXXX荣获此奖',
            'price': 15.00,
            'readCount': '57.7k',
            'picUrl': 'https://yanxuan.nosdn.127.net/14924199099661697.jpg'
          }, {
            'id': 272,
            'title': '2020年最佳理财产品',
            'subtitle': 'XXXXXX荣获此奖',
            'price': 69.00,
            'readCount': '125.6k',
            'picUrl': 'https://yanxuan.nosdn.127.net/14925200530030186.jpg'
          }, {
            'id': 274,
            'title': '2020年最佳理财产品',
            'subtitle': 'XXXXXX荣获此奖',
            'price': 0.00,
            'readCount': '46.4k',
            'picUrl': 'https://yanxuan.nosdn.127.net/14925822213780237.jpg'
          }],
          'floorGoodsList': [{
            'name': '中空旋转平台系列',
            'goodsList': [],
            'id': 1036049
          }, {
            'name': '高精度电动平台系列',
            'goodsList': [{
              'id': 1181058,
              'name': '33213',
              'brief': '32323',
              'picUrl': 'http://122.51.199.160:8080/wx/storage/fetch/qndo2rb44mnr04esubxb.png',
              'isNew': true,
              'isHot': false,
              'counterPrice': 3123.00,
              'retailPrice': 0.00
            }],
            'id': 1036050
          }, {
            'name': '加密',
            'goodsList': [],
            'id': 1036054
          }]
        },
        'errmsg': '成功'
      }
    }
  }

]
