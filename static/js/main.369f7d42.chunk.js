(this["webpackJsonpyt-app"]=this["webpackJsonpyt-app"]||[]).push([[0],{64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),r=a.n(c),o=a(20),i=a(10),l=a.n(i),d=a(19),u=a(11),h=a(12),p=a(14),j=a(13),b=a(70),m=(a(41),a(31)),v=a.n(m).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",key:"AIzaSyCUga9zn-ATQv2iJ-gYeiR0bpWowqBS-fc"}}),x=a(72),g=a(67),O=a(71),f=a.p+"static/media/sprite.0eaa72c4.svg",S=a(3),y=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={input:"",error:""},e.handleSubmit=function(t){t.preventDefault(),e.state.error||e.props.onFormSubmit(e.state.input)},e.handleChange=function(t){var a=e.state.error;t.target.value&&(a=t.target.value.length>20?"Input is longer than 20 characters.":""),e.setState({input:t.target.value,error:a})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.input;return Object(S.jsxs)("div",{className:"w-75",children:[Object(S.jsxs)(x.a,{onSubmit:this.handleSubmit,className:"d-flex w-100 my-3",children:[Object(S.jsx)(x.a.Control,{className:"rounded-0 header__input",placeholder:"Search for a videos...",type:"text",value:a,onChange:this.handleChange,noValidate:!0}),Object(S.jsx)(g.a,{variant:"dark",className:"rounded-0",type:"submit",children:Object(S.jsx)("svg",{className:"header__icon",children:Object(S.jsx)("use",{xlinkHref:"".concat(f,"#icon-magnifying-glass")})})})]}),t&&Object(S.jsx)(O.a,{variant:"danger",className:"h5",children:t})]})}}]),a}(s.a.Component),w=function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet,s=n.publishedAt,c=n.title,r=n.channelTitle,o=n.thumbnails.medium.url,i=new Date(s),l=i.getFullYear()+"-"+"".concat(i.getMonth()+1).padStart(2,0)+"-"+"".concat(i.getDate()).padStart(2,0);return Object(S.jsx)("ul",{onClick:function(){return a(t)},children:Object(S.jsxs)("li",{children:[Object(S.jsx)("img",{className:"w-100",src:o,alt:c}),Object(S.jsx)("h3",{className:"pt-2 font-weight-bolder",children:c}),Object(S.jsxs)("div",{className:"d-flex",children:[Object(S.jsx)("span",{children:r}),Object(S.jsx)("span",{className:"ml-auto",children:l})]}),Object(S.jsx)("hr",{})]})})},N=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return Object(S.jsx)(w,{onVideoSelect:a,video:e},e.id.videoId)}));return Object(S.jsx)("div",{className:"p-2",children:n})},k=a(68),V=a(69),q=function(e){var t=e.video;if(!t)return Object(S.jsx)(k.a,{animation:"border",className:"my-3"});var a=t.id.videoId,n=t.snippet,s=n.title,c=n.channelTitle,r=n.description,o=n.publishedAt,i=new Date(o),l=i.getFullYear()+"-"+"".concat(i.getMonth()+1).padStart(2,0)+"-"+"".concat(i.getDate()).padStart(2,0);return Object(S.jsxs)("div",{className:"details p-2",children:[Object(S.jsx)(V.a,{aspectRatio:"16by9",children:Object(S.jsx)("iframe",{title:"video player",src:"https://www.youtube.com/embed/".concat(a)})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{className:"font-weight-bold my-3",children:s}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{className:"d-flex my-2 font-weight-bolder",children:[Object(S.jsx)("h3",{children:c}),Object(S.jsx)("span",{className:"ml-auto",children:l})]}),Object(S.jsx)("p",{children:r}),Object(S.jsx)("hr",{})]})]})},C=a(35),T=(a(64),function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null,pageToken:"",search:""},e.onInputSubmit=function(){var t=Object(d.a)(l.a.mark((function t(a){var n,s,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search",{params:{q:a,maxResults:7}}).catch((function(e){e.response?console.error("Server responded with status ".concat(e.response.status)):e.request?console.error("Can't get response ".concat(e.request)):console.error("Something happened in setting up the request ".concat(e.message))}));case 2:n=t.sent,s=n.data,c=s.items,r=s.nextPageToken,e.setState({videos:c,selectedVideo:c[0],pageToken:r,search:a});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.loadVideos=Object(d.a)(l.a.mark((function t(){var a,n,s,c,r,i,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.pageToken,s=a.search,t.next=3,v.get("/search",{params:{q:s,pageToken:n,maxResults:7}}).catch((function(e){e.response?console.error("Server responded with status ".concat(e.response.status)):e.request?console.error("Can't get response ".concat(e.request)):console.error("Something happened in setting up the request ".concat(e.message))}));case 3:c=t.sent,r=c.data,i=r.items,d=r.nextPageToken,e.setState({pageToken:d,videos:[].concat(Object(o.a)(e.state.videos),Object(o.a)(i))});case 8:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.onInputSubmit("the blancos we're tired")}},{key:"render",value:function(){var e=this.state,t=e.videos,a=e.selectedVideo;return Object(S.jsxs)(b.a,{className:"p-0",children:[Object(S.jsx)("header",{className:"bg-white d-flex justify-content-center align-items-center header",children:Object(S.jsx)(y,{onFormSubmit:this.onInputSubmit})}),Object(S.jsxs)("main",{className:"bg-light d-md-flex",children:[Object(S.jsx)("div",{className:"col-md-8 py-3",children:Object(S.jsx)(q,{video:a})}),Object(S.jsx)("div",{className:"col-md-4 py-3",children:Object(S.jsx)(C.a,{dataLength:t.length,next:this.loadVideos,hasMore:!0,children:Object(S.jsx)(N,{onVideoSelect:this.onVideoSelect,videos:t})})})]})]})}}]),a}(s.a.Component));r.a.render(Object(S.jsx)(T,{}),document.querySelector("#root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.369f7d42.chunk.js.map