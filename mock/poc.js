export default [
  // user login
  {
    url: '/wcb/auth',
    type: 'post',
    response: () => {
      return { 'returnCode': '000000', 'message': '成功', data: { 'AvailBalList': [{ 'CardNo': '622600012330' }] }}
    }
  },
  {
    url: '/wcb/myaccount',
    type: 'post',
    response: () => {
      return { 'returnCode': '000000', 'message': '成功', data: { 'AvailBalList': [{ 'CardNo': '622600012330', 'ActOpenBankBranch': '华夏银行光华支行', 'ActCurType': '人民币', 'ActAvaiBal': '10000', 'CifIntegral': '1000' }] }}
    }
  },
  {
    url: '/wcb/binding/getmsgwithphone',
    type: 'post',
    response: () => {
      return { 'returnCode': '000000', 'message': '发送成功', data: {}}
    }
  },
  {
    url: '/wcb/binding/pageactsign',
    type: 'post',
    response: () => {
      return { 'returnCode': '000000', 'message': '绑定成功', data: { 'Balance': '1000' }}
    }
  }
]
