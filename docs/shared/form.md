// form-create 查询表单配置

```ts
export const formCreateOption = ({
  global,
  inline,
  labelWidth,
  labelPosition
} = {}) => {
  const defalutValue = {
    col: {
      span: 8
    },
    props: {
      clearable: true,
      format: 'yyyy-MM-dd'
    }
  }

  return {
    global: {
      '*': Object.assign({}, defalutValue, global)
    },
    submitBtn: {
      show: false // 是否显示,默认显示
    },
    resetBtn: false, // 显示表单重置按钮

    form: {
      inline: inline || false, // 是否开启行内表单模式，开启后不能使用隐藏
      labelPosition: labelPosition || 'right', // left、right、top
      // 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
      labelWidth: labelWidth || 150,
      // 是否显示校验错误信息
      showMessage: true,
      // 原生的 autocomplete 属性，可选值为 off 或 on
      autocomplete: 'off'
    }
  }
}
```
## 表单配置
```ts
//表单配置
//email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var validateContact = function (rule, value, callback) {
  var d = {
    mobile: /^1[3|5|8|7|9]\d{9}$/,
    phone: /^0\d{2,3}-?\d{7,8}$/
  }
  var flag =
    'string' == typeof value &&
    (!!value.match(d.mobile) || !!value.match(d.phone))
  if (value === '') {
    callback(new Error('请输入联系方式!'))
  } else if (!flag) {
    callback(new Error('请输入11位手机号或****-*******'))
  } else {
    callback()
  }
}
var validateMobile = function (rule, value, callback) {
  var d = {
    mobile: /^1[3|5|8|7|9]\d{9}$/
  }
  var flag = 'string' == typeof value && !!value.match(d.mobile)
  if (value === '') {
    callback(new Error('请输入手机号码!'))
  } else if (!flag) {
    callback(new Error('请输入11位手机号'))
  } else {
    callback()
  }
}
var validateTelephone = function (rule, value, callback) {
  var d = {
    phone: /^(\d{3,4}\-)?[1-9]\d{6,8}$/
  }
  var flag = 'string' == typeof value && !!value.match(d.phone)
  if (value === '') {
    callback(new Error('请输入电话号码!'))
  } else if (!flag) {
    callback(new Error('号码格式：****-*******'))
  } else {
    callback()
  }
}
var validateZipCode = function (rule, value, callback) {
  var patrn = /^\d{6}$/
  if (value == undefined) {
    callback(new Error('赋值异常!'))
  } else if (value === '') {
    callback(new Error('请输入邮编!'))
  } else if (!value.match(patrn)) {
    callback(new Error('请输入正确的邮编！'))
  } else {
    callback()
  }
}
//数值
var validateNumber = function (rule, value, callback) {
  var re = new RegExp('^[-+]?\\d+(\\.[\\d]{1,' + 6 + '})?$')
  //reg = /^[-+]?\d+(\.[\d]{1,3})?$/;

  if (value == undefined) {
    callback(new Error('赋值异常!'))
  } else if (value === '') {
    callback(new Error('请输入!'))
  } else if (!re.test(value)) {
    callback(new Error('请输入数值！'))
  } else {
    callback()
  }
}
//非空
var validateString = function (rule, value, callback) {
  if (value == undefined) {
    callback(new Error('赋值异常!'))
  } else if (value === '') {
    callback(new Error('请输入!'))
  } else {
    callback()
  }
}

//非空
var validateStringLength6 = function (rule, value, callback) {
  if (value == undefined) {
    callback(new Error('赋值异常!'))
  } else if (value === '') {
    callback(new Error('请输入!'))
  } else if (value.length < 6) {
    callback(new Error('组织代码长度不能小于6位'))
  } else {
    callback()
  }
}

//身份证
var validateIDCard = function (rule, value, callback) {
  var patrn = /^\d{15}(\d{2}[A-Za-z0-9;])?$/
  if (value == undefined) {
    callback(new Error('赋值异常!'))
  } else if (value === '') {
    callback(new Error('请输入身份证号码!'))
  } else if (!value.match(patrn)) {
    callback(new Error('请输入正确的身份证号码！'))
  } else {
    callback()
  }
}
//护照
var validatePassport = function (rule, value, callback) {
  var patrn1 = /^[a-zA-Z]{5,17}$/
  var patrn2 = /^[a-zA-Z0-9]{5,17}$/
  if (value == undefined) {
    callback(new Error('赋值异常!'))
  } else if (value === '') {
    callback(new Error('请输入护照 !'))
  } else if (!value.match(patrn1) && !value.match(patrn2)) {
    callback(new Error('请输入正确的护照 ！'))
  } else {
    callback()
  }
}
//组织社会信用代码
var validateSocialCreditCode = function (rule, value, callback) {
  var patrn = /^[0-9A-Z]+$/
  //18位校验及大写校验
  if (value.length != 18 || patrn.test(value) == false) {
    callback(new Error('不是有效的统一社会信用编码！'))
  } else {
    var Ancode //统一社会信用代码的每一个值
    var Ancodevalue //统一社会信用代码每一个值的权重
    var total = 0
    var weightedfactors = [
      1,
      3,
      9,
      27,
      19,
      26,
      16,
      17,
      20,
      29,
      25,
      13,
      8,
      24,
      10,
      30,
      28
    ] //加权因子
    var str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
    //不用I、O、S、V、Z
    for (var i = 0; i < value.length - 1; i++) {
      Ancode = value.substring(i, i + 1)
      Ancodevalue = str.indexOf(Ancode)
      total = total + Ancodevalue * weightedfactors[i]
      //权重与加权因子相乘之和
    }
    var logiccheckcode = 31 - (total % 31)

    if (logiccheckcode == 31) {
      logiccheckcode = 0
    }
    var Str = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y'
    var Array_Str = Str.split(',')
    logiccheckcode = Array_Str[logiccheckcode]

    var checkcode = value.substring(17, 18)
    if (logiccheckcode != checkcode) {
      callback(new Error('不是有效的统一社会信用编码！'))
    } else {
      callback()
    }
  }
}

//字段配置
function FormItemConfig(data) {
  if (!data) return
  this.fieldName = data.fieldName || ''
  this.label = data.label || ''
  this.labelWidth = data.labelWidth || 0
  this.value = data.value || ''
  this.className = data.className || ''
  this.placeholder = data.placeholder || data.label || ''
  this.type = data.type || 11 //11:输入框,21:下拉框,31:单选框,41:多选框,51:switch开关,61:时间:71:日期,81:文件上传
  this.list = data.list || [] //当type为21,即控件为下拉框时需要配置的下拉框选项
  this.visible = data.hasOwnProperty('visible') ? data.visible : true
  this.disabled = data.hasOwnProperty('disabled') ? data.disabled : false

  if (!data.rules) {
    this.rules = []
    return
  }
  //初始化默认值
  switch (data.rules) {
    case true:
      this.rules = [
        {
          required: true,
          message: (this.type < 21 ? '请输入' : '请选择') + this.placeholder,
          trigger: 'blur'
        }
      ]
      break

    case typeof data.rules == 'object':
      this.rules = data.rules
      break

    case 'array':
      this.rules = [
        {
          required: true,
          type: 'array',
          trigger: 'change',
          message: '请选择' + this.label
        }
      ]
      break
    case 'date':
      this.rules = [
        {
          required: true,
          type: 'date',
          trigger: 'change',
          message: '请选择' + this.label
        }
      ]
      break
    case 'number':
      this.rules = [
        {
          required: true,
          validator: validateNumber,
          trigger: 'blur'
        }
      ]
      break

    case 'email':
      this.rules = [
        {
          required: true,
          message: '请输入邮箱地址',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: 'blur,change'
        }
      ]
      break
    case 'phone':
      this.rules = [
        {
          required: true,
          validator: validateContact,
          trigger: 'blur'
        }
      ]
      break
    case 'telephone':
      this.rules = [
        {
          required: true,
          validator: validateTelephone,
          trigger: 'blur'
        }
      ]
      break
    case 'mobile':
      this.rules = [
        {
          required: true,
          validator: validateMobile,
          trigger: 'blur'
        }
      ]
      break
    case 'zipCode':
      this.rules = [
        {
          required: true,
          validator: validateZipCode,
          trigger: 'blur'
        }
      ]
      break
    case 'creditCode':
      this.rules = [
        {
          required: true,
          validator: validateSocialCreditCode,
          trigger: 'blur'
        }
      ]
      break
    default:
      this.rules = []
      console.log('FormItemConfig rules 其他  default', this.rules)
      break
  }
}
//构造函数
function FormConfig() {
  this.form = {}
  this.model = {}
  this.formItems = []
  this.formCount = 0
  this.rules = {}
}
FormConfig.prototype.setModel = function (data) {
  if (!data) {
    console.warn('setModel 数据源无效')
    // console.log(  this.model);
    return
  }
  for (var key in this.model) {
    if (data.hasOwnProperty(key)) {
      this.model[key] = data[key] == 'null' ? '' : data[key]
    } else {
      console.warn('属性值不存在:', key)
    }
  }
}

FormConfig.prototype.setModelNull = function (data) {
  for (var key in this.model) {
    this.model[key] = ''
  }
}

//两个参数
FormConfig.prototype.disabled = function (flag) {
  if (arguments.length == 2) {
    for (var i = this.formItems.length - 1; i >= 0; i--) {
      if (arguments[0] == this.formItems[i].fieldName)
        this.formItems[i].disabled = arguments[1]
    }
  } else {
    for (var i = this.formItems.length - 1; i >= 0; i--) {
      this.formItems[i].disabled = flag
    }
  }
}
FormConfig.prototype.init = function () {}
//工程避免重复
FormConfig.prototype.createFormItem = function (data) {
  if (!data) {
    console.warn('createFormItem 数据源无效')
    return
  }
  var newItem,
    item = this.form[data.fieldName]

  if (item) {
    console.log('重复创建：' + data.fieldName)
    return item
  } else {
    newItem = new FormItemConfig(data)
    this.form[newItem.fieldName] = newItem
    this.model[newItem.fieldName] = newItem.value
    this.rules[newItem.fieldName] = newItem.rules
    this.formItems.push(newItem)
    this.formCount++
    return newItem
  }
}
FormConfig.prototype.add = function (
  fieldName,
  label,
  value,
  rules,
  className
) {
  if (typeof arguments[0] == 'object') {
    this._push(fieldName)
  } else {
    this.createFormItem({
      fieldName: fieldName,
      label: label,
      value: value,
      rules: rules || false,
      className: className || ''
    })
  }
}
FormConfig.prototype._push = function (data) {
  this.createFormItem({
    fieldName: data.fieldName,
    placeholder: data.placeholder,
    label: data.label,
    labelWidth: data.labelWidth,
    value: data.value,
    rules: data.rules,
    className: data.className,
    type: data.type,
    list: data.list,
    visible: data.hasOwnProperty('visible') ? data.visible : true,
    disabled: data.disabled
  })
}
FormConfig.prototype.adds = function (data) {
  for (var i = 0; i < data.length; i++) {
    this.add(data[i])
  }
}
FormConfig.prototype.getConfig = function () {
  return this.formItems
}

//数组转换成对象
function ArrayToObject(list, key, value) {
  var o = {}
  for (var i = 0; i < list.length; i++) {
    o[list[i][key]] = list[i][value]
  }
  return o
}

/*
personFormConfig=(function(){
  var personForms={},
  personFormCount = 0;
  return {
    
  }
}());
function PersonFormConfig(data){
  if (!data) return ;
  //data 为多个 FormConfig
  this.name = data.name ;
  this.type  = data.type ; //证件类型identification
  this.number  = data.number ; //证件类型
  this.company = data.company; //公司单位
  this.telephone = data.telephone ;//电话
  this.address = data.address;
  this.zipCode = data.zipCode;
  this.init();
}


function Person(data){
  this.name = data.name || "";
  this.type  = data.type || ""; //证件类型identification
  this.number  = data.number || ""; //证件类型
  this.company = data.company|| ""; //公司单位
  this.telephone = data.telephone || ""//电话
  this.address = data.address|| "";
  this.zipCode = data.zipCode|| "";
}



**/
```
