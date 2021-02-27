(this["webpackJsonpyt-app"]=this["webpackJsonpyt-app"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(8),i=n.n(c),r=n(18),o=n.n(r),l=n(29),d=n(10),u=n(11),p=n(13),j=n(12),h=n(68),b=(n(39),n(30)),m=n.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:3,key:"AIzaSyCUga9zn-ATQv2iJ-gYeiR0bpWowqBS-fc"}}),v=n(70),x=n(65),O=n(69),f=n.p+"static/media/sprite.0eaa72c4.svg",g=n(3),y=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={input:""},e.onFormSubmit=function(t){t.preventDefault(),e.state.input.length<20&&e.props.onFormSubmit(e.state.input)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"w-75",children:[Object(g.jsxs)(v.a,{onSubmit:this.onFormSubmit,className:"d-flex w-100 my-3",children:[Object(g.jsx)(v.a.Control,{className:"rounded-0 header__input",placeholder:"Search for a videos...",type:"text",value:this.state.input,onChange:function(t){return e.setState({input:t.target.value})}}),Object(g.jsx)(x.a,{variant:"dark",className:"rounded-0",type:"submit",children:Object(g.jsx)("svg",{className:"header__icon",children:Object(g.jsx)("use",{xlinkHref:"".concat(f,"#icon-magnifying-glass")})})})]}),this.state.input.length>20&&Object(g.jsx)(O.a,{variant:"danger",className:"h5",children:"Input is longer than 20 characters."})]})}}]),n}(s.a.Component),S=function(e){var t=e.video,n=e.onVideoSelect,a=new Date(t.snippet.publishedAt),s=a.getFullYear()+"-"+"".concat(a.getMonth()+1).padStart(2,0)+"-"+"".concat(a.getDate()).padStart(2,0);return Object(g.jsx)("ul",{onClick:function(){return n(t)},children:Object(g.jsxs)("li",{children:[Object(g.jsx)("img",{className:"w-100",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(g.jsx)("h3",{className:"pt-2 font-weight-bolder",children:t.snippet.title}),Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("span",{children:t.snippet.channelTitle}),Object(g.jsx)("span",{className:"ml-auto",children:s})]}),Object(g.jsx)("hr",{})]})})},w=function(e){var t=e.videos,n=e.onVideoSelect,a=t.map((function(e){return Object(g.jsx)(S,{onVideoSelect:n,video:e},e.id.videoId)}));return Object(g.jsx)("div",{className:"p-2",children:a})},N=n(66),k=n(67),V=function(e){var t=e.video;if(!t)return Object(g.jsx)(N.a,{animation:"border",className:"my-3"});var n=new Date(t.snippet.publishedAt),a=n.getFullYear()+"-"+"".concat(n.getMonth()+1).padStart(2,0)+"-"+"".concat(n.getDate()).padStart(2,0);return Object(g.jsxs)("div",{className:"details p-2",children:[Object(g.jsx)(k.a,{aspectRatio:"16by9",children:Object(g.jsx)("iframe",{title:"video player",src:"https://www.youtube.com/embed/".concat(t.id.videoId)})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"font-weight-bold my-3",children:t.snippet.title}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"d-flex my-2 font-weight-bolder",children:[Object(g.jsx)("h3",{children:t.snippet.channelTitle}),Object(g.jsx)("span",{className:"ml-auto",children:a})]}),Object(g.jsx)("p",{className:"",children:t.snippet.description}),Object(g.jsx)("hr",{})]})]})},I=(n(62),function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null},e.onInputSubmit=function(){var t=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("/search",{params:{q:n}}).catch((function(e){throw new Error(e.response)})).catch((function(e){return console.log(e)}));case 2:a=t.sent,e.setState({videos:a.data.items,selectedVideo:a.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t}),console.log(t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.onInputSubmit("kittisaurus lulu")}},{key:"render",value:function(){return Object(g.jsxs)(h.a,{className:"p-0",children:[Object(g.jsx)("header",{className:"bg-white d-flex justify-content-center align-items-center header",children:Object(g.jsx)(y,{onFormSubmit:this.onInputSubmit})}),Object(g.jsxs)("main",{className:"bg-light d-md-flex",children:[Object(g.jsx)("div",{className:"col-md-8 py-3",children:Object(g.jsx)(V,{video:this.state.selectedVideo})}),Object(g.jsx)("div",{className:"col-md-4 py-3",children:Object(g.jsx)(w,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})]})}}]),n}(s.a.Component));i.a.render(Object(g.jsx)(I,{}),document.querySelector("#root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.684379d1.chunk.js.map