//组织社会信用代码
var validateSocialCreditCode = function (rule, value, callback) {
    var patrn = /^[0-9A-Z]+$/;
    //18位校验及大写校验
    if(!!value && value=="91350203M0001QAY9B"){
        callback();
        return
    }
    if ((value.length != 18) || (patrn.test(value) == false)) {
        callback(new Error('不是有效的统一社会信用编码！'))
    } else {
        var Ancode;//统一社会信用代码的每一个值
        var Ancodevalue;//统一社会信用代码每一个值的权重 
        var total = 0;
        var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子 
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        //不用I、O、S、V、Z 
        for (var i = 0; i < value.length - 1; i++) {
            Ancode = value.substring(i, i + 1);
            Ancodevalue = str.indexOf(Ancode);
            total = total + Ancodevalue * weightedfactors[i];
            //权重与加权因子相乘之和 
        }
        var logiccheckcode = 31 - total % 31;

        if (logiccheckcode == 31) {
            logiccheckcode = 0;
        }
        var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
        var Array_Str = Str.split(',');
        logiccheckcode = Array_Str[logiccheckcode];

        var checkcode = value.substring(17, 18);
        if (logiccheckcode != checkcode) {
            callback(new Error(value + ' 不是有效的统一社会信用编码！'))
        } else {
            callback()
        }
    }
}

var value = 
"91350203M0001QAY9B"
"91350203M0001QAY9B"
value = "91350200MA2YJ1XR9G"

var items = "91350203M0001QAY9B 91350200776049653A 91350500798359476R 91350503MA31DKY80A 91350200MA31E12PXF 91440101MA5CJQ4N59 913502000728319549 123502001549897397 91350503MA31DNG762 91350503MA31DNG762 913502115628130384 9135021359498494XQ 91350203MA31NDF85F 91350203MA32AXT97E 91350203MA31XXW31H 91350206MA31LUJ437 91350206MA31LUJ437 91350213678251743X 91350212MA3490L25U 91350500798359476R 91350203MA31GJ942M 9135020530311446XH 91350200MA31JNQ72Y 91350206MA31H8JN7M 91350203MA31NFLDXR 91350200MA31JNPGX6 91350206MA31LUJ437 91350206MA31LUJ437 91350206MA31H80F0J 91440300MA5F7YRE78 91440300MA5FG7JT43 9135020530311446XH 91350213MA2YLEEU9M 91350100077407773G 91350503MA31DNG762 91350503MA31DKY80A 91350200MA32A5G718 91350200MA32AE621B 91350200612001960R 91350203MA32AH2832 91350203MA2YL7J30M 91350100MA32G75888 91350200MA2YJ1XR9G 91350200MA329TEQ4P 91350200MA2XNMK54G 91350200MA31DJ4F48 91350212MA3490L25U 91350212MA3490L25U 91350200MA2YJ1XR9G 91440300MA5FG7JT43 91440300MA5F7YRE78 91350203MA2YL7J30M 91350200MA2XNMK54G 91350213MA2YLEEU9M 91350206MA31LUJ437 91350203MA32AXT97E 91350200MA34AKE39U 91110107082833558H 91350203MA32F5BMX3 91350203MA32F5BMX3 91350200MA32A5G718 91350203MA32AH2832 91350200MA32AE621B 913502002601481917 91350200154984129T 913502123031288102 91350211575038325E 91350100056125371J 91350200MA31GCG3X9 91350100MA31LTEW8M 91350200MA32F52G3Y 91350203MA32F5BMX3 91350203MA32F5BMX3 91350203MA31N5J38T 91350200303285066B 91350211575038325E 913502123031288102 914403006188329255 91350500798359476R 91420103594531449D 91350500MA32FXKC12 91350500MA32FXKC12 91350100MA31LTEW8M 9135020530311446XH 91350200MA31DJ4F48 91110107082833558H 91350200MA34AKE39U 91350200MA329TEQ4P 91350203MA31NFLDXR 91350203MA31XXW31H 91350206MA31H80F0J 91350206MA31H8JN7M"



items.split(" ").forEach(function (item) {
    validateSocialCreditCode(null, item, function (resp) {
        console.log(resp);    
    });
});


var v =new Tyshyxdm().verify('91350203M0001QAY9B');
 

//统一社会信用代码
function Tyshyxdm() {
    this.firstarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.firstkeys = [3, 7, 9, 10, 5, 8, 4, 2];
    this.secondarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'T', 'U', 'W', 'X', 'Y'];
    this.secondkeys = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    this.verify = function (str) {
        var code = str.toUpperCase();
 
        /*
        统一社会信用代码由十八位的阿拉伯数字或大写英文字母（不使用I、O、Z、S、V）组成。
         第1位：登记管理部门代码（共一位字符）
         第2位：机构类别代码（共一位字符）
         第3位~第8位：登记管理机关行政区划码（共六位阿拉伯数字）
         第9位~第17位：主体标识码（组织机构代码）（共九位字符）
         第18位：校验码​（共一位字符）
        */
        if (code.length != 18) {
            return false;
        }
        var reg = /^\w\w\d{6}\w{9}\w$/;
        if (!reg.test(code)) {
            return false;
        }
        /*
         登记管理部门代码：使用阿拉伯数字或大写英文字母表示。​
         机构编制：1​
         民政：5​
         工商：9​
         其他：Y
         */
        reg = /^[1,5,9,Y]\w\d{6}\w{9}\w$/;
        if (!reg.test(code)) {
            return false;
        }
        /*
         机构类别代码：使用阿拉伯数字或大写英文字母表示。​
         机构编制机关：11打头​​
         机构编制事业单位：12打头​
         机构编制中央编办直接管理机构编制的群众团体：13打头​​
         机构编制其他：19打头​
         民政社会团体：51打头​
         民政民办非企业单位：52打头​
         民政基金会：53打头​
         民政其他：59打头​
         工商企业：91打头​
         工商个体工商户：92打头​
         工商农民专业合作社：93打头​
         其他：Y1打头​
         */
        reg = /^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/;
        if (!reg.test(code)) {
            return false;
        }
        /*
         登记管理机关行政区划码：只能使用阿拉伯数字表示。按照GB/T 2260编码。​
         例如：四川省成都市本级就是510100；四川省自贡市自流井区就是510302。​
        */
        reg = /^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/;
        if (!reg.test(code)) {
            return false;
        }
        /*
             主体标识码（组织机构代码）：使用阿拉伯数字或英文大写字母表示。按照GB 11714编码。
             在实行统一社会信用代码之前，以前的组织机构代码证上的组织机构代码由九位字符组成。格式为XXXXXXXX-Y。前面八位被称为“本体代码”；最后一位被称为“校验码”。校验码和本体代码由一个连字号（-）连接起来。以便让人很容易的看出校验码。但是三证合一后，组织机构的九位字符全部被纳入统一社会信用代码的第9位至第17位，其原有组织机构代码上的连字号不带入统一社会信用代码。
             原有组织机构代码上的“校验码”的计算规则是：​
             例如：某公司的组织机构代码是：59467239-9。那其最后一位的组织机构代码校验码9是如何计算出来的呢？
             第一步：取组织机构代码的前八位本体代码为基数。5 9 4 6 7 2 3 9
             提示：如果本体代码中含有英文大写字母。则A的基数是10，B的基数是11，C的基数是12，依此类推，直到Z的基数是35。
             第二步：​​取加权因子数值。因为组织机构代码的本体代码一共是八位字符。则这八位的加权因子数值从左到右分别是：3、7、9、10、5、8、4、2。​
             第三步：本体代码基数与对应位数的因子数值相乘。​
             5×3＝15，9×7＝63，4×9＝36，6×10＝60，
             7×5＝35，2×8＝16，3×4=12，9×2＝18​​
             第四步：将乘积求和相加。​
             15+63+36+60+35+16+12+18=255
             第五步：​将和数除以11，求余数。​​
             255÷11=33，余数是2。​​
          */
        var firstkey = this.calc(code.substr(8), this.firstarray, this.firstkeys, 11);
        /*
         第六步：用阿拉伯数字11减去余数，得求校验码的数值。当校验码的数值为10时，校验码用英文大写字母X来表示；当校验码的数值为11时，校验码用0来表示；其余求出的校验码数值就用其本身的阿拉伯数字来表示。​
         11-2＝9，因此此公司完整的组织机构代码为 59467239-9。​​
        */
        var firstword;
        if (firstkey < 10) {
            firstword = firstkey;
        }
        if (firstkey == 10) {
            firstword = 'X';
        } else if (firstkey == 11) {
            firstword = '0';
        }
        if (firstword != code.substr(16, 1)) {
            return false;
        }
 
        /*
             校验码：使用阿拉伯数字或大写英文字母来表示。校验码的计算方法参照 GB/T 17710。
             例如：某公司的统一社会信用代码为91512081MA62K0260E，那其最后一位的校验码E是如何计算出来的呢？
             第一步：取统一社会信用代码的前十七位为基数。9 1 5 1 2 0 8 1 21 10 6 2 19 0 2 6 0提示：如果前十七位统一社会信用代码含有英文大写字母（不使用I、O、Z、S、V这五个英文字母）。则英文字母对应的基数分别为：A=10、B=11、C=12、D=13、E=14、F=15、G=16、H=17、J=18、K=19、L=20、M=21、N=22、P=23、Q=24、R=25、T=26、U=27、W=28、X=29、Y=30​
             第二步：​​取加权因子数值。因为统一社会信用代码前面前面有十七位字符。则这十七位的加权因子数值从左到右分别是：1、3、9、27、19、26、16、17、20、29、25、13、8、24、10、30、2​8
             第三步：基数与对应位数的因子数值相乘。​
             9×1=9，1×3=3，5×9=45，1×27=27，2×19=38，0×26=0，8×16=128​
             1×17=17，21×20=420，10×29=290，6×25=150，2×13=26，19×8=152​
             0×23=0，2×10=20，6×30=180，0×28=0
             第四步：将乘积求和相加。​9+3+45+27+38+0+128+17+420+290+150+26+152+0+20+180+0=1495
             第五步：​将和数除以31，求余数。​​
             1495÷31=48，余数是17。​​
        */
 
        var secondkey = this.calc(code, this.secondarray, this.secondkeys, 31);
        /*
         第六步：用阿拉伯数字31减去余数，得求校验码的数值。当校验码的数值为0~9时，就直接用该校验码的数值作为最终的统一社会信用代码的校验码；如果校验码的数值是10~30，则校验码转换为对应的大写英文字母。对应关系为：A=10、B=11、C=12、D=13、E=14、F=15、G=16、H=17、J=18、K=19、L=20、M=21、N=22、P=23、Q=24、R=25、T=26、U=27、W=28、X=29、Y=30
         因为，31-17＝14，所以该公司完整的统一社会信用代码为 91512081MA62K0260E。​​
        */
        var secondword = this.secondarray[secondkey];
        if (!secondword || secondword != code.substr(17, 1)) {
            return false;
        }
        var word = code.substr(0, 16) + firstword + secondword;
        if (code != word) {
            return false;
        }
        return true;
    }
    this.calc = function (code, array1, array2, b) {
        var count = 0;
        for (var i = 0; i < array2.length; i++) {
            var a = code[i];
            count += array2[i] * array1.indexOf(a);
        }
        var remainder = count % b;
        return remainder === 0 ? 0 : b - remainder;
    }
}

var tt = function () {
   
    var reg = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}/g
    items.split(" ").forEach(function (item) {
        if (!reg.test(item)) {
            console.log("不通过："+  item);
        } else {
         //   console.log("通过");
        }
    })


}
 

var test = function (code) {

    var reg = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9ABCDEFGHJKLMNPQRTUWXY])$/;
    if (!reg.test(code)) {

        return false
    }
    var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
    var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    var sc_codes = new Array();
    sc_codes[0] = code.substr(0, code.length - 1);
    sc_codes[1] = code.substr(code.length - 1, code.length);

    codes = sc_codes[1].charCodeAt()

    for (i = 65; i <= 72; i++) {
        if (codes == i) {
            sc_codes[1] = 10 + (i - 65)
        }
    }
    for (i = 74; i <= 78; i++) {
        if (codes == i) {
            sc_codes[1] = 18 + (i - 74)
        }
    }
    for (i = 80; i <= 82; i++) {
        if (codes == i) {
            sc_codes[1] = 23 + (i - 80)
        }
    }
    if (sc_codes[1] == 'T') {
        sc_codes[1] = 26
    }
    if (sc_codes[1] == 'U') {
        sc_codes[1] = 27
    }
    for (i = 87; i <= 89; i++) {
        if (codes == i) {
            sc_codes[1] = 28 + (i - 87)
        }
    }
    var sum = 0;
    for (var i = 0; i < 17; i++) {
        sum += str.indexOf(sc_codes[0].charAt(i)) * ws[i];
    }
    var c18 = 31 - (sum % 31);
    if (c18 != codes[1]) {

        return false
    }



}
