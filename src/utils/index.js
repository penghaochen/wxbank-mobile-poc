/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/(<!=)?=(!=)?/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len || 4)
  if (date) random = random + Date.now()
  return random
}


/**
 * 将普通列表无限递归转换为树
 * @param  {[type]} list       [普通的列表，必须包括 opt.primaryKey 指定的键和 opt.parentKey 指定的键]
 * @param {[type]} opt [配置参数，支持 primaryKey(主键 默认id) parentKey(父级id对应键 默认pid) nameKey(节点标题对应的key 默认name) valueKey(节点值对应的key 默认id) checkedKey(节点是否选中的字段 默认checked，传入数组则判断主键是否在此数组中) startPid(第一层扫描的PID 默认0) currentDept(当前层 默认0) maxDept(最大递归层 默认100) childKey(递归完成后子节点对应键 默认list) deptPrefix(根据层级重复的前缀 默认'')]
 * @return {[type]}            [description]
 */
export const listConvertTree = (array, opt) => {
  let obj = {
    primaryKey: opt.primaryKey || 'id',
    parentKey: opt.parentKey || 'pid',
    startPid: opt.startPid || 0,
    currentDept: opt.currentDept || 0,
    maxDept: opt.maxDept || 100,
    childKey: opt.childKey || 'children'
  }
  return listToTree(array, obj.startPid, obj.currentDept, obj)
}
/**
 *  实际的递归函数，将会变化的参数抽取出来
 * @param list
 * @param startPid
 * @param currentDept
 * @param opt
 * @returns {Array}
 */
export const listToTree = (array, startPid, currentDept, opt) => {
  if (opt.maxDept < currentDept) {
    return []
  }
  let child = []
  if (array && array.length > 0) {
    child = array.map(item => {
      // 筛查符合条件的数据（主键 = startPid）
      if (typeof item[opt.parentKey] !== 'undefined' && item[opt.parentKey] === startPid) {
        // 满足条件则递归
        let nextChild = listToTree(array, item[opt.primaryKey], currentDept + 1, opt)
        // 节点信息保存
        if (nextChild.length > 0) {
          item['hasChild'] = true
          item[opt.childKey] = nextChild
        } else {
          item['hasChild'] = false
        }
        return item
      }
    }).filter(item => {
      return item !== undefined
    })
  }
  return child
}


/**
 *  将json变成序列化形式
 * @param data json数据

 * @returns {String}
 */
export const JsonToQueryString = (data) => {
  let dataStr = ''; //数据拼接字符串
  Object.keys(data).forEach(key => {
    //过滤空字段
    // if (data[key].length > 0 && data[key] !== undefined)
    dataStr += key + '=' + data[key] + '&';
  });
  dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
  return dataStr
}