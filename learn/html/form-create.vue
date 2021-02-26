<template>
  <div class="licence table-form">
    <div class="title">
      厦门市自然资源和规划局
      <br />行政许可通知书
    </div>
    <form-create ref="fc"
                 v-model="fApi"
                 :rule="rule"
                 :option="createOption"></form-create>

    <x-btns items="reset,export,edit,save"
            @save="handleFormSave"
            @reset="handleFormRest"
            @edit="handleFormEdit"
            @export="handleBtnExport"></x-btns>
  </div>
</template>

<script>
import * as validate from "@/libs/validate";
import { formMixins } from '@/mixins'

const rule = [
  maker.hidden("id"),
  maker.hidden("slh"),
  maker
    .input("许可通知书编号", "shtzsWzbh", "厦资规许海域（审）2019第9号")
    .props({ readonly: true })
    .col({ span: 24 }),

  maker
    .input("申请人", "sqr", "")
    .props({ readonly: true })
    .col({ span: 8 }),

  maker
    .input("地址", "sddz", "")
    .validate([{ required: true }])
    .col({ span: 16 }),

  maker
    .input("联系人", "lxr", "")
    .validate([{ required: true }]),

  maker
    .input("联系电话", "lxdh", "")
    .validate([{ required: true }, validate.validateMobile]),

  maker
    .input("送达人", "sdr", "")
    .validate([{ required: true }]),

  maker
    .select("送达方式", "sdfs", [])
    .options($dict("deliveryWay"))
    .props({ multiple: false })
    .validate([{ required: true }])
    .event({ change: console.log }),

  maker
    .date("许可日期", "xkrq", "")
    .validate([{ required: true }]),

  maker.create("div", "", " "),

  maker.textarea("许可内容", "xknr", "")
    .props({ rows: 10 })
    .validate([{ required: true }])
    .col({ span: 24 })
];

export default {
  title: "行政许可证通知书",
  name:"licence",
 mixins: [formMixins],
  data () {
    return {
   
      //受理号
      slh: null,
      fApi: {}, //form-create 的数据
      rule: rule,
      //查询表单配置
      createOption: formCreateOption({ labelWidth: 110, })
    };
  },
  methods: {
    /* 初始化 */
    /**
     * 编辑初始化
     */
    async initEdit (id) {
      //是否已经创建过
      let hasCreate = false;
      await this.getRequest(`/zhxzxktzs/getBySlh/${this.slh}`).then(res => {
        if (res.result) {
          //如果曾经编辑过，则直接导入数据
          this.fApi.setValue({
            ...res.result
          });
          hasCreate = true;
        }
      });
      //未创建过，初始化
      await this.getRequest(`/ggsl/getById/${id}`).then(res => {
        let sl = res.result;
        C(sl)

       
        //将number类型的流水号转化为三位数的字符串
        let lshStr = "000".substring(0, 3 - sl.slhLsh.toString().length) + sl.slhLsh
        if (hasCreate) {
          this.fApi.setValue({
            sqr: sl.sqr
          });
        } else {
          this.fApi.setValue({
            shtzsWzbh: `厦资规许海域（审）${sl.slhNf}第${lshStr}号`,
            sqr: sl.sqr,
            xknr: this.licenceGenerator(sl.slSj, sl.xmmc, sl.yhpzjg, sl.yhpzrq)
          });
        }
      });
    },
    /**
     * 查看初始化
     */
    async initShow (id) {
      this.fApi.disabled(true, this.fApi.fields());
      await this.getRequest(`/zhxzxktzs/getBySlh/${this.slh}`).then(res => {
        this.fApi.setValue({
          ...res.result
        });
      });
      await this.getRequest(`/ggsl/getById/${id}`).then(res => {
        this.fApi.setValue({
          sqr: res.result.sqr
        });
      });
    },
    //按钮-新增按钮需要方法
    //按钮-新增
    handleBtnSave () {
      this.fApi.validate(validate => {
        if (validate) {
          let data = {
            ...this.fApi.formData(),
            slh: this.slh
          }
          this.postRequest('/zhxzxktzs/edit', data).then(res => {
            this.$Message.success(res.message);
          });
        }
      })
      this.handleBtnEdit(false);
    },
    handleBtnReset () {
      this.fApi.resetFields();
    },
    handleBtnEdit (v = true) {
      this.fApi.disabled(!v, this.fApi.fields());
    },
    handleBtnExport () {
      let slh = this.fApi.formData().slh;
      this.getRequest(`/zhxzxktzs/exportWord/${slh}`).then(res => {
        console.log(res);
      })
    },
    /**
     * 生成许可说明
     */
    licenceGenerator (sqrq, xmmc, jgdw, pzrq) {
      return `    你（单位）与${sqrq}向本行政机关提出《${xmmc}》项目用海的申请，根据《中华人民共和国海域使用管理法》第十七条第一款和《厦门市海域使用管理规定》第十条第一款的规定，${jgdw}与${pzrq}批准用海（具体详见厦[2019]295号），特此通知。\r\n    在施工和运营过程中，你司应做好以下工作：1`
    }
  },
  mounted () {
    let query = this.$route.query;
    this.type = Number(query.type);
    this.slh = query.slh;
    if (this.type === 0) {

    } else if (this.type === 1 && !!query.id) {
      this.initEdit(query.id);
    } else if (this.type === 2 && !!query.id) {
      this.initShow(query.id);
    }
  },
  beforeDestroy () {
    //清空并重置表单
    this.handleBtnEdit(true);
    this.fApi.resetFields();
    this.fApi.destroy();
  }
};

/*
slhLsh 受理号-流水号
slhNf 受理号-年份
xmmc 项目名称
slsj 受理时间
yhpzjg

-- zhXmxx 项目信息
yhpzjg 用海批准机关
yhpzrq 用海批准日期
 */
</script>

 
<style lang="less">
.licence {
  .title {
    text-align: center;
    font-size: 22px;
    margin-bottom: 22px;
  }
}
</style>
 
