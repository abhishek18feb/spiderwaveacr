(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(5),i=a.n(n),s=a(32),r=a(100),l=a(11),o=function(){var e=Object(r.a)(i.a.mark(function e(t,a,n,r,o){var d,u,c,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d=!0,u="",n){e.next=4;break}return e.abrupt("return",!0);case 4:if(n.required&&(d=""!=a.trim()&&d,u=d?"":[t]+" is required field"),!n.unique||!a.length){e.next=11;break}return e.next=8,Object(l.a)({method:"post",url:"/cms/check_unique",data:(c={},Object(s.a)(c,t,a),Object(s.a)(c,"_id",o),c),headers:{Authorization:"Berear "+r}});case 8:m=e.sent,d=!m.data.result&&d,u=d?"":[t]+" should be unique";case 11:return e.abrupt("return",{isValid:d,validationMsg:u,name:t});case 12:case"end":return e.stop()}},e)}));return function(t,a,n,i,s){return e.apply(this,arguments)}}()},127:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(19),i=a(20),s=a(22),r=a(21),l=a(29),o=a(23),d=a(0),u=a.n(d),c=a(44),m=(a(45),a(8),a(96),a(46),a(28)),h=a(6),p=a(98),g=a.n(p),v=a(99),b=(a(33),a(103)),f=(a(127),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).submitHandler=function(e){e.preventDefault();var t={};for(var n in a.state.controls)t[n]=a.state.controls[n].value;console.log(t),a.props.addCms(t,a.props.admintoken)},a.state={controls:{page_name:{value:"",validation:{required:!0,unique:!0},isValid:!1,validationMsg:""},title:{value:"",validation:{required:!0,unique:!0},isValid:!1,validationMsg:""},meta_keywords:{value:"",validation:{},isValid:!0},meta_desc:{value:"",validation:{},isValid:!0},content:{value:"",validation:{},isValid:!0}},formIsValid:!1,width:0,height:0},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(l.a)(a)),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"handleChange",value:function(e){var t=this,a=this.state.controls;a[e.target.name].value=e.target.value,Object(b.a)([e.target.name],e.target.value,a[e.target.name].validation,this.props.admintoken).then(function(e){a[e.name].isValid=e.isValid,a[e.name].validationMsg=e.validationMsg,t.setState({controls:a}),t.state.controls.page_name.isValid&&t.state.controls.title.isValid?t.setState({formIsValid:!0}):t.setState({formIsValid:!1})})}},{key:"onEditorChange",value:function(e){var t=this.state.controls;t.content.value=e,this.setState({controls:t})}},{key:"render",value:function(){var e=this;return u.a.createElement(c.a,{windowHeight:this.state.height,windowWidth:this.state.width,activeKey:"cms"},u.a.createElement("article",{style:{minHeight:this.state.height}},u.a.createElement("h3",null,"Add New Cms"),u.a.createElement("div",{className:"Add"},u.a.createElement("form",{onSubmit:this.submitHandler},u.a.createElement("label",{htmlFor:"lname"},"CMS Name"),u.a.createElement("input",{type:"text",id:"lname",name:"page_name",value:this.state.controls.page_name.value,onChange:this.handleChange,placeholder:"Enter Page Name"}),u.a.createElement("span",{className:"err"},this.state.controls.page_name.validationMsg),u.a.createElement("br",null),u.a.createElement("label",{htmlFor:"title"},"CMS Title"),u.a.createElement("input",{type:"text",id:"title",name:"title",onChange:this.handleChange,placeholder:"Enter Cms Title"}),u.a.createElement("span",{className:"err"},this.state.controls.title.validationMsg),u.a.createElement("br",null),u.a.createElement("label",{htmlFor:"title"},"Meta Keywords"),u.a.createElement("input",{type:"text",id:"meta_keywords",name:"meta_keywords",onChange:this.handleChange,placeholder:"Enter Meta Keywords"}),u.a.createElement("label",{htmlFor:"title"},"Meta Description"),u.a.createElement("input",{type:"text",id:"meta_desc",name:"meta_desc",onChange:this.handleChange,placeholder:"Enter Meta Description"}),u.a.createElement("label",{htmlFor:"country"},"Description"),u.a.createElement(g.a,{id:"editor",editor:v,data:"",onChange:function(t,a){var n=a.getData();e.onEditorChange(n)}}),u.a.createElement("input",{type:"submit",value:"Submit",disabled:!this.state.formIsValid})))))}}]),t}(d.Component));t.default=Object(m.b)(function(e){return{error:e.siteSetting.siteSettingError,siteSettingResponse:e.siteSetting.siteSettingResponse,siteSettingResponseMsg:e.siteSetting.siteSettingResponseMsg,isAuthenticated:null!==e.admin.admintoken,authRedirectPath:e.admin.authRedirectPath,admintoken:e.admin.admintoken}},function(e){return{addCms:function(t,a){return e(h.a(t,a))}}})(f)},96:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(97);t.a=function(e){var t=null;switch(e.btnClass){case"Default":t=i.a.createElement("button",{type:e.btnType,className:s.Default,onClick:e.click,disabled:e.disabled},e.btnText);break;default:t=i.a.createElement("button",{type:e.btnType,className:s.Default,onClick:e.click,disabled:e.disabled},e.btnText)}return t}},97:function(e,t,a){e.exports={Default:"Button_Default__3ABMs",Button:"Button_Button__1RsGI"}}}]);
//# sourceMappingURL=4.fa6fbb37.chunk.js.map